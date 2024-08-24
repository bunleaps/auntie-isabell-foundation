import Button from "@/app/components/Button";
import Hero from "@/app/components/Hero";
import ProgramInfo from "@/app/components/ProgramsInfo";
import { FiExternalLink } from "react-icons/fi";

export const metadata = {
  title: "Grant — Auntie Isabelle Foundation",
  description: "...",
};

function Criteria() {
  const criteriaList = [
    {
      title: "Demographic",
      info: "Applicants in our community must belong to one or more of the following underrepresented groups: race, color, age, ability, sex (including gender identity and sexual orientation), socioeconomic status, familial status, religious affiliation, or be aged 18 or older, including those transitioning from the Foster Care System.",
    },
    {
      title: "Purpose",
      info: "The funds can be used for various needs, including education, housing, transportation, job preparation, addressing life challenges, and child care. This flexibility allows recipients to apply the support where it is most needed for their personal and professional development.",
    },
    {
      title: "Commitment",
      info: "As part of our commitment to your success, we require quarterly check-ins to review progress and provide ongoing support. These regular updates help ensure that you stay on track and receive the assistance you need to achieve your goals.",
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
            <p className="italic pt-4 font-medium">
              Applicants must be residents of Paso Robles, San Luis Obispo
              County.
            </p>
            <p className="font-bold py-4 text-red-600">
              *Due dates for applications are September 30th, November 30th, and
              March 31st each year.
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
      title: "1. Age Confirmation and GRIT Survey",
      paragraph:
        "Confirm that you are aged 18-30 years or older, and provide verification of age. Complete the 10-question GRIT survey online.",
    },
    {
      title: "2. Essay/Art/Video Submission",
      paragraph:
        "Using the GRIT survey questions, select one that was impactful and expand on it. Create an essay, art representation, or video that explains this question in depth. Relate it to the need for a one-time payment or monthly grant and how it will support your personal journey.",
    },
    {
      title: "3. Submission Review",
      paragraph:
        "Submit your original essay, art representation, or video online. Provide the link to your submission via the designated form.",
    },
    {
      title: "4. Interview",
      paragraph:
        "If selected, attend an interview with two Board Members at the Paso Robles Public Library Conference Room. You may bring an advocate or friend for support. Interviews are available in English and Spanish to discuss your submission.",
    },
    {
      title: "5. Application Status & Award",
      paragraph:
        "You will be notified of your application status. If awarded, a payment schedule will be established along with a quarterly check-in schedule. Please note that if mandatory quarterly check-ins are not met, the grant will be terminated.",
    },
    {
      title: "Apply for a Grant?",
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

function ProgramsInfo() {
  const data = [
    {
      title: "LOAN",
      paragraph:
        "Auntie Isabell Foundation offers low-interest loans to support underrepresented individuals in Paso Robles, San Luis Obispo County. These loans are designed to help with educational expenses, business ventures, and other needs, providing flexible terms and tailored assistance to ensure success.",
      accordions: [
        {
          title: "Loan Details",
          content:
            "Our loans provide flexible terms and tailored assistance to meet diverse needs.",
        },
        {
          title: "Eligibility",
          content:
            "Must be a resident of San Luis Obispo County and identify as part of an underrepresented group. Applicants should demonstrate financial need and a commitment to personal or professional development.",
        },
        {
          title: "Application Process",
          content:
            "Fill out a preliminary inquiry form, submit required documents, and undergo a review process, which may include an interview.",
        },
        {
          title: "Additional Support",
          content:
            "Recipients receive access to online webinars on business planning, financial management, and more, along with a dedicated check-in section for progress updates.",
        },
      ],
    },
    // {
    //   title: "GRANT",
    //   paragraph:
    //     "The Auntie Isabell Foundation offers grants to support underrepresented individuals and organizations in San Luis Obispo County. These grants are aimed at fostering growth, development, and empowerment within the community, funding educational initiatives, community projects, and other activities.",
    //   accordions: [
    //     {
    //       title: "Grant Details",
    //       content:
    //         "Our grants support educational initiatives, community projects, and more to foster growth and development.",
    //     },
    //     {
    //       title: "Eligibility",
    //       content:
    //         "Must be a resident of San Luis Obispo County and identify as part of an underrepresented group. Applicants should demonstrate a clear purpose for the grant.",
    //     },
    //     {
    //       title: "Application Process",
    //       content:
    //         "Submit an application outlining the purpose and impact of the grant, along with required documentation.",
    //     },
    //     {
    //       title: "Additional Support",
    //       content:
    //         "Grant recipients gain access to online webinars covering business essentials and a check-in section for progress updates.",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-4 md:py-12">
      <ProgramInfo items={data} />
    </div>
  );
}

export default function Loan() {
  return (
    <div>
      <Hero
        title="Grant"
        paragraph="The Auntie Isabell Foundation is designed to support underrepresented persons within San Luis Obispo County. The Auntie Isabell Foundation believes that all you need is a way to take the next step with support. The Auntie Isabell Foundation Grant enables the recipient to take the chance to move forward."
        backgroundImage="/bg/city01.png"
      />
      {/* <ProgramsInfo /> */}
      <Criteria />
      <AppProcess />
    </div>
  );
}
