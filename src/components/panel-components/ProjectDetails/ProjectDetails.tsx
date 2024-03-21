import styles from './projectDetails.module.css';
import ExternalLink from '@/components/links/ExternalLink/ExternalLink';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ListCard, { ListCardProps } from '@/components/ListCard/ListCard';
import { PanelProps } from '@/data/panel-data';
import { ArticleProps, ExternalLinkProps } from '@/data/project-data/types';
import { generateSlug } from '@/utils/generateSlug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useRef } from 'react';

interface H2Props {
  children: React.ReactNode;
}

// todo: assign better typings
type codeProps = {
  children: any;
  className: any;
  node: any;
};

const ProjectDetails = ({ panelContent }: { panelContent: PanelProps }) => {
  const contentData = panelContent.panelComponentProps;
  const externalLinkArray: ExternalLinkProps[] = contentData?.externalLinks ?? [];
  const articleArray: ArticleProps[] = contentData?.article ?? [];
  const listCardArray: ListCardProps[] = contentData?.listCards ?? [];

  // todo: separate this out into it's own file
  const MarkdownComponents = {
    h2: ({ children }: H2Props) => {
      const mdChildren = Array.isArray(children) ? children : [children];
      const heading = mdChildren
        .flatMap((element) =>
          typeof element === 'string'
            ? element
            : element?.type !== undefined && typeof element.props.children === 'string'
            ? element.props.children
            : []
        )
        .join('');

      const slug = generateSlug(heading);

      return (
        <h2
          id={slug}
          className={'mdHeadingBorder'}
        >
          <a
            href={`#${slug}`}
            className={'mdLinkedHeading'}
          >
            {children}
          </a>
        </h2>
      );
    },
    ul: ({ children }: H2Props) => {
      return <ul className={'mdList'}>{children}</ul>;
    },
    h3: ({ children }: H2Props) => {
      return <h3 className={'mdH3'}>{children}</h3>;
    },
    code({ children, className, node, ...rest }: codeProps) {
      const match = /-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          language={match[1]}
          style={oneDark}
          className={'mdCodeBlock'}
        >
          {children}
        </SyntaxHighlighter>
      ) : (
        <code
          {...rest}
          className={'mdCode'}
        >
          {children}
        </code>
      );
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // call load function when contentData changes
    }
  }, [contentData]);

  return (
    <>
      <ul className={styles.linkList}>
        {externalLinkArray &&
          externalLinkArray.map((e, i) => (
            <li key={i}>
              <ExternalLink
                href={e.href}
                label={e.label}
                tooltip={e.tooltip}
                favicon={e.favicon}
              />
            </li>
          ))}
      </ul>
      <div className={styles.projectShowcase}>
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          preload="none"
          autoPlay
          muted
          loop
        >
          <source
            src={contentData && contentData.videoShowcase}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {listCardArray &&
        listCardArray.map((e, i) => (
          <ListCard
            key={i}
            cardList={e}
            panelContent={panelContent}
            index={i}
          />
        ))}
      <article className={styles.sectionWrapper}>
        {/* todo: no need for a .map going forward as it will be just a single item */}
        {articleArray &&
          articleArray.map((e, i) => (
            <section
              className={styles.section}
              key={i}
            >
              {e.markdownSection.map((markdownItem, j) => (
                <Markdown
                  key={j}
                  components={MarkdownComponents as any} // Todo: assign more specific type
                  remarkPlugins={[remarkGfm]}
                >
                  {markdownItem}
                </Markdown>
              ))}
            </section>
          ))}
      </article>
      <ul className={styles.linkListBottom}>
        {externalLinkArray &&
          externalLinkArray.map((e, i) => (
            <li key={i}>
              <ExternalLink
                href={e.href}
                label={e.label}
                tooltip={e.tooltip}
                favicon={e.favicon}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProjectDetails;
