# Welcome to Phaselis 👋

## Installation

- Run `npm install`
- Run `npx expo install expo-dev-client`
- Run `npx expo run:ios --device`

## To-Do List

- Update the `ALIAS` command
- Reorganize the folder structure
- Revisit the icon component (current implementation increases build time due to loading all icons)
- Consider introducing common types?
- Load and test fonts (can be done during label component implementation)
- Remove `defaultProps`

## Folder Naming Conventions

- Use kebab-case for folder names
- Use an index file to export
- Use UpperCamelCase for the main component file
- Use `assets/styles/index.ts` for styles
- Use `assets/icons/index.ts` for icons


## Errors

### Common 1

The following build commands failed:
        PhaseScriptExecution [CP-User]\ [Hermes]\ Replace\ Hermes\ for\ the\ right\ configuration,\ if\ needed /Users/necatisarhanli/Library/Developer/Xcode/DerivedData/phaselis-ddvswxkejuqcwdbstxozaabumzwy/Build/Intermediates.noindex/Pods.build/Debug-iphoneos/hermes-engine.build/Script-46EB2E0001CC30.sh (in target 'hermes-engine' from project 'Pods')
(1 failure)

This error can occur due to a misconfiguration in the `ios/.xcode.env.local` file.

#### Solution

To fix this error, you need to delete the `ios/.xcode.env.local` file. You can do this by running the following command in your terminal:

```bash
rm ios/.xcode.env.local


IOS local development on device profile
`https://expo.dev/register-device/acbd128f-d35a-41d6-bca7-01e2f4a2b79f`
```

### TODOs
TODO: BlockStyleInterface