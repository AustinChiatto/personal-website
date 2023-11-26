'use client';

import Typography from '@/components/Typography/Typography';
import styles from './page.module.css';
import Panel from '@/components/Panel/Panel';
import Link from 'next/link';
import workIcon from '@/assets/images/work-icon.svg';
import projectsIcon from '@/assets/images/projects-icon.svg';
import notesIcon from '@/assets/images/notes-icon.svg';
import aboutIcon from '@/assets/images/about-icon.svg';
import Image from 'next/image';
import { useState } from 'react';

const workPanelData = [
  {
    intro: {
      title: 'Work',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: 'content',
    footer: 'footer'
  }
];

const projectsPanelData = [
  {
    intro: {
      title: 'Projects',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: 'content',
    footer: 'footer'
  }
];

const notesPanelData = [
  {
    intro: {
      title: 'Notes',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: 'content',
    footer: 'footer'
  }
];

const aboutPanelData = [
  {
    intro: {
      title: 'About Me',
      desc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.'
    },
    content: 'content',
    footer: 'footer'
  }
];

const categoryButtonData = [
  {
    icon: workIcon,
    iconAlt: 'Squiggly doodle of a star',
    categoryTitle: 'Work',
    categoryDesc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.',
    panelData: workPanelData
  },
  {
    icon: projectsIcon,
    iconAlt: 'Squiggly doodle of a diamond',
    categoryTitle: 'Projects',
    categoryDesc: "A collection of things I've built with the goal of learning something new.",
    panelData: projectsPanelData
  },
  {
    icon: notesIcon,
    iconAlt: 'Squiggly circle doodle',
    categoryTitle: 'Notes',
    categoryDesc:
      "A mix of my thoughts and cool stuff I've found during my adventures across the internet.",
    panelData: notesPanelData
  },
  {
    icon: aboutIcon,
    iconAlt: 'Squiggly asterisk doodle',
    categoryTitle: 'More About Me',
    categoryDesc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.',
    panelData: aboutPanelData
  }
];

type PanelProps = {
  title: string;
  description: string;
  footer: string;
  children: React.ReactNode;
};

export default function Home() {
  const [panels, setPanels] = useState<PanelProps[]>([]);

  const handleClick = (title: string, desc: string, footer: string) => {
    setPanels((prevPanels) => [
      ...prevPanels,
      {
        title: title,
        description: desc,
        children: 'hi',
        footer: footer
      }
    ]);
  };

  return (
    <main className={styles.main}>
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
              {categoryButtonData.map((e, index) => (
                <li
                  className={styles.categoryButton}
                  key={index}
                  onClick={() =>
                    handleClick(
                      e.panelData[0].intro.title,
                      e.panelData[0].intro.desc,
                      e.panelData[0].footer
                    )
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
      {panels.map((panel, index) => (
        <Panel
          title={panel.title}
          description={panel.description}
          footer={panel.footer}
          key={index}
        >
          {panel.children}
        </Panel>
      ))}
    </main>
  );
}

// ! panel logic
// todo: open & close panels
// todo: open link from previous panel (close all panels, open one new panel)
// todo: close panels? - should this even be a thing?
// 1 panel: centered in vp
// 2 panels: both centered in vp
// 3 panels:
// panel 1: left 0
// panel 2: right 0 + panel width
// panel 3: right 0

// todo: new panels: left i * x
// width of tab == x

// todo: new panels::after - background++
// todo: need better drop shadow or border between panels

// opening and closing panel logic
// give clickable items a context function to open a panel, pass function the panel info?
