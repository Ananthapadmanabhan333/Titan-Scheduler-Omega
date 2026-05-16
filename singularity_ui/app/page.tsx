import React from 'react';
import { ComputeMap } from '@/components/ComputeMap';
import { TelemetryPanel } from '@/components/TelemetryPanel';
import { AgentConsole } from '@/components/AgentConsole';
import { InferenceRouting } from '@/components/InferenceRouting';
import { Shield, Brain, Zap, Globe, Cpu, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="p-4 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center neon-border">
              <Zap className="text-black" size={24} />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter flex items-center gap-2">
              TITAN-SCHEDULER <span className="text-[var(--primary)] neon-text">SINGULARITY</span>
            </h1>
            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Autonomous Exascale AI Compute Civilization</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {['Global Map', 'Cluster Observatory', 'Tensor Execution', 'Security Fabric'].map((item) => (
            <button key={item} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[var(--primary)] transition-colors cursor-pointer">
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-500 uppercase">System Integrity</p>
            <p className="text-xs font-bold text-green-500">99.9999% OPTIMAL</p>
          </div>
          <button className="p-2 glass-panel hover:bg-white/10 transition-colors">
            <Shield size={18} className="text-[var(--primary)]" />
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-4 p-4 overflow-hidden">
        
        {/* Main Observatory */}
        <div className="col-span-12 lg:col-span-8 row-span-4 glass-panel relative overflow-hidden">
          <ComputeMap />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="p-3 glass-panel border-r-4 border-[var(--secondary)]">
              <p className="text-[8px] font-bold text-gray-500 uppercase">Cluster Efficiency</p>
              <p className="text-xl font-black">0.985 <span className="text-[8px] text-gray-500">λ</span></p>
            </div>
          </div>
        </div>

        {/* Intelligence Module */}
        <div className="col-span-12 lg:col-span-4 row-span-4 flex flex-col gap-4">
          <div className="flex-1 glass-panel p-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <Brain size={120} />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Layers size={14} className="text-[var(--secondary)]" />
              Infrastructure Cognition
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-black/30 rounded border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Predictive Model</p>
                <p className="text-xs font-bold">Transformer-Based Failure Prediction v4.2</p>
              </div>
              <div className="p-3 bg-black/30 rounded border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Optimization Strategy</p>
                <p className="text-xs font-bold">Reinforcement Learning (PPO) Scheduling</p>
              </div>
              <div className="p-3 bg-black/30 rounded border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Global Health</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
                  </div>
                  <span className="text-[10px] font-bold">98%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-48">
            <InferenceRouting />
          </div>

          <div className="h-48">
            <AgentConsole />
          </div>
        </div>

        {/* Metrics Row */}
        <div className="col-span-12 row-span-2 glass-panel overflow-hidden">
          <TelemetryPanel />
        </div>
      </div>

      {/* Footer Status Bar */}
      <footer className="px-4 py-1 border-t border-white/10 bg-black flex items-center justify-between text-[8px] font-bold tracking-widest text-gray-500 uppercase">
        <div className="flex gap-4">
          <span className="text-[var(--primary)]">● SYNC_STATE: GLOBAL_READY</span>
          <span>● THREADS: 1,024,000</span>
          <span>● RDMA_FABRIC: ACTIVE</span>
        </div>
        <div className="flex gap-4">
          <span>REGION: PLANETARY_FEDERATION</span>
          <span className="text-white">UTC: {new Date().toISOString()}</span>
        </div>
      </footer>
    </div>
  );
}
