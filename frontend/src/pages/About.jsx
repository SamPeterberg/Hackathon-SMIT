import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Microfinance</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          About Us
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Welcome to Saylani Microfinance, your trusted partner in financial
          solutions.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Our mission is to provide accessible and affordable financial
            services to individuals and small businesses, empowering them to
            achieve their financial goals and improve their quality of life.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            Our vision is to be a leading microfinance institution, recognized
            for our commitment to customer satisfaction, innovation, and social
            responsibility.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            <li>
              Integrity: We uphold the highest standards of integrity in all our
              actions.
            </li>
            <li>
              Customer Focus: We are dedicated to meeting the needs of our
              customers.
            </li>
            <li>
              Innovation: We continuously seek innovative solutions to improve
              our services.
            </li>
            <li>
              Social Responsibility: We are committed to making a positive
              impact on society.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions or need further information, please feel
            free to{" "}
            <Link to="/contact" className="text-blue-500 hover:text-blue-700">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
