
import { AlertTriangle, Phone, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SafetyBanner = () => {
  return (
    <Card className="bg-red-50 border-[#FF0000] border-opacity-30 p-4 mb-6">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="h-5 w-5 text-[#FF0000] mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-[#363643] mb-2">Crisis Support Available 24/7</h3>
          <p className="text-[#3f586b] mb-3">
            If you are in crisis or having thoughts of suicide, immediate help is available:
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="tel:988" 
              className="inline-flex items-center space-x-2 bg-[#FF0000] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call 988, Press 1</span>
            </a>
            <a 
              href="sms:838255" 
              className="inline-flex items-center space-x-2 bg-[#FF0000] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Text 838255</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SafetyBanner;
