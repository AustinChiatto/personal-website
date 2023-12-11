import CategoryContentList from '@/components/panelComponents/CategoryContentList/CategoryContentList';
import ProjectDetails from '@/components/panelComponents/ProjectDetails/ProjectDetails';
import ProjectStack from '@/components/panelComponents/ProjectDetails/ProjectStack/ProjectStack';
import ProjectTeam from '@/components/panelComponents/ProjectDetails/ProjectTeam/ProjectTeam';
import NoteContentList from '@/components/panelComponents/NoteContentList/NoteContentList';
import NoteDetails from '@/components/panelComponents/NoteDetails/NoteDetails';
import AboutMe from '@/components/panelComponents/AboutMe/AboutMe';
import AboutMeDetails from '@/components/panelComponents/AboutMeDetails/AboutMeDetails';

export type PanelType =
  | 'CategoryContentList'
  | 'ProjectDetails'
  | 'ProjectStack'
  | 'ProjectTeam'
  | 'NoteContentList'
  | 'NoteDetails'
  | 'AboutMe'
  | 'AboutMeDetails';

// todo: assign correct type
export const componentMap: Record<string, any> = {
  CategoryContentList,
  ProjectDetails,
  ProjectStack,
  ProjectTeam,
  NoteContentList,
  NoteDetails,
  AboutMe,
  AboutMeDetails
};
