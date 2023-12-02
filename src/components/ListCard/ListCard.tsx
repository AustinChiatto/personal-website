import Typography from '../Typography/Typography';
import styles from './listCard.module.css';

const ListCard = () => {
  return (
    <div className={styles.listCard}>
      <div>
        <div className={styles.cardTitle}>
          <Typography variant={'headline'}>Stack</Typography>
        </div>
        <ul className={styles.cardList}>
          <li>
            <Typography>JavaScript</Typography>
            <Typography
              color={'secondary'}
              variant={'caption'}
            >
              Description
            </Typography>
          </li>
        </ul>
      </div>
      <button className={styles.button}>
        <Typography variant={'caption'}>All Tools</Typography>
      </button>
    </div>
  );
};

export default ListCard;
