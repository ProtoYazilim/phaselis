const fs = require("fs");
const path = require("path");

/**
 * This script copies the global.d.ts file from node_modules/phaselis/src/ to the user's project root
 */
function copyGlobalDtsFile() {
  try {
    // Get the current working directory (user's project root)
    const userProjectRoot = process.cwd();

    // Define source and destination paths
    const sourcePath = path.join(
      userProjectRoot,
      "node_modules",
      "phaselis",
      "src",
      "global.d.ts",
    );
    const destPath = path.join(userProjectRoot, "global.d.ts");

    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
      console.error("Error: Source file not found at", sourcePath);
      process.exit(1);
    }

    // Copy the file
    fs.copyFileSync(sourcePath, destPath);

    console.log(`✅ Successfully copied global.d.ts to ${destPath}`);
  } catch (error) {
    console.error("Error copying global.d.ts file:", error);
    process.exit(1);
  }
}

// Execute the function
copyGlobalDtsFile();
