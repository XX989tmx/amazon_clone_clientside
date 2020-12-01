export function modifyPriceToJPYLocale(price) {
  return Number(price).toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
}
