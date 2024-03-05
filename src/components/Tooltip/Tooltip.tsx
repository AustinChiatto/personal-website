import styles from './tooltip.module.css';
import Typography from '../Typography/Typography';

const Tooltip = ({ label }: { label: string }) => {
  return (
    <div className={styles.tooltip}>
      <Typography
        level={6}
        color={'black'}
      >
        {label}
      </Typography>
    </div>
  );
};

export default Tooltip;
