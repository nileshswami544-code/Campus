import React from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const CoursesPage = () => {
  const addCourse = async () => {
    try {
      const docRef = await addDoc(collection(db, 'courses'), {
        name: 'Introduction to React',
        description: 'Learn the fundamentals of React.',
        credits: 3,
      });
      console.log('Document written with ID: ', docRef.id);
      alert('Course added successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error adding course.');
    }
  };

  return (
    <div>
      <h1>Courses Page</h1>
      <p>Here are our available courses.</p>
      <button onClick={addCourse}>Add Sample Course</button>
    </div>
  );
};

export default CoursesPage;
