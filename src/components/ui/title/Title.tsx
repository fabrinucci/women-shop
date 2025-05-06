interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={className}>
      <h1 className='mb-6 text-3xl font-semibold capitalize sm:text-4xl'>
        {title}
      </h1>

      {subtitle && <p className='text-base sm:text-lg'>{subtitle}</p>}
    </div>
  );
};
