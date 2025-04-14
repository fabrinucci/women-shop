import { notFound } from 'next/navigation';

type Props = { params: { id: string } };

export default function Category({ params }: Props) {
  const { id } = params;

  if (id === 'boy') notFound();
  return (
    <div>
      <h1>Categoria {id}</h1>
    </div>
  );
}
