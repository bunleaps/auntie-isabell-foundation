import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramsInfo";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "References — Auntie Isabelle Foundation",
  description: "...",
};

const ImageReference = ({
  title,
  backgroundImage,
  source,
  link,
  author,
  license,
}) => {
  return (
    <div className="pb-10 pr-5 max-w-md font-sans leading-relaxed">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        width={500}
        height={100}
        objectFit="cover"
        className="rounded"
      />
      <p>
        <strong>Image Title or Description:</strong> {title}
      </p>
      <p>
        <strong>Source:</strong>{" "}
        <Link href={link} passHref legacyBehavior>
          <a target="_blank" className="text-blue-500 hover:underline">
            {source}
          </a>
        </Link>
      </p>
      <p>
        <strong>Photographer:</strong> {author}
      </p>
      <p>
        <strong>License:</strong> {license}
      </p>
    </div>
  );
};

export default function Programs() {
  return (
    <div>
      <Hero
        title="References"
        paragraph="This page provides a list of all the sources and attributions for the pictures, images, and content used throughout the website. We strive to credit the original creators and adhere to proper copyright and attribution guidelines."
        backgroundImage="/bg/city01.png"
      />
      <div className="max-w-5xl mx-auto p-8 md:p-16">
        <section className="mb-12 mt-8">
          <h2 className="text-2xl font-semibold mb-4">References</h2>
          <div className="flex flex-wrap">
            <ImageReference
              title="Cerro San Luis (a.k.a. Madonna Mountain), San Luis Obispo, California"
              backgroundImage="/bg/mount01.jpeg"
              source="Wikipedia"
              link="https://en.m.wikipedia.org/wiki/File:Cerro_San_Luis.JPG"
              author="Leif Arne Storset"
              license="Free to use"
            />
            <ImageReference
              title="Mountain - City of San Luis Obispo"
              backgroundImage="/bg/mount02.jpeg"
              source="City of San Luis Obispo"
              link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSt3l8qOak23M8oQ9R18D-O4PEaRmi88xBg&s"
              author="City of San Luis Obispo"
              license="Free to use"
            />
            <ImageReference
              title="City View - City of San Luis Obispo"
              backgroundImage="/bg/city01.png"
              source="City of San Luis Obispo"
              link="https://www.slocity.org/home/showpublishedimage/21742/638406563543900000"
              author="City of San Luis Obispo"
              license="Free to use"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
