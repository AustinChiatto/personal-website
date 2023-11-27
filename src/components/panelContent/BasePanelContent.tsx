import workIcon from '@/assets/images/work-icon.svg';
import projectsIcon from '@/assets/images/projects-icon.svg';
import notesIcon from '@/assets/images/notes-icon.svg';
import aboutIcon from '@/assets/images/about-icon.svg';
import { workListData, projectListData, noteListData, aboutListData } from '@/data/panelData';
import Typography from '../Typography/Typography';
import Image from 'next/image';

const categoryButtonData = [
  {
    level: 1,
    icon: workIcon,
    iconAlt: 'Squiggly doodle of a star',
    categoryTitle: 'Work',
    categoryDesc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.',
    panelData: workListData
  },
  {
    level: 1,
    icon: projectsIcon,
    iconAlt: 'Squiggly doodle of a diamond',
    categoryTitle: 'Projects',
    categoryDesc: "A collection of things I've built with the goal of learning something new.",
    panelData: projectListData
  },
  {
    level: 1,
    icon: notesIcon,
    iconAlt: 'Squiggly circle doodle',
    categoryTitle: 'Notes',
    categoryDesc:
      "A mix of my thoughts and cool stuff I've found during my adventures across the internet.",
    panelData: noteListData
  },
  {
    level: 1,
    icon: aboutIcon,
    iconAlt: 'Squiggly asterisk doodle',
    categoryTitle: 'More About Me',
    categoryDesc: 'Deserunt sunt laboris ullamco culpa irure aliqua aliqua cupidatat proident.',
    panelData: aboutListData
  }
];

const BasePanelContent = () => {
  return (
    <>
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
                  onClick={() => handleClick(i)}
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
    </>
  );
};

export default BasePanelContent;
