export function yearDiff(year) {
  return new Date().getFullYear() - year;
}

export function brandRate(brand) {
  let rate;

  switch (brand) {
    case "european":
      rate = 1.3;
      break;
    case "american":
      rate = 1.15;
      break;
    case "japanese":
      rate = 1.05;
      break;
    default:
      break;
  }

  return rate;
}

export function membershipRate(membership) {
  let rate;

  rate = membership === "basic" ? 1.2 : 1.5;

  return rate;
}

export function toUpperCase(text) {
  return text.Atchart(0).toUpperCase() + text.slice(0);
}
