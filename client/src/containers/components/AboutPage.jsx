import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            About Learn2Gether
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600">
                Learn2Gether is dedicated to making education accessible and
                engaging through collaborative learning. We believe that
                learning together creates a more enriching educational
                experience for everyone involved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                What We Offer😊
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Interactive video-based learning experiences{" "}
                  <span className="mr-2">🔜</span>{" "}
                </li>
                <li>
                  Collaborative study environments{" "}
                  <span className="mr-2">🔜</span>{" "}
                </li>
                <li>
                  Expert-led instruction <span className="mr-2">🔜</span>{" "}
                </li>
                <li>
                  Personalized learning paths <span className="mr-2">🔜</span>{" "}
                </li>
                <li>
                  Community-driven knowledge sharing{" "}
                  <span className="mr-2">🔜</span>{" "}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Collaboration
                  </h3>
                  <p className="text-gray-600">
                    We believe in the power of learning together and supporting
                    each other.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-600">
                    We continuously evolve our platform to enhance the learning
                    experience.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-700 mb-2">
                    Accessibility
                  </h3>
                  <p className="text-gray-600">
                    We strive to make quality education available to everyone.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Have questions or feedback? We'd love to hear from you. Reach
                out to us at{" "}
                <a
                  href="mailto:support@learn2gether.com"
                  className="text-blue-600 hover:underline"
                >
                  support@learn2gether.com
                </a>
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Portfolio
              </h2>
              <p className="text-gray-600">
                check author portfolio{" "}
                <span
                  onClick={() => navigate("/portfolio")}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  here
                </span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
