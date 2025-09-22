import { useRef, type FormEvent } from 'react';

interface NewQuestProps {
  onAddQuest: (quest: string, summary: string) => void;
}

const NewQuest = ({ onAddQuest }: NewQuestProps) => {
  const quest = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredQuest = quest.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();

    onAddQuest(enteredQuest, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="flex flex-col mb-2">
        <label htmlFor="quest">Your quest</label>
        <input
          type="text"
          id="quest"
          ref={quest}
          className="bg-white text-[#2a03f4] px-2"
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="summary">Short summary</label>
        <input
          type="text"
          id="summary"
          ref={summary}
          className="bg-white text-[#2a03f4] px-2"
        />
      </p>
      <p>
        <button className="mt-3 white-btn px-4">Add Quest</button>
      </p>
    </form>
  );
};

export default NewQuest;
