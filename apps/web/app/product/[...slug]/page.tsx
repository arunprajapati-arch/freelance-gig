import ProductPageContainer from "@/components/product/ProductPageContainer";
import { prisma } from "@redb/db";

type Props = {
  params: Promise<{
    slug: string[]
  }>
}

const getProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId
    }
  })
  return product;
}


export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug[0] || "default-product";

  const product = await getProduct(slug);
  
  return <ProductPageContainer productss={product} />;
}