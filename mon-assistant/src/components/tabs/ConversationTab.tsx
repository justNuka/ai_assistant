import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export function ConversationTab() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Bonjour ! Je suis votre assistant personnel. Comment puis-je vous aider aujourd\'hui ?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { icon: '📧', text: 'Vérifier mes emails importants', action: 'Vérifier mes emails importants' },
    { icon: '🌤️', text: 'Météo', action: 'Quelle est la météo aujourd\'hui ?' },
    { icon: '✅', text: 'Tâches', action: 'Rappel de mes tâches du jour' },
    { icon: '📅', text: 'Calendrier', action: 'Ouvrir mon calendrier' }
  ];

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    const message = inputValue.trim();
    if (message) {
      addMessage(message, true);
      setInputValue('');
      
      // Simulate assistant response
      setTimeout(() => {
        const responses = [
          "Je vais m'occuper de cela tout de suite !",
          "Parfait, laissez-moi vérifier cela pour vous.",
          "C'est fait ! Voici ce que j'ai trouvé.",
          "Je comprends votre demande. Un moment s'il vous plaît."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, false);
      }, 1000);
    }
  };

  const handleSuggestionClick = (action: string) => {
    addMessage(action, true);
    
    // Simulate assistant response based on suggestion
    setTimeout(() => {
      let response = "Je m'occupe de cela maintenant...";
      if (action.includes('email')) {
        response = "J'ai trouvé 3 emails importants qui nécessitent votre attention.";
      } else if (action.includes('météo')) {
        response = "Il fait beau aujourd'hui à Paris : 24°C et ensoleillé. Parfait pour sortir !";
      } else if (action.includes('tâches')) {
        response = "Vous avez 5 tâches prévues aujourd'hui. La réunion équipe est votre priorité.";
      } else if (action.includes('calendrier')) {
        response = "Votre calendrier s'ouvre... Vous avez 2 rendez-vous cet après-midi.";
      }
      addMessage(response, false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex-1 mb-4">
        <div className="glass-effect rounded-xl p-4 h-full flex flex-col">
          <div 
            ref={chatMessagesRef}
            className="flex-1 space-y-4 overflow-y-auto pr-2"
          >
            {messages.map((message) => (
              <div key={message.id} className="animate-slide-up">
                {message.isUser ? (
                  <div className="flex items-start gap-3 justify-end">
                    <div className="glass-effect rounded-2xl rounded-tr-none px-4 py-3 max-w-xs bg-blue-500/20">
                      <p className="text-white text-sm">{message.content}</p>
                    </div>
                    <div className="glass-effect rounded-full p-2 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <div className="glass-effect rounded-full p-2 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zM2 11a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"/>
                      </svg>
                    </div>
                    <div className="glass-effect rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-white text-sm">{message.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Quick Action Suggestions */}
          <div className="border-t border-white/10 pt-4 mt-4">
            <p className="text-white/60 text-sm mb-3">Suggestions d'actions :</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.action)}
                  className="glass-effect glass-hover rounded-full px-3 py-1.5 text-xs text-white/80 hover:text-white transition-all duration-300"
                >
                  <span className="mr-1">{suggestion.icon}</span>
                  {suggestion.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Input Area */}
      <div className="glass-effect rounded-xl p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Demandez-moi quelque chose..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="glass-effect glass-hover rounded-xl px-4 py-2 text-white/80 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
