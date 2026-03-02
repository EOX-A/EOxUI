import { describe, it, expect, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

describe("Visual/Markup Consistency Tests", () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../playground.html"),
      "utf8",
    );
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it("should contain the primary beercss elements section", () => {
    const section = document.getElementById("beercss-elements");
    expect(section).not.toBeNull();
  });

  it("should have BeerCSS inputs with correct Material Design markup", () => {
    const fields = document.querySelectorAll(".field.label.border");
    expect(fields.length).toBeGreaterThan(0);

    fields.forEach((field) => {
      const input = field.querySelector("input");
      const label = field.querySelector("label");
      expect(input).not.toBeNull();
      expect(label).not.toBeNull();
    });
  });

  it("should have the Vuetify override section present", () => {
    const vuetifySection = document.getElementById("vuetify-context");
    expect(vuetifySection).not.toBeNull();
    const vuetifyBtn = vuetifySection.querySelector(".v-btn");
    expect(vuetifyBtn).not.toBeNull();
  });

  it("should have BeerCSS elements with updated class requirements (v4.x)", () => {
    // Checking for the group connected pattern introduced in recent versions
    const group = document.querySelector(".group.connected");
    expect(group).not.toBeNull();
  });
});
