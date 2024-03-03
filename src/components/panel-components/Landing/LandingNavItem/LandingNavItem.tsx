import { useContext } from 'react';
import styles from './landing-nav-item.module.css';
import PanelsContext from '@/context/PanelsContext';
import { PanelProps } from '@/data/panel-data';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';

const LandingNavItem = ({
  panelContent,
  index,
  item
}: {
  panelContent: PanelProps;
  index: number;
  item: PanelProps;
}) => {
  const { createPanel } = useContext(PanelsContext);
  const categoryListArray = panelContent?.panelComponentProps?.categoryButtonList ?? [];

  return (
    <li className={styles.categoryListItem}>
      {item.childPanels && item.childPanels.length < 2 ? (
        <>
          {item.childPanels.map((e, i) => (
            <div
              className={`${styles.categoryButtonContents} ${styles[`contentVariation${i}`]}`}
              key={i}
            >
              {e.panelComponentProps?.image ? (
                <Image
                  src={e.panelComponentProps?.image}
                  alt={e.panelComponentProps?.image}
                  quality={10}
                  placeholder="blur"
                  blurDataURL={e.panelComponentProps?.imageBase64}
                  fill
                  sizes="100%"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              ) : null}
            </div>
          ))}
          <div className={`${styles.categoryButtonContents} ${styles.contentVariation1}`}>
            <Image
              src="/images/code2image_project-thumbnail.webp"
              alt="/images/code2image_project-thumbnail.webp"
              quality={10}
              fill
              sizes="100%"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </>
      ) : (
        item.childPanels?.slice(0, 2).map((e, i) => (
          <div
            className={`${styles.categoryButtonContents} ${styles[`contentVariation${i}`]}`}
            key={i}
          >
            {e.panelComponentProps?.image ? (
              <Image
                src={e.panelComponentProps?.image}
                alt={e.panelComponentProps?.image}
                quality={10}
                placeholder="blur"
                blurDataURL={e.panelComponentProps?.imageBase64}
                fill
                sizes="100%"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            ) : null}
          </div>
        ))
      )}
      <button
        className={styles.categoryButton}
        onClick={() =>
          createPanel({
            id: item.id,
            level: item.level,
            intro: item.intro,
            panelComponent: item.panelComponent,
            panelComponentProps: item.panelComponentProps,
            childPanels: item.childPanels
          })
        }
      >
        <div className={styles.categoryButtonLabels}>
          <Typography level={3}>{categoryListArray[index].title}</Typography>
          <Typography color={'secondary'}>{categoryListArray[index].caption}</Typography>
        </div>
      </button>
    </li>
  );
};

export default LandingNavItem;
