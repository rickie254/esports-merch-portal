import { ProductCard } from "@/components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          category={product.category}
          description={product.description}
        />
      ))}
    </div>

    {products.length === 0 && (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No products found matching your search criteria.
        </p>
      </div>
    )}
  </>
);

export default ProductGrid;