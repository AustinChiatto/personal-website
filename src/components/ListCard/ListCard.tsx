import Typography from '../Typography/Typography';
import styles from './listCard.module.css';

type TechnologyProps = {
  label: string;
  desc: string;
};

type Testing = {
  content: any;
};

const ListCard = ({ content }: Testing) => {
  const technology: TechnologyProps[] = content.technology;

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
      <button className={styles.button}>
        <Typography variant={'caption'}>All Tools</Typography>
      </button>
    </div>
  );
};

export default ListCard;
