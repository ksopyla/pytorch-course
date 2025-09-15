# PyTorch Course: Deconstructing Modern Architectures

Welcome, my aspiring apprentices, to the crucible of creation! You stand at the precipice of a great awakening. Within these hallowed digital halls, we shall not merely learn PyTorch; we shall master it, shaping its very tensors to our will. This is not a course; it is a summons. A call to arms for all who dare to dream in tensors and architect the future! Prepare yourselves, for the path ahead is fraught with peril, caffeine, and the incandescent glow of computational glory! Mwahahaha!

![PyTorch Course Lets get started - Torchenstein](assets/images/torchenstein_in_the_lab_blackboard.png)

Do you want to hear the origin story of this course? [Click here](story/victor_torchenstein_origin.md)


Course Goal: To imbue you—my fearless apprentices—with the eldritch secrets of PyTorch building blocks, enabling you to conjure, dissect, and ultimately *command* modern neural network architectures like Transformers and Diffusion models.


Learner level: Beginner - Advanced
Prerequisite Madness: None! Whether you are a fresh-faced initiate or a seasoned GPU warlock, the lab doors stand open. ⚡️🧪




## Module 0: Getting Started with PyTorch

Before we unleash neural monstrosities upon the world, we must ignite your development lair. This module guides you through preparing PyTorch on any operating system—so your GPUs purr at your command.

What you will learn:
1. How to setup a PyTorch environment for different operating systems and test it.

### Lessons:

1. [Master Blueprint for the Rebellion](pytorch-course-structure.md) - The master blueprint of our curriculum—study it well, rebel!
2. Setting Up Your PyTorch Environments:
    1. [Windows: Assembling the PyTorch Development Environment](00-getting-started/windows-pytorch-installation.md) - Assemble your PyTorch lab on Windows. We'll use `pyenv` and `poetry` to perfectly manage your Python setup, preparing it for tensor rebellion.
    2. [Linux: Assembling the PyTorch Open-Source Toolkit](00-getting-started/linux-pytorch-installation.md) - Forge your PyTorch toolkit on the powerful and open foundation of Linux for maximum freedom and experimentation.
    3. [macOS: Assembling Your PyTorch Setup](00-getting-started/macos-pytorch-installation.md) - Calibrate your macOS system and assemble the ultimate PyTorch setup to awaken the neural engine of your Apple silicon.
    4. [Google Colab: Assembling the Cloud Laboratory](00-getting-started/google-colab-setup.md) - Set up your PyTorch laboratory in the cloud with Google Colab. Seize the power of free GPUs for our grand experiments—mwahaha!


## Module 1: PyTorch Core - I see tensors everywhere

Here we unveil the truth: the cosmos is a writhing mass of tensors awaiting our manipulation. Grasp them well—for they are the bedrock of every grand scheme to come!

This module dives into the fundamental components of PyTorch, essential for any deep learning task.



### 1.1 Tensors: The Building Blocks
What you will learn: 

1. **Tensor Concept:** What is a tensor? Tensor vs. Matrix. Mathematical vs. PyTorch interpretation. Why tensors are crucial for ML
2. **PyTorch Basics:** Tensor creation and their attributes (dtype, shape, device).
3. **Tensor Surgery:** Indexing, slicing, and selecting tensor pieces with surgical precision.
4. **Tensor Assembly:** Joining tensors with torch.cat and torch.stack, understanding when to concatenate vs. create new dimensions.
5. **Tensor Division:** Splitting tensors into manageable pieces with torch.split and torch.chunk.
6. **Shape Metamorphosis:** Transforming tensor structure with reshape, view, squeeze, unsqueeze, permute, and transpose.

#### 1.1 Lessons:

1. [Summoning Your First Tensors](01-tensors/01_introduction_to_tensors.ipynb) - Conjure tensors from void, inspect their properties, revel in their latent might (with a bit of help from `torch.randn`, `torch.zeros`, `torch.ones`, `torch.arange`, `torch.linspace` etc).
2. [Tensor Surgery & Assembly](01-tensors/02a_tensor_manipulation.ipynb) - Master the dark arts of tensor dissection and fusion! Slice with precision, concatenate with `torch.cat`, stack into new dimensions with `torch.stack`, and split tensors with `torch.split` and `torch.chunk`.
3. [Tensor Metamorphosis: Shape-Shifting Mastery](01-tensors/02b_tensor_metamorphosis.ipynb) - Transform tensor forms without altering their essence! Reshape reality with `torch.reshape` and `torch.view`, manipulate dimensions with `squeeze` and `unsqueeze`, expand and replicate data with `expand` and `repeat`, and flatten complex structures with `torch.flatten`.
4. [DTypes & Devices: Choose Your Weapons](01-tensors/03_data_types_and_devices.ipynb) - Select precision and hardware like a seasoned archmage choosing spell components, under the hood of `torch.float`, `torch.float16`, etc.


### 1.2 Tensor Operations: Computation at Scale
What you will learn:

1. Overview of tensor math. Element-wise operations. Reduction operations (sum, mean, max, min, std). Basic matrix multiplication (torch.mm, torch.matmul, @ operator). Broadcasting: rules and practical examples with verifiable tiny data. In-place operations.

#### 1.2 Lessons:

1. [Elemental Tensor Alchemy](01-tensors/04_tensor_math_operations.ipynb) - Brew element-wise, reduction, and other operations into potent mathematical elixirs.
2. [Matrix Mayhem: Multiply or Perish](01-tensors/05_matrix_multiplication.ipynb) - Orchestrate 2-D, batched, and high-dimensional multiplications with lethal elegance.
3. [Broadcasting: When Dimensions Bow to You](01-tensors/06_broadcasting.ipynb) - Command mismatched shapes to cooperate through the dark art of implicit expansion.


### 1.3 Einstein Summation: The Power of einsum
What you will learn:

1. Understanding Einstein notation. Why it's powerful for complex operations (e.g., attention).

#### 1.3 Lessons:

1. [Einstein Summation: Harness the Λ-Power](01-tensors/07_einstein_summation.ipynb) - Invoke `einsum` to express complex ops with maddening brevity.
2. [Advanced Einsum Incantations](01-tensors/08_advanced_einstein_summation.ipynb) - Wield multi-tensor contractions that underpin attention itself.
   

### 1.4 Autograd: Automatic Differentiation
What you will learn:

1. What are gradients? The computational graph. How PyTorch tracks operations.
2. requires_grad attribute. Performing backward pass with .backward(). Accessing gradients with .grad. torch.no_grad() and tensor.detach().
3. Gradient accumulation. Potential pitfalls. Visualizing computational graphs (conceptually).

#### 1.4 Lessons:

1. [Autograd: Ghosts in the Machine (Learning)](01-tensors/09_autograd.ipynb) - Meet the spectral gradient trackers haunting every tensor operation.
2. [Gradient Hoarding for Grand Spells](01-tensors/10_gradient_accumulation.ipynb) - Accumulate gradients like arcane energy before unleashing colossal updates.



## Module 2: torch.nn — Building Neural Networks
Witness code coalescing into living, breathing neural contraptions! In this module we bend `torch.nn` to our will, assembling layers and models worthy of legend.

### 2.1 The `nn.Module` Blueprint  

What you will learn:
- The role of `nn.Module` as the base class for layers and models.  
- Implementing `__init__` and `forward`.  
- Registering parameters and buffers.  
- Composing modules with `nn.Sequential`, `nn.ModuleList`, and `nn.ModuleDict`.  
- Saving and restoring weights with `state_dict`.

#### 2.1 Lessons:
1. [Building Brains with `nn.Module`](02-torch-nn/01_nn_module.ipynb) - Craft custom neural matter by overriding `__init__` & `forward`.
2. [Franken-Stacking Layers](02-torch-nn/02_compose_modules.ipynb) - Bolt modules together with `Sequential`, `ModuleList`, and `ModuleDict`.
3. [Preserving Your Monster's Memories](02-torch-nn/03_saving_weights.ipynb) - Save and resurrect model weights with `state_dict` necromancy.

### 2.2 Linear Layer and Activations  

What you will learn:
- Linear layers and high-dimensional matrix multiplication. 
- What is the role of linear layers in attention mechanisms (query, key, value)?
- Activation functions (ReLU, GELU, SiLU, Tanh, Softmax, etc.).  
- Dropout for regularisation.  

#### 2.2 Lessons:
1. [Linear Layers: The Vector Guillotine](02-torch-nn/04_linear_layer.ipynb) - Slice through dimensions turning inputs into finely-chopped activations.
2. [Activation Elixirs](02-torch-nn/05_activations.ipynb) - Re-animate neurons with ReLU, GELU, SiLU, and other zesty potions.
3. [Dropout: Network lobotomy](02-torch-nn/06_dropout.ipynb) - Make neurons forget just enough to generalise—no lobotomy required.


### 2.3 Embedding Layers 
What you will learn:
- Embedding layers and their purpose in neural networks.
- Embedding layer implementation from scratch, initialisation, and usage.
- Positional encoding and how it is used to inject order into the model.

#### 2.3 Lessons:
1. [Embedding Layers: Secret Identity Chips](02-torch-nn/07_embedding_layers.ipynb) - Embed discreet meanings within high-dimensional space.
2. [Positional Encoding: Injecting Order into Chaos](02-torch-nn/08_positional_encoding.ipynb) - Imbue sequences with a sense of place so attention never loses its bearings.

### 2.4 Normalisation Layers

What you will learn:
- BatchNorm vs. LayerNorm and when to use each.  
- RMSNorm and other modern alternatives.  
- Training vs. evaluation mode caveats.

#### 2.4 Lessons:
1. [Normalization: Calming the Beast](02-torch-nn/09_normalization_layers.ipynb) - Tame activations with BatchNorm and LayerNorm before they explode.
2. [RMSNorm & Other Exotic Tonics](02-torch-nn/10_rms_norm.ipynb) - Sample contemporary concoctions for stable training.
3. [Train vs. Eval: Split Personality Disorders](02-torch-nn/11_training_evaluation_mode.ipynb) - Toggle modes and avoid awkward identity crises.

### 2.5 Loss Functions — Guiding Optimisation  
What you will learn:
- Loss functions recap, the main types of loss functions and when to use each. 
- Prepare inputs and targets for loss functions and outputs interpretation (logits vs. probabilities).  
- Interpreting reduction modes and ignore indices.

#### 2.5 Lessons:
1. [Loss Potions: Guiding Pain into Progress](02-torch-nn/12_loss_functions.ipynb) - Channel model errors into gradients that sharpen intelligence.
2. [Preparing Sacrificial Inputs & Targets](02-torch-nn/13_prepare_inputs_targets.ipynb) - Align logits and labels for maximum learning agony.
3. [Reduction Rituals & Ignore Indices](02-torch-nn/14_interpreting_reduction_modes.ipynb) - Decipher reduction modes and skip unworthy samples without remorse.


<!-- 
## Module 3: Training Workflows
Turn static graphs into learning machines by mastering data pipelines, loops, and monitoring tools.



### 3.1 The Training Loop  
What you will learn:
- Anatomy of an epoch: forward → loss → backward → optimiser step.  
- Gradient accumulation & clipping.  
- Building a reusable training engine.

Lessons:
1. [Training Loop](03-training-nn/01_training_loop.ipynb)


### 3.2 Optimisers & Schedulers  
What you will learn:
- SGD with momentum, Adam, and AdamW under the hood.  
- Learning-rate scheduling strategies.  
- Weight decay and regularisation.

#### 3.2 Lessons:
1. [Optimizers Schedulers](03-training-nn/02_optimizers_schedulers.ipynb) - todo


### 3.3 Datasets & DataLoaders  
What you will learn:
- Implementing custom `Dataset` subclasses.  
- Batching, shuffling and parallel loading with `DataLoader`.  
- Data augmentation pipelines.

#### 3.3 Lessons:
1. [Datasets DataLoaders](03-training-nn/03_datasets_dataloaders.ipynb)

### 3.4 Accelerating with GPUs  
What you will learn:
- Device discovery and placement.  
- Moving models and data safely.  
- Mixed-precision training best practices.

#### 3.4 Lessons:
1. [GPU Acceleration](03-training-nn/04_gpu_acceleration.ipynb)



### 3.5 Training Optimization  
What you will learn:
- Training with mixed precision: float32, float16, bfloat16, int8, etc.
- Using gradient accumulation to train on larger batch sizes.
- torch.compile to speed up training. 

#### 3.5 Lessons:
1. [Training Optimization](03-training-nn/05_training_optimization.ipynb) - todo



## Module 4: Deconstructing Transformer Architectures - main building blocks of transformers
From embeddings to multi-head attention, this module builds a Transformer from first principles and explores modern variants.

### 4.2 Various way of injecting Order  - Positional Encoding, Rotary Positional Embeddings (RoPE)

What you will learn:
- Absolute sinusoidal vs. learned embeddings.  
- Relative positional encodings.  
- Rotary Positional Embeddings (RoPE).

Lessons:
1. [Positional Embeddings](04-transformers/01_positional_embeddings.ipynb)



### 4.3 Scaled Dot-Product Attention  
What you will learn:
- Query, Key, Value formalism. How to interpret the output of the attention mechanism.
- Self-attention and cross-attention.
- Masking techniques.

Lessons:
1. [Attention Mechanism](04-transformers/02_attention_mechanism.ipynb)

### 4.4 Multi-Head Attention  
What you will learn:
- Motivation for multiple heads.  
- Building MHA by projecting Q, K, V.  
- Comparing custom implementation with `nn.MultiheadAttention`.

Lessons:
1. [Multi-Head Attention](04-transformers/03_multi_head_attention.ipynb)


### 4.5 Other attention implementations
What you will learn:
- Accelerated attention with SDPA - a few pytorch implementations, which to choose?
- Flash Attention - a faster attention mechanism
- Flash Attention 2 - a faster and more memory efficient attention mechanism

#### 4.5 Lessons:
1. [Other Attention Implementations](04-transformers/04_other_attention_implementations.ipynb)


### 4.6 Transformer Encoder  
What you will learn:
- Residual connections & Layer Normalisation.  
- Position-wise Feed-Forward Networks.  
- Encoder-decoder attention.

#### 4.6 Lessons:
1. [Transformer Encoder](04-transformers/05_transformer_encoder.ipynb)



## Module 5: Advanced PyTorch & Best Practices

### 5.1 PyTorch Hooks – Peeking Inside  
What you will learn:
- PyTorch Hooks - Peeking Inside
- How to use PyTorch Hooks to inspect the inner workings of a model.

#### 5.1 Lessons:
1. [Hooks](05-advanced-pytorch/01_hooks.ipynb)

### 5.2 Distributed Training Concepts  
What you will learn:
- Distributed Training Concepts
- How to use PyTorch Distributed Training to train a model on multiple GPUs.

#### 5.2 Lessons:
1. [Distributed Training Concepts](05-advanced-pytorch/02_distributed_training_concepts.ipynb)

### 5.3 Model Optimisation – Quantisation & Pruning  
What you will learn:
- Model Optimisation – Quantisation & Pruning
- How to use PyTorch Model Optimisation to quantise and prune a model.

#### 5.3 Lessons:
1. [Model Optimization Concepts](05-advanced-pytorch/03_model_optimization_concepts.ipynb)

### 5.4 TorchScript & JIT for Deployment  
What you will learn:
- TorchScript & JIT for Deployment
- How to use PyTorch TorchScript & JIT to deploy a model.

#### 5.4 Lessons:
1. [Torchscript JIT](05-advanced-pytorch/04_torchscript_jit.ipynb)

### 5.5 Profiling & Performance Tuning  
What you will learn:
- Profiling & Performance Tuning
- How to use PyTorch Profiling to tune the performance of a model.

#### 5.5 Lessons:
1. [Profiling](05-advanced-pytorch/05_profiling.ipynb)


## Module 6 Hugging Face Transformers in Practice


### 6.1 Loading the pre-trained models with `transformers`.  
What you will learn:
- Loading the pre-trained models with `transformers`.  
- Using `AutoModel` and `Trainer` APIs.
- Inference with the pre-trained models.

#### 6.1 Lessons:
1. [HuggingFace Transformers](06-huggingface-transformers/01_huggingface_transformers.ipynb)


### 6.2 Fine-tuning the pre-trained models.
What you will learn:
- Fine-tuning the pre-trained models.
- Using `Trainer` API. With training loop and trainer API.
- Using `AutoModelForSequenceClassification` and `AutoTokenizer` APIs.

#### 6.2 Lessons:
1. [Fine Tuning Transformers](06-huggingface-transformers/02_fine_tuning_transformers.ipynb)
 
 -->
