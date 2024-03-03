import { ListCardProps } from '@/components/ListCard/ListCard';
import { componentMap } from './component-map';
// project-data imports
import { MarketMaestroData } from './project-data/market-maestro-data';
import { Code2ImageData } from './project-data/code2image-data';
import { AsteroidRunData } from './project-data/asteroid-run-data';
import { GridToolData } from './project-data/grid-builder-data';
import { ShallotData } from './project-data/shallot-data';
import { ArticleProps, ExternalLinkProps, TechStackProps } from './project-data/types';

type IntroProps = {
  title: string;
  desc?: string;
};

type PanelComponentProps = {
  image?: string;
  imageBase64?: string;
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
            image: '/images/market-maestro_work-thumbnail.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACAAAAABBuOuVAAAA8ElEQVQYGXWPy0rEQBBFT1d6knQmPpiVKD6XKvhp/oHowv9zNgpRUNw4g6PjvEjS6SR2xtl6obgFdYpbpa7u39redg19R2UcyW6DMxWS1pitloUpcIlDUwSkqXCyE1FoD0tFI5qBFoSaTxfwmi89mAdMvx0zazk/1USRRpoAVzoelitInU8TdDvPYfFMpUuGY3+C8RVtvOvjBrk4RDeTF4rHa+rS8p/6tzc+uvSXeEjimEvpcRQlGCUM8zlZ7qM7ecaDwbpPzo7JpjPe9/ewPzP0wYDwY4SdfG1Ap+6UUqyesr/l0XjtEoY0/sFuhhV+AZF6ZjxYMTuVAAAAAElFTkSuQmCC',
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
            image: '/images/code2image_project-thumbnail.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACAAAAABBuOuVAAABCElEQVQYGV2QS0rDUBSGv9xH0puk0QSrUhDBF+gahM5cjLtw0EU4cQW6BHcgCE46cODEVhQVqkma5nW9Y8/k8B8+fj6Od31+Z0P5SzKsUatPYlMxsD8YuyROIcgXGJGj1tagtcWGLfFBim9zNAUUH5BK1s9LhO0c2IeIVYefg/pqUVXFMLF43w22LPC7AQJ3t9GQ0UlEIFZIr8QXAQi3M4NwWYkRzcsMlR1lXExTwiji/8znr9R1g765RbXWVStnVRQ8LCKm93C8JzExdGafy9MOHOMcA7SSKKWQGiaHJZPxG9nWmMfco+x99wEHtlZfzZ7e2TxLEDJkIxbsbu+gQufdV3iixzH8AUmFX3S9RZUkAAAAAElFTkSuQmCC',
            cardDesc: 'Built to learn the basics of React.',
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
            desc: 'Created to teach myself JavaScript object-oriented programming.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/asteroid-run_project-thumbnail.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACAAAAABBuOuVAAAA7UlEQVQYGSWQTU7DMBCFP/8kJU2FWEAFYk8FCxZsOQQ34Q5cpitu03UXVEJCFWoFTUNiOzbj9C3smTd+o/esXp/bRK1wGqig8aBr6BUcpM78j0voIsnAJxb3inoCt9eKoYVZCU8PCrkoIth8pB6268TFHMwMlJHHFj4/Er5JWNlqh/DLV7cSAvwGBmNwDHgZRm3pVODs/BG7O654X79Q6ikutlTVlElhadqem8srdoc9d4sl1ojHEWJeKY1znu6vJdPb7z19OGJzDiseR4yCRIyBopRUAiXiDJPDiJW3sZMihdP6EORfBDGdeiuCf0xbXpa5Y9CEAAAAAElFTkSuQmCC',
            cardDesc: 'Created to teach myself JavaScript object-oriented programming.',
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
            title: 'Grid Tool',
            desc: 'Grids made simple.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/grid-tool_project-thumbnail.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAA7eLj1AAABGklEQVQYGT2Qu0oDQRiFv52dJAREDai9lY34BnbWNr6Dj5HSt0lt50vYCYaAJooRFUzc7M7l9+xGHJhhznAu/5zienIfQki+CjWrTcXX5oeXas2sXpOaCmINFqKfzxc+xEgVG1YxsJTgNTekHIAMgxJ86f3j/Imbq3OSGbVlbcMKEQpYvr8RcmT8MMU/LJ65OD2mEMl7pxiTk3iFmJyIb4ynM5wtlx343gRyFmnLI6UknGmfcAXePj86dSnQqltDa+P/neVuCV/opyFZ59aGmY5W0q5tvO5JY5Eik9s7sqJcWWKl5vQe+j39uIcbDpChpGeXRqOuspBTFYM+7AxhfxcO9uBwBEcjHM5FZXRRfwN29bVxSKveVDrxF4SMm0shJXLmAAAAAElFTkSuQmCC',
            cardDesc: 'CSS grid tool that I built to learn React.',
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
        },
        // shallot
        {
          id: 'Shallot',
          level: 3,
          intro: {
            title: 'Shallot',
            desc: 'Retro handheld theme that I designed for fun.'
          },
          panelComponent: 'ProjectDetails',
          panelComponentProps: {
            image: '/images/shallot_project-thumbnail.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAA7eLj1AAABS0lEQVQYGT2QzU4UQRSFv5q+VdXT0wPoRIEQdONbQHBnfAd3vgcP4JPwAixYiSxIeAHjho1xoRFmtGf6r7qrq6nZcJK7OfnuPblHfbq46xcrJXHYKxSzFhKlwELIAsN0oE8HL94F8Y2iXhUsf95jnWJClIHF62NeHR8hCSJj56FXfP9xzeXVly3yrM8fzzl485ZkS7pNgasS+s6RWcvp+xOMnXL99Rvj9vRkRCUKqVcPlGuhdTW1c9zc3GKMoaoq+tDR9g26D8jm8Q+T2rDzcpezkw/4YWBUgTzJ2D88YtOsMaVBytVfVGd492JBuRHmewfkY46ue3Q2p1gvsWoawWJJ8EKVGmb5PlZHczrDS0sd45uhJh0apCn/Mwbh9z8hDTYu6VigEJzl8WFJqjXed/HrtvJjSORX67AR0EqTTgy5mbFjPfM0Y/SDfwI7+JQrfFtk0AAAAABJRU5ErkJggg==',
            cardDesc: 'Retro handheld theme that I designed for fun.',
            externalLinks: ShallotData.externalLinks,
            listCards: [
              {
                cardTitle: 'Tech Stack',
                cardType: 'list',
                buttonLabel: 'All Tools',
                buttonChildIdRef: 'projectTechStack',
                cardContents: ShallotData.techStack
              }
            ],
            article: ShallotData.article
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
                techStack: ShallotData.techStack
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
      panelComponent: 'AboutContent',
      childPanels: [
        {
          panelComponentProps: {
            image: '/images/grid-tool_project-thumbnail.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABhElEQVQoFT1R247UMAy1HbtN06aXmZKd1QDahWUREuKBhxUv/P9nrITEByBEp9NLgksBP1iyc3yOj4MhBABAxKQBhBD3UjuAhoiB9qxFjoaZ6MvTEyd9TbCu6XK56KCiMynneRTJjOA0/aqc70P9/PzNcPb48FlMdqxvmABjiinFZd50tojLsi5Kxatcr5NE8/06juPgbLo/vHaS37UnVgUiiv9GABKhdlBZIsxKcl3WafypWyjsY3+qcnPX1fzXgzF/hPakUwiKIpPmRdU3DIBF+nTy3tk+NIybaUHSsR+7N0XENfmmHYbB5EiJYb3q1UTk4W1wtS1f9gycce5jVL6dFAmZWMbLpPuq5QjqXE8FmHF4/4p9Lt2BOa9zd4A1qat9xZiWeZ0US6j2/vOhMcbdn9kWWFi2vi/cUSKM3RnTIgiWuKhuy7LMOA7TnEBmmIX5zeM76TqyTn+QffmiqcOtrb+ePwSeTqW56Wzbt2Vos2OTtZ4qbwqbF645HoyrtpUQfwOUU4v6i3SO+gAAAABJRU5ErkJggg=='
          }
        },
        {
          panelComponentProps: {
            image: '/images/about-image.webp',
            imageBase64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABhElEQVQoFT1R247UMAy1HbtN06aXmZKd1QDahWUREuKBhxUv/P9nrITEByBEp9NLgksBP1iyc3yOj4MhBABAxKQBhBD3UjuAhoiB9qxFjoaZ6MvTEyd9TbCu6XK56KCiMynneRTJjOA0/aqc70P9/PzNcPb48FlMdqxvmABjiinFZd50tojLsi5Kxatcr5NE8/06juPgbLo/vHaS37UnVgUiiv9GABKhdlBZIsxKcl3WafypWyjsY3+qcnPX1fzXgzF/hPakUwiKIpPmRdU3DIBF+nTy3tk+NIybaUHSsR+7N0XENfmmHYbB5EiJYb3q1UTk4W1wtS1f9gycce5jVL6dFAmZWMbLpPuq5QjqXE8FmHF4/4p9Lt2BOa9zd4A1qat9xZiWeZ0US6j2/vOhMcbdn9kWWFi2vi/cUSKM3RnTIgiWuKhuy7LMOA7TnEBmmIX5zeM76TqyTn+QffmiqcOtrb+ePwSeTqW56Wzbt2Vos2OTtZ4qbwqbF645HoyrtpUQfwOUU4v6i3SO+gAAAABJRU5ErkJggg=='
          }
        }
      ]
    }
  ]
};
