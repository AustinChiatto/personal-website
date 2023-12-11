import workIcon from '@/assets/icons/work-icon.svg';
import projectsIcon from '@/assets/icons/projects-icon.svg';
import notesIcon from '@/assets/icons/notes-icon.svg';
import aboutIcon from '@/assets/icons/about-icon.svg';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import styles from './panel.module.css';
import PanelsContext from '@/context/PanelsContext';
import { useContext } from 'react';
import { panelDataObject, PanelProps } from '@/data/panelData';
import InlineLink from '../links/InlineLink/InlineLink';

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
    panelData: panelDataObject['resources']
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

  const dovetailLink = (
    <InlineLink
      href="https://www.dovetaildigital.ca/"
      target="_blank"
      title="dovetaildigital.ca"
      highlight
    >
      Dovetail Digital
    </InlineLink>
  );
  const marketMaestroLink = (
    <InlineLink
      href="https://www.marketmaestro.ca/"
      target="_blank"
      title="marketmaestro.ca"
      highlight
    >
      Market Maestro
    </InlineLink>
  );
  const interplanetaryLink = (
    <InlineLink
      href="#"
      highlight
    >
      Interplanetary
    </InlineLink>
  );
  const gitRoastedLink = (
    <InlineLink
      href="#"
      highlight
    >
      GitRoasted
    </InlineLink>
  );

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
            <Typography level={2}>Austin Chiatto</Typography>
            <Typography
              level={5}
              color={'secondary'}
            >
              Developer
            </Typography>
            <div className={styles.personalIntro}>
              <Typography>
                Junior front-end developer living on the (rainy) west coast of Canada.
              </Typography>
              <Typography>
                I recently completed an internship at {dovetailLink} where I built a website using
                Next.js that introduces their {marketMaestroLink} application.
              </Typography>
              <Typography>
                Since then, I&apos;ve built {interplanetaryLink} a space flight tracker, and{' '}
                {gitRoastedLink}, which analyzes and roasts your GitHub account.
              </Typography>
              <Typography>Take a look around.</Typography>
            </div>
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
          <InlineLink href="mailto:chiattoaustin@gmail.com">hey@austinchiatto.com</InlineLink>
          <Typography
            level={6}
            color={'tertiary'}
          >
            2023
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default LandingPanel;
