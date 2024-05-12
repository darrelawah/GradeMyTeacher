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
        <div style={styles.container}>
            <h1 style={styles.heading}>{gradedProfessor.professorName}</h1>
            <h2 style={styles.subHeading}>University: {gradedProfessor.university}</h2>
            <h2 style={styles.subHeading}>Average Rating: {gradedProfessor.averageRating}</h2>
            <div style={styles.reviews}>
                <h2 style={styles.subHeading}>Reviews:</h2>
                {/* pulls professor information from the database (just an array for now) */}
                {gradedProfessor.reviews.map((review, index) => (
                    <div key={index} style={styles.review}>
                        <h3>{review.classname}</h3>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p><strong>Comment:</strong> {review.comment}</p>
                    </div>
                ))}
            </div>
            <div style={styles.buttonContainer}>
                <Link href="/">
                    <button style={styles.button}>Back to Home</button>
                </Link>
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
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        color: '#FFFFFF',
    },
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
    buttonContainer: {
        textAlign: 'center',
        marginTop: '20px',
    },
    button: {
        padding: '12px 20px',
        fontSize: '1.2rem',
        backgroundColor: '#7289DA',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};
