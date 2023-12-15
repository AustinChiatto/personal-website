import { ReactNode, forwardRef } from 'react';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';

type PanelComponentProps = {
    ref: React.RefObject<HTMLDivElement | null>;
    index: number;
    level: number;
    title: string;
    description?: string;
    children?: ReactNode;
    handleTabClick?: any; // todo: fix type
};

const Panel = forwardRef<HTMLDivElement, PanelComponentProps>(
    ({ index, title, description, children, handleTabClick }, ref) => {
        const colorClass = styles[`panelBackground-${index}`];

        return (
            <section
                className={`${styles.panel} ${colorClass}`}
                ref={ref}
                style={{ left: index * 33 }}
            >
                <aside className={styles.panelTab}>
                    <button onClick={() => handleTabClick()}>⌘ {title}</button>
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
