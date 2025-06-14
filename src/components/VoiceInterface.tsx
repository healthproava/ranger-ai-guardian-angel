
// src/components/VoiceInterface.tsx
import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useConversationContext } from '@/contexts/ConversationContext'; // Import useConversationContext

const VoiceInterface = () => {
  const { toast } = useToast();
  // Get addMessage and setVoiceSessionActive from the shared context
  const { addMessage, setVoiceSessionActive } = useConversationContext();
  const [isConnected, setIsConnected] = useState(false); // Local state for immediate button feedback

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setIsConnected(true);
      setVoiceSessionActive(true); // Update shared voice session status
      toast({
        title: "Voice Chat Connected",
        description: "You can now speak with Ranger AI",
      });
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setIsConnected(false);
      setVoiceSessionActive(false); // Update shared voice session status
      toast({
        title: "Voice Chat Ended",
        description: "Voice conversation has been disconnected",
      });
    },
    onMessage: (message) => {
      // This callback receives AI responses (transcript and audio)
      console.log('Received message:', message);
      if (message.message) {
        addMessage({
          text: message.message,
          sender: 'ranger', // Assuming messages from onMessage are AI responses
          type: 'voice',
        });
      }
    },
    onUserSpeech: (text) => {
      // This callback receives the user's speech transcript
      console.log('User spoke:', text);
      if (text) {
        addMessage({
          text: text,
          sender: 'user', // User's speech
          type: 'voice',
        });
      }
    },
    onError: (error) => {
      console.error('Voice chat error:', error);
      setIsConnected(false); // Local state reset
      setVoiceSessionActive(false); // Update shared voice session status on error
      toast({
        title: "Voice Chat Error",
        description: "There was an issue with the voice connection",
        variant: "destructive",
      });
    },
  });

  const startVoiceChat = async () => {
    try {
      const agentId = "agent_01jxbejesxfz081hs8wrx21ky7"; //
      await conversation.startSession({ agentId });
    } catch (error) {
      console.error('Failed to start voice chat:', error);
      toast({
        title: "Connection Failed",
        description: "Could not start voice chat. Please try again.",
        variant: "destructive",
      });
    }
  };

  const endVoiceChat = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error('Failed to end voice chat:', error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-full shadow-lg p-4 border border-[#bcc9d0]">
        {!isConnected ? (
          <Button
            onClick={startVoiceChat}
            className="bg-[#2B8EB8] hover:bg-[#2596be] text-white rounded-full w-16 h-16 flex items-center justify-center"
            size="lg"
          >
            <Mic className="h-6 w-6" />
          </Button>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 px-3 py-2 bg-[#2596be] bg-opacity-20 rounded-full">
              <div className="w-3 h-3 bg-[#2B8EB8] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#3f586b] font-medium">
                {conversation.isSpeaking ? 'Ranger is speaking...' : 'Listening...'}
              </span>
            </div>
            <Button
              onClick={endVoiceChat}
              variant="outline"
              className="rounded-full w-12 h-12 flex items-center justify-center text-[#FF0000] hover:bg-red-50 border-[#bcc9d0]"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
      
      {!isConnected && (
        <div className="mt-2 text-center">
          <p className="text-xs text-[#3f586b]">Click to start voice chat</p>
        </div>
      )}
    </div>
  );
};

export default VoiceInterface;
