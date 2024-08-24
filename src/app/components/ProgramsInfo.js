// components/TwoColumnLayout.js
import Accordion from "./Accordion";

const ProgramInfo = ({ items }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-wrap">
            {/* <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
              <p className="mb-4 pr-6">{item.paragraph}</p>
            </div> */}
            <div className="w-full">
              {item.accordions.map((accordion, accIndex) => (
                <Accordion
                  key={accIndex}
                  title={accordion.title}
                  content={accordion.content}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramInfo;
