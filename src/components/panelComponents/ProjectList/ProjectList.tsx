import ProjectSummaryCard from '../../ProjectSummaryCard/ProjectSummaryCard';
import { PanelProps } from '@/data/panelData';

type ContentProps = {
  panelContent: any;
};

const ProjectList = ({ panelContent }: ContentProps) => {
  const panelChildrenArray: PanelProps[] = panelContent.childPanels;
  return (
    <>
      {panelChildrenArray.map((e, i) => (
        <ProjectSummaryCard
          key={i}
          title={e.intro.title}
          desc={e.panelComponentProps.cardDesc}
          image={e.panelComponentProps.image}
          data={e}
          index={i}
        />
      ))}
    </>
  );
};

export default ProjectList;
