'use client';

import usePanels from '@/hooks/usePanels';
import styles from './page.module.css';
import Panel from '@/components/Panel/Panel';
import LandingPanel from '@/components/Panel/LandingPanel';
import PanelsContext from '@/context/PanelsContext';

export default function Home() {
  const { panels, createPanel } = usePanels();

  return (
    <PanelsContext.Provider value={{ panels, createPanel }}>
      <main
        className={styles.main}
        style={panels.length <= 1 ? { justifyContent: 'space-evenly' } : {}}
      >
        <LandingPanel />
        {panels.map((panel, i) => {
          return (
            <Panel
              ref={panel.panelRef}
              level={panel.level}
              title={panel.intro.title}
              description={panel.intro.desc}
              key={i}
            >
              {panel.content}
            </Panel>
          );
        })}
      </main>
    </PanelsContext.Provider>
  );
}

// opening and closing panel logic
// give clickable items a context function to open a panel, pass function the panel info?
