export const formatDate = (isoDate, portuguese) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString(portuguese ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
