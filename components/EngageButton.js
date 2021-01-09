import styles from '../styles/Button.module.css';
import React, { useState } from 'react';

export default function EngageButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} className={styles.likebutton}>
      Like
    </button>
  );
}
