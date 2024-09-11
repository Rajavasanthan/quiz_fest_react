import { Link } from "react-router-dom";
import { PencilIcon, EyeIcon, TrashIcon, LinkIcon } from 'lucide-react';

function AllQuizzes() {
  const quizzes = [
    { title: 'Maths', numberOfQuestions: 20 },
    { title: 'Tamil', numberOfQuestions: 10 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-500 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Quiz Fest</h1>
        
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Quizzes</h2>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded" to="/dashboard/view-quiz/1">
            Create Quiz
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Number of Questions</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{quiz.title}</td>
                  <td className="p-4">{quiz.numberOfQuestions}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="p-1"><PencilIcon size={20} /></button>
                      <button className="p-1"><EyeIcon size={20} /></button>
                      <button className="p-1"><TrashIcon size={20} /></button>
                      <button className="p-1"><LinkIcon size={20} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllQuizzes;