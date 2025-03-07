import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { ResumeData } from '../types';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: ''
    },
    education: [{
      school: '',
      degree: '',
      graduationDate: '',
      gpa: ''
    }],
    experience: [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ['']
    }],
    skills: []
  });

  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [field]: value }
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, {
        school: '',
        degree: '',
        graduationDate: '',
        gpa: ''
      }]
    });
  };

  const updateEducation = (index: number, field: keyof ResumeData['education'][0], value: string) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ['']
      }]
    });
  };

  const updateExperience = (index: number, field: keyof ResumeData['experience'][0], value: string | string[]) => {
    const newExperience = [...resumeData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setResumeData({ ...resumeData, experience: newExperience });
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8 px-8 ml-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Resume Builder</h1>

        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={resumeData.personalInfo.name}
                onChange={(e) => updatePersonalInfo('name', e.target.value)}
                placeholder="Full Name"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={resumeData.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                placeholder="Email"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                value={resumeData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                placeholder="Phone"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={resumeData.personalInfo.location}
                onChange={(e) => updatePersonalInfo('location', e.target.value)}
                placeholder="Location"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Education</h2>
              <button
                onClick={addEducation}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Plus className="w-5  h-5" />
                Add Education
              </button>
            </div>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="space-y-4 mb-6">
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => updateEducation(index, 'school', e.target.value)}
                  placeholder="School"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  placeholder="Degree"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={edu.graduationDate}
                    onChange={(e) => updateEducation(index, 'graduationDate', e.target.value)}
                    placeholder="Graduation Date"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={edu.gpa}
                    onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                    placeholder="GPA"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
              <button
                onClick={addExperience}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Experience
              </button>
            </div>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="space-y-4 mb-6">
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  placeholder="Company"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => updateExperience(index, 'position', e.target.value)}
                  placeholder="Position"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                    placeholder="Start Date"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                    placeholder="End Date"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {exp.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={desc}
                      onChange={(e) => {
                        const newDesc = [...exp.description];
                        newDesc[descIndex] = e.target.value;
                        updateExperience(index, 'description', newDesc);
                      }}
                      placeholder="Description"
                      className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => {
                        const newDesc = exp.description.filter((_, i) => i !== descIndex);
                        updateExperience(index, 'description', newDesc);
                      }}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newDesc = [...exp.description, ''];
                    updateExperience(index, 'description', newDesc);
                  }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Add Description
                </button>
              </div>
            ))}
          </div>

          {/* Preview Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Preview Resume
          </button>
        </div>
      </div>
    </div>
  );
}