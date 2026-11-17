import { describe, expect, it } from "vitest";
import { contact, langs, site } from "./site";

// Shape of a value with strings replaced by "s", so mn/en can be compared structurally.
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]));
  }
  return typeof value;
}

describe("site content", () => {
  it("has the same structure in every language (AC-2)", () => {
    const [first, ...rest] = langs;
    for (const lang of rest) {
      expect(shape(site[lang]), lang).toEqual(shape(site[first]));
    }
  });

  it("has no empty strings", () => {
    const empty = JSON.stringify(site).match(/""/g) ?? [];
    expect(empty).toHaveLength(0);
  });
});

// Deploy gate (AC-4): run with `make check-content`.
describe.runIf(process.env.CHECK_CONTENT)("content is ready to publish", () => {
  it("contains no TODO placeholders", () => {
    const text = JSON.stringify({ site, contact });
    const leftovers = [...text.matchAll(/"[^"]*TODO[^"]*"/g)].map((m) => m[0]);
    expect(leftovers).toEqual([]);
  });
});
