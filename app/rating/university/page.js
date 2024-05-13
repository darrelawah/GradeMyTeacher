"use client";
import React from 'react';
import Link from 'next/link';
import styles from "../../rating/rating.module.css";
import { supabase } from "@/backend/client";
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSearchParams } from 'next/navigation';

const UniversityRatingPage = () => {
  const searchParams = useSearchParams();

  const {register, handleSubmit} = useForm();

  const [grade, setGrade] = useState('');
  const [review, setReview] = useState('');

  var uniname = searchParams.get("uname");
  var uid = searchParams.get("uni");
  const insertData = [{
    uid: uid, uname: uniname, rating: grade, reviewtext: review
  }]

  console.log(insertData)

  const onSubmit = async (formData) => {
    await insertReview(formData);
  };

  async function insertReview(e){
    //e.preventDefault()

    const { data, error } = await supabase
      .from('unireviews')
      .insert(insertData)
      .select()
  }

  //console.log(insertData)

  return (
    <div className='outerContainer'> 
      <form 
        className={styles.form} 
        onSubmit={handleSubmit(onSubmit)}
      > 
        <h1 className={styles.title}>University Grade</h1> {/* Apply title class */}
        
        {/* <div className={styles.formGroup}> 
          <label className={styles.label}>University Name:</label> 
          <input className={styles.input} type="text" name="universityName" required /> 
        </div> */}

        <div className={styles.formGroup}> 
          <label >Grade:</label> 
          <input 
            type="text" name="grade" required 
            value={grade}
            onChange={e => setGrade(e.target.value)}
          /> 
        </div>

        <div className={styles.formGroup}>

          <label>Review:</label>
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
              type="button"
            >
              {grade}
            </button>
          ))}
        </div> */}
        
        {/* will take you to the university graded page after you submit*/}
        <Link href={{
            pathname: "/graded/university",
            query: {
                uid: searchParams.get("uid"),
                uname: searchParams.get("uname"),
                grade: searchParams.get("grade")
            }
          }} 
        >
        <button>Back to University Page</button>
        </Link>

        <button type="submit">Submit University Grade</button>
      </form>
    </div>
  );
};

export default UniversityRatingPage;
