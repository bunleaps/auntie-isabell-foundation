// components/Footer.js
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { link_name: "Home", link_path: "/" },
    { link_name: "About Us", link_path: "/about" },
    { link_name: "Loan", link_path: "/loan" },
    { link_name: "Grant", link_path: "/grant" },
    // { link_name: "Contact", link_path: "/contact" },
  ];

  const additionalLinks = [
    { link_name: "References", link_path: "/references" },
    // { link_name: "Sitemap", link_path: "/sitemap" },
    { link_name: "Privacy Policy", link_path: "/privacy-policy" },
    { link_name: "Terms of Service", link_path: "/terms-of-service" },
  ];

  return (
    <footer className="bg-gray-100 py-8 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/logos/black2.png" // Replace with your logo image path
              alt="Logo"
              width={200} // Adjust as needed
              height={200} // Adjust as needed
              className="mr-3"
            />
          </Link>
        </div>

        {/* Navigation and Contact Section */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex gap-20 md:gap-14">
            {/* Navigation Links */}
            <ul className="flex flex-col list-none m-0 p-0 mb-4 md:mb-0">
              <li className="font-semibold mb-2">Navigation</li>
              {navLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.link_path} legacyBehavior>
                    <span className="text-black cursor-pointer hover:text-gray-600 transition-colors duration-300">
                      {link.link_name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <ul className="flex flex-col list-none m-0 p-0 mb-4 md:mb-0">
              <li className="font-semibold mb-2">Quick Links</li>
              {additionalLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.link_path} legacyBehavior>
                    <span className="text-black cursor-pointer  hover:text-gray-600 transition-colors duration-300">
                      {link.link_name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Email */}
          <div className="text-center">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-black">
              <a
                href="mailto:info@auntieisabellfoundation.org"
                className="hover:text-gray-600 transition-colors duration-300"
              >
                info@auntieisabellfoundation.org
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center pt-4">
        &copy; {new Date().getFullYear()} Auntie Isabelle Foundation
      </p>
    </footer>
  );
};

export default Footer;
