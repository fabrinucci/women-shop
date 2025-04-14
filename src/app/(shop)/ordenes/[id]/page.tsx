interface Props {
  params: { id: string };
}

export default function Order({ params }: Props) {
  const { id } = params;
  return (
    <div>
      <h1>Órden {id}</h1>
    </div>
  );
}
