import sampleData from "@/db/sample-data";
import { ProductList } from "@/components/shared/product/product-list";

export default async function HomePage() {
  const products = sampleData.products;

  return (
    <>
      <ProductList data={products} title="Top Products" limit={4} />
    </>
  );
}
