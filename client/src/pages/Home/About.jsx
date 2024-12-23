import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Python",
  ];

  return (
    <div>
      <SectionTitle title="About"></SectionTitle>

      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/00631d31-4422-4aae-b46c-46fc39161f98/J5CWDiiZaJ.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            Hello My name is Jitendra Kumar Thakur. I enjoy creating things that
            live on the internet. My interest in web development started back in
            2023 when i first time learnt about html, css and JavaScript
          </p>
          <p className="text-white">
            Hello My name is Jitendra Kumar Thakur. I enjoy creating things that
            live on the internet. My interest in web development started back in
            2023 when i first time learnt about html, css and JavaScript
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are few technology I've been working with recently :
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
