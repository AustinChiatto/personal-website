import Typography from '../../Typography/Typography';
import styles from './landing.module.css';
import PanelsContext from '@/context/PanelsContext';
import { useContext } from 'react';
import { PanelProps } from '@/data/panel-data';
import InlineLink from '../../links/InlineLink/InlineLink';
import Image from 'next/image';

const LandingPanel = ({ panelContent }: { panelContent: PanelProps }) => {
  const { createPanel } = useContext(PanelsContext);
  const childPanelArray = panelContent?.childPanels ?? [];
  const categoryListArray = panelContent?.panelComponentProps?.categoryButtonList ?? [];

  const dovetailLink = (
    <InlineLink
      href="https://www.dovetaildigital.ca/"
      target="_blank"
      title="dovetaildigital.ca"
      highlight
    >
      Dovetail Digital
    </InlineLink>
  );
  const marketMaestroLink = (
    <InlineLink
      href="https://www.marketmaestro.ca/"
      target="_blank"
      title="marketmaestro.ca"
      highlight
    >
      Market Maestro
    </InlineLink>
  );
  const interplanetaryLink = (
    <InlineLink
      href="#"
      highlight
    >
      Interplanetary
    </InlineLink>
  );
  const gitRoastedLink = (
    <InlineLink
      href="#"
      highlight
    >
      GitRoasted
    </InlineLink>
  );

  return (
    <>
      <div className={styles.personalIntro}>
        <Typography>
          Junior front-end developer living on the (rainy) west coast of Canada.
        </Typography>
        <Typography>
          Recently I completed an internship at {dovetailLink} where I built a website using Next.js
          that introduces their {marketMaestroLink} application.
        </Typography>
        <Typography>
          Since then, I&apos;ve been working on refining my skills as a front-end developer,
          building small projects like {interplanetaryLink} to teach myself new tech I find neat.
        </Typography>
      </div>
      <ul className={styles.categoryList}>
        {childPanelArray.map((e, i) => (
          <li
            className={styles.categoryListItem}
            key={i}
          >
            <button
              className={styles.categoryButton}
              onClick={() =>
                createPanel({
                  id: e.id,
                  level: e.level,
                  intro: e.intro,
                  panelComponent: e.panelComponent,
                  panelComponentProps: e.panelComponentProps,
                  childPanels: e.childPanels
                })
              }
            >
              <div className={styles.categoryButtonIcon}>
                <Image
                  src={categoryListArray[i].icon}
                  alt={categoryListArray[i].alt}
                  fill
                />
              </div>
              <div className={styles.categoryButtonLabels}>
                <Typography level={3}>{categoryListArray[i].title}</Typography>
                <Typography color={'secondary'}>{categoryListArray[i].caption}</Typography>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.panelFooter}>
        <InlineLink href="mailto:chiattoaustin@gmail.com">hey@austinchiatto.com</InlineLink>
        <Typography
          level={6}
          color={'tertiary'}
        >
          2024
        </Typography>
      </div>
    </>
  );
};

export default LandingPanel;
