'use client';

import usePanels from '@/hooks/usePanels';
import styles from './page.module.css';
import Panel from '@/components/Panel/Panel';
import PanelsContext from '@/context/PanelsContext';
import { componentMap } from '@/data/component-map';
import { useRef } from 'react';

export default function Home() {
    const { panels, createPanel } = usePanels();
    // todo: this is hard to read
    const panelContainerJustify =
        panels.length <= 1
            ? { justifyContent: 'center' }
            : panels.length > 2
            ? { justifyContent: 'flex-start' }
            : { justifyContent: 'flex-end' };

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleTabClick = (index: number) => {
        const scrollContainer = scrollContainerRef.current;
        const viewportWidth = window.innerWidth;

        if (!scrollContainer) return;

        const currentPanel = scrollContainer?.children[index] as HTMLElement;
        const nextPanel = scrollContainer?.children[index + 1] as HTMLElement;

        if (!currentPanel || !nextPanel) return;

        const panelWidth = nextPanel?.offsetWidth;

        console.log('======');
        console.log('vw: ' + viewportWidth);
        console.log('scrollContainerWidth: ' + scrollContainer.offsetWidth);
        console.log('scrollContainerLeft: ' + scrollContainer.scrollLeft);
        console.log('currentPanelLeft: ' + currentPanel?.offsetLeft);
        console.log('currentPanelLeft + panelWidth: ' + (currentPanel?.offsetLeft + panelWidth));
        console.log('======');

        // scrollContainer.scrollLeft : how much the scroll container has scrolled to the left
        // nextPanel?.offsetLeft : the distance the nextPanel's xPos from the start of the scrollContainer
        const targetScroll =
            scrollContainer.scrollLeft - nextPanel?.offsetLeft + (index + 1) * panelWidth;

        const duration: number = 2000;
        let startTime: number = Date.now();

        const scrollSmoothly = () => {
            if (scrollContainer.scrollLeft! <= targetScroll) return;

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
                    style={panelContainerJustify}
                    ref={scrollContainerRef}
                >
                    {panels.map((panel, i) => {
                        const RenderedPanelComponent = componentMap[panel.panelComponent];
                        return (
                            <Panel
                                key={i}
                                index={i}
                                level={panel.level}
                                ref={panel.panelRef}
                                title={panel.intro.title}
                                description={panel.intro.desc}
                                handleTabClick={() => handleTabClick(i)}
                            >
                                <RenderedPanelComponent panelContent={panel} />
                            </Panel>
                        );
                    })}
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
