import { ForwardedRef, ReactNode, forwardRef } from 'react';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';

type PanelProps = {
  ref: React.RefObject<HTMLDivElement>;
  level: number;
  title: string;
  description?: string;
  children?: ReactNode;
};

const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ level, title, description, children }, ref) => (
    <section
      className={styles.panel}
      ref={ref}
      style={{ left: level * 40 }}
    >
      <aside className={styles.panelTab}></aside>
      <div className={styles.panelBody}>
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
      </div>
    </section>
  )
);

Panel.displayName = 'Panel';

export default Panel;
