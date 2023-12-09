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
  // work
  {
    id: 'work',
    level: 1,
    intro: {
      title: 'Work',
      desc: 'Work Description'
    },
    panelComponent: 'CategoryContentList',
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
          desc: 'The aim of this project was to create an accessible landing page that enables new users to discover and learn about the Market Maestro application, while also facilitating the sign-in process for the existing user base.'
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
          externalLinks: [{ label: 'Visit Live Site', href: 'https://www.marketmaestro.ca/' }],
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
            id: 'ProjectTech',
            level: 3,
            intro: {
              title: 'Project Technology',
              desc: 'testing'
            },
            panelComponent: 'AboutMe',
            panelComponentProps: {
              key: 'value'
            }
          }
        ]
      }
    ]
  },
  // projects
  {
    id: 'projects',
    level: 1,
    intro: {
      title: 'Projects',
      desc: 'Projects Description'
    },
    panelComponent: 'CategoryContentList',
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
          cardDesc: '',
          technology: [
            { label: 'JavaScript', icon: '/path', desc: 'Used for game logic' },
            { label: 'HTML Canvas', icon: '/path', desc: 'Renders the game to the screen' },
            { label: 'CSS', icon: '/path', desc: 'Used to style the page apart from the renderer' }
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
            panelComponent: 'AboutMe',
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
          cardDesc: '',
          technology: [
            { label: 'JavaScript', desc: 'Used for game logic' },
            { label: 'HTML Canvas', desc: 'Renders the game to the screen' },
            { label: 'CSS', desc: 'Used to style the page apart from the renderer' }
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
          cardDesc: '',
          technology: [
            { label: 'JavaScript', desc: 'Used for game logic' },
            { label: 'HTML Canvas', desc: 'Renders the game to the screen' },
            { label: 'CSS', desc: 'Used to style the page apart from the renderer' }
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
          cardDesc: '',
          technology: [
            { label: 'JavaScript', desc: 'Used for game logic' },
            { label: 'HTML Canvas', desc: 'Renders the game to the screen' },
            { label: 'CSS', desc: 'Used to style the page apart from the renderer' }
          ]
        }
      }
    ]
  },
  // notes
  {
    id: 'notes',
    level: 1,
    intro: {
      title: 'Just for fun',
      desc: 'Notes Description'
    },
    panelComponent: 'NoteContentList',
    panelComponentProps: {
      key: 'value'
    },
    // notes - level 2
    childPanels: [
      {
        id: 'note',
        level: 2,
        intro: {
          title: 'Note One',
          desc: 'Note One Description'
        },
        panelComponent: 'NoteDetails',
        panelComponentProps: {
          key: 'value'
        }
      }
    ]
  },
  // about
  {
    id: 'about',
    level: 1,
    intro: {
      title: 'About Me',
      desc: 'About Description'
    },
    panelComponent: 'AboutMe',
    panelComponentProps: {
      key: 'value'
    },
    // about - level 2
    childPanels: [
      {
        id: 'marketMaestro',
        level: 2,
        intro: {
          title: 'About Me',
          desc: 'About Me Description'
        },
        panelComponent: 'AboutMeDetails',
        panelComponentProps: {
          key: 'value'
        }
      }
    ]
  }
];

export const panelDataObject = panelData.reduce(
  (obj: { [key: string]: any }, item: { id: string }) => {
    obj[item.id] = item;
    return obj;
  },
  {}
);
