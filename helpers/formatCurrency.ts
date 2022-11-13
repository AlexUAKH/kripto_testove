import { Decimal } from "decimal.js";

export const formatFiat = (value: number): string => {
  const decimal = new Decimal(value);
  return decimal.toFixed(2);
};
export const formatCripto = (value: number): string => {
  const decimal = new Decimal(value);
  return decimal.toFixed(6);
};
