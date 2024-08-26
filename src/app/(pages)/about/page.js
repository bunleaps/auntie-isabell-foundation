import Hero from "@/app/components/Hero";
import Image from "next/image";

export const metadata = {
  title: "About Us — Auntie Isabelle Foundation",
  description: "...",
};

export default function About() {
  return (
    <div>
      <Hero
        title="About Us"
        paragraph="Empowering underrepresented individuals in San Luis Obispo County through financial support and community initiatives, The Auntie Isabell Foundation is dedicated to creating opportunities for all to thrive."
        backgroundImage="/bg/city01.png"
      />

      <div className="max-w-4xl mx-auto p-8 md:p-16">
        <div className="flex justify-center items-center">
          <Image
            src="/logos/black2.png" // Replace with your logo image path
            alt="Logo"
            width={500} // Adjust as needed
            height={500} // Adjust as needed
            className="mr-3 md:w-1/2"
          />
        </div>

        <section className="mb-12 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At The Auntie Isabell Foundation, we are dedicated to empowering
            underrepresented individuals in San Luis Obispo County, starting in
            Paso Robles. By offering financial assistance through loans and
            grants, we aim to break down barriers and create opportunities for
            personal and professional success. We believe in fostering a
            supportive community where everyone has the chance to thrive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Have you ever been in a situation where you just need a small loan
            to keep moving forward? The doner found herself in this position as
            a single mother trying to keep her kids safe and to move forward
            with her education. She turned to a loving aunt to borrow money. She
            needed the money to buy a used car. The aunt refused the loan and
            instead gifted the amount, changing the direction of her life and
            easing her stress. Not every Aunt is in the position to give money,
            many times because of income inequality. We know there are times in
            your life where everyone needs an “Auntie Isabell”.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              <strong>Respect:</strong> Valuing the dignity and unique
              perspectives of every individual.
            </li>
            <li>
              <strong>Empowerment:</strong> Providing the support for
              individuals to overcome challenges.
            </li>
            <li>
              <strong>Community:</strong> Building a collective well-being where
              everyone can thrive.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nonprofit Status</h2>
          <p className="text-lg text-gray-700">
            The Auntie Isabell Foundation is a 501(c)(3) nonprofit organization.
            This status enables us to offer tax-deductible contributions and
            ensures that donations directly support our mission. We are
            committed to transparency and accountability, ensuring that every
            contribution makes a meaningful impact.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            By supporting The Auntie Isabell Foundation, you are helping to
            create lasting change and advance our mission of empowerment and
            community building.
          </p>
        </section>
      </div>
    </div>
  );
}
