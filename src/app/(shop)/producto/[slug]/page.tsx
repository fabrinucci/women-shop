interface Props {
  params: {
    slug: string;
  };
}

export default function Product({ params }: Props) {
  const { slug } = params;
  return (
    <div>
      <h1>Producto {slug}</h1>
    </div>
  );
}
