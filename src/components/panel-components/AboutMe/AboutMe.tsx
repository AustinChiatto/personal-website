import Typography from '@/components/Typography/Typography';
import InlineLink from '@/components/links/InlineLink/InlineLink';
import styles from './aboutMe.module.css';
import Chip from '@/components/Chip/Chip';
import ExternalLink from '@/components/links/ExternalLink/ExternalLink';
import Link from 'next/link';
import Image from 'next/image';

const AboutContent = () => {
  const linkedIn = (
    <InlineLink
      href="#"
      highlight
    >
      LinkedIn
    </InlineLink>
  );

  const email = (
    <InlineLink
      href="#"
      highlight
    >
      Email
    </InlineLink>
  );

  const artemis = (
    <InlineLink
      href="#"
      highlight
    >
      Artemis
    </InlineLink>
  );

  const starship = (
    <InlineLink
      href="#"
      highlight
    >
      Starship
    </InlineLink>
  );

  const externalLinkArray = [
    {
      label: 'Email',
      href: '#',
      favicon: '/icons/email.svg'
    },
    {
      label: 'LinkedIn',
      href: '#',
      favicon: '/icons/linkedin-original.svg'
    }
  ];

  return (
    <>
      <ul className={styles.externalLinkList}>
        {externalLinkArray &&
          externalLinkArray.map((e, i) => (
            <li key={i}>
              <ExternalLink
                href={e.href}
                label={e.label}
                favicon={e.favicon}
              />
            </li>
          ))}
      </ul>
      <Typography color={'secondary'}>
        I like solving problems and building neat things. Despite being new to development, I have
        spent my life tinkering with, breaking, fixing, and having fun with technology. Frontend
        development is a way for me to bring together all the things I love doing.
      </Typography>

      <Typography color={'secondary'}>
        If you would like to say hi, feel free to send me an {email}, a message on {linkedIn}, or
        check out my resume or GitHub.
      </Typography>
      <ul className={styles.gridList}>
        <li className={styles.gridItem}>
          <Link
            href="#"
            className={styles.largeExternalLink}
          >
            <div className={styles.icon}>
              <Image
                src={'/icons/icon-doc-text-fill.svg'}
                alt=""
                fill
              />
            </div>
            <Typography level={4}>Resume</Typography>
          </Link>
        </li>
        <li className={styles.gridItem}>
          <Link
            href="#"
            className={styles.largeExternalLink}
          >
            <div className={styles.icon}>
              <Image
                src={'/icons/github-original.svg'}
                alt=""
                fill
              />
            </div>
            <Typography level={4}>GitHub</Typography>
          </Link>
        </li>
      </ul>
      <Typography color={'secondary'}>
        Off the clock, you&apos;re likely to catch me keeping up with the space race, climbing some
        rocks in the bouldering gym, or hanging out with my cat{' '}
        <Chip
          chipLabel="Max"
          isActionable
        />
      </Typography>
      <hr />
      <Typography level={3}>Thanks for stopping by!</Typography>
      <Typography color={'secondary'}>
        I&apos;ll leave you with this photo from a recent adventure.
      </Typography>
      <div className={styles.aboutImage}>
        <Image
          src={'/images/about-image.jpeg'}
          alt=""
          fill
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default AboutContent;