"use client";
import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";
import { supabase } from "@/backend/client";
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSearchParams } from 'next/navigation';

const ProfessorRatingPage = () => {
  const searchParams = useSearchParams();

  const {register, handleSubmit} = useForm();

  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState('');
  const [review, setReview] = useState('');

  var pid = searchParams.get("pid");
  const insertData = [{
    profid: pid, classname: course, rating: grade, reviewtext: review
  }]

  console.log(insertData)

  const onSubmit = async (formData) => {
    await insertReview(formData);
  };

  async function insertReview(e){
    //e.preventDefault()

    const { data, error } = await supabase
      .from('reviews')
      .insert(insertData)
      .select()
  }




  return (
    <div className={styles.container}>
      <form 
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.title}>Professor Grade</h1>

        <div className={styles.inputGroup}> 
          <label className={styles.label}>Course Name:</label> 
          <input 
            className={styles.input} type="text" name="courseName" required 
            value={course}
            onChange={e => setCourse(e.target.value)}
          /> 
        </div>

        <div className={styles.inputGroup}> 
          <label className={styles.label}>Grade:</label> 
          <input 
            className={styles.input} type="text" name="courseName" required 
            value={grade}
            onChange={e => setGrade(e.target.value)}
          /> 
        </div>

        <div className={styles.inputGroup}>

          <label className={styles.label}>Review:</label>
          <textarea 
            className={styles.textarea} name="review" rows="4" required
            value={review}
            onChange={e => setReview(e.target.value)}
          />

        </div>

        {/* Circular buttons for grade selection */}
        {/* <div className={styles.gradeSelection}>
          {['A', 'B', 'C', 'D', 'F'].map((grade) => (
            <button
              key={grade}
              className={styles.gradeButton}
              type="button"
            >
              {grade}
            </button>
          ))}
        </div> */}

        {/* will take you to the graded professor page on submit*/}
        <Link href={{
            pathname: "/graded/professor",
            query: {
                uni: searchParams.get("uni"),
                pid: searchParams.get("pid"),
                pname: searchParams.get("pname"),
                grade: searchParams.get("grade")
            }
          }} 
        >
        <button className={styles.button}>Back to Professor Page</button>
        </Link>

        <button className={styles.button} type="submit">Submit Professor Grade</button>
      </form>
    </div>
  );
};

export default ProfessorRatingPage;
