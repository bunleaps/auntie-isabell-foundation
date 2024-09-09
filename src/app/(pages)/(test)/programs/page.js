import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramsInfo";

export const metadata = {
  title: "Programs — Auntie Isabelle Foundation",
  description: "...",
};

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
    {
      title: "GRANT",
      paragraph:
        "The Auntie Isabell Foundation offers grants to support underrepresented individuals and organizations in San Luis Obispo County. These grants are aimed at fostering growth, development, and empowerment within the community, funding educational initiatives, community projects, and other activities.",
      accordions: [
        {
          title: "Grant Details",
          content:
            "Our grants support educational initiatives, community projects, and more to foster growth and development.",
        },
        {
          title: "Eligibility",
          content:
            "Must be a resident of San Luis Obispo County and identify as part of an underrepresented group. Applicants should demonstrate a clear purpose for the grant.",
        },
        {
          title: "Application Process",
          content:
            "Submit an application outlining the purpose and impact of the grant, along with required documentation.",
        },
        {
          title: "Additional Support",
          content:
            "Grant recipients gain access to online webinars covering business essentials and a check-in section for progress updates.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 md:py-12">
      <ProgramInfo items={data} />
    </div>
  );
}

export default function Programs() {
  return (
    <div>
      <Hero
        title="Our Programs"
        paragraph="The Auntie Isabell Foundation offers loans and grants to underrepresented individuals in San Luis Obispo County. Recipients gain access to online webinars and a progress check-in system to support their business ventures and personal goals"
        backgroundImage="/bg/city01.png"
      />
      <ProgramsInfo />
    </div>
  );
}
