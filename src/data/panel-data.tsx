import { ListCardProps } from '@/components/ListCard/ListCard';
import { componentMap } from './component-map';
// project-data imports
import { MarketMaestroData } from './project-data/market-maestro-data';
import { AsteroidRunData } from './project-data/asteroid-run-data';
import { GridToolData } from './project-data/grid-builder-data';
import { Code2ImageData } from './project-data/code2image-data';
import { ArticleProps, ExternalLinkProps, TechStackProps } from './project-data/types';

type IntroProps = {
  title: string;
  desc?: string;
};

type PanelComponentProps = {
  image?: string;
  cardDesc?: string;
  externalLinks?: ExternalLinkProps[];
  listCards?: ListCardProps[];
  article?: ArticleProps[];
  techStack?: TechStackProps[];
  categoryButtonList?: Array<Record<string, string>>;
};

export type PanelProps = {
  id: string;
  level: number;
  intro: IntroProps;
  panelComponent: keyof typeof componentMap;
  panelComponentProps?: PanelComponentProps;
  childPanels?: PanelProps[];
  panelRef?: React.RefObject<HTMLDivElement>;
};

export const panelData = {
  id: 'landing',
  level: 1,
  intro: {
    title: 'Austin Chiatto',
    desc: 'Front-End Developer'
  },
  panelComponent: 'LandingPanel',
  panelComponentProps: {
    categoryButtonList: [
      {
        icon: '/icons/work-icon.svg',
        alt: 'Squiggly doodle of a star',
        title: 'Work',
        caption: "Websites I've built for others or as part of my career."
      },
      {
        icon: '/icons/projects-icon.svg',
        alt: 'Squiggly doodle of a diamond',
        title: 'Projects',
        caption: 'Self-directed projects that taught me something new.'
      },
      {
        icon: '/icons/about-icon.svg',
        alt: 'Squiggly asterisk doodle',
        title: 'About Me',
        caption: 'Who I am and what I love to do.'
      }
    ]
  },
  childPanels: [
    // Work
    {
      id: 'work',
      level: 2,
      intro: {
        title: 'Work'
      },
      panelComponent: 'ProjectList',
      // work - Market Maestro
      childPanels: [
        {
          id: 'marketMaestro',
          level: 3,
          intro: {
            title: 'Market Maestro',
            desc: 'This project involved transforming Figma design documents into a functional site and a set of themed MUI components.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/market-maestro_work-thumbnail.png',
            cardDesc:
              'Responsive Next.js site that I built as part of my internship with Dovetail Digital.',
            externalLinks: MarketMaestroData.externalLinks,
            listCards: [
              {
                cardTitle: 'Team Members',
                cardType: 'grid',
                cardContents: MarketMaestroData.teamMembers
              },
              {
                cardTitle: 'Tech Stack',
                cardType: 'list',
                buttonLabel: 'All Tools',
                buttonChildIdRef: 'projectTechStack',
                cardContents: MarketMaestroData.techStack
              }
            ],
            article: MarketMaestroData.article
          },
          // work - Market Maestro Technology
          childPanels: [
            {
              id: 'projectTechStack',
              level: 4,
              intro: {
                title: 'Project Stack',
                desc: 'The Languages and Tools used in the development of this project.'
              },
              panelComponent: 'ProjectTechStack',
              panelComponentProps: {
                techStack: MarketMaestroData.techStack
              }
            }
          ]
        }
      ]
    },
    // Projects
    {
      id: 'projects',
      level: 2,
      intro: {
        title: 'Projects'
      },
      panelComponent: 'ProjectList',
      // projects - level 2
      childPanels: [
        // Code2Image
        {
          id: 'Code2Image',
          level: 3,
          intro: {
            title: 'Code2Image',
            desc: 'Download and share beautiful images of your code.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/code2image_project-thumbnail.png',
            cardDesc:
              'A tool to create customized images of code snippets with style settings, such as syntax highlighting, background gradients, and more.',
            externalLinks: Code2ImageData.externalLinks,
            listCards: [
              {
                cardTitle: 'Tech Stack',
                cardType: 'list',
                buttonLabel: 'All Tools',
                buttonChildIdRef: 'projectTechStack',
                cardContents: Code2ImageData.techStack
              }
            ],
            article: Code2ImageData.article
          },
          childPanels: [
            {
              id: 'projectTechStack',
              level: 4,
              intro: {
                title: 'Project Stack',
                desc: 'The Languages and Tools used in the development of this project.'
              },
              panelComponent: 'ProjectTechStack',
              panelComponentProps: {
                techStack: Code2ImageData.techStack
              }
            }
          ]
        },
        // AsteroidRun
        {
          id: 'AsteroidRun',
          level: 3,
          intro: {
            title: 'Asteroid Run',
            desc: 'A browser-based game I built to teach myself object-oriented programming with JavaScript.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/asteroid-run_project-thumbnail.png',
            cardDesc:
              'A browser-based game I built to teach myself object-oriented programming with JavaScript.',
            externalLinks: AsteroidRunData.externalLinks,
            listCards: [
              {
                cardTitle: 'Tech Stack',
                cardType: 'list',
                buttonLabel: 'All Tools',
                buttonChildIdRef: 'projectTechStack',
                cardContents: AsteroidRunData.techStack
              }
            ],
            article: AsteroidRunData.article
          },
          childPanels: [
            {
              id: 'projectTechStack',
              level: 4,
              intro: {
                title: 'Project Stack',
                desc: 'The Languages and Tools used in the development of this project.'
              },
              panelComponent: 'ProjectTechStack',
              panelComponentProps: {
                techStack: AsteroidRunData.techStack
              }
            }
          ]
        },
        // GridTool
        {
          id: 'GridTool',
          level: 3,
          intro: {
            title: 'CSS Grid Tool',
            desc: 'Grids made simple.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/grid-tool_project-thumbnail.png',
            cardDesc: 'A tool to I built during my program to help my friends understand CSS Grid.',
            externalLinks: GridToolData.externalLinks,
            listCards: [
              {
                cardTitle: 'Tech Stack',
                cardType: 'list',
                buttonLabel: 'All Tools',
                buttonChildIdRef: 'projectTechStack',
                cardContents: GridToolData.techStack
              }
            ],
            article: GridToolData.article
          },
          childPanels: [
            {
              id: 'projectTechStack',
              level: 4,
              intro: {
                title: 'Project Stack',
                desc: 'The Languages and Tools used in the development of this project.'
              },
              panelComponent: 'ProjectTechStack',
              panelComponentProps: {
                techStack: GridToolData.techStack
              }
            }
          ]
        }
      ]
    },
    // About Me
    {
      id: 'about',
      level: 2,
      intro: {
        title: 'Hello',
        desc: "It's nice to meet you."
      },
      panelComponent: 'AboutContent'
    }
  ]
};
