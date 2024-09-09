import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramsInfo";

export const metadata = {
  title: "How to Qualify — Auntie Isabelle Foundation",
  description: "...",
};

function Criteria() {
  const criteriaList = [
    {
      title: "Demographic",
      info: "Applicants must identify as part of an underrepresented group. This includes, but is not limited to, individuals from marginalized racial or ethnic backgrounds, low-income individuals, single parents, and others facing systemic barriers.",
    },
    {
      title: "Purpose",
      info: "Applicants must outline a clear purpose for the loan or grant. This can include educational expenses, business start-up costs, emergency expenses, or other significant needs.",
    },
    {
      title: "Commitment",
      info: "Applicants must show a commitment to personal or professional development. This can be demonstrated through past achievements, goals, and a plan for how the financial assistance will help achieve these goals.",
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
              Applicants must be residents of San Luis Obispo County.
            </p>
            <p className="font-medium">
              We believe in providing opportunities for those who are striving
              to improve their circumstances and make a positive impact in their
              community.
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
        "Begin by filling out our preliminary inquiry form to provide us with basic information about your situation and needs.",
    },
    {
      title: "2. Documentation",
      paragraph:
        "Gather and submit required documents, including proof of residency, financial information, and a detailed description of the purpose for the loan or grant.",
    },
    {
      title: "3. Review",
      paragraph:
        "Our team will review your application and may reach out for additional information or clarification.",
    },
    {
      title: "4. Interview",
      paragraph:
        "Some applicants may be invited to a brief interview to discuss their application in more detail.",
    },
    {
      title: "5. Decision",
      paragraph:
        "Once all the information is reviewed, we will make a decision and notify you of the outcome. Successful applicants will receive further instructions on how to access their funds.",
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
        "Auntie Isabell Foundation offers low-interest loans to support underrepresented individuals in San Luis Obispo County. These loans are designed to help with educational expenses, business ventures, and other needs, providing flexible terms and tailored assistance to ensure success.",
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

export default function HowToQualify() {
  return (
    <div>
      <Hero
        title="How to Qualify"
        paragraph="At the Auntie Isabell Foundation, we are dedicated to providing financial support to underrepresented individuals in San Luis Obispo County. Our programs are designed to help those who face systemic challenges and need financial assistance to achieve their personal and professional goals. Here’s how you can qualify for our loans and grants."
        backgroundImage="/bg/city01.png"
      />
      <ProgramsInfo />
      <Criteria />
      <AppProcess />
    </div>
  );
}
