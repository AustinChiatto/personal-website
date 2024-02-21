import { useContext } from 'react';
import Chip from '../../../Chip/Chip';
import Typography from '../../../Typography/Typography';
import styles from './projectSummaryCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';
import { ListCardProps } from '../../../ListCard/ListCard';
import { PanelProps } from '@/data/panel-data';
import { TechStackProps } from '@/data/project-data/types';

type ProjectSummaryCardProps = {
  title: string;
  index: number;
  desc: string;
  image: string;
  imageBase64: string;
  cardData: PanelProps;
};

const ProjectSummaryCard = ({
  title,
  desc,
  image,
  imageBase64,
  cardData
}: ProjectSummaryCardProps) => {
  const { createPanel } = useContext(PanelsContext);
  const listCardArray = cardData?.panelComponentProps?.listCards ?? [];

  const techStackListCard =
    listCardArray &&
    listCardArray.find((lc: ListCardProps) => lc.buttonChildIdRef == 'projectTechStack');

  const techStackContents: TechStackProps[] = techStackListCard?.cardContents ?? [];

  return (
    <button
      className={styles.ProjectSummaryCard}
      onClick={() =>
        createPanel({
          id: cardData.id,
          level: cardData.level,
          intro: cardData.intro,
          panelComponent: cardData.panelComponent,
          panelComponentProps: cardData.panelComponentProps,
          childPanels: cardData.childPanels
        })
      }
    >
      <div>
        <Typography level={3}>{title}</Typography>
        <Typography color={'secondary'}>{desc}</Typography>
      </div>
      <div className={styles.projectImageWrapper}>
        <Image
          className={styles.projectImage}
          src={image}
          alt="testing"
          fill
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`data:image/png,${imageBase64}`}
        />
      </div>
      <ul className={styles.chipList}>
        {techStackContents &&
          techStackContents.slice(0, 4).map((e, i) => (
            <li key={i}>
              <Chip chipLabel={e.label} />
            </li>
          ))}
      </ul>
    </button>
  );
};

export default ProjectSummaryCard;
