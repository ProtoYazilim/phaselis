const fs = require("fs-extra");
const path = require("path");
const { extname, basename } = require("path");

// Proje dizinini ayarlayın
const componentsDir = path.join(__dirname, "components");
const docsDir = path.join(__dirname, "docs");

// 'docs' dizini yoksa oluşturun
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

// Regex to match TypeScript props inside interfaces or types
const propPattern =
  /(?:interface|type)\s+(\w+)\s*(?:extends\s*\w+\s*)?{([^}]*)}/gs;

// Tüm dosyaları almak için recursive fonksiyon
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stats = await fs.stat(fullPath);

    if (stats.isDirectory()) {
      await getAllFiles(fullPath, arrayOfFiles);
    } else if (
      file.endsWith(".tsx") ||
      file.endsWith(".ts") ||
      file.endsWith(".json")
    ) {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

// Dosyayı analiz et ve propsları bul
async function analyzeFile(filePath) {
  const fileContent = await fs.readFile(filePath, "utf8");
  let props = [];

  // Propsları bul
  const matches = [...fileContent.matchAll(propPattern)];
  if (matches) {
    matches.forEach((match) => {
      const interfaceName = match[1];
      const propBlock = match[2];

      // Extract individual props from the prop block
      const individualProps = propBlock
        .split(";")
        .map((prop) => prop.trim())
        .filter(Boolean);

      individualProps.forEach((prop) => {
        props.push(`${interfaceName} - ${prop}`);
      });
    });
  }

  return { content: fileContent, props };
}

// HTML çıktısını oluştur
async function generateDocs() {
  const componentDirs = await fs.readdir(componentsDir);

  for (const componentDir of componentDirs) {
    const componentPath = path.join(componentsDir, componentDir);
    const stats = await fs.stat(componentPath);

    if (stats.isDirectory()) {
      const files = await getAllFiles(componentPath);
      let docContent = `<article class="shortcode_text">\n`;

      // Component açıklaması
      docContent += `<div class="shortcode_title">\n`;
      docContent += `<a class="btn" href="#">Component</a>\n`;
      docContent += `<h1>${componentDir.charAt(0).toUpperCase() + componentDir.slice(1)}</h1>\n`;

      docContent += `<p>The <code>${componentDir}</code> component is a Phaselis React-Native component used for various UI functionalities. This documentation covers its usage, props, and implementation details.</p>\n`;

      // Dosyaları işleyin
      for (const file of files) {
        const { content, props } = await analyzeFile(file);
        const fileName = path.basename(file);
        const fileNameWithoutExt = basename(file, extname(file));

        docContent += `<h4 class="c_head load-order-2">${fileNameWithoutExt}</h4>\n`;
        docContent += `<p><strong>File:</strong> <code>${fileName}</code></p>\n`;
        docContent += `<p>${props.length > 0 ? `<strong>Props:</strong><ul>${props.map((prop) => `<li>${prop}</li>`).join("")}</ul>` : "No props found."}</p>\n`;
        docContent += `<pre><code class="language-typescript" data-lang="typescript">${escapeHtml(content)}</code></pre>\n`;
        docContent += `<hr />\n`;
      }

      docContent += `</div>\n</article>\n`;

      // HTML dosyasını kaydet
      const outputFilePath = path.join(docsDir, `${componentDir}.html`);
      await fs.writeFile(outputFilePath, docContent);
      console.log(`Documentation for ${componentDir} generated.`);
    }
  }
}

// HTML karakterlerini kaçış
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Dokümantasyonu oluştur
generateDocs().catch((err) => console.error(err));
