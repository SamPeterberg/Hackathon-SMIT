import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
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
          Our Services
        </h1>
        <p className="mt-4 text-center text-gray-600">
          At Saylani Microfinance, we offer a range of financial services to
          meet your needs.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Loan Services</h2>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            <li>Education Loans</li>
            <li>Personal Loans</li>
            <li>Business Loans</li>
            <li>Home Loans</li>
            <li>Vehicle Loans</li>
            <li>Agriculture Loans</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Savings Accounts</h2>
          <p className="mt-2 text-gray-600">
            We offer a variety of savings accounts to help you save for the
            future. Our accounts come with competitive interest rates and
            flexible terms.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Insurance Services
          </h2>
          <p className="mt-2 text-gray-600">
            Protect yourself and your loved ones with our comprehensive
            insurance plans. We offer health, life, and property insurance to
            give you peace of mind.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Financial Advisory
          </h2>
          <p className="mt-2 text-gray-600">
            Our financial advisors are here to help you make informed decisions
            about your finances. Whether you need help with budgeting,
            investing, or retirement planning, we are here to assist you.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions or need further information about our
            services, please feel free to{" "}
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

export default ServicesPage;
