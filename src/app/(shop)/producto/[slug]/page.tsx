interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Product({ params }: Props) {
  const { slug } = await params;
  return (
    <div>
      <h1>Producto {slug}</h1>
    </div>
  );
}
