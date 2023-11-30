import { useContext } from 'react';
import Chip from '../Chip/Chip';
import Typography from '../Typography/Typography';
import styles from './projectCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';
import { componentMap } from '@/data/componentMap';

type ProjectCardProps = {
  title: string;
  index: number;
  desc: string;
  image: any; // todo: add correct typing before deployment
  chips: string[];
  data: any; // todo: add correct typing before deployment
};

const ProjectCard = ({ title, desc, image, chips, data }: ProjectCardProps) => {
  const { createPanel } = useContext(PanelsContext);
  return (
    <div
      className={styles.projectCard}
      onClick={() =>
        createPanel({
          id: data.id,
          level: data.level,
          intro: data.intro,
          content: componentMap[data.content as keyof typeof componentMap],
          contentProps: data.contentProps,
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
          src={image.src}
          alt="testing"
          width={1174}
          height={660}
          className={styles.image}
        />
      </div>
      <ul className={styles.chipList}>
        {chips.map((e, i) => (
          <li key={i}>
            <Chip label={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
