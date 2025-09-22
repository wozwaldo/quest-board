import Quest from './Quest';
import { type Quest as QuestType } from '../App';
import InfoBox from './InfoBox';
import type { ReactNode } from 'react';

interface QuestListProps {
  quests: QuestType[];
  onDeleteQuest: (id: number) => void;
}

const QuestList = ({ quests, onDeleteQuest }: QuestListProps) => {
  if (quests.length === 0) {
    return (
      <InfoBox mode="hint">
        ► The quest log lies empty... Will you chart its course, adventurer?
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (quests.length >= 3) {
    warningBox = (
      <InfoBox mode="warning">
        <p>
          Too many quests. Your stamina bar is empty. Take it easy, traveler.
        </p>
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul className="grid grid-cols-2 gap-4 mt-6">
        {quests.map(quest => (
          <li key={quest.id}>
            <Quest id={quest.id} title={quest.title} onDelete={onDeleteQuest}>
              <p>{quest.description}</p>
            </Quest>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuestList;
