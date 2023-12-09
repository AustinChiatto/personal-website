import { ForwardedRef, ReactNode, forwardRef, useCallback } from 'react';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';

type PanelComponentProps = {
  ref: React.RefObject<HTMLDivElement>;
  level: number;
  title: string;
  description?: string;
  children?: ReactNode;
};

const Panel = forwardRef<HTMLDivElement, PanelComponentProps>(
  ({ level, title, description, children }, ref) => {
    // function to scroll into view when tab is clicked
    const handleTabScroll = useCallback(() => {
      if (ref && 'current' in ref && ref.current) {
        console.log(ref);
        ref.current.scrollIntoView({ inline: 'center', behavior: 'smooth' });
      }
    }, [ref]);

    // todo: tab scroll logic
    // when tab is clicked
    // keep clicked panel in the same position
    // scroll all other panels to the right until the panel that was clicked is completely visible

    // todo: left and right sticky tab position
    // if tab is <= 50%: left sticky, else: right sticky

    const colorClass = `panelBackground-${level * 10}`;

    return (
      <section
        className={`${styles.panel} ${colorClass}`}
        ref={ref}
        style={{ left: level * 33 }}
      >
        <aside className={styles.panelTab}>
          <button onClick={handleTabScroll}>
            <Typography
              level={6}
              color={'tertiary'}
            >
              ⌘ {title}
            </Typography>
          </button>
        </aside>
        <div className={styles.panelBody}>
          <div className={styles.panelIntro}>
            <Typography level={2}>{title}</Typography>
            <Typography color={'secondary'}>{description}</Typography>
          </div>
          <div className={styles.panelContent}>{children}</div>
        </div>
      </section>
    );
  }
);

Panel.displayName = 'Panel';

export default Panel;
