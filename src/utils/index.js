export const formatPrice = (price, locale = "it-IT", currency = "VND") =>
  price.toLocaleString(locale, {
    style: "currency",
    currency,
  });
