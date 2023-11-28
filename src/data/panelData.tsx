import AboutContent from '@/components/panelContent/AboutContent';
import NotesContent from '@/components/panelContent/NotesContent';
import ProjectListContent from '@/components/panelContent/ProjectListContent';
import WorkListContent from '@/components/panelContent/WorkListContent';

type IntroProps = {
  title: string;
  desc: string;
};

export type PanelProps = {
  level: number;
  intro: IntroProps;
  content: React.ReactNode;
};

export const workListData: PanelProps[] = [
  {
    level: 1,
    intro: {
      title: 'Work',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <WorkListContent />
  }
];

export const projectListData: PanelProps[] = [
  {
    level: 1,
    intro: {
      title: 'Projects',
      desc: 'This is a collection of self-directed projects done by me. Most we built with the intention to practice or teach myself something new, but some were done just for fun.'
    },
    content: <ProjectListContent />
  }
];

export const noteListData: PanelProps[] = [
  {
    level: 1,
    intro: {
      title: 'Notes',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <NotesContent />
  }
];

export const aboutListData: PanelProps[] = [
  {
    level: 1,
    intro: {
      title: 'About Me',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <AboutContent />
  }
];
