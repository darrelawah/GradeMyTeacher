import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";

const UniversityRatingPage = () => {
  return (
    <div className={styles.container}> {/* Apply container class */}
      <form className={styles.form}> {/* Apply form class */}
        <h1 className={styles.title}>University Grade</h1> {/* Apply title class */}
        <div className={styles.formGroup}> {/* Apply formGroup class */}
          <label className={styles.label}>University Name:</label> {/* Apply label class */}
          <input className={styles.input} type="text" name="universityName" required /> {/* Apply input class */}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Review:</label>
          <textarea className={styles.textarea} name="review" rows="4" required></textarea> {/* Apply textarea class */}
        </div>
         {/* Circular buttons for grade selection */}
         <div className={styles.gradeSelection}>
          {['A', 'B', 'C', 'D', 'F'].map((grade) => (
            <button
              key={grade}
              className={styles.gradeButton}
              type="button"
            >
              {grade}
            </button>
          ))}
        </div>
        <button className={styles.button} type="submit">Submit University Grade</button> {/* Apply button class */}
      </form>
    </div>
  );
};

export default UniversityRatingPage;
