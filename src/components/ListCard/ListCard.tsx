import { useContext } from 'react';
import Typography from '../Typography/Typography';
import styles from './listCard.module.css';
import PanelsContext from '@/context/PanelsContext';

type TechnologyProps = {
  label: string;
  desc: string;
};

type Testing = {
  content: any; // todo: assign correct type
};

const ListCard = ({ content }: Testing) => {
  const { createPanel } = useContext(PanelsContext);
  const technology: TechnologyProps[] = content.panelComponentProps.technology;

  return (
    <div className={styles.listCard}>
      <div>
        <div className={styles.cardTitle}>
          <Typography variant={'headline'}>Stack</Typography>
        </div>
        <ul className={styles.cardList}>
          {technology.map((e, i) => (
            <li key={i}>
              <Typography>{e.label}</Typography>
              <Typography
                color={'secondary'}
                variant={'caption'}
              >
                {e.desc}
              </Typography>
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
        <Typography variant={'caption'}>All Tools</Typography>
      </button>
    </div>
  );
};

export default ListCard;
