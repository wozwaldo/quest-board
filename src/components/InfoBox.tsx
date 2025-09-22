import type { ReactNode } from 'react';

type CSSVars = React.CSSProperties & {
  ['--n']?: number | string;
  ['--d']?: string;
  ['--w']?: string;
};

interface InfoBoxProps {
  children: ReactNode;
  mode: 'hint' | 'warning';
}

const InfoBox = ({ children, mode }: InfoBoxProps) => {
  if (mode === 'hint') {
    const text = typeof children === 'string' ? children : '';
    return (
      <aside
        className="mt-4 text-green-400"
        style={{ '--n': text.length, '--d': '4s' } as CSSVars}
      >
        <p className="typewriter text-xs">{children}</p>
      </aside>
    );
  }

  return (
    <aside className="mt-4 animate-fade-in-left-sharp">
      <h1 className="uppercase text-lg text-green-400">► Warning!</h1>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
