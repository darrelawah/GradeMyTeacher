import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";

const ProfessorRatingPage = () => {
  return (
    <div className={styles.container}> {/* Apply container class */}
      <form className={styles.form}> {/* Apply form class */}
        <h1 className={styles.title}>Professor Rating</h1> {/* Apply title class */}
        <div className={styles.formGroup}> {/* Apply formGroup class */}
          <label className={styles.label}>Professor Name:</label> {/* Apply label class */}
          <input className={styles.input} type="text" name="professorName" required /> {/* Apply input class */}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Review:</label>
          <textarea className={styles.textarea} name="review" rows="4" required></textarea> {/* Apply textarea class */}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Rating (Out of 5):</label>
          <input className={styles.input} type="number" name="rating" min="1" max="5" required />
        </div>
        <button className={styles.button} type="submit">Submit Professor Rating</button> {/* Apply button class */}
      </form>
    </div>
  );
};

export default ProfessorRatingPage;
