import styles from './projectDetails.module.css';
import ExternalLink from '@/components/links/ExternalLink/ExternalLink';
import Markdown from 'react-markdown';
import ListCard, { ListCardProps } from '@/components/ListCard/ListCard';

type ExternalLinkProps = {
  label: string;
  href: string;
};

type ArticleProps = {
  image?: string;
  markdown: string[];
};

type ContentProps = {
  panelContent: any; // todo: assign correct type
};

const ProjectDetails = ({ panelContent }: ContentProps) => {
  const contentData = panelContent.panelComponentProps;
  const externalLinkArray: ExternalLinkProps[] = contentData.externalLinks;
  const articleArray: ArticleProps[] = contentData.article;
  const listCardArray: ListCardProps[] = contentData.listCards;

  return (
    <>
      <ul className={styles.externalLinkList}>
        {externalLinkArray &&
          externalLinkArray.map((e, i) => (
            <li key={i}>
              <ExternalLink
                href={e.href}
                label={e.label}
              />
            </li>
          ))}
      </ul>
      <div className={styles.listCardWrapper}>
        {listCardArray &&
          listCardArray.map((e, i) => (
            <ListCard
              key={i}
              cardList={e}
              panelContent={panelContent}
              index={i}
            />
          ))}
      </div>
      <article className={styles.sectionWrapper}>
        {articleArray &&
          articleArray.map((e, i) => (
            <section
              className={styles.section}
              key={i}
            >
              {e.markdown.map((markdownItem, j) => (
                <Markdown key={j}>{markdownItem}</Markdown>
              ))}
            </section>
          ))}
      </article>
    </>
  );
};

export default ProjectDetails;