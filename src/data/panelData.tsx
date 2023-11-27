import AboutContent from '@/components/panelContent/AboutContent';
import NotesContent from '@/components/panelContent/NotesContent';
import ProjectListContent from '@/components/panelContent/ProjectListContent';
import WorkListContent from '@/components/panelContent/WorkListContent';

type IntroProps = {
  title: string;
  desc: string;
};

type PanelProps = {
  intro: IntroProps;
  content: React.ReactNode;
};

export const workListData: PanelProps[] = [
  {
    intro: {
      title: 'Work',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <WorkListContent />
  }
];

export const projectListData: PanelProps[] = [
  {
    intro: {
      title: 'Projects',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <ProjectListContent />
  }
];

export const noteListData: PanelProps[] = [
  {
    intro: {
      title: 'Notes',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <NotesContent />
  }
];

export const aboutListData: PanelProps[] = [
  {
    intro: {
      title: 'About Me',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: <AboutContent />
  }
];
