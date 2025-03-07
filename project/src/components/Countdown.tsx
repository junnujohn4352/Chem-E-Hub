import { useState, useEffect } from 'react';
import { Clock, Plus } from 'lucide-react';
import type { Assignment } from '../types';

export default function Countdown() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addAssignment = () => {
    const newAssignment: Assignment = {
      id: Date.now().toString(),
      title: '',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      subject: '',
      priority: 'medium'
    };
    setAssignments([...assignments, newAssignment]);
  };

  const updateAssignment = (id: string, field: keyof Assignment, value: string) => {
    setAssignments(assignments.map(assignment =>
      assignment.id === id ? { ...assignment, [field]: value } : assignment
    ));
  };

  const getTimeRemaining = (dueDate: string) => {
    const due = new Date(dueDate);
    const diff = due.getTime() - now.getTime();
    
    if (diff <= 0) return 'Past due';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Assignment Countdown</h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Assignments</h2>
            <button
              onClick={addAssignment}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Assignment
            </button>
          </div>

          <div className="space-y-4">
            {assignments.map(assignment => (
              <div
                key={assignment.id}
                className="bg-gray-700 rounded-lg p-4 flex items-center gap-4"
              >
                <div className="flex-1">
                  <input
                    type="text"
                    value={assignment.title}
                    onChange={(e) => updateAssignment(assignment.id, 'title', e.target.value)}
                    placeholder="Assignment Title"
                    className="w-full bg-transparent text-white text-lg focus:outline-none"
                  />
                  <input
                    type="text"
                    value={assignment.subject}
                    onChange={(e) => updateAssignment(assignment.id, 'subject', e.target.value)}
                    placeholder="Subject"
                    className="w-full bg-transparent text-gray-400 mt-1 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="date"
                    value={assignment.dueDate}
                    onChange={(e) => updateAssignment(assignment.id, 'dueDate', e.target.value)}
                    className="bg-gray-600 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <select
                    value={assignment.priority}
                    onChange={(e) => updateAssignment(assignment.id, 'priority', e.target.value as Assignment['priority'])}
                    className="bg-gray-600 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{getTimeRemaining(assignment.dueDate)}</span>
                  </div>
                </div>
              </div>
            ))}

            {assignments.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No assignments added yet. Click the "Add Assignment" button to begin.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}