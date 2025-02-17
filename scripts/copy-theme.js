const fs = require("fs");
const path = require("path");
const readline = require("readline");

const projectRoot = process.cwd();

const themeSource = path.join(__dirname, "..", "src", "theme");
const themeDestination = path.join(projectRoot, "theme");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user if they want to copy the theme files
rl.question(
  "Do you want to copy the theme files to your project root directory? (Y/N): ",
  (answer) => {
    if (answer.toLowerCase() === "y") {
      if (fs.existsSync(themeDestination)) {
        rl.question(
          'The "theme" folder already exists. Do you want to overwrite it? (Y/N): ',
          (overwriteAnswer) => {
            if (overwriteAnswer.toLowerCase() === "y") {
              copyThemeFiles();
            } else {
              console.log("The copy operation was cancelled.");
              rl.close();
            }
          },
        );
      } else {
        copyThemeFiles();
      }
    } else {
      console.log("The copy operation was cancelled.");
      rl.close();
    }
  },
);

// Function to copy theme files
function copyThemeFiles() {
  if (fs.existsSync(themeDestination)) {
    console.log("The existing theme folder will be removed before copying...");
    fs.rmdirSync(themeDestination, { recursive: true });
  }

  fs.mkdirSync(themeDestination, { recursive: true });

  copyDirectoryContents(themeSource, themeDestination);

  console.log("The theme files have been successfully copied.");
  rl.close();
}

// Function to recursively copy files and folders
function copyDirectoryContents(srcDir, destDir) {
  const items = fs.readdirSync(srcDir);

  items.forEach((item) => {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);

    const stats = fs.statSync(srcPath);

    if (stats.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      copyDirectoryContents(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Successfully copied: ${item}`);
    }
  });
}
