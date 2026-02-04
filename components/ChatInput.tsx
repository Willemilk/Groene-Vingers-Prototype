'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Typ je tuinvraag hier..."
        className="flex-1 bg-white/10 text-white placeholder-white/40 rounded-full px-6 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled || !input.trim()}>
        Verstuur
      </Button>
    </form>
  );
}
