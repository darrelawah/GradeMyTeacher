import React from 'react';
import Link from 'next/link';

const GradedProfessorPage = () => {
    // Dummy data for now. We will pull this data from the backend. 
    const gradedProfessor = {
        professorName: 'Dr. John Smith',
        university: 'Example University',
        averageRating: 'F',
        reviews: [
            { username: 'User1', rating: 'F', comment: 'Rude to students' },
            { username: 'User2', rating: 'F', comment: 'Harsh Grader' },
            { username: 'User3', rating: 'F', comment: 'Bad policies' }
        ]
    };

    //may add more comments later. Kinda tired today (Sorry!).
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{gradedProfessor.professorName}</h1>
            <h2 style={styles.subHeading}>University: {gradedProfessor.university}</h2>
            <h2 style={styles.subHeading}>Average Rating: {gradedProfessor.averageRating}</h2>
            <div style={styles.reviews}>
                <h2 style={styles.subHeading}>Reviews:</h2>
                {gradedProfessor.reviews.map((review, index) => (
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

export default GradedProfessorPage;
