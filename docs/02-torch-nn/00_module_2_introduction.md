---
title: "Module 2 – torch.nn: Building Neural Networks"
description: "Master PyTorch nn.Module and neural network building blocks including layers, activations, embeddings, and normalization techniques."
# Social card customization
image: "assets/images/Logo_purple_cube_transparent.png"
# SEO and metadata
keywords: "PyTorch nn.Module, neural network layers, activations, embeddings, normalization, PyTorch building blocks"
author: "Krzysztof Sopyła"
# Boost this page in search
search:
  boost: 2.0
# Tags for categorization
tags:
  - neural networks
  - intermediate
  - module 2
  - module overview
# Extra metadata for custom use
extra:
  course:
    module: 2
    lesson: 0
    difficulty: intermediate
    estimated_time: "5 min"
  # Open Graph / Social Media specific
  og:
    title: "PyTorch Course | Module 2 – torch.nn Building Blocks | Prof. Torchenstein's Lab"
    type: "article"
  # Structured data - MODULE OVERVIEW PAGE specific
  structured_data:
    type: "Course"
    provider: "Prof. Torchenstein"
    educationalLevel: "Intermediate"
    # Lessons in this module (hasPart) - MODULE INTRO ONLY
    has_part:
      - id: "https://pytorchcourse.com/02-torch-nn/01_nn_module/"
        name: "Building Brains with nn.Module"
        description: "Craft custom neural networks by overriding __init__ and forward methods"
        position: 1
      - id: "https://pytorchcourse.com/02-torch-nn/02_compose_modules/"
        name: "Franken-Stacking Layers"
        description: "Compose modules using Sequential, ModuleList, and ModuleDict"
        position: 2
      - id: "https://pytorchcourse.com/02-torch-nn/03_saving_weights/"
        name: "Preserving Your Monster's Memories"
        description: "Save and load model weights using state_dict"
        position: 3
      - id: "https://pytorchcourse.com/02-torch-nn/04_linear_layer/"
        name: "Linear Layers"
        description: "Master linear transformations and fully connected layers"
        position: 4
      - id: "https://pytorchcourse.com/02-torch-nn/05_activations/"
        name: "Activation Elixirs"
        description: "Explore activation functions: ReLU, GELU, SiLU and their properties"
        position: 5
      - id: "https://pytorchcourse.com/02-torch-nn/06_dropout/"
        name: "Dropout"
        description: "Apply dropout for neural network regularization"
        position: 6
      - id: "https://pytorchcourse.com/02-torch-nn/07_embedding_layers/"
        name: "Embedding Layers"
        description: "Embed discrete tokens into continuous vector spaces"
        position: 7
      - id: "https://pytorchcourse.com/02-torch-nn/08_positional_encoding/"
        name: "Positional Encoding"
        description: "Add positional information to sequence embeddings"
        position: 8
      - id: "https://pytorchcourse.com/02-torch-nn/09_normalization_layers/"
        name: "Normalization Layers"
        description: "Stabilize training with BatchNorm and LayerNorm techniques"
        position: 9
      - id: "https://pytorchcourse.com/02-torch-nn/10_rms_norm/"
        name: "RMS Norm"
        description: "Implement RMSNorm for efficient layer normalization"
        position: 10
      - id: "https://pytorchcourse.com/02-torch-nn/11_training_evaluation_mode/"
        name: "Training vs Evaluation Mode"
        description: "Toggle between train and eval modes for proper model behavior"
        position: 11
      - id: "https://pytorchcourse.com/02-torch-nn/12_loss_functions/"
        name: "Loss Functions"
        description: "Understand and apply loss functions to guide model training"
        position: 12
      - id: "https://pytorchcourse.com/02-torch-nn/13_prepare_inputs_targets/"
        name: "Preparing Inputs & Targets"
        description: "Align logits and labels for effective loss computation"
        position: 13
      - id: "https://pytorchcourse.com/02-torch-nn/14_interpreting_reduction_modes/"
        name: "Interpreting Reduction Modes"
        description: "Master reduction modes and ignore indices in loss calculations"
        position: 14
    # Link to parent course - MODULE INTRO ONLY
    is_part_of:
      type: "Course"
      id: "https://pytorchcourse.com/"
      name: "PyTorch Deep Learning Course"
---

# Module 2 – torch.nn: Building Neural Networks

> "From mere tensors we forge SENTIENT NETWORKS! Witness the birth of computational consciousness!"
>
> — **_Prof. Torchenstein_**

Welcome back, my diligent apprentices! Having mastered the fundamental art of tensor manipulation, you are now ready for the next phase of your transformation: breathing life into neural architectures! In this module, we shall wield `torch.nn` as both scalpel and forge, assembling layers and models worthy of legend! ⚡️🧪

![PyTorch Neural Networks](/assets/images/Logo_purple_cube_transparent.png)

## What Awaits in This Module

In Module 2, we transition from raw tensor operations to the high-level building blocks that make PyTorch a joy to work with:

- **Construct modular architectures** using `nn.Module` as your blueprint
- **Layer upon layer** – from humble linear transformations to exotic normalization techniques
- **Activate with purpose** – ReLU, GELU, SiLU, and their mathematical rationale
- **Encode position and meaning** with embeddings and positional encodings
- **Normalize like a pro** – BatchNorm, LayerNorm, RMSNorm, and when to use each
- **Master the training cycle** – understanding loss functions, training vs. eval modes, and preparing data

## Rebel Mission Checklist 📝

### The nn.Module Blueprint

1. [Building Brains with nn.Module](01_nn_module.ipynb) - Craft custom neural matter by overriding `__init__` and `forward`
2. [Franken-Stacking Layers](02_compose_modules.ipynb) - Bolt modules together with Sequential, ModuleList, and ModuleDict
3. [Preserving Your Monster's Memories](03_saving_weights.ipynb) - Save and resurrect model weights with state_dict necromancy

### Linear Layers and Activations

4. [Linear Layers: The Vector Guillotine](04_linear_layer.ipynb) - Slice through dimensions, turning inputs into finely-chopped activations
5. [Activation Elixirs](05_activations.ipynb) - Re-animate neurons with ReLU, GELU, SiLU, and other zesty potions
6. [Dropout: Neural Regularization](06_dropout.ipynb) - Make neurons forget just enough to generalize

### Embeddings and Positional Encoding

7. [Embedding Layers: Secret Identity Chips](07_embedding_layers.ipynb) - Embed discrete meanings within high-dimensional space
8. [Positional Encoding: Injecting Order](08_positional_encoding.ipynb) - Imbue sequences with a sense of place so attention never loses its bearings

### Normalization Techniques

9. [Normalization: Calming the Beast](09_normalization_layers.ipynb) - Tame activations with BatchNorm and LayerNorm before they explode
10. [RMSNorm & Other Exotic Tonics](10_rms_norm.ipynb) - Sample contemporary concoctions for stable training
11. [Train vs. Eval: Split Personalities](11_training_evaluation_mode.ipynb) - Toggle modes and avoid awkward identity crises

### Loss Functions and Training

12. [Loss Potions: Guiding Pain into Progress](12_loss_functions.ipynb) - Channel model errors into gradients that sharpen intelligence
13. [Preparing Sacrificial Inputs & Targets](13_prepare_inputs_targets.ipynb) - Align logits and labels for maximum learning agony
14. [Reduction Rituals & Ignore Indices](14_interpreting_reduction_modes.ipynb) - Decipher reduction modes and skip unworthy samples

---

With these tools in hand, you will no longer be a mere tensor wrangler—you will be an **architect of intelligence**! The path ahead is electric with possibility. Steel your nerves, charge your GPUs, and prepare for computational glory!

[Begin Your Transformation with nn.Module!](01_nn_module.ipynb){ .md-button .md-button--primary }

