provider "aws" {
  region = "us-east-1"
}

provider "google" {
  project = "titan-singularity"
  region  = "us-central1"
}

resource "aws_eks_cluster" "singularity_cluster" {
  name     = "titan-singularity-us-east-1"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = [aws_subnet.primary.id]
  }
}

resource "google_container_cluster" "singularity_cluster" {
  name     = "titan-singularity-asia-pacific"
  location = "asia-east1"

  initial_node_count = 100

  node_config {
    guest_accelerator {
      type  = "nvidia-h100-80gb"
      count = 8
    }
  }
}

# Distributed GPU Operator Configuration
resource "kubernetes_manifest" "gpu_operator" {
  manifest = {
    apiVersion = "nvidia.com/v1"
    kind       = "ClusterPolicy"
    metadata = {
      name = "gpu-policy"
    }
    spec = {
      operator = {
        defaultRuntime = "crio"
      }
    }
  }
}
