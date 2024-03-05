import Typography from '../../Typography/Typography';
import styles from './landing.module.css';
import PanelsContext from '@/context/PanelsContext';
import { useContext, useEffect, useState } from 'react';
import { PanelProps } from '@/data/panel-data';
import InlineLink from '../../links/InlineLink/InlineLink';
import LandingMobile from './LandingMobile';
import LandingNavItem from './LandingNavItem/LandingNavItem';

const LandingPanel = ({ panelContent }: { panelContent: PanelProps }) => {
  const { createPanel } = useContext(PanelsContext);
  const childPanelArray = panelContent?.childPanels ?? [];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dovetailLink = (
    <InlineLink
      href="https://www.dovetaildigital.ca/"
      target="_blank"
      tooltip="dovetaildigital.ca"
      highlight
    >
      Dovetail Digital
    </InlineLink>
  );
  const marketMaestroLink = (
    <InlineLink
      href="https://www.marketmaestro.ca/"
      target="_blank"
      tooltip="marketmaestro.ca"
      highlight
    >
      Market Maestro
    </InlineLink>
  );

  return (
    <>
      <section className={styles.personalIntro}>
        <Typography>
          Junior front-end developer living on the (rainy) west coast of Canada.
        </Typography>
        <Typography>
          Recently I completed an internship at {dovetailLink} where I built a website using Next.js
          that introduces their {marketMaestroLink} application.
        </Typography>
        <Typography>
          Since then, I&apos;ve been working on refining my skills as a front-end developer,
          building small projects to teach myself new tech I find neat.
        </Typography>
      </section>
      {!isMobile && (
        <section>
          <hr />
          <ul className={styles.categoryList}>
            {childPanelArray.map((e, i) => (
              <LandingNavItem
                panelContent={panelContent}
                key={i}
                index={i}
                item={e}
              />
            ))}
          </ul>
        </section>
      )}
      {isMobile && <LandingMobile />}
      <section className={styles.panelFooter}>
        <InlineLink href="mailto:chiattoaustin@gmail.com">hey@austinchiatto.com</InlineLink>
        <Typography
          level={6}
          color={'tertiary'}
        >
          1.0.1
        </Typography>
      </section>
    </>
  );
};

export default LandingPanel;
