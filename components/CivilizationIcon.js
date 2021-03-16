import React from 'react';
import Image from 'next/image';
import styles from './CivilizationIcon.module.css';

export default function CivilizationIcon({ icon }) {
  return (
    <img
      className={styles.main}
      src={`/static/icons/civilization/${icon}.png`}
    />
  );
}
