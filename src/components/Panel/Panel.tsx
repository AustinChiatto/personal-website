import { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';

type PanelProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

const Panel = ({ title, description, children }: PanelProps) => {
  return (
    <section
      className={styles.panel}
      style={{ left: '40px' }}
    >
      <div className={styles.introContentWrapper}>
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
      </div>
    </section>
  );
};

export default Panel;

// Needs to be given
// Title: string
// Description: string
// Content: component
// footer: component

// so each button needs to pass tab, title, desc, content, footer to the panel
