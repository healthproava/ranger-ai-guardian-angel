
import RangerHeader from "@/components/RangerHeader";
import SafetyBanner from "@/components/SafetyBanner";
import ConversationInterface from "@/components/ConversationInterface";
import QuickActions from "@/components/QuickActions";
import ResourcesPanel from "@/components/ResourcesPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#bcc9d0] bg-opacity-10">
      <RangerHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <SafetyBanner />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main conversation area */}
          <div className="lg:col-span-2 space-y-6">
            <ConversationInterface />
            <QuickActions />
          </div>
          
          {/* Resources sidebar */}
          <div className="lg:col-span-1">
            <ResourcesPanel />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-[#bcc9d0]">
          <div className="text-center text-sm text-[#3f586b]">
            <p className="mb-2">
              Ranger AI is a demonstration platform. Always verify information with official VA sources.
            </p>
            <p>
              This AI assistant does not replace professional medical or legal advice.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
