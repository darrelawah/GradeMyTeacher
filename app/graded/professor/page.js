"use client";
import React from 'react';
import Link from 'next/link';
import { supabase } from "@/backend/client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

function useGetReviews(pid) {
    const [review, setReviews] = useState([]);
    useEffect(() => {
        getRev()
    }, [])
    async function getRev(){
        const { data: reviews, error } = await supabase
            .from('reviews')
            .select('profid, classname, rating, reviewtext')
        setReviews(reviews)
    }
    var arr = []
    review.forEach(element => {
        if (element.profid == pid) {
            var classname = element.classname;
            var rating = element.rating;
            var comment = element.reviewtext;
            arr.push({classname, rating, comment})
        }
    });
    return arr;
}

const GradedProfessorPageContent = () => {
    const searchParams = useSearchParams();
    const reviewarr = useGetReviews(searchParams.get("pid"));
    
    const gradedProfessor = {
        professorName: searchParams.get("pname"),
        university: searchParams.get("uni"),
        averageRating: searchParams.get("grade"),
        reviews: reviewarr
    };

    return (
        <div className='outerContainer'>
            <div className='mainContainer'>
                <div>
                    <h1 style={styles.heading}>{gradedProfessor.professorName}</h1>
                </div>
                <br/>
                <div>
                    <h2 style={styles.subHeading}>University: {gradedProfessor.university}</h2>
                </div>
                <br/>
                <div>
                    <h2 style={styles.subHeading}>Average Rating: 
                    <div className='ratingLetter'>{gradedProfessor.averageRating}</div>
                    </h2>
                </div>
                <br/>
                <div style={styles.reviews}>
                    <h2 style={styles.subHeading}>Reviews:</h2>
                    {/* pulls professor information from the database (just an array for now) */}
                    {gradedProfessor.reviews.map((review, index) => (
                        <div key={index} style={styles.review}>
                            <div>
                                <h3>{review.classname}</h3>
                            </div>
                            <div>
                                <p><strong>Rating:</strong>
                                <div className='ratingLetter'>{review.rating}</div>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Comment:</strong>
                                    <div>
                                        {review.comment}
                                    </div>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                <Link href={{
                    pathname: "/rating/professor",
                    query: {
                        uni: searchParams.get("uni"),
                        pid: searchParams.get("pid"),
                        pname: searchParams.get("pname"),
                        grade: searchParams.get("grade")
                    }
                }} 
                >
                    <button>Write a Review</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

const GradedProfessorPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GradedProfessorPageContent />
        </Suspense>
    )
}

export default GradedProfessorPage;

// CSS styles
const styles = {
    heading: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '20px',
    },
    subHeading: {
        fontSize: '1.5em',
        marginBottom: '10px',
    },
    reviews: {
        marginTop: '20px',
    },
    review: {
        background: '#2C2F33',
        padding: '20px',
        borderRadius: '5px',
        marginBottom: '20px',
    },

};
