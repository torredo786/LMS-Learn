import React from 'react';
import Navbar from '../../components/Navbar';

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Help Center</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">How do I get started?</h3>
                  <p className="text-gray-600">
                    To get started, simply sign up for an account and choose your role (student or instructor). 
                    Once logged in, you can explore available courses or create your own content.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">How does collaborative learning work?</h3>
                  <p className="text-gray-600">
                    Our platform enables students to join study groups, participate in discussions, 
                    and share knowledge with peers. Instructors can create interactive content and 
                    monitor student progress.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">What technical requirements do I need?</h3>
                  <p className="text-gray-600">
                    You'll need a stable internet connection and a modern web browser. For video features, 
                    ensure you have a working camera and microphone.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Getting Support</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">Email Support</h3>
                  <p className="text-gray-600">
                    Contact our support team at{' '}
                    <a href="mailto:support@learn2gether.com" className="text-blue-600 hover:underline">
                      support@learn2gether.com
                    </a>
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Documentation</h3>
                  <p className="text-gray-600">
                    Visit our documentation portal for detailed guides and tutorials.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Tips for Success</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Complete your profile to connect with like-minded learners</li>
                <li>Participate actively in discussions and group activities</li>
                <li>Set regular study schedules and goals</li>
                <li>Provide constructive feedback to help improve the platform</li>
                <li>Reach out for help whenever needed</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
