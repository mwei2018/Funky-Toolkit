import type { Story } from "@ladle/react";
import { Button } from "./index";

// Ladle stories
export const Primary: Story = () => <Button variant="primary">Primary Button</Button>;

export const Secondary: Story = () => (
  <Button variant="secondary">Secondary Button</Button>
);

export const Text: Story = () => <Button variant="text">Text Button</Button>;

export const Sizes: Story = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

export const States: Story = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
);

export const Combined = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Text</Button>
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  </div>
); 