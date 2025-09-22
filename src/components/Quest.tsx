import type { ReactNode } from 'react';

interface QuestProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

const Quest = ({ title, children, id, onDelete }: QuestProps) => {
  return (
    <article className="relative group w-full p-7 animate-fade-in-up-bouncy">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="font-light text-sm">{children}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="mt-3 hover:cursor-pointer"
        title="Delete Quest"
      >
        <div className="trash-box">
          <div className="trash"></div>
          <div className="trash-top"></div>
          <div className="trash-btm"></div>
        </div>
      </button>

      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="swiggle-stroke"
          d="M1,1 L1,95 Q4,99 7,95 Q10,91 13,95 Q16,99 19,95 Q22,91 25,95 Q28,99 31,95 Q34,91 37,95 Q40,99 43,95 Q46,91 49,95 Q52,99 55,95 Q58,91 61,95 Q64,99 67,95 Q70,91 73,95 Q76,99 79,95 Q82,91 85,95 Q88,99 91,95 Q94,91 97,95 L97,1 Z"
        />
      </svg>
    </article>
  );
};

export default Quest;
