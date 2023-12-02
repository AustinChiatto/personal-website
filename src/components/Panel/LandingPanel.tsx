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
import { componentMap } from '@/data/componentMap';

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
    categoryDesc: "Code I've written for others or as part of my job.",
    panelData: panelDataObject['work']
  },
  {
    icon: projectsIcon,
    iconAlt: 'Squiggly doodle of a diamond',
    categoryTitle: 'Projects',
    categoryDesc: "A collection of things I've built to learn something new.",
    panelData: panelDataObject['projects']
  },
  {
    icon: notesIcon,
    iconAlt: 'Squiggly circle doodle',
    categoryTitle: 'Notes',
    categoryDesc: "Things I've discovered and want to remember.",
    panelData: panelDataObject['notes']
  },
  {
    icon: aboutIcon,
    iconAlt: 'Squiggly asterisk doodle',
    categoryTitle: 'More About Me',
    categoryDesc: 'Why is this always the hardest thing to write?',
    panelData: panelDataObject['about']
  }
];

const LandingPanel = () => {
  const { createPanel } = useContext(PanelsContext);

  return (
    <section
      className={styles.basePanel}
      style={{ left: 0 }}
    >
      <div className={styles.panelBody}>
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
            {categoryList.map((e, i) => (
              <li
                className={styles.categoryButton}
                key={i}
                onClick={() =>
                  createPanel({
                    id: e.panelData.id,
                    level: e.panelData.level,
                    intro: e.panelData.intro,
                    // panelComponent:
                    //   componentMap[e.panelData.panelComponent as keyof typeof componentMap],
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
