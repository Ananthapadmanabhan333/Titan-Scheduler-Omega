'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Brain, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
  { id: 1, type: 'info', agent: 'ORION', message: 'Analyzing global tensor routing topology...' },
  { id: 2, type: 'warn', agent: 'IGNIS', message: 'Thermal spike detected in cluster region-us-east-1. Migrating workloads.' },
  { id: 3, type: 'success', agent: 'MNEMOSYNE', message: 'Distributed KV cache synchronized successfully (4.2 PB/s).' },
  { id: 4, type: 'info', agent: 'SECURITY', message: 'Zero-trust compute verification completed for tenant-omega-7.' },
  { id: 5, type: 'info', agent: 'ORION', message: 'Speculative decoding enabled for Llama-4-1T inference pipeline.' },
  { id: 6, type: 'success', agent: 'IGNIS', message: 'Energy-aware scheduling reduced global consumption by 14%.' },
];

export const AgentConsole = () => {
  const [activeLogs, setActiveLogs] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveLogs(LOGS.slice(0, 3).map(l => ({ ...l, timestamp: new Date().toLocaleTimeString([], { hour12: false }) })));
    
    const interval = setInterval(() => {
      const randomLog = LOGS[Math.floor(Math.random() * LOGS.length)];
      setActiveLogs(prev => [...prev.slice(-10), { 
        ...randomLog, 
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString([], { hour12: false })
      }]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeLogs]);

  return (
    <div className="h-full glass-panel flex flex-col overflow-hidden border-t-2 border-[var(--primary)]">
      <div className="p-3 bg-black/40 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[var(--primary)]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Autonomous Infrastructure Brain</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] text-gray-400 uppercase">Reasoning Active</span>
        </div>
      </div>
      
      <div ref={scrollRef} className="flex-1 p-4 font-mono text-[10px] space-y-2 overflow-y-auto scrollbar-hide">
        <AnimatePresence initial={false}>
          {activeLogs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-3 border-l border-white/5 pl-2 py-1 hover:bg-white/5 transition-colors"
            >
              <span className="text-gray-600">[{log.timestamp}]</span>
              <span className={`font-bold ${
                log.agent === 'IGNIS' ? 'text-[var(--accent)]' : 
                log.agent === 'ORION' ? 'text-[var(--primary)]' : 
                'text-[var(--secondary)]'
              }`}>{log.agent}</span>
              <span className="text-gray-300">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="p-2 bg-black/20 text-[8px] text-gray-600 flex justify-between">
        <span>AGENT_POOL: 14_ACTIVE</span>
        <span>LATENCY: 0.12ms</span>
      </div>
    </div>
  );
};
