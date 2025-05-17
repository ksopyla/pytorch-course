
# PyTorch Course: Deconstructing Modern Architectures

Course Goal: To provide a deep and essential understanding of PyTorch building blocks and their practical application in designing, understanding, and implementing modern Transformer and Diffusion-based neural network architectures.


Learner level: Beginner - Advanced



## Module 0: Getting Started with PyTorch

This module ensures learners have a working PyTorch environment and a first taste of its capabilities.

What you will learn:
1. How to setup a PyTorch environment for different operating systems and test it.

### Lessons:

1. [PyTorch Course Structure](pytorch-course-sturcture.md) - this page, course aim and structure, guide through 
2. Setting Up Your PyTorch Environments:
    1.[Setting Up windows dev environment](00-getting-started/windows-pytorch-installation.md) - create a windows dev environment with windows pyenv and poetry, install main dependencies with and without GPU support
    2.[Setting Up linux dev environment](00-getting-started/linux-pytorch-installation.md) - create a Ubuntu dev environment with linux pyenv and poetry, install main dependencies with and without GPU support
    3.[Setting Up macos dev environment](00-getting-started/macos-pytorch-installation.md) - create a macos dev environment with macos pyenv and poetry, install main dependencies with and without GPU support
    4.[Setting Up google colab](00-getting-started/google-colab-setup.md) - create a google colab dev environment with google colab


## Module 1: PyTorch Core - I see tensors everywhere

This module dives into the fundamental components of PyTorch, essential for any deep learning task.

![pytroch tensors everywhere](assets/meme_tensors_everywhere.jpg){width=500 height=300, align=center}

<!-- 
<div align="center">
<img src="assets/meme_tensors_everywhere.jpg" width="500" height="300" alt="pytroch tensors everywhere">
</div>
-->

### 1.1 Tensors: The Building Blocks
What you will learn: 

1. Tensor Concept. What is a tensor? Tensor vs. Matrix. Mathematical vs. PyTorch interpretation. Why tensors are crucial for ML
2. PyTorch Basics: Tensor creation and their attributes (dtype, shape, device).
3. Tensor manipulation: Indexing, Slicing, Joining (torch.cat, torch.stack), Splitting. Manipulating tensor shapes (reshape, view, squeeze, unsqueeze, permute, transpose).

#### 1.1 Lessons:

1. [Introduction to Tensors](01-tensors/01_tensors_intro.ipynb) - Introduction to tensors, their properties, and their importance in machine learning.  Creating tensors (from lists, NumPy, torch.rand, torch.zeros, torch.ones, torch.arange, torch.linspace). How to check their attributes and shapes.
2. [Tensor manipulation](01-tensors/02_tensor_manipulation.ipynb) - Indexing, Slicing, Joining (torch.cat, torch.stack), Splitting. Manipulating tensor shapes (reshape, view, squeeze, unsqueeze, permute, transpose).
3. [Data Types and Devices](01-tensors/05_datatypes_devices.ipynb) - Importance of data types (float32, float16, bfloat16, int64 etc.). CPU vs. GPU computations. Checking and changing dtype. Moving tensors between devices (.to(device), .cpu(), .cuda()). Best practices for mixed-precision training (conceptual introduction). Implications of data types on memory and speed.


### 1.2 Tensor Operations: Computation at Scale
What you will learn:

1. Overview of tensor math. Element-wise operations. Reduction operations (sum, mean, max, min, std). Basic matrix multiplication (torch.mm, torch.matmul, @ operator). Broadcasting: rules and practical examples with verifiable tiny data. In-place operations.

#### 1.2 Lessons:

1. [Tensor Math Operations](01-tensors/02_tensor_basic_computations.ipynb) - Overview of tensor math. Element-wise operations. Reduction operations across dimensions (sum, mean, max, min, std). 

2. [Matrix Multiplication](01-tensors/03_matrix_multiplication.ipynb) - 2D matrix multiplication (torch.mm, torch.matmul, @ operator). Batch matrix multiplication (torch.bmm).
3. [Broadcasting](01-tensors/04_broadcasting.ipynb) - Broadcasting rules with practical examples across different dimensions. Broadcast math operations and vector or matrix multiplications.


### 1.3 Einstein Summation: The Power of einsum
What you will learn:

1. Understanding Einstein notation. Why it's powerful for complex operations (e.g., attention).

#### 1.3 Lessons:

1. [Einstein Summation](01-tensors/03_einstein_summation.ipynb) - Simple einsum examples (vector dot product, matrix multiplication, transpose).
2. [Advanced Einstein Summation](01-tensors/04_advanced_einsum.ipynb) - einsum for more complex operations like batch matrix multiplication, tensor contractions relevant to attention mechanisms. Examples with dimensions mirroring those in Transformers.
   

### 1.4 Autograd: Automatic Differentiation
What you will learn:

1. What are gradients? The computational graph. How PyTorch tracks operations.
2. requires_grad attribute. Performing backward pass with .backward(). Accessing gradients with .grad. torch.no_grad() and tensor.detach().
3. Gradient accumulation. Potential pitfalls. Visualizing computational graphs (conceptually).

#### 1.4 Lessons:

1. [Autograd](01-tensors/04_autograd.ipynb) - What are gradients? The computational graph. How PyTorch tracks operations.
2. [Gradient Accumulation](01-tensors/05_gradient_accumulation.ipynb) - Gradient accumulation. Potential pitfalls. Visualizing computational graphs (conceptually).



## Module 2: torch.nn — Building Neural Networks
This module explores the layer-building API that powers every PyTorch model.

### 2.1 The `nn.Module` Blueprint  

What you will learn:
- The role of `nn.Module` as the base class for layers and models.  
- Implementing `__init__` and `forward`.  
- Registering parameters and buffers.  
- Composing modules with `nn.Sequential`, `nn.ModuleList`, and `nn.ModuleDict`.  
- Saving and restoring weights with `state_dict`.

#### 2.1 Lessons:
1. [`01_nn_module.ipynb`](02-torch-nn/01_nn_module.ipynb) - The role of `nn.Module` as the base class for layers and models.  `__init__` and `forward` methods.
2. [`02_compose_modules.ipynb`](02-torch-nn/02_compose_modules.ipynb) - Composing modules with `nn.Sequential`, `nn.ModuleList`, and `nn.ModuleDict`.
3. [`03_saving_weights.ipynb`](02-torch-nn/03_saving_weights.ipynb) - Saving and restoring weights with `state_dict`.

### 2.2 Linear Layer and Activations  

What you will learn:
- Linear layers and high-dimensional matrix multiplication. 
- What is the role of linear layers in attention mechanisms (query, key, value)?
- Activation functions (ReLU, GELU, SiLU, Tanh, Softmax, etc.).  
- Dropout for regularisation.  

#### 2.2 Lessons:
1. [`02_linear_layer.ipynb`](02-torch-nn/02_linear_layer.ipynb) - Linear layer and high-dimensional matrix multiplication. How the linear layer transforms the input tensor into an output tensor.
2. [`03_activations.ipynb`](02-torch-nn/03_activations.ipynb) - Activation functions (ReLU, GELU, SiLU, Tanh, Softmax, etc.). 
3. [`04_dropout.ipynb`](02-torch-nn/04_dropout.ipynb) - Dropout for regularisation.


### 2.3 Embedding Layers 
What you will learn:
- Embedding layers and their purpose in neural networks.
- Embedding layer implementation from scratch, initialisation, and usage.
- Positional encoding and how it is used to inject order into the model.

#### 2.3 Lessons:
1. [`05_embedding_layers.ipynb`](02-torch-nn/05_embedding_layers.ipynb) - Embedding layers and their purpose in neural networks. Input to embedding layer and how to interpret the output.
2. [`06_positional_encoding.ipynb`](02-torch-nn/06_positional_encoding.ipynb) - Positional encoding and how it is used to inject order into the model.

### 2.4 Normalisation Layers

What you will learn:
- BatchNorm vs. LayerNorm and when to use each.  
- RMSNorm and other modern alternatives.  
- Training vs. evaluation mode caveats.

#### 2.4 Lessons:
1. [`03_normalization_layers.ipynb`](02-torch-nn/03_normalization_layers.ipynb) - what the normalisation layer does and what is the purpose of the normalisation layer. BatchNorm vs. LayerNorm and when to use each.
2. [`04_rms_norm.ipynb`](02-torch-nn/04_rms_norm.ipynb) - RMSNorm and other modern alternatives.
3. [`05_training_evaluation_mode.ipynb`](02-torch-nn/05_training_evaluation_mode.ipynb) - Training vs. evaluation mode caveats.

### 2.5 Loss Functions — Guiding Optimisation  
What you will learn:
- Loss functions recap, the main types of loss functions and when to use each. 
- Prepare inputs and targets for loss functions and outputs interpretation (logits vs. probabilities).  
- Interpreting reduction modes and ignore indices.

#### 2.5 Lessons:
1. [`04_loss_functions.ipynb`](02-torch-nn/04_loss_functions.ipynb) - Loss functions recap, the main types of loss functions and when to use each. 
2. [`05_prepare_inputs_targets.ipynb`](02-torch-nn/05_prepare_inputs_targets.ipynb) - Prepare inputs and targets for loss functions and outputs interpretation (logits vs. probabilities). 
3. [`06_interpreting_reduction_modes.ipynb`](02-torch-nn/06_interpreting_reduction_modes.ipynb) - Interpreting reduction modes and ignore indices.



## Module 3: Training Workflows
Turn static graphs into learning machines by mastering data pipelines, loops, and monitoring tools.



### 3.1 The Training Loop  
What you will learn:
- Anatomy of an epoch: forward → loss → backward → optimiser step.  
- Gradient accumulation & clipping.  
- Building a reusable training engine.

Lessons:
1. [`02_training_loop.ipynb`](03-training-nn/02_training_loop.ipynb)


### 3.2 Optimisers & Schedulers  
What you will learn:
- SGD with momentum, Adam, and AdamW under the hood.  
- Learning-rate scheduling strategies.  
- Weight decay and regularisation.

#### 3.2 Lessons:
1. [`05_optimizers.ipynb`](02-torch-nn/05_optimizers.ipynb) - todo


### 3.3 Datasets & DataLoaders  
What you will learn:
- Implementing custom `Dataset` subclasses.  
- Batching, shuffling and parallel loading with `DataLoader`.  
- Data augmentation pipelines.

#### 3.3 Lessons:
1. [`01_datasets_dataloaders.ipynb`](03-training-nn/01_datasets_dataloaders.ipynb)

### 3.4 Accelerating with GPUs  
What you will learn:
- Device discovery and placement.  
- Moving models and data safely.  
- Mixed-precision training best practices.

#### 3.4 Lessons:
1. [`03_gpu_acceleration.ipynb`](03-training-nn/03_gpu_acceleration.ipynb)



### 3.5 Weight Initialisation  
What you will learn:
- Why initial values matter.  
- Xavier (Glorot), Kaiming, and custom strategies.  

#### 3.5 Lessons:
1. [`06_weight_initialization.ipynb`](02-torch-nn/06_weight_initialization.ipynb) - todo



## Module 4: Deconstructing Transformer Architectures - main building blocks of transformers
From embeddings to multi-head attention, this module builds a Transformer from first principles and explores modern variants.

### 4.2 Various way of injecting Order  - Positional Encoding, Rotary Positional Embeddings (RoPE)

What you will learn:
- Absolute sinusoidal vs. learned embeddings.  
- Relative positional encodings.  
- Rotary Positional Embeddings (RoPE).

Lessons:
1. [`02_positional_embeddings.ipynb`](04-transformers/02_positional_embeddings.ipynb)



### 4.3 Scaled Dot-Product Attention  
What you will learn:
- Query, Key, Value formalism. How to interpret the output of the attention mechanism.
- Self-attention and cross-attention.
- Masking techniques.

Lessons:
1. [`03_attention_mechanism.ipynb`](04-transformers/03_attention_mechanism.ipynb)

### 4.4 Multi-Head Attention  
What you will learn:
- Motivation for multiple heads.  
- Building MHA by projecting Q, K, V.  
- Comparing custom implementation with `nn.MultiheadAttention`.

Lessons:
1. [`04_multi_head_attention.ipynb`](04-transformers/04_multi_head_attention.ipynb)


### 4.5 Other attention implementations
What you will learn:
- Accelerated attention with SDPA - a few pytorch implementations, which to choose?
- Flash Attention - a faster attention mechanism
- Flash Attention 2 - a faster and more memory efficient attention mechanism

#### 4.5 Lessons:
1. [`05_other_attention_implementations.ipynb`](04-transformers/05_other_attention_implementations.ipynb)


### 4.6 Transformer Encoder  
What you will learn:
- Residual connections & Layer Normalisation.  
- Position-wise Feed-Forward Networks.  
- Encoder-decoder attention.

#### 4.6 Lessons:
1. [`06_transformer_encoder.ipynb`](04-transformers/06_transformer_encoder.ipynb)



## Module 5: Advanced PyTorch & Best Practices

### 5.1 PyTorch Hooks – Peeking Inside  
What you will learn:
- PyTorch Hooks - Peeking Inside
- How to use PyTorch Hooks to inspect the inner workings of a model.

#### 5.1 Lessons:
1. [`01_hooks.ipynb`](06-advanced-pytorch/01_hooks.ipynb)

### 5.2 Distributed Training Concepts  
What you will learn:
- Distributed Training Concepts
- How to use PyTorch Distributed Training to train a model on multiple GPUs.

#### 5.2 Lessons:
1. [`02_distributed_training_concepts.ipynb`](06-advanced-pytorch/02_distributed_training_concepts.ipynb)

### 5.3 Model Optimisation – Quantisation & Pruning  
What you will learn:
- Model Optimisation – Quantisation & Pruning
- How to use PyTorch Model Optimisation to quantise and prune a model.

#### 5.3 Lessons:
1. [`03_model_optimization_concepts.ipynb`](06-advanced-pytorch/03_model_optimization_concepts.ipynb)

### 5.4 TorchScript & JIT for Deployment  
What you will learn:
- TorchScript & JIT for Deployment
- How to use PyTorch TorchScript & JIT to deploy a model.

#### 5.4 Lessons:
1. [`04_torchscript_jit.ipynb`](06-advanced-pytorch/04_torchscript_jit.ipynb)

### 5.5 Profiling & Performance Tuning  
What you will learn:
- Profiling & Performance Tuning
- How to use PyTorch Profiling to tune the performance of a model.

#### 5.5 Lessons:
1. [`05_profiling.ipynb`](06-advanced-pytorch/05_profiling.ipynb)


## Module 6 Hugging Face Transformers in Practice


### 6.1 Loading the pre-trained models with `transformers`.  
What you will learn:
- Loading the pre-trained models with `transformers`.  
- Using `AutoModel` and `Trainer` APIs.
- Inference with the pre-trained models.

#### 6.1 Lessons:
1. [`01_huggingface_transformers.ipynb`](05-huggingface-transformers/01_huggingface_transformers.ipynb)


### 6.2 Fine-tuning the pre-trained models.
What you will learn:
- Fine-tuning the pre-trained models.
- Using `Trainer` API. With training loop and trainer API.
- Using `AutoModelForSequenceClassification` and `AutoTokenizer` APIs.

#### 6.2 Lessons:
1. [`02_fine_tuning_transformers.ipynb`](05-huggingface-transformers/02_fine_tuning_transformers.ipynb)
