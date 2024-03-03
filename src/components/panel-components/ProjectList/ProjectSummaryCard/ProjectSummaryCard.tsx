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
  featured?: boolean;
  desc: string;
  image: string;
  imageBase64: string;
  cardData: PanelProps;
};

const ProjectSummaryCard = ({
  title,
  featured,
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

  const CardImage = (
    <div className={styles.projectImageWrapper}>
      <Image
        className={styles.projectImage}
        src={image}
        placeholder="blur"
        blurDataURL={imageBase64}
        alt="testing"
        fill
        sizes="100%"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );

  const CardDesc = (
    <div>
      <Typography level={3}>{title}</Typography>
      <Typography color={'secondary'}>{desc}</Typography>
    </div>
  );

  const CardTechStack = (
    <ul className={styles.chipList}>
      {techStackContents &&
        techStackContents.slice(0, 4).map((e, i) => (
          <li key={i}>
            <Chip chipLabel={e.label} />
          </li>
        ))}
    </ul>
  );

  const FeaturedCard = (
    <>
      {CardDesc}
      {CardImage}
      {CardTechStack}
    </>
  );

  const StandardCard = (
    <>
      {CardImage}
      <div className={styles.standardCardContent}>
        {CardDesc}
        {CardTechStack}
      </div>
    </>
  );

  return (
    <button
      className={featured ? styles.featuredCard : styles.standardCard}
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
      {featured ? FeaturedCard : StandardCard}
    </button>
  );
};

export default ProjectSummaryCard;
