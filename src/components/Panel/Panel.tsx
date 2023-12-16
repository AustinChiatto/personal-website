import { ReactNode, forwardRef } from 'react';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';

type PanelComponentProps = {
    ref: React.RefObject<HTMLDivElement | null>;
    index: number;
    level: number;
    panelsLength: number;
    title: string;
    description?: string;
    children?: ReactNode;
    handleTabClick?: any; // todo: fix type
};

const Panel = forwardRef<HTMLDivElement, PanelComponentProps>(
    ({ index, title, description, children, handleTabClick, panelsLength }, ref) => {
        const colorClass = styles[`panelBackground-${index}`];

        return (
            <section
                className={`${styles.panel} ${colorClass}`}
                ref={ref}
                style={{ left: index * 34 }}
            >
                {(index !== 0 || (index === 0 && panelsLength > 2)) && (
                    <aside className={styles.panelTab}>
                        <button onClick={() => handleTabClick()}>⌘ {title}</button>
                    </aside>
                )}
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
