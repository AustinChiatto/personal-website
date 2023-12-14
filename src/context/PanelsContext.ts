import { PanelProps } from '@/data/panel-data';
import { createContext } from 'react';

type PanelContextType = {
  panels: PanelProps[];
  createPanel: (panel: PanelProps) => void;
};

const PanelsContext = createContext<PanelContextType>({
  panels: [],
  createPanel: () => null
});

export default PanelsContext;
