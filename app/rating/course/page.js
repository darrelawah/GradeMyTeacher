import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";


const CourseRatingPage = () => {
    return (
        <div className={styles.container}> {/* Apply container class */}
            <form className={styles.form}> {/* Apply form class */}
                <h1 className={styles.title}>Course Grade</h1> {/* Apply title class */}
                <div className={styles.inputGroup}> {/* Apply inputGroup class */}
                    <label className={styles.label}>Course Name:</label> {/* Apply label class */}
                    <input className={styles.input} type="text" name="courseName" required /> {/* Apply input class */}
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>University:</label>
                    <input className={styles.input} type="text" name="university" required />
                </div>
                <div className={styles.inputGroup}>
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
                {/* will take you to the graded class page once review is complete*/}
                <Link href='/graded/class'>
                <button className={styles.button} type="submit">Submit Course Grade</button> {/* Apply button class */}
                </Link>
            </form>
        </div>
    );
};

export default CourseRatingPage;
