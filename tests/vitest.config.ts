// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Use global APIs like 'describe', 'it', 'expect'
    environment: "node", // Run tests in a Node.js environment
    setupFiles: ["./tests/setup.ts"], // Optional: for global setup, e.g., database connections
    include: ["tests/**/*.test.ts"], // Only run files ending in .test.ts in the 'tests' directory
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
    coverage: {
      provider: "v8", // Use v8 for coverage reporting
      reporter: ["text", "json", "html"], // Output formats
      exclude: ["tests/**", "src/types/**", "src/config/**"], // Exclude certain files from coverage
    },
  },
});
