"use client";
import Link from "next/link";
/*************  ✨ Codeium Command ⭐  *************/
/**
 * A navigation bar component that displays a logout button
 * and links to the main pages of the app.
 *
 * @remarks
 *
 * This component is used as the root component for all pages in the app.
 * It is rendered at the top of each page, and provides a consistent
 * navigation experience for the user.
 */
/******  4378681b-fc55-4992-8311-228349b79b5f  *******/

const NavBar: React.FC = () => {
  const handleLogout = () => {
    // Remove user-related data from localStorage (or sessionStorage)
    localStorage.removeItem("user"); // or any other key related to user info
    localStorage.removeItem("authToken"); // if you store an authentication token, remove it too

    // Optionally, you can redirect the user to a different page, like the home page or login page
    window.location.href = "/register"; // Redirect to the login page (or home page)
  };
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-200">
            My App
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li  className="hover:text-gray-200 flex items-center justify-center">
            <Link href="/create" className="hover:text-gray-400 font-sans flex items-center justify-center">
              <span>   Create</span>  
            </Link>
          </li>
          <li  className="hover:text-gray-200 flex items-center justify-center">
            <Link href="/list" className="hover:text-gray-200 font-sans flex items-center justify-center">
            <span>List</span>  
            </Link>
          </li>
          <li>
          <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-md font-sans hover:bg-red-600"
      >
        Logout
      </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
