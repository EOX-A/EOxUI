import { describe, it, expect } from "vitest";
import packageJson from "../package.json";

describe("Package Exports", () => {
  it("should have correct module and main entries", () => {
    expect(packageJson.module).toBe("./dist/eox-ui.js");
    expect(packageJson.main).toBe("./dist/eox-ui.umd.cjs");
  });

  it("should export beercss and style folders as valid public API", () => {
    expect(packageJson.exports).toHaveProperty("./beercss/*");
    expect(packageJson.exports).toHaveProperty("./style/*");
  });
});

describe("Dependency Pinning", () => {
  it("should pin beercss to an exact version for stability", () => {
    const version = packageJson.dependencies.beercss;
    // Ensure the version does NOT start with ^ or ~
    expect(version).toMatch(/^\d+\.\d+\.\d+$/);
  });
});
