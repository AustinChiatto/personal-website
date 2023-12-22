'use client';

import usePanels from '@/hooks/usePanels';
import styles from './page.module.css';
import Panel from '@/components/Panel/Panel';
import PanelsContext from '@/context/PanelsContext';
import { componentMap } from '@/data/component-map';
import { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Home() {
    const { panels, createPanel } = usePanels();

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleTabClick = (index: number) => {
        const scrollContainer = scrollContainerRef.current;
        const viewportWidth = window.innerWidth;

        if (!scrollContainer) return;

        const currentPanel = scrollContainer?.children[index] as HTMLElement;
        const nextPanel = scrollContainer?.children[index + 1] as HTMLElement;

        console.log(scrollContainer.scrollLeft);
        console.log(currentPanel.getBoundingClientRect().right);
        console.log(
            'newScrollTarget: ' +
                (currentPanel.getBoundingClientRect().right -
                    viewportWidth +
                    scrollContainer.scrollLeft)
        );

        if (!currentPanel || !nextPanel) return;

        const panelWidth = currentPanel.offsetWidth;

        // target scroll for panels that are off screen to the right
        // const rightTargetScroll =
        //     currentPanel.getBoundingClientRect().right - viewportWidth + scrollContainer.scrollLeft;

        // target scroll for panels being covered by sequential panels
        const targetScroll =
            scrollContainer.scrollLeft -
            nextPanel.offsetLeft +
            nextPanel.getBoundingClientRect().left +
            index * panelWidth -
            currentPanel.getBoundingClientRect().left;

        const duration: number = 2000;
        let startTime: number = Date.now();

        const scrollSmoothly = () => {
            // if (currentPanel.getBoundingClientRect().right < viewportWidth) return;
            // if (scrollContainer.scrollLeft >= rightTargetScroll) return;

            // const time: number = (Date.now() - startTime) / duration;
            // const difference = rightTargetScroll - scrollContainer.scrollLeft;
            // const perTick = difference * time;

            // scrollContainer.scrollLeft += perTick;

            if (scrollContainer.scrollLeft <= targetScroll) return;

            const time: number = (Date.now() - startTime) / duration;
            const difference = targetScroll - scrollContainer.scrollLeft;
            const perTick = difference * time;

            scrollContainer.scrollLeft += perTick;

            requestAnimationFrame(scrollSmoothly);
        };
        startTime = Date.now();
        scrollSmoothly();
    };

    return (
        <PanelsContext.Provider value={{ panels, createPanel }}>
            <main>
                <div
                    className={styles.main}
                    ref={scrollContainerRef}
                >
                    <TransitionGroup component={null}>
                        {panels.map((panel, i) => {
                            const RenderedPanelComponent = componentMap[panel.panelComponent];
                            return (
                                <CSSTransition
                                    key={i}
                                    classNames="panel-transition"
                                    timeout={250}
                                    exit={false} // todo: see if there's a way to handle the exit animations paired with the scroll.
                                >
                                    <Panel
                                        key={i}
                                        index={i}
                                        panelsLength={panels.length}
                                        level={panel.level}
                                        ref={panel.panelRef}
                                        title={panel.intro.title}
                                        description={panel.intro.desc}
                                        handleTabClick={() => handleTabClick(i)}
                                    >
                                        <RenderedPanelComponent panelContent={panel} />
                                    </Panel>
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </div>
            </main>
        </PanelsContext.Provider>
    );
}

// ! todo: double check that data import is the same across components
// todo: check level of all typography components
// todo: check alt's for all images
// todo: check title's for all links
// todo: check target's for external links
// todo: check image weights
