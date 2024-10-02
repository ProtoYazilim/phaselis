const fs = require("fs-extra");
const path = require("path");
const { ESLint } = require("eslint");

// TypeScript ve PropTypes için parser oluştur
const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },
});

async function analyzeFile(filePath) {
  const fileContent = await fs.readFile(filePath, "utf8");
  let props = [];

  // TypeScript ya da PropTypes içeren dosyalar için props bulmaya çalış
  try {
    const results = await eslint.lintText(fileContent, { filePath });
    results[0].messages.forEach((message) => {
      if (
        message.ruleId === "no-undef" &&
        message.message.includes("'props'")
      ) {
        props.push(message.node.name);
      }
    });
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error);
  }

  return { content: fileContent, props };
}

async function generateDocs(directory, outputDir) {
  const components = await fs.readdir(directory);

  for (const component of components) {
    const componentPath = path.join(directory, component);
    const stats = await fs.stat(componentPath);

    if (stats.isDirectory()) {
      const files = await fs.readdir(componentPath);
      const docFilePath = path.join(outputDir, `${component}.md`);

      let docContent = `# ${component}\n\n`;

      for (const file of files) {
        const filePath = path.join(componentPath, file);
        const fileStats = await fs.stat(filePath);

        if (fileStats.isFile()) {
          const { content, props } = await analyzeFile(filePath);
          docContent += `## ${file}\n\n`;
          docContent += `**File:** \`${filePath}\`\n\n`;
          docContent += `### Content\n\n\`\`\`typescript\n${content}\n\`\`\`\n\n`;

          if (props.length > 0) {
            docContent += `### Props\n\n- ${props.join("\n- ")}\n\n`;
          }
        } else if (fileStats.isDirectory()) {
          // İç içe klasörler varsa onları da analiz et
          await generateDocs(filePath, outputDir);
        }
      }

      await fs.writeFile(docFilePath, docContent);
    }
  }
}

const COMPONENTS_DIR = path.join(__dirname, "components");
const OUTPUT_DIR = path.join(__dirname, "docs");

// Dokümantasyon dizinini temizle ve oluştur
fs.emptyDirSync(OUTPUT_DIR);

generateDocs(COMPONENTS_DIR, OUTPUT_DIR)
  .then(() => console.log("Documentation generated successfully!"))
  .catch((error) => console.error("Error generating documentation:", error));
