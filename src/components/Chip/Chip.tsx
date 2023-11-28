import Typography from '../Typography/Typography';
import styles from './chip.module.css';

type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => {
  return (
    <div className={styles.chip}>
      <Typography
        variant={'caption'}
        color={'secondary'}
      >
        {label}
      </Typography>
    </div>
  );
};

export default Chip;
