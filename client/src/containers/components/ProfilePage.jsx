import React,{useState,useEffect} from 'react';
import Navbar from '../../components/Navbar';
import { User, Code, BookOpen, Users, Award, Github } from 'lucide-react';
import profile from "../../assets/saifProfile.jpeg";

const ProfilePage = () => {
    const [leetcodeStats, setLeetcodeStats] = useState({ easy: 0, medium: 0, hard: 0, total: 0 });

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Saifee_007');
        const data = await response.json();
        console.log("data",data)
        setLeetcodeStats(data);
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mb-4">
                  <img 
                    src={profile}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Saif</h2>
                <p className="text-gray-600">Full Stack Developer</p>
                <div className="flex items-center mt-2">
                  <Github className="w-5 h-5 mr-2" />
                  <a href="https://github.com/torredo786" className="text-blue-600 hover:underline">@Saif</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            
            {/* LeetCode Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                LeetCode Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{leetcodeStats.easySolved}</div>
                  <div className="text-sm text-gray-600">Easy</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600">{leetcodeStats.mediumSolved}</div>
                  <div className="text-sm text-gray-600">Medium</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">{leetcodeStats.hardSolved}</div>
                  <div className="text-sm text-gray-600">Hard</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{leetcodeStats.totalSolved}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Learning Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Data Structures</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Algorithms</span>
                    <span className="text-gray-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">System Design</span>
                    <span className="text-gray-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <p className="text-gray-800">Completed "Dynamic Programming" course</p>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <p className="text-gray-800">Solved Hard level problem "Merge k Sorted Lists"</p>
                    <p className="text-sm text-gray-600">4 days ago</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <p className="text-gray-800">Joined "Advanced Algorithms" study group</p>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
