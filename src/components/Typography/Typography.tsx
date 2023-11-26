import { ReactNode } from 'react';
import styles from './typography.module.css';

type TypographyProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: keyof typeof styles;
  color?: keyof typeof styles;
  children: ReactNode;
};

const Typography = ({ level, variant = 'body', color = 'primary', children }: TypographyProps) => {
  const Tag = level ? (`h${level}` as keyof JSX.IntrinsicElements) : 'p';

  const classNames = [styles[variant], styles[color]].join(' ');

  return <Tag className={classNames}>{children}</Tag>;
};

export default Typography;
