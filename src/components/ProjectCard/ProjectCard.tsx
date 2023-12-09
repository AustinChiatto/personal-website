import { useContext } from 'react';
import Chip from '../Chip/Chip';
import Typography from '../Typography/Typography';
import styles from './projectCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';

type TechnologyProps = {
  label: string;
  desc: string;
};

type ProjectCardProps = {
  title: string;
  index: number;
  desc: string;
  image: string;
  data: any; // todo: add correct typing before deployment
};

const ProjectCard = ({ title, desc, image, data }: ProjectCardProps) => {
  const { createPanel } = useContext(PanelsContext);
  const contentData = data.panelComponentProps;
  const technology: TechnologyProps[] = contentData.listCards[0];
  return (
    <article
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
        <Typography level={3}>{title}</Typography>
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
        {technology &&
          technology.map((e, i) => (
            <li key={i}>
              <Chip chipLabel={e.label} />
            </li>
          ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
