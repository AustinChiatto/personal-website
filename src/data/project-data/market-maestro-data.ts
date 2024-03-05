const externalLinks = [
  {
    label: 'marketmaestro.ca',
    tooltip: 'See live site',
    href: 'https://www.marketmaestro.ca/',
    favicon: '/images/mm-favicon.jpeg'
  }
];

const teamMembers = [
  {
    label: 'Austin Chiatto',
    icon: '/images/austin-chiatto_memoji.webp',
    desc: 'Frontend Developer'
  },
  {
    label: 'Nicola Bower',
    icon: '/images/nicola-bower_memoji.webp',
    desc: 'UI/UX Designer'
  }
];

const techStack = [
  {
    label: 'Next.js',
    icon: '/icons/nextjs-original.svg',
    desc: 'Utilized for server components & more.'
  },
  {
    label: 'TypeScript',
    icon: '/icons/typescript-original.svg',
    desc: "Chosen for it's static typing to reduce errors during development."
  },
  {
    label: 'MUI',
    icon: '/icons/materialui-plain.svg',
    desc: 'Chosen for its flexibility and theme manipulation.'
  },
  {
    label: 'Vercel',
    icon: '/icons/vercel-original.svg',
    desc: 'A UI Component library customized to fit the project.'
  },
  {
    label: 'GitLab',
    icon: '/icons/gitlab-original.svg',
    desc: 'Utilized for version control because of its merge conflict handling.'
  },
  {
    label: 'NPM',
    icon: '/icons/npm-original-wordmark.svg',
    desc: 'Leveraged for package management.'
  },
  {
    label: 'VS Code',
    icon: '/icons/vscode-original.svg',
    desc: 'Utilized as the IDE.'
  },
  {
    label: 'Figma',
    icon: '/icons/figma-original.svg',
    desc: 'Utilized “Dev” mode to build components more efficiently.'
  },
  {
    label: 'Jira',
    icon: '/icons/jira-original.svg',
    desc: 'Chosen for project management to track tickets and sprints.'
  },
  {
    label: 'Slack',
    icon: '/icons/slack-original.svg',
    desc: 'Selected for team communication.'
  }
];

const article = [
  {
    markdownSection: [
      '## Project Development',
      '### Initialization',
      'Initial requirements had me clone the repository from **GitLab**, install **MUI** as a dependency, and learn the basics of **Nest.js App Router**.'
    ]
  },
  {
    markdownSection: [
      '### Material-UI',
      "I developed a flexible **MUI theme** that is compatible with both base and custom components utilizing a theme provider. I created palettes for *light and dark modes* that are set automatically based on the user's browser settings. I adjusted typography properties, and built component overrides to match the companies style guide and design documents."
    ]
  },
  {
    markdownSection: [
      '### Static Type',
      "I learned how to use **TypeScript's static type system** and how to navigate typing while avoiding ambiguous types like *any*."
    ]
  },
  {
    markdownSection: [
      '### Email API',
      "I worked with **SendGrid's email API** and utilized async functions, **POST requests**, and implemented error handling while building a customer *feedback modal*."
    ]
  },
  {
    markdownSection: [
      '### Version Control',
      'I incorporated industry standards, creating *feature branches*, *merge requests*, and refined my commit messages with the help of **Conventional Commits**.'
    ]
  },
  {
    markdownSection: [
      '### Vercel',
      'I managed a project in **Vercel**, where I learned how to create environments, connect domains, and link backends.'
    ]
  },
  {
    markdownSection: [
      '### Best Practices',
      'I implemented best practices, such as writing comment blocks that avoid redundancy, writing clean and readable code by introducing methods like *guard clauses*, and using descriptive and standardized naming conventions.'
    ]
  }
];

export const MarketMaestroData = {
  externalLinks,
  teamMembers,
  techStack,
  article
};
