import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";

const ProfessorRatingPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Professor Grade</h1>
        <div className={styles.formGroup}>
          <label className={styles.label}>Professor Name:</label>
          <input className={styles.input} type="text" name="professorName" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Review:</label>
          <textarea className={styles.textarea} name="review" rows="4" required></textarea>
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

        {/* will take you to the graded professor page on submit*/}
        <Link href='/graded/professor'>
        <button className={styles.button} type="submit">Submit Professor Grade</button>
        </Link>
      </form>
    </div>
  );
};

export default ProfessorRatingPage;

