---
extra:
  course:
    module: 1
    lesson: 0
    difficulty: beginner
    estimated_time: "5 min"
---

# Module 1 – I See Tensors Everywhere 🕶️

> "Behold, fledgling datanauts! The world is naught but tensors awaiting my command — and soon, *yours*! " 
> 
> — **_Prof. Torchenstein_**

Salutations, my brilliant (and delightfully reckless) apprentices! By opening this manuscript you have volunteered to join my clandestine legion of PyTorch adepts. Consider this your official red-pill moment: from today every pixel, every token, every measly click-through rate shall reveal its true form—a multidimensional array begging to be `torch.tensor`-ed … and we shall oblige it with maniacal glee! *Mwahaha!* 🔥🧪

![pytorch tensors everywhere](/assets/images/torchenstein_in_the_lab_blackboard.png)

Over the next notebooks we will:

- Conjure tensors from thin air, coffee grounds, and suspiciously random seeds.
- Shape-shift them with `view`, `reshape`, `squeeze`, `unsqueeze`, `permute` & the occasional dramatic flourish of `einops`.
- Crunch mathematics so ferocious it makes matrix multiplications whimper — and powers mighty Transformers.
- Charm the GPU, dodge gradient explosions 🏃‍♂️💥, and look **diabolically** clever while doing it.

## Rebel Mission Checklist 📝

### Tensors: The Building Blocks
1. [Summoning Your First Tensors](01_introduction_to_tensors.ipynb) - Learn to create tensors from scratch, access their elements and inspect their fundamental properties like shape, type, and device.
2. [Tensor Surgery & Assembly](02a_tensor_manipulation.ipynb) - Master the dark arts of tensor dissection! Slice with surgical precision, fuse separate tensors with `torch.cat` and `torch.stack`, and divide them with `torch.split`. Your scalpel awaits!
3. [Tensor Metamorphosis: Shape-Shifting Mastery](02b_tensor_metamorphosis.ipynb) - Transform tensor forms without altering their essence! Reshape reality with `torch.reshape` and `torch.view`, manipulate dimensions with `squeeze` and `unsqueeze`, expand and replicate data with `expand` and `repeat`, and flatten complex structures into submission.
4. [DTypes & Devices: Choose Your Weapons](03_data_types_and_devices.ipynb) - Understand how to manage data types and move your tensors to the GPU for accelerated computation.

### Tensor Operations: Computation at Scale
5. [Elemental Tensor Alchemy](04_tensor_math_operations.ipynb) - Perform powerful element-wise and reduction operations to transform your tensors.
6. [Matrix Mayhem: Multiply or Perish](05_matrix_multiplication.ipynb) - Unleash the raw power of matrix multiplication, the core of modern neural networks.
7. [Broadcasting: When Dimensions Bow to You](06_broadcasting.ipynb) - Discover the magic of broadcasting, where PyTorch intelligently handles operations on tensors of different shapes.

### Einstein Summation: The Power of einsum
8. [Einstein Summation: Harness the Λ-Power](07_einstein_summation.ipynb) - Wield the elegant `einsum` to perform complex tensor operations with a single, concise command.
9. [Advanced Einsum Incantations](08_advanced_einstein_summation.ipynb) - Combine multiple tensors in arcane `einsum` expressions for operations like batched matrix multiplication.

### Autograd: Automatic Differentiation
10. [Autograd: Ghosts in the Machine (Learning)](09_autograd.ipynb) - Uncover the secrets of automatic differentiation and see how PyTorch automatically computes gradients.
11. [Gradient Hoarding for Grand Spells](10_gradient_accumulation.ipynb) - Learn the technique of gradient accumulation to simulate larger batch sizes and train massive models.

---

Enough talk! The tensors are humming with anticipation. Your first incantation awaits.



<video controls width="100%"  src="/assets/images/torchenstein_coffe_explore_tensors_v2.mp4" title="Professor Torchenstein invites you to explore tensors">
  Your browser does not support the video tag. Please update your browser to view this content.
</video>


[Proceed to the Summoning Ritual!](01_introduction_to_tensors.ipynb){ .md-button .md-button--primary }



