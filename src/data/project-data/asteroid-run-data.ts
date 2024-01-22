const externalLinks = [
  {
    label: 'Play Game',
    href: 'https://asteroid-run.austinchiatto.com/',
    favicon: '/images/mm-favicon.jpeg'
  },
  {
    label: 'View Repo',
    href: 'https://asteroid-run.austinchiatto.com/',
    favicon: '/icons/github-original.svg'
  }
];

const techStack = [
  {
    label: 'JavaScript',
    icon: '/icons/javascript-original.svg',
    desc: 'Utilized for game controls and function'
  },
  {
    label: 'HTML Canvas',
    icon: '/icons/html5-original.svg',
    desc: 'Selected as the renderer for game assets'
  },
  {
    label: 'CSS',
    icon: '/icons/css3-original.svg',
    desc: 'Chosen for its simplicity.'
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
  }
];

const article = [
  {
    markdownSection: [
      '## Project Development',
      '### Classes and Objects',
      'The purpose of this project was to familiarize myself with **JavaScript classes and objects**. I created *Player and Enemy classes* to set up the game characters, controlling their traits and actions.'
    ]
  },
  {
    markdownSection: [
      '### Game Rendering',
      "I used **HTML Canvas** to render the game's graphics, utilizing the *Player, Enemy, and Projectile classes* to draw the game screen and its contents.",
      'To ensure the efficiency of the game, I removed all elements from the canvas that extended beyond the *top and bottom dimensions of the screen*.'
    ]
  },
  {
    markdownSection: [
      '### Player Controls',
      'I built *keyboard controls* that limited control of the player to the game screen. I later added a second set of controls upon feedback from *user testing*.'
    ]
  },
  {
    markdownSection: [
      '### Collision Logic',
      'I used **boundingRectClient** to determine the positions and dimensions of the game elements in order to check for overlaps. If the player element overlaps with a projectile or an enemy, the game ends. Similarly, if an enemy overlaps with a *player projectile*, the enemy is deleted from the canvas.'
    ]
  }
];

export const AsteroidRunData = {
  externalLinks,
  techStack,
  article
};
