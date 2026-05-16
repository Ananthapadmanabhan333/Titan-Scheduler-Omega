'use client';

import React, { useEffect, useState } from 'react';
import { Activity, Zap, Thermometer, Cpu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MetricCard = ({ label, value, unit, icon: Icon, color }: any) => (
  <div className="p-4 glass-panel flex flex-col gap-2 relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: color }} />
    <div className="flex items-center justify-between">
      <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
      <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">{label}</span>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold tracking-tight">{value}</span>
      <span className="text-xs text-gray-400 uppercase">{unit}</span>
    </div>
    <div className="h-1 w-full bg-gray-900 mt-2 rounded-full overflow-hidden">
      <motion.div 
        className="h-full" 
        style={{ backgroundColor: color }}
        initial={{ width: '0%' }}
        animate={{ width: `${Math.min(100, (parseFloat(value)/100)*100)}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

export const TelemetryPanel = () => {
  const [metrics, setMetrics] = useState({
    throughput: '0',
    utilization: '0',
    thermal: '0',
    active_gpus: '1,048,576',
    global_latency: '0'
  });

  useEffect(() => {
    setMetrics({
      throughput: '8,421',
      utilization: '94.2',
      thermal: '42.8',
      active_gpus: '1,048,576',
      global_latency: '1.2'
    });

    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        throughput: (8421 + Math.random() * 50).toFixed(0),
        utilization: (94.2 + Math.random() * 2).toFixed(1),
        thermal: (42.8 + Math.random() * 1).toFixed(1),
        global_latency: (1.2 + Math.random() * 0.1).toFixed(2)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
      <MetricCard label="Global Throughput" value={metrics.throughput} unit="T/s" icon={Zap} color="#00f2ff" />
      <MetricCard label="GPU Utilization" value={metrics.utilization} unit="%" icon={Cpu} color="#7000ff" />
      <MetricCard label="Thermal Index" value={metrics.thermal} unit="°C" icon={Thermometer} color="#ff4d00" />
      <MetricCard label="Active Nodes" value="1.04M" unit="GPUs" icon={Globe} color="#00ff88" />
      <MetricCard label="Global Latency" value={metrics.global_latency} unit="ms" icon={Activity} color="#ff00f2" />
    </div>
  );
};
