export function modifyPriceToJPYLocale(price) {
  return Number(price).toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
}

export function getJapanDateAndTime(date) {
  const yearMonthDate = new Date(date).toLocaleDateString("ja-JP");
  return yearMonthDate
    .split("/")
    .map((v, i) => {
      if (i === 0) {
        return v + "年";
      } else if (i === 1) {
        return v + "月";
      } else {
        return v + "日";
      }
    })
    .join("");
}

export function japanTimeDefaultFormat(date) {
  return new Date(date).toLocaleDateString("ja-JP");
}
