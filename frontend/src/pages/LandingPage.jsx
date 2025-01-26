import React from "react";
import { Link } from "react-router-dom";

const loanCategories = [
  {
    title: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
  },
  {
    title: "Personal Loans",
    subcategories: ["Medical Expenses", "Wedding Expenses"],
    maxLoan: "Up to $50,000",
    loanPeriod: "5 years",
  },
  {
    title: "Business Loans",
    subcategories: ["Startup Loan", "Small Business Loan"],
    maxLoan: "Up to $100,000",
    loanPeriod: "10 years",
  },
  {
    title: "Home Loans",
    subcategories: ["Home Purchase", "Home Renovation"],
    maxLoan: "Up to $200,000",
    loanPeriod: "15 years",
  },
  {
    title: "Vehicle Loans",
    subcategories: ["Car Loan", "Bike Loan"],
    maxLoan: "Up to $30,000",
    loanPeriod: "7 years",
  },
  {
    title: "Agriculture Loans",
    subcategories: ["Farm Equipment", "Crop Loan"],
    maxLoan: "Up to $50,000",
    loanPeriod: "5 years",
  },
];

const LandingPage = () => {
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
          Saylani Microfinance Loans
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Choose the loan category that fits your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {loanCategories.map((category, index) => (
            <Link
              to="/loanform"
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                {category.title}
              </h2>
              <ul className="mt-4 text-gray-600">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
              <p className="mt-4 text-gray-600">Max Loan: {category.maxLoan}</p>
              <p className="text-gray-600">
                Loan Period: {category.loanPeriod}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
