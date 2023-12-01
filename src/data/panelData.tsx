import { componentMap } from './componentMap';

type IntroProps = {
  title: string;
  desc: string;
};

export type PanelProps = {
  id: string;
  level: number;
  intro: IntroProps;
  childComponent: keyof typeof componentMap;
  contentProps: Record<string, any>; //todo: assign correct type
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
    contentProps: {
      key: 'value'
    },
    childComponent: 'CategoryContentList',
    // work - level 2
    childPanels: [
      {
        id: 'marketMaestro',
        level: 2,
        intro: {
          title: 'Market Maestro',
          desc: 'Market Maestro Description'
        },
        contentProps: {
          image: '/images/market-maestro_work-thumbnail.png',
          chips: ['JavaScript', 'HTML', 'CSS']
        },
        childComponent: 'WorkDetails',
        // work - level 3
        childPanels: [
          {
            id: 'marketMaestroDetails',
            level: 3,
            intro: {
              title: 'Market Maestro Details',
              desc: 'Market Maestro Description'
            },
            contentProps: {
              key: 'value'
            },
            childComponent: 'WorkDetails'
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
    contentProps: {
      key: 'value'
    },
    childComponent: 'CategoryContentList',
    // projects - level 2
    childPanels: [
      {
        id: 'AsteroidRun',
        level: 2,
        intro: {
          title: 'Asteroid Run',
          desc: 'A browser-based game I built to teach myself object-oriented programming with JavaScript.'
        },
        contentProps: {
          image: '/images/asteroid-run_project-thumbnail.png',
          chips: ['JavaScript', 'HTML', 'CSS']
        },
        childComponent: 'ProjectDetails'
      },
      {
        id: 'Code2Image',
        level: 2,
        intro: {
          title: 'Code2Image',
          desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
        },
        contentProps: {
          image: '/images/code2image_project-thumbnail.png',
          chips: ['JavaScript', 'HTML', 'CSS']
        },
        childComponent: 'ProjectDetails'
      },
      {
        id: 'Shallot',
        level: 2,
        intro: {
          title: 'Shallot',
          desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
        },
        contentProps: {
          image: '/images/market-maestro_work-thumbnail.png',
          chips: ['JavaScript', 'HTML', 'CSS']
        },
        childComponent: 'ProjectDetails'
      },
      {
        id: 'ReactDeploymentChecklist',
        level: 2,
        intro: {
          title: 'React Deployment Checklist',
          desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
        },
        contentProps: {
          image: '/images/code2image_project-thumbnail.png',
          chips: ['JavaScript', 'HTML', 'CSS']
        },
        childComponent: 'ProjectDetails'
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
    contentProps: {
      key: 'value'
    },
    childComponent: 'NoteContentList',
    // notes - level 2
    childPanels: [
      {
        id: 'note',
        level: 2,
        intro: {
          title: 'Note One',
          desc: 'Note One Description'
        },
        contentProps: {
          key: 'value'
        },
        childComponent: 'NoteDetails'
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
    contentProps: {
      key: 'value'
    },
    childComponent: 'AboutMe',
    // about - level 2
    childPanels: [
      {
        id: 'marketMaestro',
        level: 2,
        intro: {
          title: 'About Me',
          desc: 'About Me Description'
        },
        contentProps: {
          key: 'value'
        },
        childComponent: 'AboutMeDetails'
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
