import { Card, CardAction, CardHeader } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";

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
      <div> {product.name}</div>

      <CardAction>
        <button>View Details</button>
      </CardAction>
    </Card>
  );
};
