import { useContext } from 'react';
import Typography from '../Typography/Typography';
import styles from './listCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';
import { PanelProps } from '@/data/panel-data';
import Button from '../Button/Button';
import Chip from '../Chip/Chip';

type CardContentProps = {
  label: string;
  icon: string;
  desc: string;
};

export type ListCardProps = {
  cardTitle: string;
  cardType: string;
  buttonLabel?: string;
  buttonChildIdRef?: string;
  cardContents: CardContentProps[];
};

type ContentProps = {
  cardList: ListCardProps;
  panelContent: PanelProps;
  index: number;
};

const ListCard = ({ cardList, panelContent, index }: ContentProps) => {
  const { createPanel } = useContext(PanelsContext);
  const cardContents = cardList.cardContents;
  const teamIcon = index === 0 ? styles.teamMemberIcon : styles.listCardIcon;
  const cardTypeClass = cardList.cardType == 'list' ? styles.cardList : styles.cardGrid;
  const cardItemClass = cardList.cardType == 'list' ? styles.listItem : styles.gridItem;

  const childPanel =
    panelContent.childPanels &&
    panelContent.childPanels.find((ch: PanelProps) => ch.id === cardList.buttonChildIdRef);

  return (
    <button
      className={styles.listCard}
      onClick={() =>
        cardList.buttonLabel &&
        childPanel &&
        createPanel({
          id: childPanel.id,
          level: childPanel.level,
          intro: childPanel.intro,
          panelComponent: childPanel.panelComponent,
          panelComponentProps: childPanel.panelComponentProps
        })
      }
    >
      <div className={styles.cardStaticElements}>
        <Typography level={3}>{cardList.cardTitle}</Typography>
        <Chip chipLabel="View All" />
      </div>
      <ul className={styles.cardDynamicElements}>
        {cardContents &&
          cardContents.slice(0, 4).map((e, i) => (
            <li
              key={i}
              className={styles.skillIcon}
            >
              <Image
                src={e.icon}
                width={42}
                height={42}
                alt="0"
              />
            </li>
          ))}
      </ul>
    </button>
  );
};

export default ListCard;
