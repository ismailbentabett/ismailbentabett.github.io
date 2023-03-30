import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import LineItem from "./LineItem";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  const { lineArray, resumeArray } = UseData();

  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container  sm:px-5 md:px-10 lg:px-20">
            <div className="py-12 px-4">
              {/*page title here */}
              <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
                Resume
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
                {/* resume items map */}

                {resumeArray.map((item, i) => (
                  <ResumeCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
          {/* End education */}

          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">
                  Working Skills
                </h4>

                {/* experience percent items */}

                {lineArray.map((item, i) => (
                  <LineItem item={item} key={i} />
                ))}
              </div>
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Knowledges
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                  <button className="resume-btn">Digital Design</button>
                  <button className="resume-btn">Marketing</button>
                  <button className="resume-btn">Social Media</button>
                  <button className="resume-btn">Print</button>
                  <button className="resume-btn">Time Management</button>
                  <button className="resume-btn">Flexibility</button>
                  <button className="resume-btn">Print</button>
                  <button className="resume-btn">Print</button>
                  <button className="resume-btn">Time Management</button>
                  <button className="resume-btn">Flexibility</button>
                  <button className="resume-btn">Print</button>
                </div>
              </div>
            </div>
          </div>
          {/* End Skills */}

          {/* call footer */}
          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default Resume;
