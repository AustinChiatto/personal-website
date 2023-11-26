import { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';

type PanelProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode | string;
};

const Panel = ({ title, description, children, footer }: PanelProps) => {
  return (
    <section
      className={styles.panel}
      style={{ left: '40px' }}
    >
      <div className={styles.panelIntro}>
        <Typography
          level={2}
          variant={'title'}
        >
          {title}
        </Typography>
        <Typography
          variant={'body'}
          color={'secondary'}
        >
          {description}
        </Typography>
      </div>
      <div className={styles.panelContent}>{children}</div>
      {footer && <div className={styles.panelFooter}>footer</div>}
    </section>
  );
};

export default Panel;
