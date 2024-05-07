import React from 'react';
import Link from 'next/link';
const ProfessorRatingPage = () => {
 
  return (
    <div>
      <h1>Professor Rating</h1>
      <form >
        <div>
          <label>Professor Name:</label>
          <input type="text" name="professorName" required />
        </div>
        <div>
          <label>Review:</label>
          <textarea name="review" rows="4" required></textarea>
        </div>
        <div>
          <label>Rating (Out of 5):</label>
          <input type="number" name="rating" min="1" max="5" required />
        </div>
        <button type="submit">Submit Professor Rating</button>
      </form>
    </div>
  );
};

export default ProfessorRatingPage;
