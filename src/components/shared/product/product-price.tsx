import { cn } from "@/lib/utils";

export const ProductPrice = ({
  price,
  className,
}: {
  price: number;
  className?: string;
}) => {
  const stringValue = price.toFixed(2);

  const [integerPart, decimalPart] = stringValue.split(".");

  return (
    <p className={cn("text-2xl font-semibold", className)}>
      <span className="align-super text-xs">$ </span>
      {integerPart}
      <span className="align-super text-xs">.{decimalPart}</span>
    </p>
  );
};
