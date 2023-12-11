import Link from 'next/link';
import styles from './inlineLink.module.css';

type InlineLinkProps = {
  href: string;
  highlight?: boolean;
  children: string;
  target?: string;
  title?: string;
};

const InlineLink = ({ href, highlight, children, target, title }: InlineLinkProps) => {
  return (
    <Link
      href={href}
      className={highlight ? styles.highlight : styles.default}
      target={target}
      title={title}
    >
      {children}
    </Link>
  );
};

export default InlineLink;
