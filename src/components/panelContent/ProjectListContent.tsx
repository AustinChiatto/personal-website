import ProjectCard from '../ProjectCard/ProjectCard';
import { PanelProps } from '@/data/panelData';
import asteroidRunProjectThumbnail from '@/assets/images/asteroid-run_project-thumbnail.png';
import code2ImageProjectThumbnail from '@/assets/images/code2image_project-thumbnail.png';

const projectDetailsAsteroidRun: PanelProps[] = [
  {
    level: 2,
    intro: {
      title: 'Asteroid Run',
      desc: 'This is a project'
    },
    content: 'testing'
  }
];

const projectDetailsCode2Image: PanelProps[] = [
  {
    level: 2,
    intro: {
      title: 'Code2Image',
      desc: 'This is a project'
    },
    content: 'testing'
  }
];

const projects = [
  {
    level: 2,
    title: 'Asteroid Run',
    desc: 'A browser-based game I built to teach myself object-oriented programming with JavaScript.',
    image: asteroidRunProjectThumbnail,
    chips: ['JavaScript', 'HTML', 'CSS'],
    panelData: projectDetailsAsteroidRun
  },
  {
    level: 2,
    title: 'Code2Image',
    desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.',
    image: code2ImageProjectThumbnail,
    chips: ['React.js', 'Scss'],
    panelData: projectDetailsCode2Image
  }
];

const ProjectListContent = () => {
  return (
    <>
      {projects.map((e, i) => (
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

export default ProjectListContent;
