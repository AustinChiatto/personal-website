import ProjectSummaryCard from '../../ProjectSummaryCard/ProjectSummaryCard';
import { PanelProps } from '@/data/panel-data';

const ProjectList = ({ panelContent }: { panelContent: PanelProps }) => {
  const panelChildrenArray: PanelProps[] = panelContent.childPanels ?? [];
  return (
    <>
      {panelChildrenArray.map((e, i) => (
        <ProjectSummaryCard
          key={i}
          title={e.intro.title}
          desc={e.panelComponentProps.cardDesc}
          image={e.panelComponentProps.image}
          cardData={e}
          index={i}
        />
      ))}
    </>
  );
};

export default ProjectList;
