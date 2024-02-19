import Typography from '@/components/Typography/Typography';
import styles from './landing.module.css';
import ExternalLink from '@/components/links/ExternalLink/ExternalLink';
import Chip from '@/components/Chip/Chip';
import Link from 'next/link';

const experience = [
  {
    companyName: 'Dovetail Digital',
    jobTitle: 'Frontend Developer Intern',
    dateRange: 'Sep 2023 - Nov 2023',
    jobDesc:
      'Transformed Figma designs into responsive websites and components, leveraging Next.js, TypeScript, Vercel, Material-UI (MUI), and SendGrid Email API.'
  },
  {
    companyName: 'Dexcom',
    jobTitle: 'Customer Service Member',
    dateRange: '2021 - 2022',
    jobDesc:
      'Responsible for customer onboarding, account management, resolving product issues, and conflicts.'
  },
  {
    companyName: 'Speed Shift Media',
    jobTitle: 'Digital Analytics Specialist',
    dateRange: '2019 - 2021',
    jobDesc:
      'Managed user interactions on customer sites using Google Tag Manager, JavaScript, Google Analytics, and Google Data Studio.'
  }
];

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Vercel',
  'Shadcn',
  'MUI',
  'Sass',
  'Tailwind',
  'Rest API',
  'SQL',
  'PHP'
];

const projects = [
  {
    title: 'Market Maestro',
    href: 'https://www.marketmaestro.ca',
    desc: 'Responsive customer-facing landing and login pages.',
    skills: ['Next.js', 'TypeScript', 'Vercel', 'MUI']
  },
  {
    title: 'Code2Image',
    href: 'https://crumb.so/code-to-img',
    desc: 'Create beautiful images of your code snippets.',
    skills: ['React', 'JavaScript', 'Sass']
  },
  {
    title: 'Asteroid Run',
    href: 'https://asteroidrun.crumb.so',
    desc: 'A browser based space game.',
    skills: ['JavaScript', 'CSS', 'HTML Canvas']
  },
  {
    title: 'Grid Tool',
    href: 'https://crumb.so/grid-tool',
    desc: 'Build custom CSS grids with ease.',
    skills: ['React', 'JavaScript', 'Sass']
  }
];

const LandingMobile = () => {
  return (
    <>
      <section>
        <Typography level={3}>Say Hello</Typography>
        <ul className={styles.externalLinkList}>
          <li>
            <ExternalLink
              href="mailto:chiattoaustin@gmail.com"
              favicon="/icons/email.svg"
              label="hey@austinchiatto.com"
            />
          </li>
          <li>
            <ExternalLink
              href="https://www.linkedin.com/in/austin-chiatto/"
              favicon="/icons/linkedin-original.svg"
              label="LinkedIn"
            />
          </li>
          <li>
            <ExternalLink
              href="https://github.com/AustinChiatto"
              favicon="/icons/github-original.svg"
              label="GitHub"
            />
          </li>
        </ul>
      </section>
      <section className={styles.resumeSection}>
        <Typography level={2}>Projects</Typography>
        <ul className={styles.projectList}>
          {projects.map((e, i) => (
            <li
              className={styles.projectItem}
              key={i}
            >
              <Link
                href={e.href}
                target="_blank"
                title="e.title"
                className={styles.projectCard}
              >
                <div>
                  <Typography level={5}>{e.title}</Typography>
                  <Typography
                    level={6}
                    color={'secondary'}
                  >
                    {e.desc}
                  </Typography>
                </div>
                <ul className={styles.projectSkills}>
                  {e.skills.map((skill, j) => (
                    <li key={j}>
                      <Chip chipLabel={skill} />
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.resumeSection}>
        <Typography level={2}>Skills</Typography>
        <ul className={styles.skillList}>
          {skills.map((e, i) => (
            <li key={i}>
              <Chip chipLabel={e} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.resumeSection}>
        <Typography level={2}>Experience</Typography>
        <ul>
          {experience.map((e, i) => (
            <li
              className={styles.resumeSubsection}
              key={i}
            >
              <div className={styles.resumeSubsectionHead}>
                <Typography level={3}>{e.companyName}</Typography>
                <Typography level={4}>{e.jobTitle}</Typography>
                <Typography
                  level={6}
                  color={'tertiary'}
                >
                  {e.dateRange}
                </Typography>
              </div>
              <Typography color={'secondary'}>{e.jobDesc}</Typography>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.resumeSection}>
        <Typography level={2}>Education</Typography>
        <ul>
          <li className={styles.resumeSubsection}>
            <div className={styles.resumeSubsectionHead}>
              <Typography level={4}>British Columbia Institute of Technology</Typography>
              <Typography
                level={6}
                color={'tertiary'}
              >
                2022 - 2023
              </Typography>
            </div>
            <Typography color={'secondary'}>
              Diploma in New Media Design and Development, graduated with distinction.
            </Typography>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LandingMobile;
