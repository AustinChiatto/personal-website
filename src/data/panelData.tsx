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
    // work - level 2
    childPanels: [
      {
        id: 'marketMaestro',
        level: 2,
        intro: {
          title: 'Market Maestro',
          desc: 'Market Maestro Description'
        },
        panelComponent: 'WorkDetails',
        panelComponentProps: {
          image: '/images/market-maestro_work-thumbnail.png',
          technology: [
            { label: 'JavaScript', desc: 'Used for game logic' },
            { label: 'HTML Canvas', desc: 'Renders the game to the screen' },
            { label: 'CSS', desc: 'Used to style the page apart from the renderer' }
          ]
        },
        // work - level 3
        childPanels: [
          {
            id: 'marketMaestroDetails',
            level: 3,
            intro: {
              title: 'Market Maestro Details',
              desc: 'Market Maestro Description'
            },
            panelComponent: 'WorkDetails',
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
          technology: [
            { label: 'JavaScript', desc: 'Used for game logic' },
            { label: 'HTML Canvas', desc: 'Renders the game to the screen' },
            { label: 'CSS', desc: 'Used to style the page apart from the renderer' }
          ]
        }
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
      title: 'Notes',
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
