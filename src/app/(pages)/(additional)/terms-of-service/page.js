/* eslint-disable react/no-unescaped-entities */
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Auntie Isabelle Foundation",
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
        <h2 className="text-2xl font-semibold text-center">Terms of Service</h2>
        <p className="text-center mb-4">Effective Date: [date]</p>
        <p>
          These Terms of Service (“Agreement”) govern your use of the services
          provided by the Auntie Isabell Foundation (“Foundation,” “we,” “us,”
          or “our”) related to applying for loans and grants. By submitting an
          application, you agree to be bound by these terms. If you do not agree
          with these terms, you should not submit your application or use our
          services.
        </p>
        <section className="mb-4 mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Eligibility for Loan and Grant Applications
          </h2>
          <p>
            To apply for either a loan or grant through the Auntie Isabell
            Foundation, you must meet the following eligibility criteria:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Loan Application:
              <ul className="list-disc pl-10">
                <li>
                  Be a resident of San Luis Obispo County, starting in Paso
                  Robles.
                </li>
                <li>
                  Be an underrepresented individual or business in need of
                  financial support.
                </li>
                <li>
                  Provide a basic business plan and a clear purpose for the
                  loan.
                </li>
              </ul>
            </li>
            <li>
              Grant Application:
              <ul className="list-disc pl-10">
                <li>Be between the ages of 18 to 30 years.</li>
                <li>Be a resident of San Luis Obispo County.</li>
                <li>
                  Complete the GRIT survey and submit an essay, art
                  representation, or video.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            2. Loan Application Process
          </h2>
          <p>
            By submitting a loan application, you agree to the following
            process:
          </p>
          <ul className="list-decimal pl-10">
            <li>
              Initial Inquiry: Fill out the preliminary inquiry form with basic
              information about your business and the purpose of the loan.
            </li>
            <li>
              Review and Interview: Our team will review your application and
              may request additional information. A brief interview may be
              required.
            </li>
            <li>
              Complete Small Business Mentorship: Applicants must complete 5
              hours of mentorship through SLO SBDC.
            </li>
            <li>
              Submit Revised Business Plan: After completing mentorship, submit
              your revised business plan, business license, and any other
              required documents.
            </li>
            <li>
              Follow-Up Interview: A follow-up interview will be scheduled after
              submission of the revised documents.
            </li>
            <li>
              Agreement on Loan Terms: If awarded, we will agree on the loan
              amount and payment schedule.
            </li>
            <li>
              Loan Award: Based on the review, you may either be awarded the
              loan or advised on how to improve your application.
            </li>
          </ul>
          <p>
            Loan Award: Low-interest loans (2.5%-5%) range from $2,000 to
            $15,000 for business expenses.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            3. Grant Application Process
          </h2>
          <p>
            By submitting a grant application, you agree to the following
            process:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Age Confirmation & GRIT Survey: Confirm your age (18-30 years) and
              complete the GRIT survey.
            </li>
            <li>
              Essay/Art/Video Submission: Select one question from the GRIT
              survey to expand on in an essay, artwork, or video.
            </li>
            <li>
              Submission Review: Submit your original submission online,
              providing a link to your work.
            </li>
            <li>
              Interview: If selected, attend an interview with two Board Members
              at the Paso Robles Public Library Conference Room. Interviews are
              available in English and Spanish.
            </li>
            <li>
              Application Status & Award: You will be notified about your
              application status. If awarded, a payment schedule will be
              established, with mandatory quarterly check-ins.
            </li>
          </ul>
          <p>
            Grant Award: Grants range from $150 to $500, either as a one-time
            award or monthly payments for up to one year.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            4. Use of Loan or Grant Funds
          </h2>
          <ul className="list-disc pl-10">
            <li>
              Loans: Loan funds must be used for business-related expenses as
              specified in your application. You are required to provide updates
              on how the funds have been used.
            </li>
            <li>
              Grants: Grant funds must be used for personal needs related to the
              purpose described in your submission. If awarded a monthly grant,
              you must comply with quarterly check-ins. Failure to meet the
              check-ins may result in termination of the grant.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            5. Confidentiality and Data Use
          </h2>
          <p>
            The information you provide in your application will be kept
            confidential, subject to the terms outlined in our Privacy Policy.
            By submitting an application, you consent to the use of your
            personal and business data as described for the purpose of
            processing your loan or grant application.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            The Auntie Isabell Foundation is not responsible for any damages,
            losses, or liabilities arising from the use of our services,
            including but not limited to:
          </p>
          <ul className="list-disc pl-10">
            <li>The rejection of your loan or grant application.</li>
            <li>
              The failure of your business or personal journey to succeed after
              receiving a loan or grant.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p>
            The Foundation reserves the right to terminate or suspend your
            application process if you fail to comply with these Terms of
            Service, including providing false or incomplete information.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">8. Amendments</h2>
          <p>
            The Auntie Isabell Foundation reserves the right to modify these
            Terms of Service at any time. Any changes will be posted on our
            website, and you will be notified by email. By continuing to use our
            services after any updates, you agree to be bound by the revised
            terms.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p>
            This Agreement will be governed by and construed in accordance with
            the laws of the State of California, without regard to its conflict
            of law principles.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            10. Dispute Resolution
          </h2>
          <p>
            Any disputes arising from this Agreement will be resolved through
            mediation or arbitration in accordance with the rules of the
            American Arbitration Association. If resolution through these
            methods fails, you agree to submit to the jurisdiction of the courts
            located in San Luis Obispo County, California.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Service,
            please contact us at:{" "}
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
