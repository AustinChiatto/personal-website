import Typography from '../Typography/Typography';
import styles from './externalLink.module.css';
import Link from 'next/link';

type ExternalLinkProps = {
  href: string;
  thumbnail?: string;
  label: string;
};

const ExternalLink = ({ href, thumbnail, label }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      className={styles.externalLink}
    >
      <div className={styles.linkThumbnail}>{thumbnail}</div>
      <Typography level={6}>{label}</Typography>
    </Link>
  );
};

export default ExternalLink;
