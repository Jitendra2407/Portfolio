import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const user = {
    name: "Jitendra Kumar Thakur",
    age: null,
    gender: "Male",
    email: "jitendrakumarthakur552@gmail.com",
    mobile: "7488197567",
    country: "INDIA",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/8400b788-8f09-4551-9068-002899353bcd/7nPXiW0Sx1.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
