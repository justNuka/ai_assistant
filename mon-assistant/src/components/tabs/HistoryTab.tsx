import { useState } from 'react';

interface HistoryItem {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
}

export function HistoryTab() {
  const [historyItems] = useState<HistoryItem[]>([
    {
      id: '1',
      title: 'Vérification emails',
      summary: '3 emails importants trouvés',
      timestamp: 'Il y a 2h'
    },
    {
      id: '2',
      title: 'Météo Paris',
      summary: 'Ensoleillé, 24°C',
      timestamp: 'Hier'
    },
    {
      id: '3',
      title: 'Rappel réunion',
      summary: 'Réunion équipe à 14h',
      timestamp: 'Hier'
    }
  ]);

  const handleClearHistory = () => {
    // In a real app, this would clear the history
    console.log('Clearing history...');
  };

  return (
    <div className="h-full p-6">
      <div className="glass-effect rounded-xl p-4 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Historique des conversations</h3>
          <button
            onClick={handleClearHistory}
            className="glass-effect glass-hover rounded-full px-3 py-1.5 text-xs text-white/80 hover:text-white transition-all duration-300"
          >
            <svg className="w-3 h-3 mr-1 inline" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            Effacer
          </button>
        </div>
        <div className="space-y-3 h-full overflow-y-auto pr-2">
          {historyItems.map((item) => (
            <div
              key={item.id}
              className="glass-effect rounded-lg p-3 hover:bg-white/15 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-white/60 text-xs mt-1">{item.summary}</p>
                </div>
                <span className="text-white/40 text-xs">{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
