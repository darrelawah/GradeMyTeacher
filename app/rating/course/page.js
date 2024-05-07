import React from 'react';
import Link from 'next/link';

const CourseRatingPage = () => {
    return (
        <div>
            <form>
                <h1>Course Rating</h1>
                <div>
                    <label>Course Name:</label>
                    <input type="text" name="courseName" required />
                </div>
                <div>
                    <label>University:</label>
                    <input type="text" name="university" required />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea name="review" rows="4" required></textarea>
                </div>
                <div>
                    <label>Rating (Out of 5):</label>
                    <input type="number" name="rating" min="1" max="5" required />
                </div>
                <button type="submit">Submit Course Rating</button>
            </form>
        </div>
    );
};

export default CourseRatingPage;

