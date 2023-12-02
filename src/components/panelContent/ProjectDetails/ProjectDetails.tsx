import styles from './projectDetails.module.css';
import ExternalLink from '@/components/ExternalLink/ExternalLink';
import ListCard from '@/components/ListCard/ListCard';

type Testing = {
  content: any;
};

const ProjectDetails = ({ content }: Testing) => {
  console.log(content);
  const externalLinks = content.externalLinks;
  return (
    <>
      <div className={styles.externalLinkList}>
        {/* todo: use a map */}
        <ExternalLink
          href={externalLinks[0].href}
          label={externalLinks[0].label}
        />
        <ExternalLink
          href={externalLinks[1].href}
          label={externalLinks[1].label}
        />
      </div>
      <ListCard />
      <hr className={styles.hr} />
      <div>Project Development</div>
    </>
  );
};

export default ProjectDetails;
