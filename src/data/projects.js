/**
 * projects.js — Centralized project data
 * 
 * All project information lives here. Pages and components read from this array
 * rather than having hardcoded content in individual JSX files.
 * Content themed around AI Image/Video creation and Filmmaking.
 * 
 * Each project has: slug, title, category, description, bullets, skills, 
 * thumbnail, images, and videoUrl.
 */

export const projects = [
  {
    slug: 'neural-frames',
    title: 'Neural Frames',
    category: 'AI Video',
    description:
      'An experimental AI video generation project exploring the boundaries of neural network-driven motion synthesis. Each frame is generated through a custom pipeline that blends latent space interpolation with temporal coherence algorithms, producing cinematic sequences that feel simultaneously organic and synthetic.',
    bullets: [
      'Custom AI pipeline for frame-by-frame video generation',
      'Latent space interpolation for smooth motion transitions',
      'Temporal coherence algorithms for cinematic continuity',
      'Post-processed in DaVinci Resolve for color grading',
      'Output at 4K resolution with 24fps cinematic framerate',
    ],
    skills: ['RunwayML', 'ComfyUI', 'DaVinci Resolve', 'After Effects', 'Python'],
    thumbnail:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
    ],
    videoUrl: null, // Placeholder — user will add
  },
  {
    slug: 'synthetic-visions',
    title: 'Synthetic Visions',
    category: 'AI Image',
    description:
      'A collection of AI-generated hyper-realistic concept art pushing the line between synthetic and photographic reality. Each piece begins as a text prompt and evolves through iterative refinement across multiple generative models, combining diffusion-based synthesis with manual compositing and retouching.',
    bullets: [
      'Multi-model workflow combining Midjourney and Stable Diffusion',
      'Iterative prompt engineering for precise artistic control',
      'Manual compositing and retouching in Photoshop',
      'Focus on photorealistic textures and lighting',
      'Exhibited in digital gallery format',
    ],
    skills: ['Midjourney', 'Stable Diffusion', 'Photoshop', 'Lightroom', 'ComfyUI'],
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    ],
    videoUrl: null,
  },
  {
    slug: 'analog-shift',
    title: 'Analog Shift',
    category: 'Film',
    description:
      'A short film project capturing the tension between analog and digital worlds. Shot on location with a hybrid approach — digital cinema cameras combined with vintage lens adapters and film-emulation LUTs to create a nostalgic yet contemporary visual language. The narrative follows the quiet dissolution of physical media in a digital-first world.',
    bullets: [
      'Shot on Blackmagic Pocket Cinema Camera 6K Pro',
      'Vintage Helios 44-2 lens for organic bokeh and flare',
      'Custom film-emulation LUTs developed in DaVinci Resolve',
      'Sound design and Foley recorded on location',
      'Color graded with a desaturated warm palette',
    ],
    skills: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Blender', 'Audition'],
    thumbnail:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    ],
    videoUrl: null,
  },
  {
    slug: 'digital-canvas',
    title: 'Digital Canvas',
    category: 'Motion',
    description:
      'A motion graphics and VFX reel showcasing procedural animation, particle systems, and 3D-integrated compositing. Built primarily in Blender and After Effects, this collection demonstrates the intersection of generative art and deliberate creative direction — where code meets craft.',
    bullets: [
      'Procedural animation systems built in Blender Geometry Nodes',
      'Particle simulations for atmospheric and environmental effects',
      '3D-to-2D compositing pipeline via EXR render passes',
      'Typography animation and kinetic poster design',
      'Rendered at 4K with motion blur and DOF passes',
    ],
    skills: ['Blender', 'After Effects', 'Substance Painter', 'Cinema 4D', 'Premiere Pro'],
    thumbnail:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop',
    ],
    videoUrl: null,
  },
];
