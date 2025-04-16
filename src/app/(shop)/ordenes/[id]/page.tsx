interface Props {
  params: Promise<{ id: string }>;
}

export default async function Order({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Órden {id}</h1>
    </div>
  );
}
