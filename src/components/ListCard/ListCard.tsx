import { useContext } from 'react';
import Typography from '../Typography/Typography';
import styles from './listCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';
import { PanelProps } from '@/data/panel-data';
import Button from '../Button/Button';

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
    <div className={styles.listCard}>
      <div>
        <div className={styles.cardTitle}>
          <Typography level={3}>{cardList.cardTitle}</Typography>
        </div>
        <ul className={cardTypeClass}>
          {cardContents &&
            cardContents.slice(0, 3).map((e, i) => (
              <li
                key={i}
                className={cardItemClass}
              >
                <div className={teamIcon}>
                  <Image
                    src={e.icon}
                    fill
                    alt="0"
                  />
                </div>
                <div>
                  <Typography level={5}>{e.label}</Typography>
                  <Typography
                    level={6}
                    color={'secondary'}
                  >
                    {e.desc}
                  </Typography>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {cardList.buttonLabel && childPanel && (
        <Button
          label={cardList.buttonLabel}
          variant="listCard"
          onClickEvent={() =>
            createPanel({
              id: childPanel.id,
              level: childPanel.level,
              intro: childPanel.intro,
              panelComponent: childPanel.panelComponent,
              panelComponentProps: childPanel.panelComponentProps
            })
          }
        />
      )}
    </div>
  );
};

export default ListCard;
