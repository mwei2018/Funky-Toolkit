import type { Story } from "@ladle/react";
import { Button } from "./index";

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

// Add control example
States.args = {
  variant: "primary",
  size: "medium",
  loading: false,
  disabled: false,
};

States.argTypes = {
  variant: {
    control: { type: "select" },
    options: ["primary", "secondary", "text"],
  },
  size: {
    control: { type: "select" },
    options: ["small", "medium", "large"],
  },
  loading: {
    control: { type: "boolean" },
  },
  disabled: {
    control: { type: "boolean" },
  },
};

export const Combined = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary" size="small">Small Primary</Button>
      <Button variant="secondary" size="small">Small Secondary</Button>
      <Button variant="text" size="small">Small Text</Button>
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary" loading>Loading Primary</Button>
      <Button variant="secondary" loading>Loading Secondary</Button>
      <Button variant="text" loading>Loading Text</Button>
    </div>
  </div>
); 