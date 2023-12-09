import { useContext } from 'react';
import Typography from '../Typography/Typography';
import styles from './listCard.module.css';
import PanelsContext from '@/context/PanelsContext';

export type ListCardProps = {
  label: string;
  icon?: string;
  desc: string;
};

type ContentProps = {
  cardList: any; // todo: assign correct type
  content: any; // todo: assign correct type
  index: number;
};

const ListCard = ({ cardList, content, index }: ContentProps) => {
  const { createPanel } = useContext(PanelsContext);
  const cardListContentArray: ListCardProps[] = cardList;

  return (
    <div className={styles.listCard}>
      <div>
        <div className={styles.cardTitle}>
          <Typography level={3}>{index == 0 ? 'Stack' : 'Team'}</Typography>
        </div>
        <ul className={styles.cardList}>
          {cardListContentArray &&
            cardListContentArray.slice(0, 3).map((e, i) => (
              <li
                key={i}
                className={styles.listItem}
              >
                <div className={styles.thumbnail}></div>
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
            id: content.childPanels[0].id,
            level: content.childPanels[0].level,
            intro: content.childPanels[0].intro,
            panelComponent: content.childPanels[0].panelComponent,
            panelComponentProps: content.childPanels[0].panelComponentProps
          })
        }
      >
        <Typography level={6}>Details</Typography>
      </button>
    </div>
  );
};

export default ListCard;
