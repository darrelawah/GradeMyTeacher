"use client";
import React from 'react';
import Link from 'next/link';
import { supabase } from "@/backend/client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

function useGetReviews(cname) {
    const [review, setReviews] = useState([]);

    useEffect(() => {
        getRev()
    }, [])

    async function getRev(){
        const { data: reviews, error } = await supabase
            .from('reviews')
            .select('classname, profname, rating, reviewtext')

        setReviews(reviews)
    }

    var arr = []
    review.forEach(element => {
        if (element.classname == cname) {
            var profname = element.profname;
            var rating = element.rating;
            var comment = element.reviewtext;
            arr.push({profname, rating, comment})
        }
    });

    return arr;
}

const GradedClassPageContent = () => {
    const searchParams = useSearchParams();
    const reviewarr = useGetReviews(searchParams.get("cname"));

    const gradedClass = {
        courseName: searchParams.get("cname"),
        university: searchParams.get("uni"),
        grade: searchParams.get("grade"),
        reviews: reviewarr
    };
    
    return (
        <div className='outerContainer'>
            <div className='mainContainer'>
                <div>
                    <h1 style={styles.heading}>{gradedClass.courseName}</h1>
                </div>
                <div>
                    <h2 style={styles.subHeading}>University:
                        <div>
                            {gradedClass.university}
                        </div>
                    </h2>
                </div>
                <div>
                    <h2 style={styles.subHeading}>Average Rating:
                        <div className='ratingLetter'>
                            {gradedClass.grade}
                        </div>
                    </h2>
                </div>
                <div style={styles.reviews}>
                    <h2 style={styles.subHeading}>Reviews:</h2>
                    {gradedClass.reviews.map((review, index) => (
                        <div key={index} style={styles.review}>
                            <div>
                                <h3>{review.profname}</h3>
                            </div>
                            <div>
                                <p>
                                <strong>Rating:</strong>
                                    <div className='ratingLetter'>
                                        {review.rating}
                                    </div>
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
                    <Link href="/">
                        <button>Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const GradedClassPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GradedClassPageContent />
        </Suspense>
    )
}

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

export default GradedClassPage;

