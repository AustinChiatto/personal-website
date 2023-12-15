import Typography from '@/components/Typography/Typography';
import styles from './projectTechStack.module.css';
import { PanelProps } from '@/data/panel-data';
import Image from 'next/image';
import { TechStackProps } from '@/data/project-data/types';

const ProjectTechStack = ({ panelContent }: { panelContent: PanelProps }) => {
  const techStack: TechStackProps[] = panelContent.panelComponentProps.techStack ?? [];
  return (
    <div>
      <ul className={styles.list}>
        {techStack &&
          techStack.map((e, i) => (
            <li
              key={i}
              className={styles.listItem}
            >
              <div className={styles.icon}>
                <Image
                  src={e.icon}
                  fill
                  alt="0"
                />
              </div>
              <div>
                <Typography level={3}>{e.label}</Typography>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProjectTechStack;
