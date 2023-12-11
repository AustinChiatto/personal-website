import { componentMap } from './componentMap';

type IntroProps = {
  title: string;
  desc: string;
};

export type PanelProps = {
  id: string;
  level: number;
  intro: IntroProps;
  panelComponent: keyof typeof componentMap;
  panelComponentProps: Record<string, any>; //todo: assign correct type
  childPanels?: PanelProps[];
  panelRef?: React.RefObject<HTMLDivElement>;
};

export const panelData = [
  // Work
  {
    id: 'work',
    level: 1,
    intro: {
      title: 'Work'
      // desc: "A collection of websites I've built for or with others as part of my career."
    },
    panelComponent: 'ProjectList',
    panelComponentProps: {
      key: 'value'
    },
    // work - Market Maestro
    childPanels: [
      {
        id: 'marketMaestro',
        level: 2,
        intro: {
          title: 'Market Maestro',
          desc: 'This project involved transforming Figma design documents into a functional site and a set of themed MUI components.'
        },
        panelComponent: 'ProjectDetails',
        panelComponentProps: {
          image: '/images/market-maestro_work-thumbnail.png',
          cardDesc:
            'Responsive Next.js site that I built as part of my internship with Dovetail Digital.',
          listCards: [
            [
              {
                label: 'Next.js',
                icon: '/path',
                desc: 'Utilized for server components & more.'
              },
              {
                label: 'TypeScript',
                icon: '/path',
                desc: 'Used for static typing to reduce errors.'
              },
              {
                label: 'MUI',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              },
              {
                label: 'Vercel',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              }
            ],
            [
              {
                label: 'Austin Chiatto',
                icon: '/path',
                desc: 'Frontend Developer'
              },
              {
                label: 'Nicola Bower',
                icon: '/path',
                desc: 'UI/UX Designer'
              }
            ]
          ],
          externalLinks: [{ label: 'marketmaestro.ca', href: 'https://www.marketmaestro.ca/' }],
          article: [
            {
              markdown: ['## Project Development']
            },
            {
              markdown: ['### Initialization', 'Cloned the base repo from Git labs, etc..']
            },
            {
              markdown: ['### Theming', 'Cloned the base repo from Git labs, etc..']
            },
            {
              markdown: ['### TypeScript Hurdles', 'Cloned the base repo from Git labs, etc..']
            },
            {
              markdown: ['### Next.js API', 'Cloned the base repo from Git labs, etc..']
            },
            {
              markdown: ['### Deploying with Vercel', 'Cloned the base repo from Git labs, etc..']
            }
          ]
        },
        // work - Market Maestro Technology
        childPanels: [
          {
            id: 'ProjectTechStack',
            level: 3,
            intro: {
              title: 'Project Stack',
              desc: 'The languages, tools, and methodologies behind the construction of this project, as well as how and why I chose to implement them over others.'
            },
            panelComponent: 'ProjectTechStack',
            panelComponentProps: {
              key: 'value'
            }
          },
          {
            id: 'ProjectTeamMembers',
            level: 3,
            intro: {
              title: 'The Team',
              desc: 'The roles and responsibilities of each person who contributed to this project.'
            },
            panelComponent: 'ProjectTeamMembers',
            panelComponentProps: {
              key: 'value'
            }
          }
        ]
      }
    ]
  },
  // Projects
  {
    id: 'projects',
    level: 1,
    intro: {
      title: 'Projects',
      desc: 'Projects Description'
    },
    panelComponent: 'ProjectList',
    panelComponentProps: {
      key: 'value'
    },
    // projects - level 2
    childPanels: [
      {
        id: 'AsteroidRun',
        level: 2,
        intro: {
          title: 'Asteroid Run',
          desc: 'A browser-based game I built to teach myself object-oriented programming with JavaScript.'
        },
        panelComponent: 'ProjectDetails',
        panelComponentProps: {
          image: '/images/asteroid-run_project-thumbnail.png',
          cardDesc:
            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
          listCards: [
            [
              {
                label: 'Next.js',
                icon: '/path',
                desc: 'Utilized for server components & more.'
              },
              {
                label: 'TypeScript',
                icon: '/path',
                desc: 'Used for static typing to reduce errors.'
              },
              {
                label: 'MUI',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              },
              {
                label: 'Vercel',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              }
            ]
          ],
          externalLinks: [
            { label: 'Play Game', href: '#' },
            { label: 'Source Code', href: '#' }
          ],
          article: [
            {
              image: 'image?',
              markdown: [
                '## Initialization',
                'In the bustling town of *Haplost*, there was an endearingly eccentric baker named *Germaine*. He was famously known for his peculiar baking experiments. One day, Germaine got a wild idea: to create a bread so light that it would **literally float**. Intrigued by his own idea, he spent countless hours perfecting the recipe, often laughing to himself amidst floating clouds of flour. Germaine was not only a masterful baker, but evidently, a dreamer who believed in the unlikely.',
                'In the bustling town of *Haplost*, there was an endearingly eccentric baker named *Germaine*. He was famously known for his peculiar baking experiments. One day, Germaine got a wild idea: to create a bread so light that it would **literally float**. Intrigued by his own idea, he spent countless hours perfecting the recipe, often laughing to himself amidst floating clouds of flour. Germaine was not only a masterful baker, but evidently, a dreamer who believed in the unlikely.'
              ]
            }
          ]
        },
        childPanels: [
          {
            id: 'ProjectTech',
            level: 3,
            intro: {
              title: 'Project Technology',
              desc: 'testing'
            },
            panelComponent: 'AboutContent',
            panelComponentProps: {
              key: 'value'
            }
          }
        ]
      },
      {
        id: 'Code2Image',
        level: 2,
        intro: {
          title: 'Code2Image',
          desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
        },
        panelComponent: 'ProjectDetails',
        panelComponentProps: {
          image: '/images/code2image_project-thumbnail.png',
          cardDesc:
            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
          listCards: [
            [
              {
                label: 'Next.js',
                icon: '/path',
                desc: 'Utilized for server components & more.'
              },
              {
                label: 'TypeScript',
                icon: '/path',
                desc: 'Used for static typing to reduce errors.'
              },
              {
                label: 'MUI',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              },
              {
                label: 'Vercel',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              }
            ]
          ]
        }
      },
      {
        id: 'Shallot',
        level: 2,
        intro: {
          title: 'Shallot',
          desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
        },
        panelComponent: 'ProjectDetails',
        panelComponentProps: {
          image: '/images/market-maestro_work-thumbnail.png',
          cardDesc:
            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
          listCards: [
            [
              {
                label: 'Next.js',
                icon: '/path',
                desc: 'Utilized for server components & more.'
              },
              {
                label: 'TypeScript',
                icon: '/path',
                desc: 'Used for static typing to reduce errors.'
              },
              {
                label: 'MUI',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              },
              {
                label: 'Vercel',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              }
            ]
          ]
        }
      },
      {
        id: 'ReactDeploymentChecklist',
        level: 2,
        intro: {
          title: 'React Deployment Checklist',
          desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
        },
        panelComponent: 'ProjectDetails',
        panelComponentProps: {
          image: '/images/code2image_project-thumbnail.png',
          cardDesc:
            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
          listCards: [
            [
              {
                label: 'Next.js',
                icon: '/path',
                desc: 'Utilized for server components & more.'
              },
              {
                label: 'TypeScript',
                icon: '/path',
                desc: 'Used for static typing to reduce errors.'
              },
              {
                label: 'MUI',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              },
              {
                label: 'Vercel',
                icon: '/path',
                desc: 'A UI Component library customized to fit the project.'
              }
            ]
          ]
        }
      }
    ]
  },
  // Resources
  {
    id: 'resources',
    level: 1,
    intro: {
      title: 'Resources',
      desc: 'A bunch of stuff'
    },
    panelComponent: 'ResourceList',
    panelComponentProps: {
      key: 'value'
    },
    childPanels: [
      {
        id: 'Resource',
        level: 2,
        intro: {
          title: 'Resource',
          desc: 'Resource Description'
        },
        panelComponent: 'ResourceContent',
        panelComponentProps: {
          key: 'value'
        }
      }
    ]
  },
  // About Me
  {
    id: 'about',
    level: 1,
    intro: {
      title: 'About Me',
      desc: 'About Description'
    },
    panelComponent: 'AboutContent',
    panelComponentProps: {
      key: 'value'
    }
  }
];

export const panelDataObject = panelData.reduce(
  (obj: { [key: string]: any }, item: { id: string }) => {
    obj[item.id] = item;
    return obj;
  },
  {}
);
