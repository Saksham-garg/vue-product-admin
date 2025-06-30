export function calculatePriceDetails(netPrice: number, taxRatePct: number) {
  const taxRate = taxRatePct / 100;
  const taxAmount = netPrice * taxRate;
  const grossPrice = netPrice + taxAmount;

  const format = (value: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(value);

  return {
    grossPrice: format(grossPrice),
    taxAmount: format(taxAmount),
  };
}
