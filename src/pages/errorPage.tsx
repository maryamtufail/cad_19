import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa"; // Import the icon

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  let errorMessage = "Something went wrong.";
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || "An unexpected error occurred.";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div className="max-w-xl p-8 text-center">
        <div className="flex flex-col items-center">
          {/* Error Icon replaced with react-icons */}
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center shadow-lg">
            <FaExclamationCircle className="w-10 h-10 text-red-500" />
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold text-gray-800">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            The page you are looking for{" "}
            {errorMessage && (
              <span className="text-red-500">{errorMessage}</span>
            )}
          </p>

          {/* Call to Action */}
          <Link
            to="/"
            className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all"
          >
            Go Back to Home
          </Link>

          {/* Additional Links */}
          <div className="mt-4 text-sm text-gray-500">
            Need help?{" "}
            <Link
              to="/contact"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
