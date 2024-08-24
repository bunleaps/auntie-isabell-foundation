"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import { FaArrowDown } from "react-icons/fa6";

function Hero() {
  return (
    <div className="relative w-full h-dvh md:h-[calc(100vh-200px)] bg-gray-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg/mount01.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center bg-black bg-opacity-50">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <Image
              src="/logos/white2.png" // Replace with your logo image path
              alt="Logo"
              width={500} // Adjust as needed
              height={500} // Adjust as needed
              className="mr-3 w-1/2 h-1/2 md:w-1/3"
            />
          </div>

          <h1 className="mt-4 text-4xl leading-2 md:text-6xl md:leading-normal font-bold text-white mb-4">
            Empowering Dreams, Fostering Equality
          </h1>
          <p className="text-lg md:text-2xl text-white">
            Supporting underrepresented individuals in San Luis Obispo County
            through loans and grants
          </p>

          <div className="flex justify-center mt-24">
            <div className="animate-bounce text-white">
              <FaArrowDown className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurMission() {
  return (
    <section className="w-full bg-emerald-200 px-6 md:px-0 py-14 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row ">
          {/* Title Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Mission
            </h2>
          </div>

          {/* Paragraphs Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-lg text-black mb-4">
                At the Auntie Isabell Foundation, our mission is to foster a
                supportive and inclusive community where every individual is
                valued, respected, and empowered. We are committed to providing
                financial assistance through loans and grants to
                underrepresented individuals in San Luis Obispo County.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-lg text-black">
                Our programs are designed to address financial barriers and
                create pathways to success. By providing targeted support, we
                aim to help individuals overcome obstacles and achieve their
                personal and professional goals. We believe that everyone
                deserves the opportunity to succeed, and we are dedicated to
                helping our community thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalltoAction() {
  return (
    <div className="relative w-full h-[calc(100vh-500px)] bg-gray-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg/mount02.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center bg-black bg-opacity-50">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl leading-2 md:text-6xl md:leading-normal font-bold text-emerald-200 mb-4">
            Take the Next Step: Discover How to Qualify for Loans and Grants
            Today!
          </h1>
          <div className="flex justify-center gap-4">
            <Link href="/how-to-qualify" passHref>
              <Button variant="emerald">LOANS</Button>
            </Link>
            <Link href="/how-to-qualify" passHref>
              <Button variant="emerald">GRANTS</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationInfo() {
  return (
    <section className="w-full py-12 bg-gray-50 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Application
        </h2>

        {/* Information Sections */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* First Info Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">LOANS</h3>
            <p className="text-gray-600 font-medium">
              We make sure that everyone gets a fair chance and that all voices
              are heard, specifically those from underrepresented groups in Paso
              Robles. We help people take their next big step, whether it’s
              starting a business or growing their business, with a low-interest
              loan to promote equality and diversity in business.
            </p>
            <p className="text-gray-600 font-medium mt-8 mb-4">
              Take the next step with the Auntie Isabell Foundation Micro Loan
              here.
            </p>
            <Link href="/loan" passHref>
              <Button variant="black">APPLY FOR A LOAN</Button>
            </Link>
          </div>

          {/* Second Info Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">GRANTS</h3>
            <p className="text-gray-600 font-medium">
              Grants are special gifts of money that can be used for important
              needs such as education, housing, transportation, job training,
              handling life’s challenges, or child care. Our goal is to help
              people in Paso Robles to achieve their dreams and improve their
              lives, creating equity within our community.
            </p>
            <p className="text-gray-600 font-medium mt-8 mb-4">
              Take the next step with the Auntie Isabell Foundation Grant here.
            </p>
            <Link href="/grant" passHref>
              <Button variant="black">APPLY FOR A GRANT</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <OurMission />
      {/* <CalltoAction /> */}
      <ApplicationInfo />
    </div>
  );
}
