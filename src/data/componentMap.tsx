import ProjectList from '@/components/panelComponents/ProjectList/ProjectList';
import ProjectDetails from '@/components/panelComponents/ProjectDetails/ProjectDetails';
import ProjectTechStack from '@/components/panelComponents/ProjectDetails/ProjectTechStack/ProjectTechStack';
import ProjectTeamMembers from '@/components/panelComponents/ProjectDetails/ProjectTeamMembers/ProjectTeamMembers';
import ResourceList from '@/components/panelComponents/ResourceList/ResourceList';
import ResourceContent from '@/components/panelComponents/ResourceContent/ResourceContent';
import AboutContent from '@/components/panelComponents/AboutMe/AboutMe';

export type PanelType =
  | 'ProjectList'
  | 'ProjectDetails'
  | 'ProjectTechStack'
  | 'ProjectTeamMembers'
  | 'ResourceList'
  | 'ResourceContent'
  | 'AboutContent';

// todo: assign correct type
export const componentMap: Record<string, any> = {
  ProjectList,
  ProjectDetails,
  ProjectTechStack,
  ResourceList,
  ResourceContent,
  ProjectTeamMembers,
  AboutContent
};
