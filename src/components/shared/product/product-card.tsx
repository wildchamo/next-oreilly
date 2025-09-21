import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { ProductPrice } from "./product-price";

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <p className="text-xs">{product.brand}</p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-base font-semibold">{product.name}</h3>
        </Link>
      </CardContent>

      <CardFooter className="flex justify-between">
        <p>Product Rating {product.rating}</p>
        {product.stock > 0 ? (
          <ProductPrice price={product.price} />
        ) : (
          <p>Out of Stock</p>
        )}
      </CardFooter>
    </Card>
  );
};
