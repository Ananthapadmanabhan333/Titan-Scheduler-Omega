'use client';

import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'US-E', x: 20, y: 30, status: 'online' },
  { id: 'EU-W', x: 50, y: 20, status: 'online' },
  { id: 'AS-P', x: 80, y: 40, status: 'online' },
  { id: 'US-W', x: 20, y: 70, status: 'busy' },
  { id: 'EU-N', x: 50, y: 60, status: 'online' },
  { id: 'SA-S', x: 40, y: 85, status: 'online' },
];

export const InferenceRouting = () => {
  return (
    <div className="w-full h-full glass-panel p-4 overflow-hidden relative">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Planetary Inference Routing</h3>
      
      <div className="relative w-full h-48 bg-black/40 rounded-lg border border-white/5 overflow-hidden">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {nodes.map((node, i) => (
            nodes.slice(i + 1).map((target, j) => (
              <line 
                key={`${i}-${j}`} 
                x1={`${node.x}%`} y1={`${node.y}%`} 
                x2={`${target.x}%`} y2={`${target.y}%`} 
                stroke="var(--primary)" 
                strokeWidth="0.5" 
              />
            ))
          ))}
        </svg>

        {/* Moving Data Packets */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--primary)] rounded-full blur-[1px]"
              animate={{
                x: [`${nodes[Math.floor(Math.random()*6)].x}%`, `${nodes[Math.floor(Math.random()*6)].x}%`],
                y: [`${nodes[Math.floor(Math.random()*6)].y}%`, `${nodes[Math.floor(Math.random()*6)].y}%`],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Nodes */}
        {nodes.map((node) => (
          <div 
            key={node.id} 
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className={`w-2 h-2 rounded-full ${node.status === 'online' ? 'bg-[var(--primary)]' : 'bg-[var(--accent)]'} neon-border`} />
            <span className="absolute top-3 left-0 text-[6px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {node.id}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-2 bg-black/20 rounded border border-white/5">
          <p className="text-[6px] text-gray-500 uppercase">Routing Latency</p>
          <p className="text-[10px] font-bold text-[var(--primary)]">14ms AVG</p>
        </div>
        <div className="p-2 bg-black/20 rounded border border-white/5">
          <p className="text-[6px] text-gray-500 uppercase">Success Rate</p>
          <p className="text-[10px] font-bold text-green-500">99.998%</p>
        </div>
      </div>
    </div>
  );
};
