import { describe, it, expect } from "vitest";
import { calculatePriceDetails } from "./price";

describe("calculatePriceDetails", () => {
  it("should calculate gross and tax amount correctly for 19%", () => {
    const { grossPrice, taxAmount } = calculatePriceDetails(100, 19);
    expect(grossPrice).toBe("119,00 €");
    expect(taxAmount).toBe("19,00 €");
  });

  it("should calculate correctly for 0% tax", () => {
    const { grossPrice, taxAmount } = calculatePriceDetails(100, 0);
    expect(grossPrice).toBe("100,00 €");
    expect(taxAmount).toBe("0,00 €");
  });
});
