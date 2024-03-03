import Typography from '@/components/Typography/Typography';
import ProjectSummaryCard from './ProjectSummaryCard/ProjectSummaryCard';
import { PanelProps } from '@/data/panel-data';
import styles from './project-list.module.css';

const ProjectList = ({ panelContent }: { panelContent: PanelProps }) => {
  const panelChildrenArray: PanelProps[] = panelContent.childPanels ?? [];
  return (
    <>
      <section className={styles.featuredProjects}>
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
      </section>
      <Typography level={2}>All Projects</Typography>
      <section className={styles.allProjects}>
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
      </section>
    </>
  );
};

export default ProjectList;
