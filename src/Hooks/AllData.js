import { useEffect, useState } from "react";

import silikan from "../assets/images/work_images/ismailbentabett/silikan.png";
import bmicalc from "../assets/images/work_images/ismailbentabett/bmi-calc.png";
import angularionic from "../assets/images/work_images/ismailbentabett/angular-ionic.jpg";
import mevn from "../assets/images/work_images/ismailbentabett/mevn.jpg";
import shortcut from "../assets/images/work_images/ismailbentabett/shortcut.jpg";
import figma from "../assets/images/work_images/ismailbentabett/figma.png";
import sigservice from "../assets/images/work_images/ismailbentabett/sig-service.png";
import sincerus from "../assets/images/work_images/ismailbentabett/sincerus.png";

// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import Pricingmall6 from "../assets/images/blog_images/small/6.jpg";
import Pricingmall4 from "../assets/images/blog_images/small/4.jpg";
import Pricingmall2 from "../assets/images/blog_images/small/2.jpg";
import Pricingmall1 from "../assets/images/blog_images/small/1.jpg";
import Pricingmall3 from "../assets/images/blog_images/small/3.jpg";
import Pricingmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
//ImPriceTag
import { ImPriceTag } from "react-icons/im";
import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "dark");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Pricing  modal open
  const handlePricingData = (id) => {
    const find = PricingData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  /* 
  import silikan from "../assets/images/work_images/ismailbentabett/silikan.png";
import bmicalc from "../assets/images/work_images/ismailbentabett/bmi-calc.png";
import angularionic from "../assets/images/work_images/ismailbentabett/angular-ionic.jpg";
import mevn from "../assets/images/work_images/ismailbentabett/mevn.jpg";
import shortcut from "../assets/images/work_images/ismailbentabett/shortcut.png";
import figma from "../assets/images/work_images/ismailbentabett/figma.png";
import sigservice from "../assets/images/work_images/ismailbentabett/sig-service.png";
import sincerus from "../assets/images/work_images/ismailbentabett/sincerus.png"; */
  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Software",
      title: "Silikan",
      img: silikan,
      imgSmall: silikan,
      bg: "#FFF0F0",
      client: "END OF STUDIES",
      langages: "PHP , Laravel , VUE ,VUETIFY ...",
      link: "https://github.com/silikan",
      linkText: "github.com/silikan",
      description:
        "Day To Day Tasks Can Be Hard To Learn And very Tedious To Do In Time ,here You Can Get everything Done Using Tech we are in need of a solution for it Silikan is a top notch marketplace that allows customers in need of quick , efficient and common daily services to get them easley",
    },
    {
      id: "2",
      tag: "Software",
      title: "ISICONIC",
      img: mevn,
      imgSmall: mevn,
      bg: "#FFF3FC",
      client: "ismailbentabett",
      langages: "MEVN Stack",
      link: "https://github.com/ismailbentabett/isiconic_web_app",
      linkText: "isiconic_web_app",
      description:
        " a social network web app for online shoppers and it is in the same time a multi-vendor based marketplace ",
    },
    {
      id: "3",
      tag: "Software",
      title: "NEVERNOTE",
      img: angularionic,
      imgSmall: angularionic,
      bg: "#FFF0F0",
      client: "ismailbentabett",
      langages: "Angular, Firebase and Ionic",
      link: "https://github.com/ismailbentabett/NeverNote",
      linkText: "NeverNote",
      description:
        "This is a note-taking app that you can use to write down and organize your ideas, tasks, and reminders. It's built using Angular and Ionic, and it stores your notes securely in the cloud using Firebase. You can sign in with your Google or email account to access your notes from any device, and you can search through your notes to quickly find what you're looking for. The app is designed to be easy to use and helps you stay organized and on top of things.",
    },
    {
      id: "4",
      tag: "Software",
      title: "SFA & ACILE",
      img: sigservice,
      imgSmall: sigservice,
      bg: "#E9FAFF",
      client: "Sig Service",
      langages: "Vue,Capacitor,Odoo",
      link: "http://www.sigservice-dz.com/",
      linkText: "sigservice-dz.com",
      description:
        " Mobile application for field actors available in several languages with  More than 6,000 routes on the national territory and Offline and connected mode in real time and Multi-depot / multi-company / multi-site management and More than 30 brands currently using the application Interface with Acile [The first B2B platform to connect retail outlets with their distributor networks (suppliers & brands) in algeria.] ",
    },
    {
      id: "5",
      tag: "Design",
      title: "Silikan Ui Design",
      img: figma,
      imgSmall: figma,
      bg: "#FFFAE9",
      client: "End Of Studies",
      langages: "Figma",
      link: "https://github.com/silikan",
      linkText: "github.com/silikan",
      description:
        "UI UX DESIGN OF THE SILIKAN PLATFORM",
    },
    {
      id: "6",
      tag: "Wordpress",
      title: "Sincerus",
      img: sincerus,
      imgSmall: sincerus,
      bg: "#F4F4FF",
      client: "Sincerus",
      langages: "Wordpress",
      link: "https://sincerus.store",
      linkText: "sincerus.store",
      description:
        "Our women's clothing line brand is dedicated to empowering women through fashionable and comfortable clothing. Our website showcases our latest collections and commitment to sustainability and ethical manufacturing practices. We offer a wide range of products, including dresses, tops, pants, and accessories, available for purchase online. We celebrate women of all shapes and sizes and aim to make shopping for our collection easy and convenient.",
    },
    {
      id: "7",
      tag: "Software",
      title: "Bmi-Calculator-App ",
      img: bmicalc,
      imgSmall: bmicalc,
      bg: "#FFF0F8",
      client: "ismailbentabett",
      langages: "Flutter",
      link: "https://github.com/ismailbentabett/Bmi-Calculator-App",
      linkText: "Bmi-Calculator-App",
      description:
        "The BMI Calculator App is a simple and user-friendly tool that allows users to calculate their body mass index (BMI) based on their height and weight.",
    },
    {
      id: "8",
      tag: "Entrepreneurship",
      title: "Shortcut",
      img: shortcut,
      imgSmall: shortcut,
      bg: "#FFF0F8",
      client: "Startup Algeria",
      langages: "Entrepreneurship",
      link: "https://shortcut-dz.com",
      linkText: "shortcut-dz.com",
      description:
        "Shortcut, the bridge between Agencies , Freelancers , Companies . consolidate all of your business needs in one place!.",
    },
    {
      id: "9",
      tag: "Ecommerce",
      title: "Sincerus",
      img: sincerus,
      imgSmall: sincerus,
      bg: "#FCF4FF",
      client: "Sincerus",
      langages: "Digital Marketing",
      link: "https://sincerus.shop/",
      linkText: "sincerus.shop",
      description:
        "Our women's clothing line brand is dedicated to empowering women through fashionable and comfortable clothing. Our website showcases our latest collections and commitment to sustainability and ethical manufacturing practices. We offer a wide range of products, including dresses, tops, pants, and accessories, available for purchase online. We celebrate women of all shapes and sizes and aim to make shopping for our collection easy and convenient.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Pricing section
  const PricingData = [
    {
      id: "1",
      img: blog1,
      imgSmall: Pricingmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: Pricingmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: Pricingmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: Pricingmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: Pricingmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: Pricingmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Pricing",
      link: "/home/Pricing",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Projects",
      link: "/Projects",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Pricing",
      link: "/pricing",
      icon: <ImPriceTag />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: icon,
      title: "Front End Developer",
      des: " create visually appealing and user-friendly interfaces for websites and applications using Web Technologies.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon5,
      title: "Back End Developer",
      des: "create the server-side logic that powers web apps I work with Dbs, servers, APIs to develop and integrate the features users interact with.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon5,
      title: "Mobile & Desktop Developer",
      des: " design and develop Cross Platform applications with tools and frameworks That Use The Latest Tech Trends.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon1,
      title: "UI/UX DESIGNER",
      des: "create visually appealing and user-friendly interfaces. I use tools such as Sketch,Figma,AdobeXD to create wireframes, mockups, and prototypes.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon3,
      title: "Entrepreneur & Social Media Manager",
      des: "identify business opportunities and create new ventures or products that meet customer needs while executing social media strategies that increase brand awareness and engagement.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon4,
      title: "Digital Marketer &  E-Commerce Consultant",
      des: "create and execute marketing campaigns that increase brand awareness, drive traffic, and generate leads or sales and advise businesses on how to improve their online Shops and customer experience.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: "",
      icon: MdOutlineSchool,
      id: "01",
      date: "2018-2022",
      title: "Computer Sience Graduate",
      place: "Université de Saida Dr Moulay Tahar",
      bg: "#FFF4F4",

      id1: "02",
      date1: "2022 - Present",
      title1: "Chief Technology Officer (CTO)",
      place1: "Shortcut",
      bg1: "#FFF1FB",

      id2: "03",
      date2: "2020 - Present",
      title2: "Senior Full stack software developer",
      place2: "Shortcut",
      bg2: "#FFF4F4",
    },
    {
      type: "",
      icon: MdOutlineBusinessCenter,
      id: "04",
      date: "2020 - Present",
      title: "Co-Founder",
      place: "Shortcut",
      bg: "#EEF5FA",

      id1: "05",
      date1: "May 2022 - Oct 2022",
      title1: "Software Engineer",
      place1: "SIG Service",
      bg1: "#F2F4FF",

      id2: "06",
      date2: "2020 - Present",
      title2: "Freelancer",
      place2: "Freelance",
      bg2: "#EEF5FA",
    },
    {
      type: "Awards",
      icon: FaAward,
      id: "07",
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",

      id1: "08",
      date1: "2014 - 2015",
      title1: "Jr. Web Developer",
      place1: "Creative Gigs.",
      bg1: "#FCF9F2",

      id2: "09",
      date2: "2015-2017",
      title2: "Best Freelancer",
      place2: "Fiver & Upwork Level 2 & Top Rated",
      bg2: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#00a9bf",
      name: "Front End",
      number: "90",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Backend",
      number: "95",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "UI/UX",
      number: "65",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Desktop & Mobile",
      number: "75",
    },
    {
      id: "03",
      color: "#CA56F1",
      name: "Digital Marketing",
      number: "90",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+213 794753644",
      item2: "+213 794753644",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "ismailbentabett@gmail.com",
      item2: "ismailbentabett@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Maount View, Oval",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    PricingData,
    handlePricingData,
    menuItem,
    NavLink,
    menuItemTwo,
    experienceArray,
    sliderImg,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
