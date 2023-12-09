import styles from './projectDetails.module.css';
import ExternalLink from '@/components/ExternalLink/ExternalLink';
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
  content: any; // todo: assign correct type
};

const ProjectDetails = ({ content }: ContentProps) => {
  const contentData = content.panelComponentProps;
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
              content={content}
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
