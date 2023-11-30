import ProjectCard from '../../ProjectCard/ProjectCard';
import asteroidRunProjectThumbnail from '@/assets/images/asteroid-run_project-thumbnail.png';
import code2ImageProjectThumbnail from '@/assets/images/code2image_project-thumbnail.png';
import { panelDataObject, PanelProps } from '@/data/panelData';

const projectList = [
  {
    title: 'Asteroid Run',
    desc: 'A browser-based game I built to teach myself object-oriented programming with JavaScript.',
    image: asteroidRunProjectThumbnail,
    chips: ['JavaScript', 'HTML', 'CSS'],
    panelData: panelDataObject['projects'].childPanels[0]
  },
  {
    title: 'Code2Image',
    desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.',
    image: code2ImageProjectThumbnail,
    chips: ['React.js', 'Scss'],
    panelData: panelDataObject['projects'].childPanels[1]
  }
];

const CategoryContentList = () => {
  return (
    <>
      {projectList.map((e, i) => (
        <ProjectCard
          key={i}
          title={e.title}
          desc={e.desc}
          image={e.image}
          chips={e.chips}
          data={e.panelData}
          index={i}
        />
      ))}
    </>
  );
};

export default CategoryContentList;
