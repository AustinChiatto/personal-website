import { useContext } from 'react';
import Typography from '../Typography/Typography';
import styles from './listCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';

export type ListCardProps = {
  label: string;
  icon: string;
  desc: string;
};

type ContentProps = {
  cardList: any; // todo: assign correct type
  panelContent: any; // todo: assign correct type
  index: number;
};

const ListCard = ({ cardList, panelContent, index }: ContentProps) => {
  const { createPanel } = useContext(PanelsContext);
  const cardListContentArray: ListCardProps[] = cardList;
  const cardTitle = index === 0 ? 'Tech Stack' : 'Team Members';
  const cardButtonLabel = index === 0 ? 'All Tools' : 'Details';
  const teamIcon = index === 0 ? styles.listCardIcon : styles.teamMemberIcon;

  return (
    <div className={styles.listCard}>
      <div>
        <div className={styles.cardTitle}>
          <Typography level={3}>{cardTitle}</Typography>
        </div>
        <ul className={styles.cardList}>
          {cardListContentArray &&
            cardListContentArray.slice(0, 3).map((e, i) => (
              <li
                key={i}
                className={styles.listItem}
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
      <button
        className={styles.button}
        onClick={() =>
          createPanel({
            id: panelContent.childPanels[index].id,
            level: panelContent.childPanels[index].level,
            intro: panelContent.childPanels[index].intro,
            panelComponent: panelContent.childPanels[index].panelComponent,
            panelComponentProps: panelContent.childPanels[index].panelComponentProps
          })
        }
      >
        <Typography level={6}>{cardButtonLabel}</Typography>
      </button>
    </div>
  );
};

export default ListCard;
