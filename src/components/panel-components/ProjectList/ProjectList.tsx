import Typography from '@/components/Typography/Typography';
import ProjectSummaryCard from './ProjectSummaryCard/ProjectSummaryCard';
import { PanelProps } from '@/data/panel-data';

const ProjectList = ({ panelContent }: { panelContent: PanelProps }) => {
  const panelChildrenArray: PanelProps[] = panelContent.childPanels ?? [];
  return (
    <>
      {panelChildrenArray.slice(0, 2).map((e, i) => (
        <ProjectSummaryCard
          key={i}
          title={e.intro.title}
          desc={e.panelComponentProps?.cardDesc ?? ''}
          image={e.panelComponentProps?.image ?? ''}
          imageBase64={e.panelComponentProps?.imageBase64 ?? ''}
          cardData={e}
          featured
          index={i}
        />
      ))}
      <Typography level={2}>All Projects</Typography>
      {panelChildrenArray.slice(2).map((e, i) => (
        <ProjectSummaryCard
          key={i}
          title={e.intro.title}
          desc={e.panelComponentProps?.cardDesc ?? ''}
          image={e.panelComponentProps?.image ?? ''}
          imageBase64={e.panelComponentProps?.imageBase64 ?? ''}
          cardData={e}
          index={i}
        />
      ))}
    </>
  );
};

export default ProjectList;
