interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  action: () => void;
}

export function QuickActionsTab() {
  const quickActions: QuickAction[] = [
    {
      id: '1',
      title: 'Vérifier Emails',
      description: 'Analyse les emails importants',
      icon: 'M3 8l7.89 7.89a1 1 0 001.42 0L21 7.89V3a1 1 0 00-1-1H4a1 1 0 00-1 1v5z',
      color: 'text-emerald-400',
      action: () => console.log('Checking emails...')
    },
    {
      id: '2',
      title: 'Calendrier',
      description: 'Voir les rendez-vous',
      icon: 'M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z',
      color: 'text-blue-400',
      action: () => console.log('Opening calendar...')
    },
    {
      id: '3',
      title: 'Tâches',
      description: 'Liste des tâches du jour',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-amber-400',
      action: () => console.log('Showing tasks...')
    },
    {
      id: '4',
      title: 'Météo',
      description: 'Prévisions météo',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      color: 'text-orange-400',
      action: () => console.log('Getting weather...')
    },
    {
      id: '5',
      title: 'Analytics',
      description: 'Données d\'usage',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'text-purple-400',
      action: () => console.log('Showing analytics...')
    },
    {
      id: '6',
      title: 'Notes',
      description: 'Créer une note',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      color: 'text-teal-400',
      action: () => console.log('Creating note...')
    }
  ];

  return (
    <div className="h-full p-6">
      <div className="glass-effect rounded-xl p-4 h-full">
        <h3 className="text-lg font-semibold text-white mb-6">Actions Rapides</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-y-auto pr-2">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={action.action}
              className="glass-effect glass-hover rounded-xl p-4 text-left transition-all duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className={`w-6 h-6 ${action.color}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d={action.icon} />
                </svg>
              </div>
              <h4 className="text-white font-medium text-sm">{action.title}</h4>
              <p className="text-white/60 text-xs mt-1">{action.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
