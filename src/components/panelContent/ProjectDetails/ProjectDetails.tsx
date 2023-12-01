import Link from 'next/link';
import styles from './projectDetails.module.css';
import Typography from '@/components/Typography/Typography';
import ExternalLink from '@/components/ExternalLink/ExternalLink';

const ProjectDetails = () => {
  return (
    <>
      <div className={styles.externalLinkList}>
        <ExternalLink
          href="#"
          label="Live Site"
        />
        <ExternalLink
          href="#"
          label="SourceCode"
        />
      </div>
      {/* --- */}
      <div className={styles.listCard}>
        <div>
          <div className={styles.cardTitle}>
            <Typography variant={'headline'}>Stack</Typography>
          </div>
          <ul className={styles.cardList}>
            <li>
              <Typography>JavaScript</Typography>
              <Typography
                color={'secondary'}
                variant={'caption'}
              >
                Description
              </Typography>
            </li>
          </ul>
        </div>
        <button className={styles.button}>
          <Typography variant={'caption'}>All Tools</Typography>
        </button>
      </div>
      <hr className={styles.hr} />
      <div>Project Development</div>
    </>
  );
};

export default ProjectDetails;
