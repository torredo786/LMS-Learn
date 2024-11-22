
// Card Data

const cards = [
    {
      title: "Frontend Development (React)",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React Logo
      shortcode: "REACT",
      description:
        "Building interactive UIs with React, leveraging components, hooks, and state management for a dynamic user experience.",
    },
    {
      title: "Backend Development (Node.js)",
      logoUrl: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png", // Node.js Logo
      shortcode: "NODE",
      description:
        "Server-side development with Node.js, using Express for building RESTful APIs, handling requests, and managing databases.",
    },
    {
      title: "Game Development",
      logoUrl: "https://w7.pngwing.com/pngs/50/329/png-transparent-video-game-development-computer-icons-video-game-developer-design-thumbnail.png", // Unity Logo
      shortcode: "GD",
      description:
        "Creating 3D games and simulations with Unity, integrating physics, lighting, and animation for interactive experiences.",
    },
    {
      title: "Data Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python Logo
      shortcode: "PY",
      description:
        "Using Python for data analysis, machine learning, and visualization, applying libraries like Pandas, NumPy, and TensorFlow.",
    },
    {
      title: "Mobile Development",
      logoUrl: "https://e7.pngegg.com/pngimages/578/1018/png-clipart-mobile-app-development-mobile-phones-teinsoft-mobile-web-mobile-application-miscellaneous-game-thumbnail.png", // Flutter Logo
      shortcode: "FLT",
      description:
        "Cross-platform mobile app development with Flutter, creating high-performance native apps for both Android and iOS.",
    },
    {
      title: "Cloud Infrastructure",
      logoUrl: "data:image/png;base64,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", // AWS Logo
      shortcode: "AWS",
      description:
        "Leveraging AWS services for cloud computing, storage, and deployment, optimizing for scalability and cost efficiency.",
    },
  ];
  
  module.exports = { cards };