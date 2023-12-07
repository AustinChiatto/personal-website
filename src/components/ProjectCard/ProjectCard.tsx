import { useContext } from 'react';
import Chip from '../Chip/Chip';
import Typography from '../Typography/Typography';
import styles from './projectCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';
import { componentMap } from '@/data/componentMap';

type TechnologyProps = {
  label: string;
  desc: string;
};

type ProjectCardProps = {
  title: string;
  index: number;
  desc: string;
  image: string;
  technology: TechnologyProps[];
  data: any; // todo: add correct typing before deployment
};

const ProjectCard = ({ title, desc, image, technology, data }: ProjectCardProps) => {
  const { createPanel } = useContext(PanelsContext);
  return (
    <div
      className={styles.projectCard}
      onClick={() =>
        createPanel({
          id: data.id,
          level: data.level,
          intro: data.intro,
          panelComponent: data.panelComponent,
          panelComponentProps: data.panelComponentProps,
          childPanels: data.childPanels
        })
      }
    >
      <div>
        <Typography
          level={3}
          variant={'headline'}
        >
          {title}
        </Typography>
        <Typography color={'secondary'}>{desc}</Typography>
      </div>
      <div className={styles.picture}>
        <Image
          src={image}
          alt="testing"
          width={1174}
          height={660}
          className={styles.image}
        />
      </div>
      <ul className={styles.chipList}>
        {technology.map((e, i) => (
          <li key={i}>
            <Chip chipLabel={e.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
