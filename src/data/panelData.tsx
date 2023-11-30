import { componentMap } from './componentMap';

type IntroProps = {
  title: string;
  desc: string;
};

export type PanelProps = {
  id: string;
  level: number;
  intro: IntroProps;
  content: keyof typeof componentMap;
  contentProps: {
    key: string;
  };
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
    content: 'CategoryContentList',
    contentProps: {
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
        content: 'WorkDetails',
        contentProps: {
          key: 'value'
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
            content: 'WorkDetails',
            contentProps: {
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
    content: 'CategoryContentList',
    contentProps: {
      key: 'value'
    },
    // projects - level 2
    childPanels: [
      {
        id: 'projectOne',
        level: 2,
        intro: {
          title: 'Project One',
          desc: 'Project One Description'
        },
        content: 'ProjectDetails',
        contentProps: {
          key: 'value'
        }
      },
      {
        id: 'projectTwo',
        level: 2,
        intro: {
          title: 'Project Two',
          desc: 'Project Two Description'
        },
        content: 'ProjectDetails',
        contentProps: {
          key: 'value'
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
    content: 'NoteContentList',
    contentProps: {
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
        content: 'NoteDetails',
        contentProps: {
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
    content: 'AboutMe',
    contentProps: {
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
        content: 'AboutMeDetails',
        contentProps: {
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
