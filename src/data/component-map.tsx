import ProjectList from '@/components/panel-components/ProjectList/ProjectList';
import ProjectDetails from '@/components/panel-components/ProjectDetails/ProjectDetails';
import ProjectTechStack from '@/components/panel-components/ProjectDetails/ProjectTechStack/ProjectTechStack';
import ResourceList from '@/components/panel-components/ResourceList/ResourceList';
import ResourceContent from '@/components/panel-components/ResourceContent/ResourceContent';
import AboutContent from '@/components/panel-components/AboutMe/AboutMe';

export type PanelType =
  | 'ProjectList'
  | 'ProjectDetails'
  | 'ProjectTechStack'
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
  AboutContent
};
