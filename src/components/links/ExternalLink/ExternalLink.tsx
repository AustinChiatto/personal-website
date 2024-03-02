import Image from 'next/image';
import styles from './externalLink.module.css';
import Link from 'next/link';
import { ExternalLinkProps } from '@/data/project-data/types';
import { useState } from 'react';

const ExternalLink = ({ href, favicon, label }: ExternalLinkProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      title={label}
      className={`${styles.externalLink} ${isPressed ? styles.externalLinkPressed : ''}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseOut={() => setIsPressed(false)}
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
