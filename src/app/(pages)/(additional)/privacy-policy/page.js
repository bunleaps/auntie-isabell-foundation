/* eslint-disable react/no-unescaped-entities */
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Auntie Isabelle Foundation",
  description: "...",
};

export default function About() {
  return (
    <div>
      {/* <Hero
        title="About Us"
        paragraph="The Auntie Isabell Foundation empowers underrepresented individuals in San Luis Obispo County with financial support, fostering opportunities for all to thrive."
        backgroundImage="/bg/city01.png"
      /> */}

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
        <h2 className="text-2xl font-semibold text-center">Privacy Policy</h2>
        <p className="text-center mb-4">Effective Date: [date]</p>
        <p>
          At the <b>Auntie Isabell Foundation</b>, we are committed to
          protecting your privacy. This Privacy Policy outlines how we collect,
          use, and protect the personal data you provide when applying for
          financial support or interacting with our services. By submitting your
          application or using our website, you agree to the collection and use
          of your information in accordance with this policy.
        </p>
        <section className="mb-4 mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect the following personal data when you apply for a loan or
            grant or interact with our services:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Personal Information: Name, phone number, email address, business
              name, personal address, business address.
            </li>
            <li>
              Business Information: Business type, mission statement, financial
              details (e.g., revenue streams, expenses), and team information.
            </li>
            <li>
              Demographic Information: Race, color, gender identity, sexual
              orientation, age, socioeconomic status, religious affiliation, and
              familial status to support underrepresented communities.
            </li>
            <li>References: Professional, supplier, or customer references.</li>
            <li>
              Current Work Situation: Employment details, business ownership
              information, and alignment with our mission.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            Your personal and business information is used for the following
            purposes:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Application Processing: To evaluate your eligibility for a
              low-interest loan or grant from the Auntie Isabell Foundation.
            </li>
            <li>
              Business Support: To assess the potential impact of the loan on
              your business and provide appropriate mentorship and resources.
            </li>
            <li>
              Partnerships: We may share your information with partners such as
              SLO SBDC or KIVA to facilitate business mentorship or alternative
              funding opportunities.
            </li>
            <li>
              Compliance: To ensure we meet legal and regulatory requirements.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Share Your Information
          </h2>
          <p>
            We do not sell or rent your personal information to third parties.
            However, we may share your data with trusted partners for the
            following reasons:
          </p>
          <ul className="list-disc pl-10">
            <li>SLO SBDC for mentorship purposes.</li>
            <li>
              KIVA if you are referred for additional financial opportunities.
            </li>
            <li>
              Service Providers who assist with administrative functions related
              to your application.
            </li>
          </ul>
          <p>
            We will not share sensitive information, such as your race or gender
            identity, without your explicit consent, except as required by law.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We take the security of your data seriously and implement various
            measures to protect it, including:
          </p>
          <ul className="list-disc pl-10">
            <li>Encryption: To safeguard sensitive data.</li>
            <li>
              Access Control: Restricting access to authorized personnel only.
            </li>
            <li>
              Regular Audits: To ensure data security practices are followed.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p>
            We retain your personal and business information for as long as
            necessary to process your application, provide services, and comply
            with legal obligations. If you are not awarded a loan, we may retain
            your data for a period of time to allow you to reapply.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-10">
            <li>
              Access: Request a copy of the personal data we hold about you.
            </li>
            <li>
              Correction: Request correction of inaccurate or incomplete data.
            </li>
            <li>
              Deletion: Request deletion of your personal data, subject to legal
              or contractual obligations.
            </li>
            <li>Opt-out: Opt-out of marketing communications at any time.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <Link href="mailto:info@auntieisabellfoundation.org" legacyBehavior>
              <span className="text-blue-500 cursor-pointer">
                info@auntieisabellfoundation.org
              </span>
            </Link>
            .
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">7. Legal Compliance</h2>
          <p>
            The Auntie Isabell Foundation is committed to complying with all
            applicable privacy laws, including the California Consumer Privacy
            Act (CCPA) and other relevant legislation. We will update this
            Privacy Policy as required by changes in the law.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            8. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by posting the new policy on our website
            or sending an email to the address you provided. The "Effective
            Date" at the top of this page will reflect the date of the most
            recent update.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            how your data is being used, please contact us at:{" "}
            <Link href="mailto:info@auntieisabellfoundation.org" legacyBehavior>
              <span className="text-blue-500 cursor-pointer">
                info@auntieisabellfoundation.org
              </span>
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
