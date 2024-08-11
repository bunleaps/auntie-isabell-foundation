import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata = {
  title: "Contact — Auntie Isabelle Foundation",
  description: "...",
};

const contactOptions = [
  {
    icon: <FaEnvelope className="text-4xl text-emerald-300" />,
    title: "Email",
    description: "Get in touch via email:",
    contact: "mail@mail.com",
  },
  {
    icon: <FaPhone className="text-4xl text-emerald-300" />,
    title: "Phone",
    description: "Call us for more info:",
    contact: "+123 456 7890",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-emerald-300" />,
    title: "Location",
    description: "Visit us at:",
    contact: "123 Main St, Anytown, USA",
  },
  {
    icon: <FaClock className="text-4xl text-emerald-300" />,
    title: "Office Hours",
    description: "We are open:",
    contact: "Mon-Fri, 9am - 5pm",
  },
];

export default function Contact() {
  return (
    <div className="bg-slate-100">
      <div className="max-w-4xl mx-auto py-28">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          We’re here to help. Choose your preferred way to get in touch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{option.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <p className="text-blue-500 font-medium">{option.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
