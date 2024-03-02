'use client';
import { ReactEventHandler, useState } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string;
  variant: string;
  onClickEvent: ReactEventHandler;
};

const Button = ({ label, variant, onClickEvent }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const variantClass = styles[variant];

  return (
    <div className={styles.insetWrapperButton}>
      <button
        className={`${styles.button} ${variantClass} ${isPressed ? styles.pressed : ''}`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseOut={() => setIsPressed(false)}
        onClick={onClickEvent}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
