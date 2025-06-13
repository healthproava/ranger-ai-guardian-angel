
import { ExternalLink, Clock, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResourcesPanel = () => {
  const resources = [
    {
      category: "Crisis Support",
      urgent: true,
      items: [
        { name: "Veterans Crisis Line", contact: "988, Press 1", available: "24/7" },
        { name: "Crisis Text Line", contact: "Text 838255", available: "24/7" },
        { name: "Crisis Chat", contact: "VeteransCrisisLine.net", available: "24/7" }
      ]
    },
    {
      category: "VA Services",
      items: [
        { name: "VA Medical Centers", contact: "VA.gov/find-locations", available: "Varies" },
        { name: "Benefits Hotline", contact: "1-800-827-1000", available: "Mon-Fri 8am-9pm ET" },
        { name: "GI Bill Hotline", contact: "1-888-442-4551", available: "Mon-Fri 7am-6pm CT" }
      ]
    },
    {
      category: "Local Support",
      items: [
        { name: "Veteran Service Organizations", contact: "Find local VSOs", available: "Varies" },
        { name: "Vet Centers", contact: "VA.gov/find-locations", available: "Varies" },
        { name: "State Veterans Affairs", contact: "Contact your state", available: "Varies" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Quick Resources</h2>
      
      {resources.map((category, index) => (
        <Card key={index} className={category.urgent ? "border-red-200 bg-red-50" : ""}>
          <div className="p-4">
            <h3 className={`font-semibold mb-3 ${category.urgent ? "text-red-900" : "text-gray-900"}`}>
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-900">{item.name}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1">
                        <Phone className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">{item.contact}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">{item.available}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
      
      <Card className="bg-blue-50 border-blue-200">
        <div className="p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Need Human Support?</h3>
          <p className="text-sm text-blue-800 mb-3">
            Connect with a trained veteran advocate for personalized assistance.
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Connect to Human Support
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ResourcesPanel;
