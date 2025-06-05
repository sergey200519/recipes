import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            SPA React Project
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
