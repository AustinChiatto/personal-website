import Link from 'next/link';
import styles from './inlineLink.module.css';
import { useRef, useState } from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';

type InlineLinkProps = {
  href: string;
  highlight?: boolean;
  tooltip?: string;
  children: string;
  target?: string;
};

const InlineLink = ({ href, highlight, children, target, tooltip }: InlineLinkProps) => {
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
      className={`${styles.inlineLink} ${highlight ? styles.highlight : styles.default}`}
      target={target}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      {children}
      {isHovered && tooltip && <Tooltip label={tooltip} />}
    </Link>
  );
};

export default InlineLink;
