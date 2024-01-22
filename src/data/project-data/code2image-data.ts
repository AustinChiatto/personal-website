const externalLinks = [
  {
    label: 'crumb.so/code2image',
    href: 'https://crumb.so/code-to-img',
    favicon: '/images/mm-favicon.jpeg'
  },
  {
    label: 'View Repo',
    href: 'https://github.com/AustinChiatto/crumb/tree/main/src/components/CodeToImg',
    favicon: '/icons/github-original.svg'
  }
];

const techStack = [
  {
    label: 'React',
    icon: '/icons/react-original.svg',
    desc: 'JavaScript library for building UI components.'
  },
  {
    label: 'Sass',
    icon: '/icons/sass-original.svg',
    desc: 'Preprocessor scripting language for CSS.'
  },
  {
    label: 'Vite',
    icon: '/icons/vite.svg',
    desc: 'Fast and lightweight frontend build tool.'
  },
  {
    label: 'HTML To Image',
    icon: '/icons/code-slash-outline.svg',
    desc: '[PH]'
  },
  {
    label: 'NPM',
    icon: '/icons/npm-original-wordmark.svg',
    desc: 'Package manager for Node.js projects.'
  },
  {
    label: 'React Syntax Highlighter',
    icon: '/icons/code-slash-outline.svg',
    desc: '[PH]'
  },
  {
    label: 'VS Code',
    icon: '/icons/vscode-original.svg',
    desc: '[PH]'
  },
  {
    label: 'Figma',
    icon: '/icons/figma-original.svg',
    desc: '[PH]'
  },
  {
    label: 'GitHub',
    icon: '/icons/github-original.svg',
    desc: '[PH]'
  }
];

const article = [
  {
    markdownSection: [
      '## Project Development',
      '### Achieving Minimum Viable Product',
      "When I first started building the MVP for the project, my knowledge of **React** was pretty basic and I wasn't sure if I could convert a React component into a PNG. After some exploration, I came across a helpful tool called **html-to-image**. It was a bit of a process to implement, but getting it to function properly allowed me to save *React components* as images."
    ]
  },
  {
    markdownSection: [
      '### Implementing Live Syntax Highlighting',
      "I wanted the user's input to have* syntax highlighting* as they typed, which isn't possible inside of a text area with **react-syntax-highlighting** or other methods. The work around I found was to create two stacked elements.",
      "The top layer is a text area element that accepts the user's input but has a transparent font color, and the layer underneath that is a rendered version of the input with syntax highlighting. This gives the illusion of *live syntax highlighting* as the user types."
    ]
  }
];

export const Code2ImageData = {
  externalLinks,
  techStack,
  article
};
