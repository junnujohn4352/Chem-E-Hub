import { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import type { Course } from '../types';

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      credits: 3,
      grade: 'A'
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGPA = () => {
    if (courses.length === 0) return 0;

    const gradePoints: { [key: string]: number } = {
      'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'F': 0.0
    };

    const totalPoints = courses.reduce((sum, course) => 
      sum + (gradePoints[course.grade] * course.credits), 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">GPA Calculator</h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Courses</h2>
            <button
              onClick={addCourse}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
              Add Course
            </button>
          </div>

          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="flex gap-4 items-center">
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  placeholder="Course Name"
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value))}
                  min="1"
                  max="6"
                  className="w-20 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-24 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'].map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}

            {courses.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No courses added yet. Click the "Add Course" button to begin.
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Cumulative GPA</span>
            <span className="text-3xl font-bold text-white">{calculateGPA()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}