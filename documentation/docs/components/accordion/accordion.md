---
id: accordion
category: 'data-display'
title: Accordion
version: '0.1'
description:
  Accordion is a customizable component used to display collapsible items. It supports multiple expand modes and animated transitions.
---

# Accordion

`Accordion` is a customizable component used to display collapsible items. It supports multiple expand modes and animated transitions.

## Import

```js
import { Accordion, AccordionList, AccordionItem } from "phaselis";
```

- **Accordion**: Container component for the collapsible structure.
- **AccordionList**: A list of accordion items that can expand and collapse.
- **AccordionItem**: Individual items with headers and collapsible content.

### Navigation
- [AccordionList](accordion-list)
- [Accordion with AccordionItem](accordion-item)

## Usage

### Basic Accordion with AccordionItem

```jsx
<Accordion expandMode="multiple" onChange={(index) => console.log(`Toggled section at index: ${index}`)}>
  <AccordionItem headerText="Overview" headerIcon="info">
    <Text>This is an overview section with general content.</Text>
  </AccordionItem>
  <AccordionItem headerText="Specifications" expand>
    <Text>Specifications for the product are detailed here. This section is expanded by default.</Text>
  </AccordionItem>
  <AccordionItem headerText="Reviews" headerIcon="star">
    <Text>Read customer reviews in this section.</Text>
  </AccordionItem>
  <AccordionItem headerText="FAQ" headerIcon="help-circle">
    <Text>Find answers to frequently asked questions here.</Text>
  </AccordionItem>
</Accordion>
```

## Props

### onChange
`(index: number) => void`

A callback function that is triggered when an accordion item is expanded or collapsed. It receives the index of the item that was toggled as a parameter.


```jsx
<Accordion onChange={(index) => console.log("Accordion item changed at index:", index)}>
  <AccordionItem headerText="Item 1">
    <Text>Content for item 1</Text>
  </AccordionItem>
  <AccordionItem headerText="Item 2">
    <Text>Content for item 2</Text>
  </AccordionItem>
</Accordion>
```

### expandMode
`single | multiple`

Defines how the accordion items behave when expanded. The default value is `"single"`.


```jsx
<Accordion expandMode="multiple">
  <AccordionItem headerText="Section 1">
    <Text>Details for section 1</Text>
  </AccordionItem>
  <AccordionItem headerText="Section 2">
    <Text>Details for section 2</Text>
  </AccordionItem>
</Accordion>
```

### children
`ReactNode`

The `Accordion` component can include one or more `AccordionItem` components as its children. Each `AccordionItem` represents an expandable/collapsible section.


```jsx
<Accordion>
  <AccordionItem headerText="First Item">
    <Text>First item content</Text>
  </AccordionItem>
  <AccordionItem headerText="Second Item">
    <Text>Second item content</Text>
  </AccordionItem>
</Accordion>
```