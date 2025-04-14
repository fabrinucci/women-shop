interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className}`}>
      <h1 className='my-6 text-4xl font-semibold'>{title}</h1>

      {subtitle && <p className='text-lg'>{subtitle}</p>}
    </div>
  );
};
