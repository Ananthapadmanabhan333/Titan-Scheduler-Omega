import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate a proxy to the FastAPI backend
  const mockTelemetry = {
    throughput: 8421 + Math.random() * 100,
    active_gpus: 982341,
    utilization: 94.2,
    thermal: 42.8,
    status: "SINGULARITY_ACTIVE"
  };
  
  return NextResponse.json(mockTelemetry);
}
