import Typography from '../Typography/Typography';
import styles from './chip.module.css';

type ChipProps = {
  chipLabel: string;
  isActionable?: boolean;
};

const Chip = ({ chipLabel, isActionable }: ChipProps) => {
  return (
    <div className={`${styles.chip} ${isActionable ? styles.chipActionable : ''}`}>
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
