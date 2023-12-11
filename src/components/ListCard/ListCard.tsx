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
  const title = index === 0 ? 'Stack' : 'Team';
  const cta = index === 0 ? 'All Tools' : 'Details';

  return (
    <div className={styles.listCard}>
      <div>
        <div className={styles.cardTitle}>
          <Typography level={3}>{title}</Typography>
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
            id: content.childPanels[index].id,
            level: content.childPanels[index].level,
            intro: content.childPanels[index].intro,
            panelComponent: content.childPanels[index].panelComponent,
            panelComponentProps: content.childPanels[index].panelComponentProps
          })
        }
      >
        <Typography level={6}>{cta}</Typography>
      </button>
    </div>
  );
};

export default ListCard;
