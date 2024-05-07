import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <p>
          Welcome! Explore and rate courses, professors, and universities!.
          </p>
          <div className={styles.ratingDropdown}>
          <button className={styles.newRatingButton}>New Rating</button>
          <div className={styles.dropdownContent}>
            <Link href="/rating/course">
              Course
            </Link>
            <Link href="/rating/university">
              University
            </Link>
            <Link href="/rating/professor">
              Professor
            </Link>
          </div>
        </div>
        </div>

      </div>
    </main>
  );
}

