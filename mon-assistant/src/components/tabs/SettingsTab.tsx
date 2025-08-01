import { useState } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
    </label>
  );
}

export function SettingsTab() {
  const [alwaysOnTop, setAlwaysOnTop] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [systemSounds, setSystemSounds] = useState(false);
  const [currentPosition, setCurrentPosition] = useState('Coin supérieur droit');

  const handlePositionChange = () => {
    // In a real app, this would open a position selector
    setCurrentPosition('Coin inférieur gauche');
    console.log('Opening position selector...');
  };

  return (
    <div className="h-full p-6">
      <div className="glass-effect rounded-xl p-4 h-full">
        <h3 className="text-lg font-semibold text-white mb-6">Paramètres</h3>
        <div className="space-y-6 h-full overflow-y-auto pr-2">
          {/* General Settings */}
          <div className="glass-effect rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">Général</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Position de l'assistant</span>
                <button
                  onClick={handlePositionChange}
                  className="glass-effect glass-hover rounded-full px-3 py-1 text-xs text-white/80 hover:text-white transition-all duration-300"
                >
                  {currentPosition}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Toujours au-dessus</span>
                <Toggle checked={alwaysOnTop} onChange={setAlwaysOnTop} />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="glass-effect rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">Notifications</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Notifications push</span>
                <Toggle checked={notifications} onChange={setNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Sons système</span>
                <Toggle checked={systemSounds} onChange={setSystemSounds} />
              </div>
            </div>
          </div>

          {/* Integration Settings */}
          <div className="glass-effect rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">Intégrations</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 8l7.89 7.89a1 1 0 001.42 0L21 7.89V3a1 1 0 00-1-1H4a1 1 0 00-1 1v5z"/>
                  </svg>
                  <span className="text-white/80 text-sm">Email</span>
                </div>
                <span className="text-emerald-400 text-xs">Connecté</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z"/>
                  </svg>
                  <span className="text-white/80 text-sm">Calendrier</span>
                </div>
                <button className="text-white/60 text-xs hover:text-white transition-colors">
                  Configurer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
