import { Link, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  BookOpen, 
  GraduationCap, 
  Clock, 
  FileText,
  Home,
  Database
} from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/database', icon: Database, label: 'Chemical Database' },
    { path: '/calculator', icon: Calculator, label: 'Calculator Suite' },
    { path: '/study', icon: BookOpen, label: 'Study Hub' },
    { path: '/gpa', icon: GraduationCap, label: 'GPA Calculator' },
    { path: '/countdown', icon: Clock, label: 'Countdown' },
    { path: '/resume', icon: FileText, label: 'Resume Builder' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-8 space-y-8">
      {navItems.map(({ path, icon: Icon, label }) => (
        <Link
          key={path}
          to={path}
          className={`relative group ${
            location.pathname === path ? 'text-blue-500' : 'text-gray-400'
          }`}
        >
          <Icon className="w-8 h-8 transition-colors duration-200 group-hover:text-blue-400" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}