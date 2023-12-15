import Image from 'next/image';
import styles from './externalLink.module.css';
import Link from 'next/link';
import { ExternalLinkProps } from '@/data/project-data/types';

const ExternalLink = ({ href, favicon, label }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      className={styles.externalLink}
    >
      <div className={styles.linkFavicon}>
        <Image
          src={favicon}
          alt={label}
          fill
        />
      </div>
      <p>{label}</p>
    </Link>
  );
};

export default ExternalLink;
