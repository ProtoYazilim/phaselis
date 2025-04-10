const fs = require("fs");
const path = require("path");
const readline = require("readline");

const projectRoot = process.cwd();

// Theme paths
const themeSource = path.join(__dirname, "..", "src", "theme");
const themeDestination = path.join(projectRoot, "src", "theme");

// Theme interface generator paths
const generatorSource = path.join(
  __dirname,
  "..",
  "scripts",
  "generate-theme-interface.ts",
);
const generatorDestination = path.join(
  projectRoot,
  "scripts",
  "generate-theme-interface.ts",
);
const packageJsonPath = path.join(projectRoot, "package.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Main function to orchestrate the process
function start() {
  copyThemeFiles(() => {
    copyThemeInterfaceGenerator(() => {
      updatePackageJson(() => {
        console.log("\n✅ All operations completed successfully!");
        console.log("You can now run: npm run generate-theme-interface");
        rl.close();
      });
    });
  });
}

// Function to copy theme files
function copyThemeFiles(callback) {
  rl.question(
    "\nDo you want to copy the theme files to your project root directory? (Y/N): ",
    (answer) => {
      answer = answer.trim().toLowerCase();

      if (answer === "y" || answer === "") {
        if (fs.existsSync(themeDestination)) {
          rl.question(
            'The "theme" folder already exists. Do you want to overwrite it? (Y/N): ',
            (overwriteAnswer) => {
              overwriteAnswer = overwriteAnswer.trim().toLowerCase();

              if (overwriteAnswer === "y" || overwriteAnswer === "") {
                performThemeCopy();
                callback();
              } else {
                console.log("Theme copy operation was cancelled.");
                callback();
              }
            },
          );
        } else {
          performThemeCopy();
          callback();
        }
      } else {
        console.log("Theme copy operation was cancelled.");
        callback();
      }
    },
  );
}

// Function to actually perform the theme copy
function performThemeCopy() {
  if (fs.existsSync(themeDestination)) {
    console.log("The existing theme folder will be removed before copying...");
    fs.rmdirSync(themeDestination, { recursive: true });
  }

  fs.mkdirSync(themeDestination, { recursive: true });

  copyDirectoryContents(themeSource, themeDestination);

  console.log("✅ The theme files have been successfully copied.");
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

// Function to copy the theme interface generator script
function copyThemeInterfaceGenerator(callback) {
  rl.question(
    "\nDo you want to copy the theme interface generator script? (Y/N): ",
    (answer) => {
      answer = answer.trim().toLowerCase();

      if (answer === "y" || answer === "") {
        try {
          // Ensure the scripts directory exists
          const scriptsDir = path.dirname(generatorDestination);
          if (!fs.existsSync(scriptsDir)) {
            fs.mkdirSync(scriptsDir, { recursive: true });
            console.log(`Created directory: ${scriptsDir}`);
          }

          // Check if source file exists
          if (!fs.existsSync(generatorSource)) {
            console.error(`Source file not found: ${generatorSource}`);
            callback();
            return;
          }

          // Copy the file
          fs.copyFileSync(generatorSource, generatorDestination);
          console.log(
            `✅ Successfully copied theme interface generator script.`,
          );
          callback();
        } catch (error) {
          console.error(
            `Error copying theme interface generator: ${error.message}`,
          );
          callback();
        }
      } else {
        console.log("Theme interface generator copy was cancelled.");
        callback();
      }
    },
  );
}

// Function to update package.json
function updatePackageJson(callback) {
  rl.question(
    "\nDo you want to add the generate-theme-interface script to package.json? (Y/N): ",
    (answer) => {
      answer = answer.trim().toLowerCase();

      if (answer === "y" || answer === "") {
        try {
          const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf8"),
          );

          if (!packageJson.scripts) {
            packageJson.scripts = {};
          }

          // Add the generate-theme-interface script if it doesn't exist
          if (!packageJson.scripts["generate-theme-interface"]) {
            packageJson.scripts["generate-theme-interface"] =
              "ts-node ./scripts/generate-theme-interface.ts";

            // Write the updated package.json back to the file
            fs.writeFileSync(
              packageJsonPath,
              JSON.stringify(packageJson, null, 2),
              "utf8",
            );

            console.log(
              "✅ Added generate-theme-interface script to package.json",
            );
          } else {
            console.log(
              "generate-theme-interface script already exists in package.json",
            );
          }
          callback();
        } catch (error) {
          console.error(`Error updating package.json: ${error.message}`);
          callback();
        }
      } else {
        console.log("Package.json update was cancelled.");
        callback();
      }
    },
  );
}

// Start the process
start();
