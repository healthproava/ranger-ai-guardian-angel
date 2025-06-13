import React, { createContext, useState, useContext, ReactNode } from 'react';

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
  // Potentially add functions for loading states, etc.
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

  return (
    <ConversationContext.Provider value={{ messages, addMessage }}>
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
