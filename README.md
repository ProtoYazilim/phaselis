# Phaselis Framework 🎨

A powerful, customizable, and beautiful UI component library for React Native applications. Phaselis provides a comprehensive set of pre-built components that help you build stunning mobile applications faster.

## ✨ Features

- 🎯 **20+ Ready-to-use Components**: From basic buttons to complex form elements
- 🎨 **Customizable Theming**: Built-in light and dark themes with easy customization
- 📱 **Cross-Platform**: Works seamlessly on both iOS and Android
- 🔧 **TypeScript Support**: Full TypeScript support with detailed type definitions
- 🎭 **Style Variants**: Multiple style variants for each component
- 🚀 **Performance Optimized**: Minimal build size and optimal runtime performance

## 📦 Installation

```bash
npm install phaselis
```

### Required Dependencies

```bash
npm install react-native-gesture-handler@~2.16.1 react-native-reanimated@~3.10.1 react-native-safe-area-context@4.10.5 react-native-screens@3.31.1 react-native-svg@15.2.0 react-native-unistyles@^2.9.2
```

For iOS, run:
```bash
cd ios && pod install
```

## 📚 Documentation

For detailed documentation and examples, visit our [documentation site](https://www.protoyazilim.com/phaselis).

## 🔧 Setup

1. Import and configure the PhaselisProvider:

```jsx
import { Provider as PhaselisProvider, lightTheme, darkTheme } from 'phaselis';

function App() {
  return (
    <PhaselisProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <YourApp />
    </PhaselisProvider>
  );
}
```

2. Configure Unistyles:

```typescript
import { lightTheme, darkTheme } from 'phaselis';
import { UnistylesRegistry } from 'react-native-unistyles';

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
  initialTheme: 'light',
});
```

## 🎯 Components

Phaselis includes a wide range of components:

[Component Documentation](https://www.protoyazilim.com/phaselis/docs/components/)

## 💅 Styling

Phaselis components are highly customizable through:

- Theme customization
- Style props
- Variant props
- Shadow support
- Linear gradient support

Example:
```jsx
<Button
  primary
  style={{
    container: {
      backgroundColor: 'yellow',
      shadows: [{
        color: '#FCF596',
        opacity: 0.8,
        radius: 12,
        offset: [-5, -3],
      }]
    },
    text: {
      color: 'white'
    }
  }}
>
  Custom Button
</Button>
```

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

<!-- ## 📄 License

MIT © ProtoYazılım

--- -->

<p align="center">Made with ❤️ by the Phaselis team</p>
