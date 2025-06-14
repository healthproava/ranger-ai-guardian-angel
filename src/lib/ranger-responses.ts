
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

    if (lowerMessage.includes('education') || lowerMessage.includes('gi bill')) {
      return {
        text: "Navigating education benefits like the GI Bill can be complex, but very rewarding. I can help you understand your eligibility, find approved schools with programs like VET TEC, and start the application process. Are you looking to start a new program or continue your education?",
        sender: 'ranger' as const,
        type: 'text' as const,
        resources: [
          {
            title: "VA Education and Training Benefits",
            description: "Official information on the GI Bill and other programs.",
            link: "#"
          },
          {
            title: "VET TEC Program",
            description: "Get training for a high-tech career.",
            link: "#"
          }
        ]
      };
    }

    if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
      return {
        text: "Translating your military skills to the civilian workforce is a key step. I can connect you with career counseling, resume building workshops, and job placement services specifically for veterans. What kind of career field are you interested in?",
        sender: 'ranger' as const,
        type: 'text' as const,
        resources: [
          {
            title: "VA Veteran Readiness and Employment (VR&E)",
            description: "Services to help with job training and employment.",
            link: "#"
          },
          {
            title: "Hiring Our Heroes",
            description: "A nationwide initiative to help veterans and military spouses find jobs.",
            link: "#"
          }
        ]
      };
    }

    if (lowerMessage.includes('family') || lowerMessage.includes('caregiver')) {
      return {
        text: "Family and caregivers are an essential part of a veteran's support system. There are many resources available, from caregiver support programs to benefits for dependents. What kind of support are you looking for?",
        sender: 'ranger' as const,
        type: 'text' as const,
        resources: [
          {
            title: "VA Caregiver Support Program",
            description: "Assistance and support for caregivers of veterans.",
            link: "#"
          },
          {
            title: "CHAMPVA Benefits",
            description: "Healthcare for spouses and children of eligible veterans.",
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
