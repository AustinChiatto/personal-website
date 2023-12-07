import { useContext } from 'react';
import Typography from '../Typography/Typography';
import styles from './listCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import { PanelProps } from '@/data/panelData';

type TechnologyProps = {
  label: string;
  desc: string;
};

type Testing = {
  content: any;
};

const ListCard = ({ content }: Testing) => {
  const { createPanel } = useContext(PanelsContext);
  const technology: TechnologyProps[] = content.panelComponentProps.technology;
  const projectTechPanel: PanelProps[] = content.childPanels;
  console.log(projectTechPanel);

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
            id: projectTechPanel[0].id,
            level: projectTechPanel[0].level,
            intro: projectTechPanel[0].intro,
            panelComponent: projectTechPanel[0].panelComponent,
            panelComponentProps: projectTechPanel[0].panelComponentProps
          })
        }
      >
        <Typography variant={'caption'}>All Tools</Typography>
      </button>
    </div>
  );
};

export default ListCard;
