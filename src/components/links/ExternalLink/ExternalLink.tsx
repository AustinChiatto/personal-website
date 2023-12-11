import Image from 'next/image';
import styles from './externalLink.module.css';
import Link from 'next/link';

export type ExternalLinkProps = {
  href: string;
  favicon: string;
  label: string;
};

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
