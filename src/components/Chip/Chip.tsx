import Typography from '../Typography/Typography';
import styles from './chip.module.css';

type ChipProps = {
  chipLabel: string;
};

const Chip = ({ chipLabel }: ChipProps) => {
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
