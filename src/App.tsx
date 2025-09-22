import questsImg from '../public/images/pixel-heart.png';
import Header from './components/Header';
import { useState } from 'react';
import QuestList from './components/QuestList';
import NewQuest from './components/NewQuest';

export interface Quest {
  id: number;
  title: string;
  description: string;
}
function App() {
  const [quests, setQuests] = useState<Quest[]>([]);

  const addQuest = (quest: string, summary: string) => {
    setQuests(prevQuests => {
      const newQuest: Quest = {
        id: Math.random(),
        title: quest,
        description: summary,
      };
      return [...prevQuests, newQuest];
    });
  };

  const deleteQuest = (id: number) => {
    setQuests(prevQuests => prevQuests.filter(quest => quest.id !== id));
  };

  return (
    <main className="max-w-4xl mx-auto p-8 min-h-screen">
      <div className="bg-[#2a03f4] text-white p-5 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="border border-white/50 rounded-lg p-10">
          <Header image={{ src: questsImg, alt: 'A list of quests' }}>
            <h1>Your quests for today</h1>
          </Header>
          <NewQuest onAddQuest={addQuest} />
          <QuestList onDeleteQuest={deleteQuest} quests={quests}></QuestList>
        </div>
      </div>
    </main>
  );
}

export default App;
