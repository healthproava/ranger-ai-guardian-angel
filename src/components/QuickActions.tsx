
import { FileText, Brain, Home, GraduationCap, Briefcase, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  const actions = [
    {
      icon: FileText,
      title: "File a Disability Claim",
      description: "Get help with VA Form 21-526EZ",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Access counseling and PTSD resources",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Home,
      title: "Housing Assistance",
      description: "Explore HUD-VASH and home loans",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Education Benefits",
      description: "Use your GI Bill and VET TEC",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Briefcase,
      title: "Career Services",
      description: "Job placement and skill translation",
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Resources for families and caregivers",
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600"
    }
  ];

  const handleActionClick = (title: string) => {
    console.log(`Selected action: ${title}`);
    // In a real implementation, this would trigger the conversation with a specific topic
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">How can I help you today?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Card 
            key={index} 
            className={`${action.color} cursor-pointer hover:shadow-md transition-shadow`}
            onClick={() => handleActionClick(action.title)}
          >
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <action.icon className={`h-6 w-6 ${action.iconColor} mt-1`} />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
