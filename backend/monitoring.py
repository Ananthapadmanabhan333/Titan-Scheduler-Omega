import random
import time

class GPUCollector:
    def __init__(self):
        self.metrics = [
            "gpu_utilization",
            "vram_utilization",
            "sm_clock",
            "memory_clock",
            "temperature",
            "power_draw",
            "nvlink_bandwidth"
        ]

    def collect(self, gpu_id: int):
        return {
            "gpu_id": gpu_id,
            "timestamp": time.time(),
            "metrics": {
                "gpu_utilization": random.uniform(80, 100),
                "vram_utilization": random.uniform(90, 98),
                "temperature": random.uniform(40, 75),
                "power_draw": random.uniform(250, 450),
                "nvlink_bandwidth": random.uniform(300, 600)  # GB/s
            }
        }

class ExascaleCollector:
    def __init__(self, node_count: int = 1000):
        self.node_count = node_count
        self.collector = GPUCollector()

    def get_cluster_snapshot(self):
        # Simulate a snapshot of an exascale cluster
        return [self.collector.collect(i) for i in range(10)] # Just a sample

collector = ExascaleCollector()
