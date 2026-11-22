# Graph Report - src  (2026-11-16)

## Corpus Check
- 47 files · ~30,079 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .css 10, .glb 1)

## Summary
- 182 nodes · 416 edges · 11 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9a7d9ff7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.jsx
- FluidGlass.jsx
- ref_react
- SkillsSection.jsx
- ref_react_router_dom
- HeroSection.jsx
- ref_framer_motion
- GradualBlur.jsx
- SlidingNumber.jsx
- HalftoneReveal.jsx
- SkeletonLoader.jsx

## God Nodes (most connected - your core abstractions)
1. `App()` - 12 edges
2. `HeroSection()` - 10 edges
3. `Home()` - 10 edges
4. `FilledButton()` - 9 edges
5. `GhostButton()` - 9 edges
6. `SectionHeader()` - 9 edges
7. `Footer()` - 8 edges
8. `GradualBlur()` - 7 edges
9. `LogoLoop` - 7 edges
10. `Navbar()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `GradualBlur()`  [EXTRACTED]
  src/App.jsx → src/components/ui/GradualBlur.jsx
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.jsx → src/pages/About.jsx
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.jsx → src/pages/Home.jsx
- `App()` --calls--> `NotFound()`  [EXTRACTED]
  src/App.jsx → src/pages/NotFound.jsx
- `App()` --calls--> `ProjectDetail()`  [EXTRACTED]
  src/App.jsx → src/pages/ProjectDetail.jsx

## Import Cycles
- None detected.

## Communities (11 total, 0 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.12
Nodes (16): App(), HW_ACCEL, ScrollToTop(), Footer(), HoverRevealMenu(), MENU_ITEMS, SOCIAL_LINKS, Navbar() (+8 more)

### Community 1 - "FluidGlass.jsx"
Cohesion: 0.11
Nodes (16): Bar(), Cube(), FluidGlass(), IMAGE_URLS, Images(), Lens(), ModeWrapper, NavItems() (+8 more)

### Community 2 - "ref_react"
Cohesion: 0.16
Nodes (12): AboutSection(), CINEMATIC_SHOTS, videoModules, ContactSection(), ProjectsShowcase(), StatementBand(), CinematicBackground(), ContactModal() (+4 more)

### Community 3 - "SkillsSection.jsx"
Cohesion: 0.15
Nodes (16): ALL_SOFTWARE_LOGOS, SKILL_CATEGORIES, SkillsSection(), clamp(), FlipCard(), isBack(), LIFT_SPRING, SLOP (+8 more)

### Community 4 - "ref_react_router_dom"
Cohesion: 0.24
Nodes (8): ProjectDetailLayout(), ProjectFootnoteBar(), Masonry(), preloadImages(), useMeasure(), useMedia(), projects, ProjectDetail()

### Community 5 - "HeroSection.jsx"
Cohesion: 0.29
Nodes (10): getDaysOnEarth(), HeroSection(), FilledButton(), GhostButton(), getAnchorAndDir(), hexToRgb(), LightRays(), About() (+2 more)

### Community 6 - "ref_framer_motion"
Cohesion: 0.23
Nodes (5): DesktopEntry(), MobileEntry(), NODES, TIMELINE, TimelineCard()

### Community 7 - "GradualBlur.jsx"
Cohesion: 0.24
Nodes (10): CURVE_FUNCTIONS, debounce(), DEFAULT_CONFIG, getGradientDirection(), GradualBlur(), GradualBlurMemo, mergeConfigs(), PRESETS (+2 more)

### Community 8 - "SlidingNumber.jsx"
Cohesion: 0.31
Nodes (4): Clock(), Digit(), SlidingNumber(), TRANSITION

### Community 9 - "HalftoneReveal.jsx"
Cohesion: 0.33
Nodes (5): HalftoneReveal(), hexToRgb(), MODES, SHAPES, TRIGGERS

### Community 10 - "SkeletonLoader.jsx"
Cohesion: 0.53
Nodes (4): SkeletonHeading(), SkeletonImage(), SkeletonLoader(), SkeletonText()

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `App()` connect `App.jsx` to `ref_react`, `ref_react_router_dom`, `HeroSection.jsx`, `GradualBlur.jsx`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11822660098522167 - nodes in this community are weakly interconnected._
- **Why does `HeroSection()` connect `HeroSection.jsx` to `SlidingNumber.jsx`, `FluidGlass.jsx`, `ref_react`, `GradualBlur.jsx`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Should `FluidGlass.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11396011396011396 - nodes in this community are weakly interconnected._
- **Why does `Home()` connect `ref_react` to `App.jsx`, `SkillsSection.jsx`, `HeroSection.jsx`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Should `SkillsSection.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._