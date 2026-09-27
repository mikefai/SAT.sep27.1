import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { SidebarNav } from './components/layout/SidebarNav';
import { ArchetypeGuide } from './components/modules/ArchetypeGuide';
import { TrapDetectorEngine } from './components/tools/TrapDetectorEngine';
import { VocabPredictorEngine } from './components/tools/VocabPredictorEngine';
import { CheatSheetDashboard } from './components/dashboard/CheatSheetDashboard';
import { MockExamModule } from './components/modules/MockExamModule';
import { EmergencyProtocolModal } from './components/modals/EmergencyProtocolModal';
import { DisappearingPenCanvas } from './components/tools/DisappearingPenCanvas';
import { ARCHETYPES } from './data/satData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('words-in-context');
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);
  const [completedArchetypes, setCompletedArchetypes] = useState<string[]>([]);
  const [eliminationCount, setEliminationCount] = useState<number>(0);
  const [isPenActive, setIsPenActive] = useState<boolean>(false);

  const handleCompleteArchetype = (id: string) => {
    if (!completedArchetypes.includes(id)) {
      setCompletedArchetypes(prev => [...prev, id]);
    }
  };

  const handleIncrementElimination = () => {
    setEliminationCount(prev => prev + 1);
  };

  const selectedArchetype = ARCHETYPES.find(a => a.id === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      
      {/* Sticky Header */}
      <Header 
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        eliminationCount={eliminationCount}
        isPenActive={isPenActive}
        onTogglePen={() => setIsPenActive(prev => !prev)}
      />

      {/* Main Responsive Workspace */}
      <div className="flex-1 w-full flex flex-col lg:flex-row">
        
        {/* Sidebar Navigation */}
        <SidebarNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          completedArchetypes={completedArchetypes}
        />

        {/* Main Content Area - Full Width */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full min-w-0">
          {selectedArchetype && (
            <ArchetypeGuide
              key={selectedArchetype.id}
              archetype={selectedArchetype}
              onCompleteArchetype={handleCompleteArchetype}
              isCompleted={completedArchetypes.includes(selectedArchetype.id)}
            />
          )}

          {activeTab === 'trap-detector' && (
            <TrapDetectorEngine />
          )}

          {activeTab === 'vocab-predictor' && (
            <VocabPredictorEngine />
          )}

          {activeTab === 'mock-exam' && (
            <MockExamModule />
          )}

          {activeTab === 'cheat-sheet' && (
            <CheatSheetDashboard />
          )}
        </main>
      </div>

      {/* Disappearing Pen Overlay Canvas */}
      <DisappearingPenCanvas
        isActive={isPenActive}
        onToggleActive={() => setIsPenActive(prev => !prev)}
      />

      {/* Sticky Emergency Protocol Modal */}
      <EmergencyProtocolModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

    </div>
  );
}

export default App;
