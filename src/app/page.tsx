'use client';

import usePanels from '@/hooks/usePanels';
import styles from './page.module.css';
import Panel from '@/components/Panel/Panel';
import PanelsContext from '@/context/PanelsContext';
import { componentMap } from '@/data/component-map';
import { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  const { panels, createPanel } = usePanels();

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const handleTabClick = useSmoothScroll({ scrollContainerRef });

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
                  exit={false}
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
