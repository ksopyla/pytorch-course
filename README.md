# ⚡ The Free Open Source PyTorch Course
### *Taught by Professor Victor py Torchenstein*

<div align="center">

![Professor Torchenstein in his Lab](docs/assets/images/torchenstein_in_the_lab_blackboard.png)

**🧪 Master PyTorch from Tensors to Transformers 🧪**

*"They called me mad! And they were right! Madly efficient at PyTorch!"* — Professor Torchenstein

[![Course Website](https://img.shields.io/badge/🌐%20Course-pytorchcourse.com-purple?style=for-the-badge)](https://pytorchcourse.com)
[![GitHub stars](https://img.shields.io/github/stars/ksopyla/pytorch-course?style=for-the-badge&logo=github&color=yellow)](https://github.com/ksopyla/pytorch-course/stargazers)
[![License Code](https://img.shields.io/badge/License-Apache%202.0-blue?style=for-the-badge)](LICENSE-CODE)
[![License Assets](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-blue?style=for-the-badge)](LICENSE-ASSETS)



</div>

### 🧪 Meet Your Eccentric Mentor

![Victor Torchenstein in his laboratory](docs/assets/images/torchenstein_working_computer.png)

**Professor Victor Py Torchenstein** — brilliant, slightly unhinged genius with Einstein-esque hair (often singed from GPU experiments) and a perpetually coffee-stained lab coat. His laboratory buzzes with overclocked GPUs, Tesla coils, and cascading matrix displays that would make Neo jealous.

**His Mission:** Like a modern Prometheus, he's stealing the fire of PyTorch mastery from academic and corporate gatekeepers to give it freely to you. He sees tensors not just as arrays, but as the building blocks of computational consciousness itself.

> *"They called me mad! And they were right! Madly efficient at PyTorch!"*

**[📖 Read His Full Origin Story →](https://pytorchcourse.com/story/victor_torchenstein_origin/)**

---

## 🎯 What Makes This Course Special?

> **"Forget world peace, we're aiming for world computation!"**

This isn't just another PyTorch tutorial. It's a **deep dive into the building blocks** of modern AI, taught with humor, precision, and a touch of mad scientist flair. Whether you want to understand Transformers, build your own architectures, or just make tensors bend to your will—you've found your laboratory! 

### 🔬 Why Professor Torchenstein Created This Course:

- **🧠 Deep Understanding**: Move beyond copy-paste tutorials to truly *understand* how PyTorch works
- **🌍 Open Science**: Free, transparent, and accessible knowledge for everyone
- **⚡ Real-World Ready**: Progress from simple examples to production-scale implementations
- **🎭 Actually Fun**: Learn complex concepts through humor, analogies, and engaging storytelling

<div align="center">
  
![Torchenstein exploring tensors](docs/assets/images/torchenstein_coffe_explore_tensors.gif)

*Professor Torchenstein exploring the tensor dimension*

</div>

---

## 📢 **Latest Announcements**

| Date | Update | Status |
|------|--------|---------|
| **In Progress** | 🚧 **Tensor Metamorphosis & Data Types** | Working on `02b_tensor_metamorphosis` + `03_data_types_and_devices` |
| 2025-09-07 | 🎯 **2 Core Tensor Lessons Complete!** | [`01_introduction_to_tensors`](https://pytorchcourse.com/01-tensors/01_introduction_to_tensors/) & [`02a_tensor_manipulation`](https://pytorchcourse.com/01-tensors/02a_tensor_manipulation/) |

📋 **[View Complete Course Roadmap →](https://pytorchcourse.com/pytorch-course-structure/)** *(All 41+ planned lessons with detailed descriptions)*

> **🔥 Why Follow This Course**: Each lesson includes production-ready code, real-world examples (multi-head attention, CLIP-style fusion, RGB processing), and hands-on challenges. **Star ⭐ this repo to get notified when new lessons drop!**

---

## 🗺️ Course Curriculum: From Zero to Neural Network Hero

### 🎓 **Perfect for:**
- **Beginners**: With Python & linear algebra basics who want deep understanding
- **Intermediate**: Developers ready to build custom architectures  
- **Advanced**: Researchers who need to implement cutting-edge papers

### 📚 **6 Comprehensive Modules:**

| Module | Status | What You'll Master | Lessons Complete | Key Concepts |
|--------|--------|-------------------|------------------|--------------|
| **🔥 00: Getting Started** | 🚧 **In Progress** | Environment setup across all platforms | 5 guides | PyTorch installation, GPU setup |
| **⚡ 01: Tensor Mastery** | 🚧 **In Progress** | The foundation of everything | 2/10 lessons | Creation, manipulation, autograd, einsum |
| **🧠 02: Neural Networks** | 📋 **Planned** | Building blocks of intelligence | 0/14 lessons | nn.Module, layers, loss functions |
| **🚀 03: Training Workflows** | 📋 **Planned** | From data to deployed models | 0/5 lessons | Training loops, optimization, GPU acceleration |
| **🤖 04: Transformers** | 📋 **Planned** | Deconstruct the architecture that changed AI | 0/5 lessons | Attention, multi-head attention, positional encoding |
| **⚗️ 05: Advanced PyTorch** | 📋 **Planned** | Professional-grade techniques | 0/5 lessons | Hooks, distributed training, optimization |
| **🤗 06: HuggingFace Integration** | 📋 **Planned** | Work with real-world models | 0/2 lessons | Pre-trained models, fine-tuning |

**✅ 2 Complete Lessons • 🚧 4 In Progress • 📋 35+ Planned**

---

## 🚀 Quick Start: Jump Into the Lab!

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/ksopyla/pytorch-course.git
cd pytorch-course
```

### 2️⃣ **Set Up Your Environment** 
Choose your platform and follow the guide:
- 🪟 [Windows Setup](https://pytorchcourse.com/00-getting-started/windows-pytorch-installation/)
- 🐧 [Linux Setup](https://pytorchcourse.com/00-getting-started/linux-pytorch-installation/)  
- 🍎 [macOS Setup](https://pytorchcourse.com/00-getting-started/macos-pytorch-installation/)
- ☁️ [Google Colab](https://pytorchcourse.com/00-getting-started/google-colab-setup/) (No setup required!)

### 3️⃣ **Start Your First Lesson**
```bash
# Install only the main (non-dev) dependencies
poetry install --only main

# Activate the environment
poetry shell

# Open your first Jupyter notebook (Module 1: Tensors)
jupyter lab docs/01-tensors/01_introduction_to_tensors.ipynb
```

**🎯 Ready to dive deeper?** Continue with [`02a_tensor_manipulation.ipynb`](docs/01-tensors/02a_tensor_manipulation.ipynb) to master tensor surgery & assembly!


---

## 🏗️ Project Structure

```
pytorch-course/
├── docs/                          # Course content
│   ├── 00-getting-started/        # Environment setup guides  
│   ├── 01-tensors/                # Tensor fundamentals (10 lessons)
│   ├── 02-torch-nn/               # Neural network building blocks (14 lessons)
│   ├── 03-training-nn/            # Training workflows (5 lessons)
│   ├── 04-transformers/           # Transformer architecture (5 lessons) 
│   ├── 05-advanced-pytorch/       # Advanced techniques (5 lessons)
│   ├── 06-huggingface-transformers/ # Real-world applications (2 lessons)
│   ├── pytorch-course-structure.md # 📋 Complete curriculum & lesson descriptions
│   └── assets/                    # Images, CSS, and other resources
├── mkdocs.yml                     # Website configuration
├── pyproject.toml                 # Dependencies managed with Poetry
└── README.md                      # You are here! 🎯
```

**2 Complete Lessons + 4 In Development** • **Production-Ready Code** • **Comprehensive Examples**

---

## 🌟 What Early Learners Are Saying

> *"Just finished the first tensor lesson - the progression from basic concepts to real-world multi-head attention examples is incredible. This is exactly what I needed to understand how transformers actually work!"* 

> *"Professor Torchenstein's 'tensor surgery' lesson taught me more about PyTorch manipulation in 20 minutes than other tutorials did in hours. The real-world examples like RGB channel separation are brilliant!"*

> *"The course shows actual production code patterns, not just toy examples. The CLIP-style fusion exercise was a game-changer for understanding multimodal AI."*

---

## 🤝 Join the Community

### 💫 **Our Values**
- **🔍 Curiosity**: Always ask "why" and "what if"
- **💡 Creativity**: Blend techniques, explore new ideas
- **🌍 Openness**: Transparent, honest, barrier-free knowledge sharing

### 🎯 **How You Can Contribute**

We welcome contributions from fellow tensor enthusiasts! Here's how:

1. **⭐ Star this repository** if you find it helpful
2. **🍴 Fork and improve** lessons, fix bugs, add examples  
3. **💬 Join discussions** in [Issues](https://github.com/ksopyla/pytorch-course/issues)
4. **📝 Share your experience** - tweet about your learning journey
5. **🐛 Report bugs** or suggest improvements

**Contributing Guidelines:**
- 📢 Check the [Latest Announcements](#📢-latest-announcements) section to see what's currently being developed
- Check existing [issues](https://github.com/ksopyla/pytorch-course/issues) before creating new ones
- Follow the existing code style and lesson format
- Add tests for new code examples
- All contributions must maintain the educational and fun tone

---

## 🛠️ Technical Details

### **Built With:**
- **📖 MkDocs + Material Theme**: Beautiful, searchable documentation
- **📓 Jupyter Notebooks**: Interactive, executable lessons  
- **🐍 Python 3.12 + Poetry**: Modern dependency management
- **⚡ GitHub Actions**: Automated testing and deployment
- **📊 GitHub Pages**: Free, fast hosting

### **Development Setup - for running the mkdocs locally:**
```bash
# Install Poetry (if not already installed)
curl -sSL https://install.python-poetry.org | python3 -

# Install dependencies
poetry install --only dev --no-root

# Run mkdocs locally
poetry run mkdocs serve
```

---

## 📄 Licensing

This project uses a **dual-license model** to balance open-source collaboration with brand protection:

- **📝 Source Code**: [Apache License 2.0](LICENSE-CODE) - Use, modify, distribute freely
- **🎨 Creative Assets**: [CC BY-NC-ND 4.0](LICENSE-ASSETS) - Professor Torchenstein's character, images, and content

---

## 👨‍🔬 About the Author

**Krzysztof Sopyla** • AI R&D Leader • Researcher • Open Science Advocate

- 🌐 **Website**: [ai.ksopyla.com](https://ai.ksopyla.com?utm_source=pytorchcourse.com&utm_medium=pytorch-course&utm_campaign=readme)
- 💼 **LinkedIn**: [linkedin.com/in/krzysztofsopyla](https://linkedin.com/in/krzysztofsopyla)
- 📧 **Contact**: [GitHub Discussions](https://github.com/ksopyla/pytorch-course/discussions)

*"I believe deep understanding is key to ML success. This course is my contribution to breaking down the barriers and gatekeepers of knowledge."*

---

## 🎯 Ready to Begin Your Tensor Journey?

<div align="center">

### 🧪 **[START THE COURSE NOW](https://pytorchcourse.com)** 🧪

**⭐ Star this repository to join thousands of tensor alchemists! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/ksopyla/pytorch-course?style=social)](https://github.com/ksopyla/pytorch-course/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ksopyla/pytorch-course?style=social)](https://github.com/ksopyla/pytorch-course/network/members)

---

*"Join me, and together we shall `backward()` pass our way to glory!"* 

**— Professor Victor py Torchenstein**

**MWAHAHAHA!** ⚡🧪⚡

</div>