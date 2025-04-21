import Button from "@/components/Button";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramsInfo";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export const metadata = {
  title: "Loan — Auntie Isabelle Foundation",
  description: "...",
};

function Criteria() {
  const criteriaList = [
    {
      title: "Demographic",
      info: "Applicants in our community must belong to one or more of the following underrepresented groups: race, color, age, ability, sex (including gender identity and sexual orientation), socioeconomic status, familial status, or religious affiliation.",
    },
    {
      title: "Purpose",
      info: "The purpose of this loan is to support business activities within our community. Whether you’re starting with a basic business plan or expanding an existing venture, this funding is designed to help you achieve your goals.",
    },
    {
      title: "Commitment",
      info: "As part of our commitment to your success, we require that you participate in  a personalized 5-hour Small Business Mentorship through the Cal Poly CIE Small Business Development Center (SBDC). This one-on-one guidance connects you with experienced business advisors who will help you develop essential skills and strategies for growth. Beyond the mentorship, we’ll schedule check-ins to offer continued support, ensuring you have the resources and guidance needed to navigate your business journey with confidence.",
    },
  ];

  return (
    <section className="w-full bg-slate-200 px-4 py-14 md:py-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="md:w-1/3 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="block md:hidden">Eligibility Criteria</span>
              <span className="hidden md:block">
                <span className="block">Eligibility</span>
                <span className="block">Criteria</span>
              </span>
            </h1>
            <p className="italic py-4 font-medium">
              Applicants must be residents of Paso Robles, San Luis Obispo
              County.
            </p>
            <p className="font-medium">
              We believe in providing opportunities for those who are striving
              to improve their circumstances.
            </p>
          </div>
          <div className="md:w-2/3 md:pl-10 pt-8 md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
            {criteriaList.map((list, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold">{list.title}</h3>
                <p className="text-gray-800">{list.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppProcess() {
  const appprocess_list = [
    {
      title: "1. Initial Inquiry",
      paragraph: (
        <div>
          Begin by filling out our preliminary inquiry form to provide us with
          basic information about your business needs. Gather informations
          around this{" "}
          <Link href="/pdf/Basic Business Plan - Loan Application.pdf">
            <span className="underline text-emerald-500">
              basic business plan
            </span>
          </Link>{" "}
          (example of data to gather for the application form), and a detailed
          purpose for the loan.
        </div>
      ),
    },
    {
      title: "2. Review and Interview",
      paragraph:
        "Our team will review your application and may reach out for additional information or clarification.  All the results are reviewed monthly and applicants are typically notified within 60 days of application submission. In some cases, applicants may be invited to a brief interview to discuss their application in more detail.",
    },
    {
      title: "3. Complete Small Business Mentorship",
      paragraph: (
        <div>
          Applicants are required to complete a 5-hour Small Business Mentorship
          through{" "}
          <Link href="https://sbdc.calpoly.edu/">
            <span className="underline text-emerald-500">the SBDC</span>
          </Link>
          . This tailored mentorship provides valuable insights and expert
          guidance to help you build a strong foundation for your business’s
          success.
        </div>
      ),
    },
    {
      title: "4. Submission of Revised Business Plan and Documents",
      paragraph:
        "After completing the mentorship, submit a revised business plan, business license, and any other required documents for final review. The SBDC does not decide whether any applicant receives a loan. Loan recipients are determined by the Foundation, in its sole discretion.",
    },
    {
      title: "5. Follow-Up Interview",
      paragraph:
        "A follow-up interview will be scheduled after you complete the 5-hour mentorship and submit your revised business plan. This allows us to discuss your progress and any additional details.",
    },
    {
      title: "6. Agreement on Loan Terms",
      paragraph:
        "We will agree on the loan amount and payment schedule, with the understanding that all payments go toward supporting the next recipient of the Auntie Isabell Foundation business loan.",
    },
    {
      title: "7. Loan Award or Next Steps",
      paragraph: (
        <div>
          Based on the review, you will either be awarded the loan or receive
          advisement on how to improve your application and reapply. You may
          also be referred to KIVA for additional funding options.
          <br />
          <p className="mt-2">
            <span className="text-emerald-500 font-semibold">Award: </span>{" "}
            Low-interest loans range from{" "}
            <span className="font-semibold">$2,000</span> to{" "}
            <span className="font-semibold">$15,000</span>.
          </p>
        </div>
      ),
    },
    {
      title: "Apply for a Loan?",
      paragraph: (
        <Link href="https://forms.gle/GCUmUrWUbdHpwGvP9" passHref>
          <Button>
            <FiExternalLink />
            Application Form
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <section className="w-full bg-slate-100 px-4 py-14 md:py-36">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Application Process</h1>
        <p className="italic font-medium py-4 max-w-4xl">
          Our goal is to make this process as transparent and supportive as
          possible. We are here to assist you at every step and answer any
          questions you may have.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appprocess_list.map((item, index) => (
            <div key={index} className="grid-cols-1 md:grid-cols-3">
              <div className="p-4 rounded">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <div className="pt-2">{item.paragraph}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Loan() {
  return (
    <div>
      <Hero
        title="Loan"
        paragraph="Auntie Isabell Foundation offers low-interest loans (2.5-5%) to support underrepresented individuals in San Luis Obispo County, starting in Paso Robles. These loans are designed to help with business expenses. Awards range from $2,000 to $15,000 dollars."
        backgroundImage="/bg/city01.png"
      />
      <Criteria />
      <AppProcess />
    </div>
  );
}
