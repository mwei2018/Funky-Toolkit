import type { Story } from "@ladle/react";
import { Icon } from "./index";
import { HomeIcon } from "../HomeIcon";

export const BasicIcon: Story = () => (
  <Icon size={24} color="#1677ff">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </Icon>
);

export const HomeIconExample: Story = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <HomeIcon size={16} />
    <HomeIcon size={24} />
    <HomeIcon size={32} />
    <HomeIcon size={48} color="#1677ff" />
  </div>
);

// Add control example
HomeIconExample.args = {
  size: 24,
  color: "currentColor",
};

HomeIconExample.argTypes = {
  size: {
    control: { type: "number" },
    min: 12,
    max: 64,
    step: 4,
  },
  color: {
    control: { type: "color" },
  },
}; 