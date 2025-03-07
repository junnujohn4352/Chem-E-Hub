import { motion } from 'framer-motion';
import { 
  Calculator, 
  BookOpen, 
  GraduationCap, 
  Clock, 
  FileText,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Database,
    title: 'Chemical Database',
    description: 'Access chemical properties and molecular structures',
    path: '/database',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calculator,
    title: 'Calculator Suite',
    description: 'Essential engineering calculations',
    path: '/calculator',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BookOpen,
    title: 'Study Hub',
    description: 'Interactive flashcards and study tools',
    path: '/study',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: GraduationCap,
    title: 'GPA Calculator',
    description: 'Track your academic performance',
    path: '/gpa',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Clock,
    title: 'Countdown',
    description: 'Manage assignments and deadlines',
    path: '/countdown',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: FileText,
    title: 'Resume Builder',
    description: 'Create professional resumes',
    path: '/resume',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Welcome to ChemE Toolkit
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={feature.path}>
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}