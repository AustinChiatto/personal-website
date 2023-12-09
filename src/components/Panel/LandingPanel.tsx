// import { workListData, projectListData, noteListData, aboutListData } from '@/data/panelData';
import workIcon from '@/assets/icons/work-icon.svg';
import projectsIcon from '@/assets/icons/projects-icon.svg';
import notesIcon from '@/assets/icons/notes-icon.svg';
import aboutIcon from '@/assets/icons/about-icon.svg';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Link from 'next/link';
import styles from './panel.module.css';
import PanelsContext from '@/context/PanelsContext';
import { useContext } from 'react';
import { panelDataObject, PanelProps } from '@/data/panelData';

const categoryList: {
  icon: string;
  iconAlt: string;
  categoryTitle: string;
  categoryDesc: string;
  panelData: PanelProps;
}[] = [
  {
    icon: workIcon,
    iconAlt: 'Squiggly doodle of a star',
    categoryTitle: 'Work',
    categoryDesc: "Websites I've built for others or as part of my career.",
    panelData: panelDataObject['work']
  },
  {
    icon: projectsIcon,
    iconAlt: 'Squiggly doodle of a diamond',
    categoryTitle: 'Projects',
    categoryDesc: 'Self-directed projects that taught me something new.',
    panelData: panelDataObject['projects']
  },
  {
    icon: notesIcon,
    iconAlt: 'Squiggly circle doodle',
    categoryTitle: 'Resources',
    categoryDesc: "Useful or interesting things I've found or made.",
    panelData: panelDataObject['notes']
  },
  {
    icon: aboutIcon,
    iconAlt: 'Squiggly asterisk doodle',
    categoryTitle: 'About Me',
    categoryDesc: 'Who I am and what I love to do.',
    panelData: panelDataObject['about']
  }
];

const LandingPanel = () => {
  const { createPanel } = useContext(PanelsContext);

  return (
    <section
      className={`${styles.panel} ${styles.landingPanel}`}
      style={{ left: 0 }}
    >
      <aside className={styles.panelTab}>
        <button>
          <Typography
            level={6}
            color={'tertiary'}
          >
            ⌘ Home
          </Typography>
        </button>
      </aside>
      <div className={styles.panelBody}>
        <div>
          <div className={styles.panelIntro}>
            <Typography level={2}>👋 Hey</Typography>
            <Typography color={'secondary'}>
              I&apos;m Austin, a frontend JavaScript developer who loves using code, animation, and
              interactivity to solve problems.
            </Typography>
          </div>
          <ul className={styles.landingPanelContent}>
            {categoryList.map((e, i) => (
              <li
                className={styles.categoryButton}
                key={i}
                onClick={() =>
                  createPanel({
                    id: e.panelData.id,
                    level: e.panelData.level,
                    intro: e.panelData.intro,
                    panelComponent: e.panelData.panelComponent,
                    panelComponentProps: e.panelData.panelComponentProps,
                    childPanels: e.panelData.childPanels
                  })
                }
              >
                <div className={styles.categoryButtonIcon}>
                  <Image
                    src={e.icon}
                    alt={e.iconAlt}
                  />
                </div>
                <div className={styles.categoryButtonLabels}>
                  <Typography level={3}>{e.categoryTitle}</Typography>
                  <Typography color={'secondary'}>{e.categoryDesc}</Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.panelFooter}>
          <Link href="mailto:chiattoaustin@gmail.com">
            <Typography color={'tertiary'}>hey@austinchiatto.com</Typography>
          </Link>
          <Typography color={'tertiary'}>▲</Typography>
        </div>
      </div>
    </section>
  );
};

export default LandingPanel;
