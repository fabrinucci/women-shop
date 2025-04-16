import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Category({ params }: Props) {
  const { id } = await params;

  if (id === 'boy') notFound();
  return (
    <div>
      <h1>Categoria {id}</h1>
    </div>
  );
}
