// src/components/ConversationInterface.tsx
import { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2, Phone, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { useConversation } from '@11labs/react';
import { useConversationContext } from '@/contexts/ConversationContext';

const ConversationInterface = () => {
  const { messages, addMessage, isVoiceSessionActive, setVoiceSessionActive, isLoading, sendMessage } = useConversationContext();
  const [inputText, setInputText] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setIsConnected(true);
      setVoiceSessionActive(true);
      toast({
        title: "Voice Chat Connected",
        description: "You can now speak with Ranger AI",
      });
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setIsConnected(false);
      setVoiceSessionActive(false);
      toast({
        title: "Voice Chat Ended",
        description: "Voice conversation has been disconnected",
      });
    },
    onMessage: (message) => {
      console.log('Received message:', message);
      if (message.message) {
        addMessage({
          text: message.message,
          sender: 'ranger',
          type: 'voice',
        });
      }
    },
    onUserSpeech: (text) => {
      console.log('User spoke:', text);
      if (text) {
        addMessage({
          text: text,
          sender: 'user',
          type: 'voice',
        });
      }
    },
    onError: (error) => {
      console.error('Voice chat error:', error);
      setIsConnected(false);
      setVoiceSessionActive(false);
      toast({
        title: "Voice Chat Error",
        description: "There was an issue with the voice connection",
        variant: "destructive",
      });
    },
  });

  const startVoiceChat = async () => {
    try {
      const agentId = "agent_01jxbejesxfz081hs8wrx21ky7";
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

  const handleSendMessage = () => {
    sendMessage(inputText);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col border-[#bcc9d0]">
      <div className="p-4 border-b bg-[#bcc9d0] bg-opacity-20">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#363643]">Conversation with Ranger</h3>
          <div className="flex items-center space-x-2">
            {!isConnected ? (
              <Button
                onClick={startVoiceChat}
                variant="outline"
                size="sm"
                className="border-[#bcc9d0]"
              >
                <Mic className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 px-2 py-1 bg-[#2596be] bg-opacity-20 rounded">
                  <div className="w-2 h-2 bg-[#2B8EB8] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#3f586b] font-medium">
                    {conversation.isSpeaking ? 'Speaking...' : 'Listening...'}
                  </span>
                </div>
                <Button
                  onClick={endVoiceChat}
                  variant="outline"
                  size="sm"
                  className="text-[#FF0000] hover:bg-red-50 border-[#bcc9d0]"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="border-[#bcc9d0]">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#363643]">How to use Voice Chat</h4>
                  <div className="space-y-2 text-sm text-[#3f586b]">
                    <div className="flex items-start space-x-2">
                      <Mic className="h-4 w-4 mt-0.5 text-[#2B8EB8]" />
                      <span>Click the microphone button to start voice conversation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Volume2 className="h-4 w-4 mt-0.5 text-[#2B8EB8]" />
                      <span>Speak naturally - Ranger will respond with voice and text</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Phone className="h-4 w-4 mt-0.5 text-[#FF0000]" />
                      <span>Click the phone button to end the voice session</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#3f586b]">
                      You can switch between typing and voice at any time. All messages appear in the conversation history.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Button variant="outline" size="sm" className="border-[#bcc9d0]">
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-[#2B8EB8] text-white'
                    : 'bg-[#bcc9d0] bg-opacity-30 text-[#363643]'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                {message.resources && (
                  <div className="mt-3 space-y-2">
                    {message.resources.map((resource, index) => (
                      <div key={index} className="bg-white bg-opacity-20 p-2 rounded border border-[#2596be]">
                        <h4 className="font-medium text-sm">{resource.title}</h4>
                        <p className="text-xs opacity-90">{resource.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-xs opacity-70 mt-1 flex items-center gap-1">
                  {message.type === 'voice' && <Mic className="h-3 w-3" />}
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#bcc9d0] bg-opacity-30 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#3f586b] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#3f586b] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-[#3f586b] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>
      
      <div className="p-4 border-t border-[#bcc9d0]">
        <div className="flex space-x-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here... (or use voice)"
            className="flex-1 border-[#bcc9d0]"
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputText.trim() || isLoading}
            className="bg-[#2B8EB8] hover:bg-[#2596be]"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ConversationInterface;
