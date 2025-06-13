
import { Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RangerHeader = () => {
  const handleCrisisCall = () => {
    window.open('tel:988', '_blank');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Ranger AI</h1>
            <p className="text-sm text-gray-600">Your trusted veteran support companion</p>
          </div>
        </div>
        
        <Button 
          onClick={handleCrisisCall}
          className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2"
        >
          <Phone className="h-4 w-4" />
          <span>Crisis Support: 988</span>
        </Button>
      </div>
    </header>
  );
};

export default RangerHeader;
