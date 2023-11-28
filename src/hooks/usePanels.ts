import React, { createRef, useEffect, useRef, useState } from 'react';

type IntroProps = {
  title: string;
  desc: string;
};

type PanelProps = {
  level: number;
  intro: IntroProps;
  content: React.ReactNode;
  panelRef?: React.RefObject<HTMLDivElement>;
};

export default function usePanels() {
  const [panels, setPanels] = useState<PanelProps[]>([]);
  const panelRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  const createPanel = (panel: PanelProps) => {
    const newPanelRef = createRef<HTMLDivElement>();
    panelRefs.current = [...panelRefs.current, newPanelRef];

    setPanels((prev) => {
      const filteredPanels = prev.filter((p) => p.level < panel.level);

      panel.panelRef = newPanelRef;

      return [...filteredPanels, panel];
    });
    console.log(newPanelRef.current);
  };

  useEffect(() => {
    if (panelRefs.current.length > 0) {
      const lastRef = panelRefs.current[panelRefs.current.length - 1];
      lastRef?.current?.scrollIntoView({ inline: 'start', behavior: 'smooth' });
    }
  }, [panels]); // re-run this effect whenever the panels state changes

  return { panels, createPanel };
}
