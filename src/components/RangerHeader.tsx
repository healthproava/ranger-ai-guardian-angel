
import { Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RangerHeader = () => {
  const handleCrisisCall = () => {
    window.open('tel:988', '_blank');
  };

  return (
    <header className="bg-white border-b border-[#bcc9d0] px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-[#2B8EB8]" />
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <img 
                src="/lovable-uploads/2d2ff1fb-a188-4a19-9e69-c90533fe27ed.png" 
                alt="HealthProAssist" 
                className="h-6"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#363643]">Ranger AI</h1>
            <p className="text-sm text-[#3f586b]">Your trusted veteran support companion</p>
          </div>
        </div>
        
        <Button 
          onClick={handleCrisisCall}
          className="bg-[#FF0000] hover:bg-red-700 text-white flex items-center space-x-2"
        >
          <Phone className="h-4 w-4" />
          <span>Crisis Support: 988</span>
        </Button>
      </div>
    </header>
  );
};

export default RangerHeader;
