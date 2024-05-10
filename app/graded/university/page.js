import React from 'react';
import Link from 'next/link';

const GradedUniversityPage = () => {
    // Dummy data for now. We will pull this data from the backend. 
    const gradedUniversity = {
        universityName: 'Example University',
        averageRating: 'B', 
        reviews: [
            { username: 'User1', rating: "A", comment: 'Solid university! Would attend again!' },
            { username: 'User2', rating: "B", comment: 'Not too shabby. Would almost recommend' },
            { username: 'User3', rating: "C", comment: 'Mid campus. Dining hall food is bad.' }
        ]
    };

    //may add more comments later. Kinda tired today (Sorry!).
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{gradedUniversity.universityName}</h1>
            <h2 style={styles.subHeading}>Average Rating: {gradedUniversity.averageRating}</h2>
            <div style={styles.reviews}>
                <h2 style={styles.subHeading}>Reviews:</h2>
                {gradedUniversity.reviews.map((review, index) => (
                    <div key={index} style={styles.review}>
                        <h3>{review.username}</h3>
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

export default GradedUniversityPage;
