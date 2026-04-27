import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { askIntelligence } from '../services/aiService';
import { Terminal, Send, X, Bot, ChevronUp, ChevronDown, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export const IntelligenceConsole: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'ADSI INITIALIZED. STRATEGIC_MODE: ACTIVE. HOW CAN I ASSIST YOUR VISION?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await askIntelligence(userMessage);
      setMessages(prev => [...prev, { role: 'ai', text: response || 'COMMUNICATION_ERROR // RETRY_LINK' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'ERROR: KEY_MISSING_OR_INVALID. PLEASE CONFIGURE ENVIRONMENT.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-12 right-12 z-[60] font-sans flex flex-col items-end">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-black text-white border-4 border-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
          >
            <Bot size={32} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-2 -left-2 bg-white text-black text-[8px] font-black px-1 border border-black">AI_ON</div>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            className="w-[320px] md:w-[400px] bg-white border-4 border-black shadow-[-20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal size={18} className="text-gray-400" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Strategic_AI // Console</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:text-gray-300 transition-colors"
                >
                  {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-red-500 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            {!isMinimized && (
              <div className="flex-grow flex flex-col overflow-hidden bg-gray-50/50">
                <div 
                  ref={scrollRef}
                  className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth"
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: msg.role === 'ai' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={i}
                      className={`flex flex-col ${msg.role === 'ai' ? 'items-start' : 'items-end'}`}
                    >
                      <div className={`
                        max-w-[85%] p-4 text-[11px] font-bold uppercase tracking-tight
                        ${msg.role === 'ai' 
                          ? 'bg-black text-white border-l-8 border-gray-600' 
                          : 'bg-white text-black border-4 border-black'}
                      `}>
                        {msg.text}
                      </div>
                      <span className="text-[8px] font-black text-gray-300 mt-1 uppercase">
                        {msg.role === 'ai' ? 'System_ADSI' : 'User_Operator'}
                      </span>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2 text-black animate-pulse p-4">
                      <Loader2 className="animate-spin" size={14} />
                      <span className="text-[10px] font-black uppercase">Analysing_Data_Streams...</span>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <form 
                  onSubmit={handleSubmit}
                  className="p-4 border-t-4 border-black bg-white flex items-center gap-4"
                >
                  <input
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="QUERY SYSTEM..."
                    className="flex-grow bg-transparent text-xs font-black uppercase tracking-widest focus:outline-none placeholder:text-gray-300"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="p-2 bg-black text-white hover:scale-110 transition-transform active:scale-95 disabled:opacity-50"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}

            {/* Minimized Quick Info */}
            {isMinimized && (
              <div className="p-4 flex items-center justify-between group cursor-pointer" onClick={() => setIsMinimized(false)}>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                  System.Status // Online
                </span>
                <span className="text-[10px] font-bold text-black border border-black px-2 animate-pulse">
                  NEURAL_LINK_ESTABLISHED
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
