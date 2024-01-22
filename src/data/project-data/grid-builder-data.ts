const externalLinks = [
  {
    label: 'Live Site',
    href: 'https://crumb.so/grid-tool',
    favicon: '/icons/external-link.svg'
  },
  {
    label: 'View Repo',
    href: 'https://github.com/AustinChiatto/crumb/tree/main/src/components/GridTool',
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
    label: 'NPM',
    icon: '/icons/npm-original-wordmark.svg',
    desc: 'Package manager for Node.js projects.'
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
      '### Learning React',
      'Although the intention of this project was to help my friends learn **CSS Grid**, I decided to use it as an opportunity to learn a technology that is not offered in my schooling. So, I chose **React** for this project.'
    ]
  },
  {
    markdownSection: [
      '### Component Props',
      'I built components with **JSX** and learned how to share *props* across them effectively.'
    ]
  },
  {
    markdownSection: [
      '### State',
      'I managed and manipulated state with the **useState hook** to change the grid value props using *onClick* and *onChange* events.'
    ]
  },
  {
    markdownSection: [
      '### Context & Custom Hooks',
      'I learned how to pass data across distantly related components without excessive prop drilling by using **useContext**. I used it to pass state values for the grid to the rendered grid.'
    ]
  },
  {
    markdownSection: [
      '### Package Management & Build Commands',
      'I learned how to use npm to create the project, start a development server, and run a build command to transpile my **JSX into JavaScript** using **Babel**.'
    ]
  }
];

export const GridToolData = {
  externalLinks,
  techStack,
  article
};
