import Image from 'next/image';
import styles from './externalLink.module.css';
import Link from 'next/link';
import { ExternalLinkProps } from '@/data/project-data/types';
import { useRef, useState } from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';

const ExternalLink = ({ href, favicon, label, tooltip }: ExternalLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const onEnterDelay = useRef<number | undefined>();
  const onLeaveDelay = useRef<number | undefined>();

  const handleMouseEnter = () => {
    onLeaveDelay.current && clearTimeout(onLeaveDelay.current);
    onEnterDelay.current = window.setTimeout(() => setIsHovered(true), 700);
  };

  const handleMouseLeave = () => {
    onEnterDelay.current && clearTimeout(onEnterDelay.current);
    onLeaveDelay.current = window.setTimeout(() => setIsHovered(false), 300);
  };

  return (
    <Link
      href={href}
      target="_blank"
      className={styles.externalLink}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      <div className={styles.linkFavicon}>
        <Image
          src={favicon}
          alt={label}
          fill
        />
      </div>
      {label}
      {isHovered && tooltip && <Tooltip label={tooltip} />}
    </Link>
  );
};

export default ExternalLink;
