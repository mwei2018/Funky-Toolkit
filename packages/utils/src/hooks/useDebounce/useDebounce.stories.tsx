import type { Story } from "@ladle/react";
import { useState, useEffect } from "react";
import { useDebounce } from "./index";

export const SearchExample: Story = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [results, setResults] = useState<string[]>([]);

  // Simulate API call
  useEffect(() => {
    if (debouncedSearch) {
      // Mock API call
      const mockResults = [
        `Result 1 for "${debouncedSearch}"`,
        `Result 2 for "${debouncedSearch}"`,
        `Result 3 for "${debouncedSearch}"`,
      ];
      setResults(mockResults);
    } else {
      setResults([]);
    }
  }, [debouncedSearch]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search..."
          style={{
            padding: "8px 12px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #d9d9d9",
          }}
        />
        <div style={{ color: "#666", marginTop: "4px", fontSize: "14px" }}>
          Debounced value: {debouncedSearch}
        </div>
      </div>
      <div>
        {results.map((result, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

// Add control example
SearchExample.args = {
  delay: 500,
};

SearchExample.argTypes = {
  delay: {
    control: { type: "number" },
    min: 100,
    max: 2000,
    step: 100,
  },
}; 