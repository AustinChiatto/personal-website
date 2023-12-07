import styles from './projectDetails.module.css';
import ExternalLink from '@/components/ExternalLink/ExternalLink';
import ListCard from '@/components/ListCard/ListCard';
import Typography from '@/components/Typography/Typography';

type ExternalLinkProps = {
  label: string;
  href: string;
};

type ArticleProps = {
  heading: string;
  image: string;
  markdown: string;
};

type Testing = {
  content: any;
};

const ProjectDetails = ({ content }: Testing) => {
  const contentData = content.panelComponentProps;
  const externalLinks: ExternalLinkProps[] = contentData.externalLinks;
  const article: ArticleProps[] = contentData.article;

  return (
    <>
      <div className={styles.externalLinkList}>
        {externalLinks &&
          externalLinks.map((e, i) => (
            <ExternalLink
              key={i}
              href={e.href}
              label={e.label}
            />
          ))}
      </div>
      <ListCard content={content} />
      <hr className={styles.hr} />
      <div className={styles.sectionWrapper}>
        {article &&
          article.map((e, i) => (
            <section
              className={styles.section}
              key={i}
            >
              <Typography
                level={2}
                variant={'headline'}
              >
                {e.heading}
              </Typography>
              <Typography color={'secondary'}>{e.markdown}</Typography>
            </section>
          ))}
      </div>
    </>
  );
};

export default ProjectDetails;
