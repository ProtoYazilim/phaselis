/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fs from "fs";
import * as path from "path";
import * as chokidar from "chokidar";

const themeFolderPath = path.join(__dirname, "../theme");
const outputFilePath = path.join(__dirname, "../global.d.ts");

const collectComponents = (
  // themeType: "light" | "dark",
  themeType: "light",
): { [key: string]: any } => {
  const themeTypeFolderPath = path.join(themeFolderPath, themeType);
  const components: { [key: string]: any } = {};

  if (!fs.existsSync(themeTypeFolderPath)) {
    console.warn(`${themeType} folder does not exist.`);
    return components;
  }

  const files = fs.readdirSync(themeTypeFolderPath);

  files.forEach((file) => {
    const filePath = path.join(themeTypeFolderPath, file);

    if (fs.statSync(filePath).isFile() && file.endsWith("-theme.tsx")) {
      const componentName = file.replace("-theme.tsx", "");

      delete require.cache[require.resolve(filePath)];

      const componentData = require(filePath);

      if (componentData) {
        components[componentName] = componentData.default;
      }
    }
  });

  return components;
};

const analyzeVariants = (
  obj: any,
  aggregatedVariants: { [key: string]: Set<string> },
  variations: Set<string> = new Set(),
) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value && typeof value === "object") {
      Object.keys(value).forEach((innerKey) => {
        if (!key.startsWith("_")) {
          variations.add(innerKey);
        }
      });
      if (value.variants) {
        Object.keys(value.variants).forEach((variantKey) => {
          const variant = value.variants[variantKey];
          if (!aggregatedVariants[variantKey]) {
            aggregatedVariants[variantKey] = new Set();
          }

          if (variant.hasOwnProperty("true")) {
            aggregatedVariants[variantKey].add("boolean");
          } else if (typeof variant === "object") {
            Object.keys(variant).forEach((innerKey) => {
              aggregatedVariants[variantKey].add(`"${innerKey}"`);
            });
          }
        });
      }

      analyzeVariants(value, aggregatedVariants);
    }
  });
};

// TypeScript arayüzlerini oluşturacak fonksiyon
const generateInterfacesContent = (components: { [key: string]: any }) => {
  let content =
    "// This file is generated by a script. Do not modify this file manually.\n\n";

  Object.keys(components).forEach((componentName) => {
    const interfaceName = `${componentName.charAt(0).toUpperCase() + componentName.slice(1)}ExtraProps`;
    const component = components[componentName];

    const aggregatedVariants: { [key: string]: Set<string> } = {};
    const variations = new Set<string>();

    // Varyantları analiz et
    analyzeVariants(component, aggregatedVariants, variations);

    content += `interface ${interfaceName} {\n`;

    // Varyasyonları 'variation' olarak ekle
    if (variations.size > 0) {
      content += `  variation?: ${Array.from(variations)
        .map((variation) => `"${variation}"`)
        .join(" | ")};\n`;
    }

    // Varyantları dosyaya ekle
    Object.keys(aggregatedVariants).forEach((variantKey) => {
      const types = Array.from(aggregatedVariants[variantKey]).join(" | ");
      content += `  ${variantKey}?: ${types};\n`;
    });

    content += "}\n\n";
  });

  return content;
};

const generateInterfaceFile = async () => {
  try {
    const lightComponents = collectComponents("light");
    // const darkComponents = collectComponents("dark");

    const content = generateInterfacesContent({
      ...lightComponents,
      // ...darkComponents,
    });

    fs.writeFileSync(outputFilePath, content, { encoding: "utf8" });
    console.log(`Created ${outputFilePath}`);
  } catch (error) {
    console.error("Error generating interfaces file:", error);
  }
};

const watchThemeFolder = () => {
  const watcher = chokidar.watch(themeFolderPath, {
    persistent: true,
    ignoreInitial: true,
  });

  watcher.on("change", (filePath) => {
    console.log(`Detected change in ${filePath}. Regenerating global.d.ts...`);
    generateInterfaceFile();
  });

  watcher.on("add", (filePath) => {
    console.log(`Detected new file ${filePath}. Regenerating global.d.ts...`);
    generateInterfaceFile();
  });

  watcher.on("unlink", (filePath) => {
    console.log(
      `Detected file removal ${filePath}. Regenerating global.d.ts...`,
    );
    generateInterfaceFile();
  });

  console.log(`Watching for changes in ${themeFolderPath}...`);
};

generateInterfaceFile();
// watchThemeFolder();
