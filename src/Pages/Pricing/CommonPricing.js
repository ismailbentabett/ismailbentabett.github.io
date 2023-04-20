import React from "react";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
import { BsXCircle } from "react-icons/bs";
import Modal from "react-modal";
import user from "../../assets/images/about/about.jpg";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import PageTitle from "../../Share/PageTitle";
import { CheckIcon } from '@heroicons/react/outline'
import { NavLink } from "react-router-dom";

const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceMonthly: 100,
    description: 'Get a simple website or small project completed with essential features and functionality..',
    features: [
      'Basic design and layout',
      'Limited customization',
      'Basic search engine optimization (SEO)',
      'Standard support and communication',
    ],
  },
  {
    name: 'Standard',
    href: '#',
    priceMonthly: 350,
    description: 'Get a customized website or project with advanced features and functionality.',
    features: [
      'Custom design and layout',
      'Moderate customization',
      'Advanced search engine optimization (SEO)',
      'Social media integration',
      'Advanced support and communication',
    ],
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 700,
    description: 'Get a Fully Premium customized website or project with advanced features and functionality.',
    features: [
      'Fully customized design and layout',
      'Full customization',
      'Advanced search engine optimization (SEO)',
      'E-commerce functionality (if applicable)',
      'Integration with third-party services',
      'Premium support and communication',
    ],
  },
]
const CommonBlog = ({ items, count }) => {
  const { local } = UseData();
  const { isOpen, setIsOpen, singleData, handlePricingData, PricingData } =
    UseData();
  const handleModle = (id) => {
    handlePricingData(id);
  };

  const blogDescriptionSplit = singleData?.description?.split("\n");
  return (
    <>
      <PageTitle title="Pricing"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              {/* Blog page title */}
              <h2 className="after-effect after:left-60 mt-12 lg:mt-0">
                Pricing
              </h2>
             
            </div>
            {/* Blog items End */}
          </div>
          <div className="bg-gray-900">
   
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  ">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg  overflow-hidden py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2 text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  <div className="px-6 py-8  sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-cyan-100 text-cyan-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">/Day</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md ">
                      <NavLink
                        to={'/contact?query=' + tier.name}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md  text-gray-lite dark:text-[#b7b7b7] bg-gray-800 hover:bg-gray-900 rounded-lg  dark:border-[#212425] dark:border-2 "
                        aria-describedby="tier-standard"
                          
                      >
                        Get started
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
          {/* Common Footer call here */}
          <Footer condition={true} bg={"#F8FBFB"} />
        </div>
      </section>
    </>
  );
};

export default CommonBlog;
