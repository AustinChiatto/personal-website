import Typography from '../Typography/Typography';
import styles from './chip.module.css';

const Chip = ({ chipLabel }: { chipLabel: string }) => {
  return (
    <div className={styles.chip}>
      <Typography
        level={6}
        color={'secondary'}
      >
        {chipLabel}
      </Typography>
    </div>
  );
};

export default Chip;
