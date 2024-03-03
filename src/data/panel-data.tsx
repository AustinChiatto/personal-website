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
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABvklEQVQoFU1Qy24TQRDsnp3ZXXstP3gJJQgkDjwkpOQL+A++gQ/ggHKAAxJ/gQTikDMXEEhcckHhGBEpQQk4xsHx2s6+Zmd2todZ2wfq1Oru6uoqnMgFANVg81qdVufHdDak6QxSDSVY1sbgOl65w27c47c2vKstxhHAYz53HEnVx69fXj1/TYOuOB1ZN2lAAGxdBT6zAFrv7n/eCLsciOVG78fDvb8/WZL+x3H7a05TKe04rvgwPviRXFRk+ffp+bfJeJ4a113p3PbCx8FAWNpkISK+zH5jo9xgNCv25J8ORPxwlC5Kkxm5GhRbDw+VOej3+WLOyH0GgHeJbOvoxL0dKxloddLO2Cwzk7ws9dqQP5667XD4i+WS5TkJbjodEcdLq5BJupBFklc8ThXWfkhilYGYzlkhAWngBQVYnhVYVeA6S7RNpJWXdGsG2gdmleccNxlYMpimLC02NUVS4mW25DTe0IIUmQDutrm1VoHZvv/o6YsHYD2G5IIZHh2/f/tOeF4P6dnODiHUdQ1kdutWiZVlFp+8+WQD0+sDdPMsmunOpeZKgbLueKOOPvBQRyLvtZIeJFGasK1rN/8BPJj3hRIYC3cAAAAASUVORK5CYII=',
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
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABxklEQVQoFSVQu25TQRCdnd31ffiVGGInKEZIoUHIogIhBBRIfACi5hdCS5OKgpKOmpZ/gIYKRQniJSHoLJIAUcAvfOO9np1hLoy0K83umTPnHHP19hfr2CGjEVmGuJhSeRIWhyV9X9JJpCnFeYxF5EJiSXGxZNrsd52wjdE2cvN4p2ONsJRAJUkpihMBE4GFIe7u755ptx5u77BQXC7M9bvfnMONdXz2tP1nctxb61qdNrob/pcxKkMbBsDO6hYz9c+fc0meuRTSFWxldnRMiAhgXn6GJ698nkNWh6QJWVMeXeGtJnPUz4rNYe59HX1HN8D6Zl+Elf7Xwgz6dH9AtbTma/bFMMzFKlog6KnGTOZsG01HpYA3YCzqu/Ow0oC1NNQbKcOynRaIjQqu5plEopPUUgOpxc/fFbeOPg6vXbhztpd43BvJ0Sfw2SjJ4KeVe07FCcegPoXJUc1CAno/MF9HFy/fLMZKeqMfL/UQTN26CMagla4qAU1VWzUPLhgQiwH4w8aAuUBpmh/jKj1bRc1VSZyfHp5OJZSA/xyqyCgmMBzM7PbrAD5gSi7nNBHnK7dM5XwymwwPxm/3Zu/f2NUOjX4r6V+oi/AKr3gGcwAAAABJRU5ErkJggg==',
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
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABhElEQVQoFT1R247UMAy1HbtN06aXmZKd1QDahWUREuKBhxUv/P9nrITEByBEp9NLgksBP1iyc3yOj4MhBABAxKQBhBD3UjuAhoiB9qxFjoaZ6MvTEyd9TbCu6XK56KCiMynneRTJjOA0/aqc70P9/PzNcPb48FlMdqxvmABjiinFZd50tojLsi5Kxatcr5NE8/06juPgbLo/vHaS37UnVgUiiv9GABKhdlBZIsxKcl3WafypWyjsY3+qcnPX1fzXgzF/hPakUwiKIpPmRdU3DIBF+nTy3tk+NIybaUHSsR+7N0XENfmmHYbB5EiJYb3q1UTk4W1wtS1f9gycce5jVL6dFAmZWMbLpPuq5QjqXE8FmHF4/4p9Lt2BOa9zd4A1qat9xZiWeZ0US6j2/vOhMcbdn9kWWFi2vi/cUSKM3RnTIgiWuKhuy7LMOA7TnEBmmIX5zeM76TqyTn+QffmiqcOtrb+ePwSeTqW56Wzbt2Vos2OTtZ4qbwqbF645HoyrtpUQfwOUU4v6i3SO+gAAAABJRU5ErkJggg==',
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
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABk0lEQVQoFT1QzW4TMRAej+3dZLspVapIbRWJwgFx5dZH4aXgcbhz6yEXJCQQET+CCFqilmSb2uv12NPZjcrIsuzRfD/zqW/LjWJgTt7l9Sr//MFXv7jZqi6AglxWanrM86dqfq6nMyxKrRQXlVHfv2xypBR5/uLA2FJGQWlmhqHkgUqtVqvFYnF6dnaYnk9mdlQbtfywXi+3vkkXr58RU6lNyoAISmgfwaonSoj47s3H81fTk5dH2Hz913y+0sFJtw0kKgKQErH9DYAAWZDSwqa5+fTbXe8wXv81OcTInThNKqUkACLKOYtazr3X/Vf+5KMNPt7eIlC630RuO2MlGpFEmeYeC4Icak+RpN3tPN1HnRKSa8cYqwpgGB0MiiMxJib1YE8J17AeP5mIdJdawnJszIH1QTsCY2wXQp+dCP9fSbbqD2vEHRXFYWGsRGasa4SUJqWuNNlipIEHegaNWuZRMnzMqSPvGIzE7WNdx+zuLt++1/W4PDkaHVdlXaBBiS/H3DW+/XMXbrbs4uxUIpZWfAATe/NUxwUmEQAAAABJRU5ErkJggg==',
            cardDesc: 'A CSS grid tool built to learn React.',
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
