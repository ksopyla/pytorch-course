
# Best Free PyTorch Course

The best online and free PyTorch tutorial. 
Course Url: https://pytorchcourse.com 


## Description and scope

Project will give deep and essential knowledge how particular PyTorch building blocs works and how to use them while designing your own architecture. 

The main focus is on understanding how Machine learning concepts could be expressed using PyTorch. 

I have decided to create this course because I want to be albe to read and understand SoTA architecture implementation like (LLaMA, Qwen, Gemini, etc.). 
What I have always felt is that I have lacked of deep understanding of the notation how to express the concepts in the PyTorch code. 


- How the loss functions work, how the input should be prepared and how to interpret the output of particular loss function
- How the matrix operations are performed in PyTorch, how to efficiently use the broadcasting feature, 
- How to understand the Einstein notation and how to 


## Technology used

- uses mkdocs mkdocs-material mkdocs-jupyter for lesson rendering and display
- mkdocs documentation url: https://www.mkdocs.org/
- mkdocs-material documentation url: https://squidfunk.github.io/mkdocs-material/
- github actions with mkdocs plugin for building the docs
- generated site is deployed to the github-pages environment by the pages build and deployment workflow.
- github pages is used, site is deployed from gh-pages branch from root directory
- each lesson is Jupyter Notebook - rendered directly in MkDocs with use of mkdocs-jupyter plugin

## Project structure

- [.github\workflows\mkdocs-build.yml](.github/workflows/mkdocs-build.yml) - defines the github action mkdocs build process
- [.cursor\rules](.cursor/rules/) - folder containing the rules for the Cursor.AI IDE
- [.cursor\mcp.json](.cursor/mcp.json) - configuration file for the cursor-notebook-mcp server
- [mkdocs.yml](mkdocs.yml) - is the main mkdoc configuration file, it contains the navigation
- [pyproject.toml](pyproject.toml) and [poetry.lock](poetry.lock) - poetry related files for managing the dependencies
- [docs](docs) - folder contains the lessons grouped in folders, each subfolder contains lessons as jupyter notebooks or markdown files
- [docs/assets](docs/assets) - folder containing the assests, images, audio, additional css and javascript
- [docs/index.md](docs/index.md) - main page file



## Project setup

- I develop the course with Cursor.AI IDE (0.50.4 in the time of writing this)
- all the rules that I use are in the [.curor/rules](.coursor/rules/) folder
- I have also use the [cursor-notebook-mcp server](https://github.com/jbeno/cursor-notebook-mcp) to have a notebook interface for the course







