//"use client";
import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";
// import { supabase } from "@/backend/client";
// import { useState, useEffect } from 'react';

const ProfessorRatingPage = () => {
  const [prof, setProf] = useState('');
  const [review, setReview] = useState('');
  const [professors, setProfessors] = useState([]);

  // useEffect(() => {
  //   getProf()
  // }, [])

  // async function getProf(){
  //   const { data: professors, error } = await supabase
  //     .from('professors')
  //     .select('pid, name')

  //   setProfessors(professors)
  // }

  // var profid;
  // professors.forEach(element => {
  //   if (element.name === prof) {
  //     profid = element.pid;
  //   }
  // });

  // useEffect(() => {
  //   insertReview()
  // }, [])

  // async function insertReview(e){
  //   //e.preventDefault()

  //   const { data, error } = await supabase
  //     .from('reviews')
  //     .insert([
  //       { 'reviewtext': review }
  //       // {'profid': profid}
  //     ])
  //   .select()
  // }




  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Professor Grade</h1>
        <div className={styles.formGroup}>

          <label className={styles.label}>Professor Name:</label>
          <input 
            className={styles.input} type="text" name="professorName" required
            value={prof}
            onChange={e => setProf(e.target.value)}
          />

        </div>
        <div className={styles.formGroup}>

          <label className={styles.label}>Review:</label>
          <textarea 
            className={styles.textarea} name="review" rows="4" required
            value={review}
            onChange={e => setReview(e.target.value)}
          />

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

