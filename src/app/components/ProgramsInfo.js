// components/TwoColumnLayout.js
import Accordion from "./Accordion";

const ProgramInfo = ({ items }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="col-span-1 p-4">
            <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
            <p className="mb-4">{item.paragraph}</p>
            {item.accordions.map((accordion, accIndex) => (
              <Accordion
                key={accIndex}
                title={accordion.title}
                content={accordion.content}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramInfo;
