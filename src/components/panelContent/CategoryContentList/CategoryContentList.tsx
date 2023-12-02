import ProjectCard from '../../ProjectCard/ProjectCard';
import { panelDataObject, PanelProps } from '@/data/panelData';

const CategoryContentList = () => {
  const projectList: PanelProps[] = panelDataObject['projects'].childPanels;
  return (
    <>
      {projectList.map((e, i) => (
        <ProjectCard
          key={i}
          title={e.intro.title}
          desc={e.intro.desc}
          image={e.panelComponentProps.image}
          technology={e.panelComponentProps.technology}
          data={e}
          index={i}
        />
      ))}
    </>
  );
};

export default CategoryContentList;
