
import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const VoiceInterface = () => {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  
  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setIsConnected(true);
      toast({
        title: "Voice Chat Connected",
        description: "You can now speak with Ranger AI",
      });
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setIsConnected(false);
      toast({
        title: "Voice Chat Ended",
        description: "Voice conversation has been disconnected",
      });
    },
    onMessage: (message) => {
      console.log('Received message:', message);
    },
    onError: (error) => {
      console.error('Voice chat error:', error);
      toast({
        title: "Voice Chat Error",
        description: "There was an issue with the voice connection",
        variant: "destructive",
      });
    },
  });

  const startVoiceChat = async () => {
    try {
      // You'll need to get your agent ID from ElevenLabs dashboard
      const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
      
      if (!agentId) {
        toast({
          title: "Configuration Error",
          description: "ElevenLabs agent ID not configured",
          variant: "destructive",
        });
        return;
      }

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
      <div className="bg-white rounded-full shadow-lg p-4 border border-gray-200">
        {!isConnected ? (
          <Button
            onClick={startVoiceChat}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center"
            size="lg"
          >
            <Mic className="h-6 w-6" />
          </Button>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 font-medium">
                {conversation.isSpeaking ? 'Ranger is speaking...' : 'Listening...'}
              </span>
            </div>
            <Button
              onClick={endVoiceChat}
              variant="outline"
              className="rounded-full w-12 h-12 flex items-center justify-center text-red-600 hover:bg-red-50"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
      
      {!isConnected && (
        <div className="mt-2 text-center">
          <p className="text-xs text-gray-600">Click to start voice chat</p>
        </div>
      )}
    </div>
  );
};

export default VoiceInterface;
