"use client";
import React, { Suspense } from 'react';
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

  const onSubmit = async (formData) => {
    await insertReview(formData);
  };

  async function insertReview(e){

    const { data, error } = await supabase
      .from('reviews')
      .insert(insertData)
      .select()
  }
  return (
    <div className='outerContainer'>
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
            className={styles.input} type="text" name="grade" required 
            value={grade}
            onChange={e => setGrade(e.target.value)}
          /> 
        </div>

        <div className={styles.inputGroup}>

          <label className={styles.label}>Review:</label>
          <textarea 
            name="review" rows="4" required
            value={review}
            onChange={e => setReview(e.target.value)}
          />

        </div>
        <div>
          <div>
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
            <button className='multibutton'>Back to Professor Page</button>
            </Link>
          </div>
          <div><button className='multibutton' type="submit">Submit Professor Grade</button></div>
        </div>
      </form>
    </div>
  );
};
const ProfessorRatingPageWithParams = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProfessorRatingPage />
  </Suspense>
);

export default ProfessorRatingPageWithParams;
