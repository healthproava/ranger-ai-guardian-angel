import { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ranger';
  timestamp: Date;
  resources?: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

const ConversationInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Ranger, your AI companion designed to help veterans and their families navigate benefits, resources, and support. Thank you for your service. How can I help you today?",
      sender: 'ranger',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRangerResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('disability') || lowerMessage.includes('claim')) {
      return {
        id: Date.now().toString(),
        text: "I can definitely help you with disability claims. The process can seem overwhelming, but I'll guide you through it step by step. To get started, I'll need to know: Are you filing a new claim, or do you need help with an existing one? Also, do you have your DD-214 and medical records ready?",
        sender: 'ranger',
        timestamp: new Date(),
        resources: [
          {
            title: "VA Form 21-526EZ",
            description: "Application for Disability Compensation",
            link: "#"
          },
          {
            title: "Evidence Checklist",
            description: "Documents you'll need for your claim",
            link: "#"
          }
        ]
      };
    }
    
    if (lowerMessage.includes('sleep') || lowerMessage.includes('ptsd') || lowerMessage.includes('mental')) {
      return {
        id: Date.now().toString(),
        text: "I'm sorry you're struggling with this. Sleep issues and mental health challenges are very common among veterans, and you're not alone. Would you like me to share some immediate coping strategies, connect you with mental health resources, or help you find a VA mental health provider? Remember, if you're in crisis, please call 988 and press 1.",
        sender: 'ranger',
        timestamp: new Date(),
        resources: [
          {
            title: "PTSD Coach App",
            description: "Free mobile app for managing PTSD symptoms",
            link: "#"
          },
          {
            title: "VA Mental Health Services",
            description: "Find mental health support near you",
            link: "#"
          }
        ]
      };
    }
    
    if (lowerMessage.includes('housing') || lowerMessage.includes('home') || lowerMessage.includes('rent')) {
      return {
        id: Date.now().toString(),
        text: "Housing stability is crucial, and there are several programs designed to help veterans. I can help you explore options like HUD-VASH vouchers, Supportive Services for Veteran Families (SSVF), or VA home loans. What's your current housing situation, and what kind of assistance would be most helpful?",
        sender: 'ranger',
        timestamp: new Date(),
        resources: [
          {
            title: "HUD-VASH Program",
            description: "Housing vouchers for homeless veterans",
            link: "#"
          },
          {
            title: "VA Home Loans",
            description: "No down payment loans for veterans",
            link: "#"
          }
        ]
      };
    }
    
    return {
      id: Date.now().toString(),
      text: "I understand. That's a great question, and I'm here to help you find the right resources and support. Can you tell me a bit more about what specific area you'd like assistance with? I can help with VA benefits, mental health resources, housing assistance, education benefits, or connecting you with local veteran services.",
      sender: 'ranger',
      timestamp: new Date(),
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const rangerResponse = getRangerResponse(inputText);
      setMessages(prev => [...prev, rangerResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    console.log(isListening ? 'Stopped listening' : 'Started listening');
  };

  return (
    <Card className="h-[600px] flex flex-col border-[#bcc9d0]">
      <div className="p-4 border-b bg-[#bcc9d0] bg-opacity-20">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#363643]">Conversation with Ranger</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleListening}
              className={`border-[#bcc9d0] ${isListening ? 'bg-red-100 border-[#FF0000]' : ''}`}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
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
                <p className="text-xs opacity-70 mt-1">
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
