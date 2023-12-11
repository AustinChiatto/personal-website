import ProjectCard from '../../ProjectCard/ProjectCard';
import { PanelProps } from '@/data/panelData';

type ContentProps = {
  content: any;
};

const CategoryContentList = ({ content }: ContentProps) => {
  console.log(content);
  const categoryList: PanelProps[] = content.childPanels;
  return (
    <>
      {categoryList.map((e, i) => (
        <ProjectCard
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

export default CategoryContentList;
