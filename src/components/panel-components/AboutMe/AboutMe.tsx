import Typography from '@/components/Typography/Typography';
import styles from './aboutMe.module.css';
import ExternalLink from '@/components/links/ExternalLink/ExternalLink';
import Link from 'next/link';
import Image from 'next/image';

const AboutContent = () => {
  const externalLinkArray = [
    {
      label: 'Email',
      tooltip: 'Hey there 👋',
      href: 'mailto:chiattoaustin@gmail.com',
      favicon: '/icons/email.svg'
    },
    {
      label: 'LinkedIn',
      tooltip: 'Work history',
      href: 'https://www.linkedin.com/in/austin-chiatto/',
      favicon: '/icons/linkedin-original.svg'
    },
    {
      label: 'GitHub',
      tooltip: 'GitHub profile',
      href: 'https://github.com/AustinChiatto',
      favicon: '/icons/github-original.svg'
    },
    {
      label: 'Resume',
      tooltip: 'Resume as PDF',
      href: '/austin-chiatto_resume_2024.pdf',
      favicon: '/icons/icon-doc-text-fill.svg'
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
                tooltip={e.tooltip}
                favicon={e.favicon}
              />
            </li>
          ))}
      </ul>
      <Typography color={'secondary'}>
        I&apos;m Austin, a front-end developer, designer, and aspiring astronaut that spends all his
        free time brainstorming.
      </Typography>
      <Typography color={'secondary'}>
        I like building neat things that solve problems. Although I am new to the development
        industry, I have spent my life tinkering with, breaking, building, and having fun with
        technology. Front-end development has been the perfect way to bring together all the things
        I love doing.
      </Typography>
      <ul className={styles.gridList}>
        <li className={styles.gridItem}>
          <Link
            href="/austin-chiatto_resume_2024.pdf"
            title="View Resume"
            target="_blank"
            className={styles.largeExternalLink}
          >
            <div className={styles.icon}>
              <Image
                src={'/icons/icon-doc-text-fill.svg'}
                alt="Icon document text fill"
                fill
              />
            </div>
            <Typography level={4}>Resume</Typography>
          </Link>
        </li>
        <li className={styles.gridItem}>
          <Link
            href="https://github.com/AustinChiatto"
            title="View GitHub Profile"
            target="_blank"
            className={styles.largeExternalLink}
          >
            <div className={styles.icon}>
              <Image
                src={'/icons/github-original.svg'}
                alt="Icon GitHub"
                fill
              />
            </div>
            <Typography level={4}>GitHub</Typography>
          </Link>
        </li>
      </ul>
      <Typography color={'secondary'}>
        Off the clock, you&apos;re likely to catch me immersed in a game, movie, or book. If not,
        you can always find me hanging out with my cat Max.
      </Typography>
      <Typography color={'secondary'}>Don&apos;t forget to be kind to yourself ✌️</Typography>
      {/* <hr />
      <Typography color={'secondary'}>
        I&apos;ll leave you with this photo from a recent adventure.
      </Typography> */}
      <div className={styles.aboutImage}>
        <Image
          src={'/images/about-image.webp'}
          alt="A view of a mountain meadow from Panorama Ridge in Squamish, BC, Canada."
          fill
          sizes="100%"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAIAAAA2KZn2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAAB7ElEQVQoFQ2Qu27TYACF/7vt2E4bJ2mbNk3aQtImWShMSEi8AGLlJXgXXgMmBsQME4giRCUEUxsp5dKmMdhO4tt/xev5jvQdHfji1dn5TzGbLx9PAkbx54soXAoIYbPOEISLlcBGH7ZdAHSn7T4atQk2AAAyPtre2zHLYitOy5ZPftyaIEAPB77S+qBl8zS5msc2yG4Xi0nv5Hr6fXpxeTzYI2kcXkfyj2lKyaZrajesGsWLvGTJ7MP5lRRZFCWlgpUt/pfky4URYu5B8vrN23h5hTRMRHIyaMh1gZzuZZKVhWptBo5X813DyjROxcezb1IJKYsSj8n7dy8xQsZQDYEruzfhuteNs5JUeGuHffryddjvzm5+V/1f85Bia7uz0d9p4FZn83gYlHlech1GyZ1DdjpqNwMRReLesB/UoeOp0/GRkgUjuecix0KT0RBu7reqZ5487QWNjZvr3LXrd3c7Nq0hCyxXIcbYseqEYSEq1JClXKdJtzeCz54/0Ar2dz3GCLGQ4tAoO4twu91ENAuzBAogSKERp4hCYhiig/37pH9gZWkhgASarteKc8FYSjxrXiY8kZQYTVLOcbVIO1zlYAVIR6yq7K+/4QCQaa0xlzUKEUKcc40U8wFBwCDs+prnQEhFsMVsSBn8D5KkANIz5D4SAAAAAElFTkSuQmCC"
        />
      </div>
    </>
  );
};

export default AboutContent;
