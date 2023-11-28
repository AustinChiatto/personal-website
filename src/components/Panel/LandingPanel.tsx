import { workListData, projectListData, noteListData, aboutListData } from '@/data/panelData';
import workIcon from '@/assets/images/work-icon.svg';
import projectsIcon from '@/assets/images/projects-icon.svg';
import notesIcon from '@/assets/images/notes-icon.svg';
import aboutIcon from '@/assets/images/about-icon.svg';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Link from 'next/link';
import styles from './panel.module.css';
import usePanels from '@/hooks/usePanels';
import { PanelProps } from '@/data/panelData';
import PanelsContext from '@/context/PanelsContext';
import { useContext } from 'react';

const categoryButtonData = [
  {
    icon: workIcon,
    iconAlt: 'Squiggly doodle of a star',
    categoryTitle: 'Work',
    categoryDesc: "Code I've written for others or as part of my job.",
    panelData: workListData
  },
  {
    icon: projectsIcon,
    iconAlt: 'Squiggly doodle of a diamond',
    categoryTitle: 'Projects',
    categoryDesc: "A collection of things I've built to learn something new.",
    panelData: projectListData
  },
  {
    icon: notesIcon,
    iconAlt: 'Squiggly circle doodle',
    categoryTitle: 'Notes',
    categoryDesc: "Things I've discovered and want to remember.",
    panelData: noteListData
  },
  {
    icon: aboutIcon,
    iconAlt: 'Squiggly asterisk doodle',
    categoryTitle: 'More About Me',
    categoryDesc: 'Why is this always the hardest thing to write?',
    panelData: aboutListData
  }
];

const LandingPanel = () => {
  const { createPanel } = useContext(PanelsContext);
  return (
    <section
      className={styles.basePanel}
      style={{ left: 0 }}
    >
      <div className={styles.introContentWrapper}>
        <div className={styles.panelIntro}>
          <Typography
            level={2}
            variant={'title'}
          >
            👋 Hey
          </Typography>
          <Typography
            variant={'body'}
            color={'secondary'}
          >
            I&apos;m Austin, a frontend JavaScript developer who loves using code, animation, and
            interactivity to solve problems.
          </Typography>
        </div>
        <div className={styles.panelContent}>
          <ul>
            {categoryButtonData.map((e, i) => (
              <li
                className={styles.categoryButton}
                key={i}
                onClick={() => createPanel(e.panelData[0])}
              >
                <div className={styles.categoryButtonIcon}>
                  <Image
                    src={e.icon}
                    alt={e.iconAlt}
                  />
                </div>
                <div className={styles.categoryButtonLabels}>
                  <Typography variant={'headline'}>{e.categoryTitle}</Typography>
                  <Typography color={'secondary'}>{e.categoryDesc}</Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.panelFooter}>
        <Link href="mailto:chiattoaustin@gmail.com">
          <Typography color={'tertiary'}>hey@austinchiatto.com</Typography>
        </Link>
        <Typography color={'tertiary'}>▲</Typography>
      </div>
    </section>
  );
};

export default LandingPanel;
