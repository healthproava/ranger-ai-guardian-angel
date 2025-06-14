import React, { createContext, useState, useContext, ReactNode } from 'react';
import { getRangerResponse } from '@/lib/ranger-responses';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ranger';
  timestamp: Date;
  type: 'text' | 'voice'; // Add type to distinguish messages
  resources?: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

interface ConversationContextType {
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  isVoiceSessionActive: boolean; // Track voice session status
  setVoiceSessionActive: (active: boolean) => void;
  isLoading: boolean;
  sendMessage: (text: string) => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Ranger, your AI companion designed to help veterans and their families navigate benefits, resources, and support. Thank you for your service. How can I help you today?",
      sender: 'ranger',
      timestamp: new Date(),
      type: 'text', // Default to text for initial message
    },
  ]);
  const [isVoiceSessionActive, setVoiceSessionActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (newMessage: Omit<Message, 'id' | 'timestamp'>) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        ...newMessage,
        id: Date.now().toString(),
        timestamp: new Date(),
      },
    ]);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    addMessage({
      text,
      sender: 'user',
      type: 'text',
    });

    setIsLoading(true);

    setTimeout(() => {
      const rangerResponse = getRangerResponse(text);
      addMessage(rangerResponse);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <ConversationContext.Provider value={{ 
      messages, 
      addMessage, 
      isVoiceSessionActive, 
      setVoiceSessionActive,
      isLoading,
      sendMessage 
    }}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversationContext = () => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error('useConversationContext must be used within a ConversationProvider');
  }
  return context;
};
