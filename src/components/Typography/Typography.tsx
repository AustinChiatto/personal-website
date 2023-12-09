import { ReactNode } from 'react';
import styles from './typography.module.css';

type TypographyProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof typeof styles;
  children: ReactNode;
};

const Typography = ({ level, color = 'primary', children }: TypographyProps) => {
  const Tag = level ? (`h${level}` as keyof JSX.IntrinsicElements) : 'p';

  const className = styles[color];

  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
