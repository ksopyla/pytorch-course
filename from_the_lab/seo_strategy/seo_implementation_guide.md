# SEO Implementation Guide - PyTorch Course

Essential guide for implementing Schema.org structured data following DRY principles.

---

## 🎯 Clean Architecture Principles

**DRY (Don't Repeat Yourself)**: Each piece of information lives in exactly ONE place.

### What Lives Where

| Data Type | Location | Reason |
|-----------|----------|--------|
| **Constants** (never change) | `overrides/main.html` | Same for ALL pages, change once |
| **Course-level** (whole site) | `docs/index.md` | Homepage only |
| **Module-level** (all lessons) | `docs/XX-module/.meta.yml` | One file per module |
| **Module structure** (lesson list) | `docs/XX-module/00_introduction.md` | Module intro page |
| **Page-specific** | Individual `.md` files | Only unique content |

---

## 📋 Architecture Map

```
📁 Project Structure

├─ 🔧 overrides/main.html
│   HARDCODED CONSTANTS (never change):
│   ├─ Author: Krzysztof Sopyła + social profiles
│   ├─ Provider: Professor Torchenstein's Laboratory
│   ├─ codeRepository: github.com/ksopyla/pytorch-course
│   ├─ programmingLanguage: Python 3.12
│   ├─ inLanguage: en-US
│   ├─ isAccessibleForFree: true
│   └─ license: LICENSE
│
├─ 🏠 docs/index.md (HOMEPAGE)
│   COURSE-LEVEL DATA:
│   ├─ Course code: PYTORCH-101
│   ├─ Total time: PT40H
│   ├─ Course teaches: [high-level outcomes]
│   ├─ Course competency_required: [prerequisites]
│   ├─ Course about: [main topics]
│   ├─ Modules (hasPart): [Module 1, Module 2, ...]
│   └─ Funding: [GitHub Sponsors, BMC]
│
├─ 📂 docs/XX-module/
│   ├─ .meta.yml
│   │   MODULE/LESSON DATA (all lessons inherit):
│   │   ├─ Module teaches: [specific skills]
│   │   ├─ Module competency_required: [prerequisites]
│   │   ├─ Module assesses: [assessment criteria]
│   │   └─ Module about: [topics]
│   │
│   ├─ 00_module_X_introduction.md
│   │   MODULE STRUCTURE:
│   │   ├─ Module code: PYTORCH-MODX
│   │   ├─ Lessons (hasPart): [all lessons with positions]
│   │   └─ isPartOf: Main course
│   │
│   └─ XX_lesson_name.ipynb
│       INHERITS EVERYTHING:
│       ├─ From Template: author, provider, code repo, etc.
│       └─ From .meta.yml: teaches, prerequisites, topics, etc.
```

---

## 🚀 Quick Reference: "Where Do I Add X?"

| What You Want to Add | File to Edit | Line/Section |
|---------------------|--------------|--------------|
| Social media link | `overrides/main.html` | Line ~37 (sameAs array) |
| Python version | `overrides/main.html` | Line ~120 |
| Course-level learning outcome | `docs/index.md` | teaches array |
| Module-level learning outcome | `docs/XX-module/.meta.yml` | teaches array |
| New module to course | `docs/index.md` | has_part array |
| New lesson to module | `docs/XX-module/00_intro.md` | has_part array |
| Course total time | `docs/index.md` | time_required |
| Funding links | `docs/index.md` | funding array |
| Module-specific topics | `docs/XX-module/.meta.yml` | about array |
| Module prerequisites | `docs/XX-module/.meta.yml` | competency_required |

---

## 📄 Template: New Module .meta.yml

Copy this when creating a new module (e.g., `docs/03-training/.meta.yml`):

```yaml
# Module X: [Topic Name]
author: "Krzysztof Sopyła"
image: "assets/images/module-image.png"
keywords: "[topic] PyTorch, [specific concepts], deep learning"
description: "Master [topic] including [key concepts] in PyTorch"

search:
  boost: 1.2

tags:
  - [main topic]
  - module X
  - [beginner|intermediate|advanced]

extra:
  course:
    module: X
    difficulty: "[beginner|intermediate|advanced]"
  
  og:
    type: "article"
  
  structured_data:
    type: "LearningResource"
    educationalLevel: "[Beginner|Intermediate|Advanced]"
    learning_resource_type: "Lesson"
    educational_use: "Self-paced learning"
    interactivity_type: "mixed"
  
  # MODULE SPECIFIC - customize these!
  teaches:
    - "[Specific module skill 1]"
    - "[Specific module skill 2]"
    - "[Specific module skill 3]"
    - "[Specific module skill 4]"
  
  competency_required:
    - "[Module prerequisite 1]"
    - "[Module prerequisite 2]"
    - "[Module prerequisite 3]"
  
  assesses:
    - "[Assessment criterion 1]"
    - "[Assessment criterion 2]"
    - "[Assessment criterion 3]"
    - "[Assessment criterion 4]"
  
  about:
    - name: "[Topic 1]"
      identifier: "[topic-1-slug]"
    - name: "[Topic 2]"
      identifier: "[topic-2-slug]"
    - name: "[Topic 3]"
      identifier: "[topic-3-slug]"
```

**Lines to customize:** 5-6 fields  
**Total time:** ~10 minutes per module

---

## 📄 Template: Module Introduction Page

Copy this when creating module intro (e.g., `docs/03-training/00_module_3_introduction.md`):

```yaml
---
title: "Module X – [Topic Name]"
description: "Master [topic] with hands-on [key concepts]"
keywords: "[module keywords], PyTorch, deep learning"
author: "Krzysztof Sopyła"

search:
  boost: 2.0

tags:
  - module X
  - [difficulty]
  - module overview

extra:
  course:
    module: X
    lesson: 0
    difficulty: "[beginner|intermediate|advanced]"
    estimated_time: "[X hours]"
  
  og:
    title: "PyTorch Course | Module X – [Title] | Prof. Torchenstein's Lab"
    type: "article"
  
  structured_data:
    type: "Course"
    provider: "PYTORCH-MODX"
    educationalLevel: "[Beginner|Intermediate|Advanced]"
    
    # List ALL lessons in module with positions
    has_part:
      - id: "https://pytorchcourse.com/0X-folder/01_lesson/"
        name: "[Lesson 1 Full Name]"
        description: "[Brief lesson description - REQUIRED!]"
        position: 1
      - id: "https://pytorchcourse.com/0X-folder/02_lesson/"
        name: "[Lesson 2 Full Name]"
        description: "[Brief lesson description - REQUIRED!]"
        position: 2
      # Add all remaining lessons...
    
    # Link to parent course
    is_part_of:
      type: "Course"
      id: "https://pytorchcourse.com/"
      name: "PyTorch Deep Learning Course"
---

# Module X – [Title]

> "[Torchenstein quote about the module]"
>
> — **_Prof. Torchenstein_**

[Module introduction content...]
```

**Lines to customize:** ~15-20 lines  
**Total time:** ~20 minutes per module

---

## 📚 Essential Field Reference

### Basic SEO (Standard MkDocs)

```yaml
title: "Page Title"
description: "Meta description under 160 chars"
keywords: "keyword1, keyword2, keyword3"
author: "Krzysztof Sopyła"

search:
  boost: 1.5  # 1.0 default, 3.0 max for homepage

tags:
  - tag1
  - tag2
```

---

### Structured Data Configuration

```yaml
extra:
  structured_data:
    type: "Course"  # or "LearningResource"
    provider: "PYTORCH-MOD1"  # Actually course code
    educationalLevel: "Beginner"  # or Intermediate, Advanced
    learning_resource_type: "Lesson"
    educational_use: "Self-paced learning"
    interactivity_type: "mixed"
```

---

### Learning Outcomes (teaches)

```yaml
extra:
  teaches:
    - "Create and manipulate PyTorch tensors"
    - "Implement neural network architectures"
    - "Build transformer models from scratch"
```

**Best Practices:**
- Start with action verbs (Create, Implement, Build, Apply)
- Be specific (not "Learn PyTorch" but "Create PyTorch tensors")
- 4-8 outcomes per module

---

### Prerequisites (competency_required)

```yaml
extra:
  competency_required:
    - "Basic Python programming"
    - "Linear algebra fundamentals"
    - "Understanding of neural networks"
```

---

### Assessment (assesses)

```yaml
extra:
  assesses:
    - "Ability to create PyTorch tensors"
    - "Understanding of tensor operations"
    - "Proficiency in matrix multiplication"
```

---

### Topics (about with DefinedTerm)

```yaml
extra:
  about:
    - name: "PyTorch Tensors"
      identifier: "pytorch-tensors"
    - name: "Deep Learning"
      identifier: "deep-learning"
```

---

### Hierarchical Relationships

**isPartOf (Link to Parent):**
```yaml
extra:
  is_part_of:
    type: "Course"
    id: "https://pytorchcourse.com/"
    name: "PyTorch Deep Learning Course"
```

**hasPart (Link to Children):**
```yaml
extra:
  structured_data:
    has_part:
      - id: "https://pytorchcourse.com/01-tensors/01_lesson/"
        name: "Lesson Name"
        description: "Brief lesson description (REQUIRED by Google)"
        position: 1
      - id: "https://pytorchcourse.com/01-tensors/02_lesson/"
        name: "Lesson 2 Name"
        description: "Another brief lesson description"
        position: 2
```

⚠️ **CRITICAL:** Each item in `has_part` MUST have a `description` field or Google Rich Results Test will show errors.

---

### Time & Difficulty

```yaml
extra:
  course:
    module: 1
    lesson: 1
    difficulty: "beginner"
    estimated_time: "15 min"
  
  structured_data:
    time_required: "PT15M"  # ISO 8601 format
```

**Time Format (ISO 8601):**
- `"PT15M"` = 15 minutes
- `"PT1H30M"` = 1 hour 30 minutes
- `"PT40H"` = 40 hours

---

## 🔄 Implementation Strategy

### For Markdown Files (.md)

✅ **Simple:** Add YAML frontmatter directly to file  
✅ **Flexible:** Each file can have unique metadata  
✅ **Use for:** Module intros, homepage, special pages

**Example:**
```yaml
---
title: "Module 1: Tensors"
description: "Master PyTorch tensors"
extra:
  structured_data:
    type: "Course"
    teaches:
      - "Skill 1"
      - "Skill 2"
---
```

---

### For Jupyter Notebooks (.ipynb)

✅ **Use:** Directory-level `.meta.yml` files  
✅ **Why:** Consistent metadata, no JSON editing  
✅ **How:** Create `.meta.yml` in module folder

**All notebooks in that folder inherit the metadata!**

**Example Structure:**
```
docs/01-tensors/
├── .meta.yml              ← Metadata for ALL lessons
├── 01_lesson.ipynb        ← Inherits from .meta.yml
├── 02_lesson.ipynb        ← Inherits from .meta.yml
└── 03_lesson.ipynb        ← Inherits from .meta.yml
```

**Benefits:**
- ✅ Update ONE file, affects all 10+ notebooks
- ✅ No need to edit notebook JSON
- ✅ Consistent across module
- ✅ Easy to maintain

---

## ⚙️ Template Configuration (For Reference)

The template (`overrides/main.html`) has these hardcoded constants:

```jinja2
"author": {
  "@type": "Person",
  "name": "Krzysztof Sopyła",
  "jobTitle": "AI R&D Leader, PyTorch Educator",
  "url": "https://ai.ksopyla.com",
  "sameAs": [
    "https://github.com/ksopyla",
    "https://twitter.com/ksopyla",
    "https://linkedin.com/in/krzysztof-sopyla",
    "https://ai.ksopyla.com"
  ]
},

"provider": {
  "@type": "Organization",
  "name": "Professor Torchenstein's Laboratory",
  "url": "https://pytorchcourse.com",
  "logo": "https://pytorchcourse.com/assets/images/Logo_purple_cube_transparent.png",
  "sameAs": ["https://github.com/ksopyla/pytorch-course"]
},

"codeRepository": "https://github.com/ksopyla/pytorch-course",
"programmingLanguage": {
  "@type": "ComputerLanguage",
  "name": "Python",
  "version": "3.12"
},

"inLanguage": "en-US",
"isAccessibleForFree": true,
"license": "https://github.com/ksopyla/pytorch-course/blob/main/LICENSE"
```

**⚠️ Do NOT duplicate these in metadata files!**

---

## ✅ Adding a New Module Checklist

When creating Module X:

- [ ] Copy `.meta.yml` template to `docs/0X-module/.meta.yml`
- [ ] Customize: module number, difficulty, keywords, description
- [ ] Update: teaches, competency_required, assesses, about
- [ ] Create module introduction: `docs/0X-module/00_module_X_introduction.md`
- [ ] Add all lessons to `has_part` with positions (1, 2, 3...)
- [ ] Add `is_part_of` linking to main course
- [ ] Update homepage `docs/index.md` - add module to `has_part`
- [ ] Test build: `poetry run mkdocs build`
- [ ] Validate schema: Google Rich Results Test

**Time estimate:** 30 minutes per module

---

## 📊 Hierarchy Validation

Every page should form this structure:

```
Homepage (Course)
  ├─ courseCode: PYTORCH-101
  ├─ teaches: [course-level outcomes]
  └─ hasPart: [Module 1, Module 2]

Module 1 Intro (Course)
  ├─ courseCode: PYTORCH-MOD1
  ├─ isPartOf: Homepage
  ├─ hasPart: [Lesson 1, Lesson 2, ...]
  └─ (teaches inherited from .meta.yml)

Lesson 1 (LearningResource)
  ├─ position: 1
  ├─ (teaches inherited from .meta.yml)
  ├─ (author inherited from template)
  └─ (provider inherited from template)
```

**Test:** Every page links UP (isPartOf) OR DOWN (hasPart) or BOTH.

---

## 🔍 Schema Types Reference

| Page Type | Schema Type | Example |
|-----------|-------------|---------|
| Homepage | `Course` | `docs/index.md` |
| Module Introduction | `Course` | `docs/01-tensors/00_module_1_introduction.md` |
| Individual Lesson | `LearningResource` | `docs/01-tensors/01_lesson.ipynb` |
| Regular Page | No special schema | `docs/story/sponsor.md` |

---

## 💡 Key Principles

### DRY (Don't Repeat Yourself)

**❌ BAD:**
- Author defined in homepage, Module 1 .meta.yml, Module 2 .meta.yml (3 places)
- Change social link = edit 3 files

**✅ GOOD:**
- Author defined in template only (1 place)
- Change social link = edit 1 file

---

### Separation of Concerns

| Type | Where It Lives |
|------|----------------|
| **Never changes** | Template (hardcoded) |
| **Course-wide** | Homepage only |
| **Module-wide** | .meta.yml only |
| **Module structure** | Module intro only |

---

### Inheritance Flow

```
Template (hardcoded)
    ↓
Homepage (course-level)
    ↓
Module .meta.yml (module-level)
    ↓
Module intro (structure)
    ↓
Lessons (inherit everything)
```

---

## 📋 Common Mistakes to Avoid

### 1. Duplicate Definitions

❌ **Wrong:** Adding author to both template AND .meta.yml  
✅ **Right:** Author ONLY in template

### 2. Wrong Level of Abstraction

❌ **Wrong:** Course-level teaches: "Create a specific tensor"  
✅ **Right:** Course-level teaches: "PyTorch fundamentals and tensor operations"

### 3. Missing Quotes in YAML

❌ **Wrong:**
```yaml
name: Module 1: Tensors  # Colon breaks YAML
```

✅ **Right:**
```yaml
name: "Module 1: Tensors"
```

### 4. Inconsistent IDs

❌ **Wrong:**
```yaml
id: "/01-tensors/"        # Missing domain
id: "01-tensors"          # Missing https://
```

✅ **Right:**
```yaml
id: "https://pytorchcourse.com/01-tensors/"
```

### 5. Invalid Time Format

❌ **Wrong:** `"15 minutes"`, `"1.5 hours"`  
✅ **Right:** `"PT15M"`, `"PT1H30M"`

### 6. Missing Description in hasPart

❌ **Wrong:**
```yaml
has_part:
  - id: "https://..."
    name: "Lesson Name"
    position: 1
```

✅ **Right:**
```yaml
has_part:
  - id: "https://..."
    name: "Lesson Name"
    description: "Brief lesson description"
    position: 1
```

⚠️ **Google Rich Results Test requires `description` for each hasPart item!**

---

## 🧪 Testing

### Step 1: Build the Site

```powershell
poetry run mkdocs build --clean
```

### Step 2: Check Generated HTML

Open `site/01-tensors/01_lesson/index.html`

Search for: `<script type="application/ld+json">`

Verify it contains:
- `author` with `sameAs` profiles
- `provider` organization
- `teaches` outcomes
- `competencyRequired` prerequisites
- `about` topics

### Step 3: Validate Online

**Google Rich Results Test:**  
https://search.google.com/test/rich-results

**Schema Validator:**  
https://validator.schema.org/

---

## 📈 Expected SEO Benefits

### Immediate (1-4 weeks):
- ✅ Rich snippets in search results
- ✅ Better course categorization
- ✅ Author authority signals indexed

### Short-term (1-3 months):
- ✅ +15-30% organic traffic increase
- ✅ Better ranking for "free PyTorch course"
- ✅ Featured snippet opportunities

### Long-term (3-6 months):
- ✅ Course listings in Google Discover
- ✅ Potential Google Knowledge Panel
- ✅ +30-50% total traffic increase

---

## 🎯 Priority Fields by Importance

### Always Include (Priority 1):
1. `type` (Course or LearningResource)
2. `educationalLevel`
3. `teaches` outcomes
4. `competency_required` prerequisites

### Strongly Recommended (Priority 2):
5. `about` with DefinedTerm
6. `is_part_of` / `has_part` hierarchy
7. `assesses` criteria
8. `learning_resource_type`

### Nice to Have (Priority 3):
9. `funding` information
10. `educational_use`
11. `interactivity_type`

---

## 📚 Additional Resources

- **Schema.org Course:** https://schema.org/Course
- **Schema.org LearningResource:** https://schema.org/LearningResource
- **Google Rich Results:** https://developers.google.com/search/docs/appearance/structured-data/course
- **MkDocs Meta Plugin:** https://squidfunk.github.io/mkdocs-material/plugins/meta/

---

*Last updated: January 2025*  
*Clean architecture following DRY principles*

