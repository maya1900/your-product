import { Badge } from './badge';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-5xl ${inverted ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${inverted ? 'text-white' : 'text-slate-600'}`}>{description}</p>
      ) : null}
    </div>
  );
}
