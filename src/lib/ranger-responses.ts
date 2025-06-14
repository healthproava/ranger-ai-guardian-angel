
export const getRangerResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('disability') || lowerMessage.includes('claim')) {
      return {
        text: "I can definitely help you with disability claims. The process can seem overwhelming, but I'll guide you through it step by step. To get started, I'll need to know: Are you filing a new claim, or do you need help with an existing one? Also, do you have your DD-214 and medical records ready?",
        sender: 'ranger' as const,
        type: 'text' as const,
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
        text: "I'm sorry you're struggling with this. Sleep issues and mental health challenges are very common among veterans, and you're not alone. Would you like me to share some immediate coping strategies, connect you with mental health resources, or help you find a VA mental health provider? Remember, if you're in crisis, please call 988 and press 1.",
        sender: 'ranger' as const,
        type: 'text' as const,
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
        text: "Housing stability is crucial, and there are several programs designed to help veterans. I can help you explore options like HUD-VASH vouchers, Supportive Services for Veteran Families (SSVF), or VA home loans. What's your current housing situation, and what kind of assistance would be most helpful?",
        sender: 'ranger' as const,
        type: 'text' as const,
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
      text: "I understand. That's a great question, and I'm here to help you find the right resources and support. Can you tell me a bit more about what specific area you'd like assistance with? I can help with VA benefits, mental health resources, housing assistance, education benefits, or connecting you with local veteran services.",
      sender: 'ranger' as const,
      type: 'text' as const,
    };
  };
