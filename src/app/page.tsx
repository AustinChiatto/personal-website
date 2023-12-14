'use client';

import usePanels from '@/hooks/usePanels';
import styles from './page.module.css';
import Panel from '@/components/Panel/Panel';
import LandingPanel from '@/components/Panel/LandingPanel';
import PanelsContext from '@/context/PanelsContext';
import { componentMap } from '@/data/component-map';

export default function Home() {
  const { panels, createPanel } = usePanels();
  // todo: this is hard to read
  const panelContainerJustify =
    panels.length < 1
      ? { justifyContent: 'center' }
      : panels.length > 1
      ? { justifyContent: 'flex-start' }
      : { justifyContent: 'flex-end' };

  return (
    <PanelsContext.Provider value={{ panels, createPanel }}>
      <main
        className={styles.main}
        style={panelContainerJustify}
      >
        <LandingPanel />
        {panels.map((panel, i) => {
          const RenderedPanelComponent = componentMap[panel.panelComponent];
          return (
            <Panel
              ref={panel.panelRef}
              level={panel.level}
              title={panel.intro.title}
              description={panel.intro.desc}
              key={i}
            >
              <RenderedPanelComponent panelContent={panel} />
            </Panel>
          );
        })}
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
