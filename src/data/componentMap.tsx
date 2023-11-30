import CategoryContentList from '@/components/panelContent/CategoryContentList/CategoryContentList';
import WorkDetails from '@/components/panelContent/WorkDetails/WorkDetails';
import ProjectDetails from '@/components/panelContent/ProjectDetails/ProjectDetails';
import NoteContentList from '@/components/panelContent/NoteContentList/NoteContentList';
import NoteDetails from '@/components/panelContent/NoteDetails/NoteDetails';
import AboutMe from '@/components/panelContent/AboutMe/AboutMe';
import AboutMeDetails from '@/components/panelContent/AboutMeDetails/AboutMeDetails';

export type PanelType =
  | 'CategoryContentList'
  | 'WorkDetails'
  | 'ProjectDetails'
  | 'NoteContentList'
  | 'NoteDetails'
  | 'AboutMe'
  | 'AboutMeDetails';

export const componentMap: Record<string, any> = {
  CategoryContentList: <CategoryContentList />,
  WorkDetails: <WorkDetails />,
  ProjectDetails: <ProjectDetails />,
  NoteContentList: <NoteContentList />,
  NoteDetails: <NoteDetails />,
  AboutMe: <AboutMe />,
  AboutMeDetails: <AboutMeDetails />
};
