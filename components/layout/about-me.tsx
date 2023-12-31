"use client";

import Section from "../UI/section";
import SectionTitle from "../UI/section-title";

export default function AboutMe() {
  return (
    <Section id="about-me">
      {(isVisible) => (
        <div className={`flex justify-center py-60`}>
          <div className="flex flex-col justify-between lg:w-2/3 sm:w-4/5 w-[90%] md:h-[30rem] h-[28rem]">
            <div className="flex w-full h-full">
              <div className="flex flex-col justify-between h-full md:w-2/3 w-1/2">
                <div
                  className={`h-6 w-full bg-secondary-back ${
                    isVisible ? "expandWidthFirst animate-expandWidth" : ""
                  }`}
                ></div>
                <SectionTitle
                  title="about me"
                  className={`${
                    isVisible ? "fadeDownTitle animate-fadeDown" : ""
                  }`}
                />
                <div
                  className={`flex justify-center items-center bg-accent-back h-[330px] ${
                    isVisible ? "fadeInUpText animate-fadeInUp" : ""
                  }`}
                >
                  <p className="px-6 py-2  text-primary-light font-Mako xl:text-[20px] md:text-[16px] sm:text-[12px] text-[9px]">
                    Text here for brief description of who I am. Text here for
                    brief description of who I am. Text here for brief
                    description of who I am. Text here for brief description of
                    who I am. Text here for brief description of who I am. Text
                    here for brief description of who I am. Text here for brief
                    description of who I am. Text here for brief description of
                    who I am. Text here for brief description of who I am. Text
                    here for brief description of who I am. Text here for brief
                    description of who I am. Text here Text here Text here Text
                    here Text here Text HERe. Text here Text here Text here Text
                    here Text here Text HERe.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between md:w-1/3 w-1/2 h-full ml-6">
                <div
                  className={`bg-[url('/me-photo.jpg')] bg-center bg-cover w-full h-[90%] rounded-md ${
                    isVisible ? "fadeInUpPhoto animate-fadeInUp" : ""
                  }`}
                ></div>
                <div
                  className={`bg-secondary-back w-full h-[5%] ${
                    isVisible ? "expandHeight animate-expandHeight" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div
              className={`h-2 w-full bg-neutral-offset mt-4 ${
                isVisible ? "expandWidthSecond animate-expandWidth" : ""
              }`}
            ></div>
          </div>
        </div>
      )}
    </Section>
  );
}
