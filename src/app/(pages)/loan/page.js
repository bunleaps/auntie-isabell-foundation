import Button from "@/components/Button";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramsInfo";
import { FiExternalLink } from "react-icons/fi";

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
      info: "As part of our commitment to your success, we provide a free 5-hour Small Business Mentorship through SLO SBDC. Widely recognized as one of the best resources for local entrepreneurs, this course is designed to give you the essential tools and guidance needed for your business to thrive. After completing the mentorship, check-ins will be scheduled to ensure ongoing support for your business journey.",
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
      paragraph:
        "Begin by filling out our preliminary inquiry form to provide us with basic information about your situation and needs. Gather and submit required documents, and a detailed description of the purpose for the loan.",
    },
    {
      title: "2. Review and Interview",
      paragraph:
        "Our team will review your application and may reach out for additional information or clarification. In some cases, applicants may be invited to a brief interview to discuss their application in more detail.",
    },
    {
      title: "3. Complete Small Business Mentorship",
      paragraph:
        "Applicants are required to complete a 5-hour Small Business Mentorship through SLO SBDC. This highly recommended course offers valuable insights and guidance to help ensure your business is set up for success.",
    },
    {
      title: "4. Submission of Revised Business Plan and Documents",
      paragraph:
        "After completing the mentorship, submit a revised business plan, business license, and any other required documents for final review.",
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
        <p>
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
        </p>
      ),
    },
    {
      title: "Apply for a Loan?",
      paragraph: (
        <Button>
          <FiExternalLink />
          Application Form
        </Button>
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
                <p className="pt-2">{item.paragraph}</p>
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
        paragraph="The Auntie Isabell Foundation offers loans to support underrepresented individuals in Paso Robles, San Luis Obispo County. These loans can assist with various business ventures, from starting a new enterprise to expanding an existing one. We provide flexible terms and personalized guidance, including support for business planning and growth, to help ensure your success."
        backgroundImage="/bg/city01.png"
      />
      <Criteria />
      <AppProcess />
    </div>
  );
}
