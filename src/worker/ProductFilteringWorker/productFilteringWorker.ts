import { ICSVProducts } from "../../services/productsAPI";
import { IProductQuery } from "../../services/productsAPI/parameters/IProductQuery";

export function filterProducts(
  products: ICSVProducts[],
  queries: IProductQuery
) {
  return products.filter((product) => {
    let pass = false;
    const { gender, onSale } = queries;
    const query = queries.query?.toLowerCase();
    if (query) {
      if (product.gtin.includes(query)) pass = true;
      if (product.title.toLowerCase().includes(query)) pass = true;
    }
    if (onSale) pass = pass && !!product.onSale;
    if (gender && product.gender !== gender) pass = pass && false;
    return pass;
  });
}

export function terminate() {
  // eslint-disable-next-line
  close();
}
