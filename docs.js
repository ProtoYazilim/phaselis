const fs = require("fs");
const path = require("path");

// Proje dizinini ayarlayın
const componentsDir = path.join(__dirname, "components");
const docsDir = path.join(__dirname, "docs");

// 'docs' dizini yoksa oluşturun
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

// Tüm dosyaları almak için recursive fonksiyon
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith(".tsx")) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Bileşen belgelerini oluşturma fonksiyonu
const generateComponentDocs = (
  componentName,
  fileName,
  props,
  content,
  subComponents = []
) => {
  const formatProps = (props) => {
    return props.length > 0
      ? `<h6>Props</h6><ul>${props.map((prop) => `<li><strong>${prop.name}:</strong> ${prop.type}</li>`).join("")}</ul>`
      : "<p>No props found.</p>";
  };

  const formatSubComponents = (subComponents) => {
    return subComponents.length > 0
      ? subComponents
        .map(
          (subComponent) => `
        <hr />
        <h4>${subComponent.name}</h4>
        <p><strong>File:</strong> <code>${subComponent.fileName}</code></p>
        <p>${subComponent.description}</p>
        ${formatProps(subComponent.props)}
      `
        )
        .join("")
      : "";
  };

  const htmlOutput = `
    <article class="shortcode_text">
      <div class="shortcode_title">
        <a class="btn" href="#">Component</a>
        <h1>${componentName}</h1>
        <p>
          The <code>${componentName}</code> component is a React component used for various UI functionalities. This documentation covers its usage, props, and implementation details.
        </p>
        <h4 class="c_head load-order-2">${componentName}</h4>
        <p><strong>File:</strong> <code>${fileName}</code></p>
        <p>
          The <code>${componentName}</code> component is described below, along with its properties and potential sub-components.
        </p>
        ${formatProps(props)}
        ${formatSubComponents(subComponents)}
        <hr />
        <h4>Usage</h4>
        <pre><code class="language-typescript" data-lang="typescript">${content.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      </div>

      <footer>
        <div class="border_bottom"></div>
        <div class="row feedback_link">
          <div class="col-lg-6">
            <h6>
              <i class="icon_mail_alt"></i>Still stuck?
              <a href="#" data-toggle="modal" data-target="#exampleModal3">How can we help?</a>
            </h6>
          </div>
          <div class="col-lg-6">
            <p>
              Was this page helpful?
              <a href="#" class="h_btn">Yes</a><a href="#" class="h_btn red">No</a>
            </p>
          </div>
        </div>
      </footer>
    </article>
  `;

  return htmlOutput;
};

// Bileşen dosyalarını al
const componentFiles = getAllFiles(componentsDir);

// Propsları bulma fonksiyonu
const extractProps = (content) => {
  const propRegex = /(\w+)\s*:\s*([\w\[\]{}<>|]+);/g;
  const interfaceRegex = /interface\s+\w+\s*{([^}]*)}/g;

  let props = [];
  let match;

  // Basit props tanımlamalarını yakala
  while ((match = propRegex.exec(content)) !== null) {
    props.push({ name: match[1], type: match[2] });
  }

  // Interface içindeki props tanımlamalarını yakala
  while ((match = interfaceRegex.exec(content)) !== null) {
    const interfaceContent = match[1];
    const interfaceProps = [...interfaceContent.matchAll(propRegex)].map(
      (m) => ({
        name: m[1],
        type: m[2],
      })
    );
    props = props.concat(interfaceProps);
  }

  return props;
};

// Bileşen dosyalarını analiz et ve her biri için ayrı bir HTML dökümantasyonu oluştur
componentFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");

  // Bileşen adını al (dosya adını kullan)
  const componentName = path.basename(file, ".tsx");

  // Propsları ve diğer önemli bilgileri bulma
  const props = extractProps(content);

  // Subcomponent'leri bulma (örnek olarak diğer .tsx dosyalarını alt bileşen olarak alabiliriz)
  const subComponents = componentFiles
    .filter((subFile) => subFile !== file && subFile.includes(componentName))
    .map((subFile) => ({
      name: path.basename(subFile, ".tsx"),
      fileName: subFile,
      description: `This is a subcomponent of ${componentName}.`,
      props: extractProps(fs.readFileSync(subFile, "utf8")),
    }));

  // HTML çıktısını oluştur
  const htmlOutput = generateComponentDocs(
    componentName,
    file,
    props,
    content,
    subComponents
  );

  // HTML çıktısını 'docs' dizinine component ismi ile kaydet
  const outputFilePath = path.join(docsDir, `${componentName}.html`);
  fs.writeFileSync(outputFilePath, htmlOutput);
});

console.log("Documentation generated successfully.");
