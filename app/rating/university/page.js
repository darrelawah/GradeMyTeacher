import React from 'react';
import Link from 'next/link';

const UniversityRatingPage = () => {
  

  return (
    <div>
      <h1>University Rating</h1>
      <form >
        <div>
          <label>University Name:</label>
          <input type="text" name="universityName" required />
        </div>
        <div>
          <label>Review:</label>
          <textarea name="review" rows="4" required></textarea>
        </div>
        <div>
          <label>Rating (Out of 5):</label>
          <input type="number" name="rating" min="1" max="5" required />
        </div>
        <button type="submit">Submit University Rating</button>
      </form>
    </div>
  );
};

export default UniversityRatingPage;
