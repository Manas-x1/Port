/**
 * projects.js — Centralized project case studies for AI Image/Video Creation & Filmmaking
 */

export const projects = [
  {
    slug: 'kaliya-daman',
    title: 'Kaliya Daman',
    category: 'AI Cinematic Episode',
    series: 'Krishna Leela · Episode',
    client: 'ISKCON Delhi',
    role: 'Visual Designer / Animator',
    note: 'Premiered in the ISKCON Delhi theatre',
    description:
      'The Kaliya Daman episode of Krishna Leela, made exclusively for ISKCON Delhi and premiered in its theatre. Young Krishna dives into the Yamuna, takes on the many-headed serpent Kaliya and dances on its hoods, then returns to Yashoda, Nanda and his friends on the riverbank.',
    bullets: [
      'Visual design and animation across the episode, from the opening in Vrindavan to the sunset ending',
      'The underwater fight with Kaliya and Krishna’s dance on the serpent’s hoods',
      'Character shots of Krishna, Yashoda, Nanda and the cowherd friends',
      'Shots built with Google Flow, Higgsfield and Hailuo AI, with Premiere Pro for the edit',
    ],
    skills: ['Google Flow', 'Higgsfield', 'Hailuo AI', 'Premiere Pro'],
    thumbnail: '/projects/kaliya-daman/cover.webp',
    // Stills from the episode, grouped by part of the story
    stills: [
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/01-river-at-night.webp', caption: 'The Yamuna at night' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/02-forest-floor.webp', caption: 'The forest floor' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/03-kaliya-coils.webp', caption: 'Kaliya below the surface' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/04-rocks-and-waves.webp', caption: 'Rocks and rapids' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/05-many-heads.webp', caption: 'The many heads' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/06-monkey-eyes.webp', caption: 'A watcher' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/07-serpent-rising.webp', caption: 'The serpent breaks the water' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/08-wave.webp', caption: 'The wave' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/09-deep-water.webp', caption: 'Deep water' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/10-coils-in-the-murk.webp', caption: 'Coils in the murk' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/11-monkey.webp', caption: 'On the bank' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/12-serpent-in-the-waves.webp', caption: 'Serpent in the waves' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/13-waterfall-rock.webp', caption: 'Waterfall rock' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/14-tree-trunk.webp', caption: 'The old tree' },
      { section: 'Night on the Yamuna', src: '/projects/kaliya-daman/stills/15-kaliya-eye.webp', caption: 'Kaliya’s eye' },
      { section: 'Vrindavan', src: '/projects/kaliya-daman/stills/16-cows-under-trees.webp', caption: 'Cows under the trees' },
      { section: 'Vrindavan', src: '/projects/kaliya-daman/stills/17-flute-hands.webp', caption: 'The flute' },
      { section: 'Vrindavan', src: '/projects/kaliya-daman/stills/18-krishna-eyes.webp', caption: 'Krishna' },
      { section: 'Vrindavan', src: '/projects/kaliya-daman/stills/19-friends-running.webp', caption: 'Krishna and his friends' },
      { section: 'Vrindavan', src: '/projects/kaliya-daman/stills/20-krishna-flute.webp', caption: 'Krishna with the flute' },
      { section: 'The return', src: '/projects/kaliya-daman/stills/21-yashoda-looks-up.webp', caption: 'Yashoda' },
      { section: 'The return', src: '/projects/kaliya-daman/stills/22-yashoda-embrace.webp', caption: 'Mother and son' },
      { section: 'The return', src: '/projects/kaliya-daman/stills/23-nanda.webp', caption: 'Nanda' },
    ],
    // Muted shots (2–4s, 720p). Also feed the random slideshow behind the title.
    clips: [
      { src: '/projects/kaliya-daman/clips/01-river-at-night.mp4', poster: '/projects/kaliya-daman/clips/01-river-at-night.webp', caption: 'The Yamuna at night' },
      { src: '/projects/kaliya-daman/clips/02-kaliya-coils.mp4', poster: '/projects/kaliya-daman/clips/02-kaliya-coils.webp', caption: 'Kaliya below the surface' },
      { src: '/projects/kaliya-daman/clips/03-rocks-and-waves.mp4', poster: '/projects/kaliya-daman/clips/03-rocks-and-waves.webp', caption: 'Rocks and rapids' },
      { src: '/projects/kaliya-daman/clips/04-many-heads.mp4', poster: '/projects/kaliya-daman/clips/04-many-heads.webp', caption: 'The many heads' },
      { src: '/projects/kaliya-daman/clips/05-monkey-eyes.mp4', poster: '/projects/kaliya-daman/clips/05-monkey-eyes.webp', caption: 'A watcher' },
      { src: '/projects/kaliya-daman/clips/06-serpent-rising.mp4', poster: '/projects/kaliya-daman/clips/06-serpent-rising.webp', caption: 'The serpent breaks the water' },
      { src: '/projects/kaliya-daman/clips/07-serpent-in-the-waves.mp4', poster: '/projects/kaliya-daman/clips/07-serpent-in-the-waves.webp', caption: 'Serpent in the waves' },
      { src: '/projects/kaliya-daman/clips/08-waterfall-rock.mp4', poster: '/projects/kaliya-daman/clips/08-waterfall-rock.webp', caption: 'Waterfall rock' },
      { src: '/projects/kaliya-daman/clips/09-tree-trunk.mp4', poster: '/projects/kaliya-daman/clips/09-tree-trunk.webp', caption: 'The old tree' },
      { src: '/projects/kaliya-daman/clips/10-kaliya-eye.mp4', poster: '/projects/kaliya-daman/clips/10-kaliya-eye.webp', caption: 'Kaliya’s eye' },
      { src: '/projects/kaliya-daman/clips/11-cows-under-trees.mp4', poster: '/projects/kaliya-daman/clips/11-cows-under-trees.webp', caption: 'Cows under the trees' },
      { src: '/projects/kaliya-daman/clips/12-flute-hands.mp4', poster: '/projects/kaliya-daman/clips/12-flute-hands.webp', caption: 'The flute' },
      { src: '/projects/kaliya-daman/clips/13-krishna-eyes.mp4', poster: '/projects/kaliya-daman/clips/13-krishna-eyes.webp', caption: 'Krishna' },
      { src: '/projects/kaliya-daman/clips/14-friends-running.mp4', poster: '/projects/kaliya-daman/clips/14-friends-running.webp', caption: 'Krishna and his friends' },
      { src: '/projects/kaliya-daman/clips/15-krishna-flute.mp4', poster: '/projects/kaliya-daman/clips/15-krishna-flute.webp', caption: 'Krishna with the flute' },
      { src: '/projects/kaliya-daman/clips/16-yashoda-looks-up.mp4', poster: '/projects/kaliya-daman/clips/16-yashoda-looks-up.webp', caption: 'Yashoda' },
      { src: '/projects/kaliya-daman/clips/17-yashoda-embrace.mp4', poster: '/projects/kaliya-daman/clips/17-yashoda-embrace.webp', caption: 'Mother and son' },
      { src: '/projects/kaliya-daman/clips/18-nanda.mp4', poster: '/projects/kaliya-daman/clips/18-nanda.webp', caption: 'Nanda' },
    ],
    heroSlideshow: true,
  },
  {
    slug: 'shiv-mahapuran',
    title: 'Shiv Mahapuran',
    category: 'AI Mythological Worldbuilding',
    description:
      'An epic visual narrative case study bringing the cosmic lore of Lord Shiva and Mount Kailash to life through generative AI and 3D environment art. The piece combines majestic snowy mountain passes, cosmic tandava energy fields, and ancient stone architecture into a transcendent visual experience.',
    bullets: [
      'Architected 3D terrain base meshes in Blender integrated with AI neural render passes',
      'Created atmospheric particle systems and cosmic energy effects using After Effects and ComfyUI AnimateDiff',
      'Synthesized hyper-detailed stone carved relief textures and glowing rune typography',
      'Delivered seamless camera sweeps and parallax depth mapping across 4K visual sequences',
      'Full audio landscape with Sanskrit chants and deep sub-bass cinematic percussion',
    ],
    skills: [
      'Blender',
      'ComfyUI',
      'Midjourney',
      'After Effects',
      'Premiere Pro',
      'Substance Painter',
      'DaVinci Resolve',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=70',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=70',
    ],
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
  },
  {
    slug: 'metroid-sci-fi',
    title: 'Metroid: Dread Horizon',
    category: 'AI Sci-Fi Cinematic',
    description:
      'A cinematic exploration into the Metroid universe, reimagined through advanced AI generative pipelines and 3D environment synthesis. Combining neural video synthesis with custom film grain and color grading in DaVinci Resolve, this project delivers an atmospheric sci-fi experience focusing on Bounty Hunter Samus Aran exploring alien ruins.',
    bullets: [
      'Multi-stage AI diffusion workflow with custom LoRA fine-tuning for sci-fi suit design',
      'Environment worldbuilding using Blender 3D geometry and Substance Painter textures',
      'Neural video generation using Runway Gen-2 and ComfyUI for dynamic alien landscapes',
      'Post-production, sound design, and color grading completed in DaVinci Resolve & Premiere Pro',
      'Delivered in 4K DCI cinematic aspect ratio with 24fps film cadence',
    ],
    skills: [
      'Midjourney',
      'ComfyUI',
      'RunwayML',
      'Premiere Pro',
      'Blender',
      'Substance Painter',
      'DaVinci Resolve',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=70',
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=70',
    ],
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
  },
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
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=70',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=70',
    ],
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
  },
  {
    slug: 'synthetic-visions',
    title: 'Synthetic Visions',
    category: 'AI Image & Concept Art',
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
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=70',
    images: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=70',
    ],
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
  },
  {
    slug: 'analog-shift',
    title: 'Analog Shift',
    category: 'Film & AI Hybrid',
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
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=70',
    images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=70',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=70',
    ],
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
  },
];
