import { ProductCard } from "./product-card";

export const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  const numberOfProducts = limitedData.length;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>

      <section>
        {numberOfProducts > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {limitedData.map((product: any, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          "No products found"
        )}
      </section>
    </div>
  );
};
