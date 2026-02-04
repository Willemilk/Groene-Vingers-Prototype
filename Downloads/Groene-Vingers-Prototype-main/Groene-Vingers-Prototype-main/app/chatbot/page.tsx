'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Card from '@/components/Card';
import FloatingLeaves from '@/components/FloatingLeaves';
import TypingIndicator from '@/components/TypingIndicator';
import { GiFlower, GiPaperPlane } from 'react-icons/gi';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, er is iets misgegaan. Probeer het opnieuw.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-garden p-4">
      <FloatingLeaves count={12} />

      <div className="max-w-5xl mx-auto relative z-10">
        <Header currentPage="chatbot" />

        <Card variant="glass" className="p-6 flex flex-col" hover={false}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white font-playfair text-3xl font-bold mb-2 flex items-center gap-3 text-shadow-garden">
                <GiFlower className="text-garden-flower-pink text-4xl" />
                Tuin Chatbot
              </h1>
              <p className="text-white/80">Stel al je tuinvragen en ontvang direct advies</p>
            </div>
          </div>

          {/* Messages Container */}
          <div className="h-[500px] overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
            {messages.length === 0 && (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <GiFlower className="text-garden-flower-yellow text-8xl mb-6 opacity-50" />
                <h3 className="text-white font-playfair text-2xl font-bold mb-2">
                  Start een gesprek
                </h3>
                <p className="text-white/70 max-w-md">
                  Stel een vraag over plantenverzorging, tuinontwerp, of seizoenstips
                </p>
              </motion.div>
            )}

            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-3xl px-6 py-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-spring text-garden-forest-800 shadow-leaf'
                        : 'glass-panel text-white shadow-garden'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="glass-panel rounded-3xl p-4 flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Typ je tuinvraag hier..."
              className="flex-1 bg-transparent text-white placeholder-white/50 resize-none outline-none min-h-[60px] max-h-[200px]"
              rows={1}
            />
            <motion.button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-spring text-garden-forest-800 rounded-full w-14 h-14 flex items-center justify-center disabled:opacity-50 shadow-leaf hover:shadow-glow-green transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GiPaperPlane className="text-2xl" />
            </motion.button>
          </div>
        </Card>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(124, 179, 66, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(124, 179, 66, 0.7);
        }
      `}</style>
    </div>
  );
}
