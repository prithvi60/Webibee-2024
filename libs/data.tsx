import { FaChartArea } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { RiGlobalFill, RiInstagramFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { TbTools } from "react-icons/tb";

export const navLinks = [
  { href: "/", title: "Home" },
  { href: "/blogs", title: "Blogs" },
  // { href: "/whyCode", title: "Why Code" },
  // { href: "/proficiency", title: "Proficiency" },
  { href: "/works", title: "Portfolio" },
  // { href: "/contact", title: "Talk to an Expert →" },
  // { href: "/contact", title: "Talk to an Expert →" },
];

export const footerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/blogs", title: "Blogs" },
  { href: "/about", title: "About" },
  { href: "/whyCode", title: "Why Code" },
  { href: "/proficiency", title: "Proficiency" },
  { href: "/works", title: "CaseStudies" },
  { href: "/contact", title: "Get in touch" },
  { href: "/terms", title: "Terms and Conditions" },
];

// Portfolio Images

export const portfolioImages = [
  { img: "/vbcccasestudy.png", href: "vbcc", alt: "VBCC Portfolio Image" },
  {
    img: "https://cdn.webibee.com/Webibee/oneus-bg.png",
    href: "oneus",
  },
  {
    img: "/ensilatacasestudy.png",
    href: "ensileta",
    alt: "Ensileta Portfolio Image",
  },
  { img: "/rasimcasestudy.png", href: "rasim" },
  {
    img: "https://cdn.webibee.com/Webibee/daga-bg.png",
    href: "daga",
  },
];
export const portfolioImagesMob = [
  {
    video: "https://cdn.webibee.com/Webibee/CS_Videos/vbcc.mp4",
    href: "vbcc",
    alt: "VBCC Portfolio Image",
  },
  {
    video: "https://cdn.webibee.com/Webibee/CS_Videos/rasims.mp4",
    href: "rasim",
  },
  {
    video: "https://cdn.webibee.com/Webibee/CS_Videos/oneus.mp4",
    href: "oneus",
  },
];

export const categories = [
  {
    title: "manufacturing",
    logo: "https://cdn.webibee.com/Webibee/logos/VBCC-Logo.svg",
    href: "/caseStudy/vbcc",
  },
  {
    title: "interior design",
    logo: "https://cdn.webibee.com/Webibee/logos/ensileta-logo.svg",
    href: "/caseStudy/ensileta",
  },
  {
    title: "real estate",
    logo: "https://cdn.webibee.com/Webibee/logos/intermont-logo.svg",
    href: "/caseStudy/intermont",
  },
  {
    title: "travel & tourism",
    logo: "https://cdn.webibee.com/Webibee/logos/oneus-logo.png",
    href: "/caseStudy/oneus",
  },
  // { title: "Industrial & Manufacturing", logo: "https://ik.imagekit.io/webibee/Webibee/logos/VBCC-Logo.svg?updatedAt=1735894371853" },
];

export const categories2 = [
  {
    title: "legal services",
    logo: "https://cdn.webibee.com/Webibee/logos/daga-logo.svg",
    href: "/caseStudy/daga",
  },
  {
    title: "apparel & textiles",
    logo: "https://cdn.webibee.com/Webibee/logos/rasim-logo.svg",
    href: "/caseStudy/rasim",
  },
  {
    title: "marine services",
    logo: "https://cdn.webibee.com/Webibee/logos/n9-logo.svg",
    href: "/caseStudy/n9",
  },
  {
    title: "consumer goods (FMCG)",
    logo: "https://cdn.webibee.com/Webibee/logos/nivaran-logo.svg",
    href: "/caseStudy/cne",
  },
];

// Testimonials

export const testimonials = [
  {
    id: 1,
    reviewer: "Naveen V",
    img: "https://cdn.webibee.com/Webibee/vbcc-ceo.png",
    company: "VBCC Instruments",
    position: "Founder & CEO, VBCC Instruments",
    review: `Our group of companies faced a big challenge one time before engaging with Webibee, which was improving our online presence. In this light, we sought for some assistance in developing websites that were beautiful to look at and featured that were tailor-made for our requirements as well as technical help and a long-term commitment to cooperate with our SEO and content teams.

Not only did Webibee meet our expectations, but also surpassed them by far. They followed closely to the design guidelines we provided giving useful suggestions on how to improve the functionality of our site. For now, we have reached the point where these websites have an attractive look due to timely delivery of the project. This was facilitated by their integration into my team members. Also, it is worth mentioning that they are knowledgeable about various aspects of online presence management.

I highly recommend Prithvi together with his team at Webibee because they do very good work. To put it simply, they didn’t just develop websites; instead they optimized them leading to extremely high scores in Google’s website optimization metrics. On top of that, during the revision process, they always supported us until we were all satisfied with their work. I believe that Webibee is a reliable partner for current and future projects since they make me feel confident enough to tackle even bigger assignments going forward.`,
  },
  {
    id: 2,
    reviewer: "A. Jayesh Kumar Daga",
    img: "https://cdn.webibee.com/Webibee/ceo-3.png",
    company: "Daga and daga",
    position: "Head - Litigations, Daga and daga",
    review:
      "Webibee helped us with our website development and digital management needs, and the experience exceeded my expectations. Prithvi took our vision and turned it into a stunning reality. He also patiently responded to all my queries. I highly recommend their services to anyone looking for a reliable and innovative digital partner.",
  },
  {
    id: 3,
    reviewer: "Rasim",
    img: "https://cdn.webibee.com/Webibee/ceo-2.jpeg",
    company: "Rasim Exports",
    position: "CEO, Rasim Exports",
    review:
      "The enhancement was really amazing . The data upgrades and artwork talks volumes of the hard work put behind . Overall , great job! ",
  },
  {
    id: 4,
    reviewer: "Paul",
    img: "https://cdn.webibee.com/Webibee/euro-flag_avif.heif",
    company: "European Company",
    position: "CEO, European Company",
    review: `Working with Webibee was a fantastic experience. They understood our needs and delivered a product that exceeded our expectations. Their attention to detail and commitment to quality is commendable. I would highly recommend their services to anyone looking for a reliable partner in web development.`,
  },
  {
    id: 5,
    reviewer: "Louis",
    img: "https://cdn.webibee.com/Webibee/UAE.jpg",
    company: "UAE Firm",
    position: "Managing Director, UAE Firm",
    review: `The team at Webibee transformed our online presence. Their innovative approach and technical expertise made a significant difference in our project. They were responsive and supportive throughout the process, ensuring we were satisfied with the final outcome.`,
  },
  {
    id: 6,
    reviewer: "Sarah",
    img: "https://cdn.webibee.com/Webibee/euro-flag_avif.heif",
    company: "European Company",
    position: "Marketing Head, European Company",
    review: `Webibee's team is exceptional! They took our ideas and turned them into a beautiful website that truly represents our brand. Their professionalism and dedication to our project were evident from start to finish. I can't recommend them enough!`,
  },
];

export const collaboration = [
  {
    title: "Support (contract work)",
    desc: "Help with something specific ",
  },
  {
    title: "Launch (project work)",
    desc: "Offer tech to your business",
  },
  {
    title: "Grow (retainer work)",
    desc: "Grow existing business with tech",
  },
  {
    title: "Scale (custom product)",
    desc: "Build your Sass and grow it with tech",
  },
];

export const services = [
  {
    title: "IT",
    summary: [
      "I want to automate processes",
      "I want to improve efficiency",
      "I want to scale operations",
      "I want to build robust systems",
      "I want to create a product",
      "I want to implement my startup idea",
    ],
    href: "/ITEssentials",
  },
  {
    title: "Digital",
    summary: [
      "I want to generate leads",
      "I want to improve conversions",
      "I want to increase traffic",
      "I want to have online presence",
      "I want to run an online business",
      "I want to market my product",
      "I want to reach audience",
    ],
    href: "/digitalEssentials",
  },
  {
    title: "Creative",
    summary: [
      "I want to spark curiosity",
      "I want to improve user experience",
      "I want to connect with customers ",
      "I want to create brand identity",
      "I want to make things aesthetic",
    ],
    href: "/creativeEssentials",
  },
];

export const howItWorks = [
  {
    img: "https://cdn.webibee.com/Webibee/logos/flex-logo.svg",
    title: "Creative Problem-Solving",
    desc: "Every challenge is an opportunity to design better experiences through code.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/scalable-logo.svg",
    title: "AI as a Growth Catalyst",
    desc: "The web is evolving, and AI is shaping the next wave of smart, interactive digital experiences.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/template.svg",
    title: "Beyond Templates",
    desc: "We build custom, future-ready solutions with modern frameworks and innovative tech.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/code.svg",
    title: "Code that Thinks",
    desc: "Our approach is not just about writing code, but crafting intelligent, intuitive, and scalable solutions.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/ReImagined.svg",
    title: "The Web, Reimagined",
    desc: "We don't settle for the ordinary—we’re here to redefine what's possible online.",
  },
];

export const ITEssentials = [
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%201.svg",
    title: "Technical Research",
    desc: "In-depth analysis to gather insights and optimize solutions for complex projects.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%202.svg",
    title: "Audit & Consultation:",
    desc: "Comprehensive evaluation and expert guidance to enhance performance, efficiency, and growth.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%203.svg",
    title: "Automation & Integration",
    desc: "Streamlining processes by connecting systems and automating workflows for improved efficiency and scalability.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%204.svg",
    title: "3rd Party API Integration",
    desc: "Seamlessly connecting external services to enhance functionality and streamline operations.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%205.svg",
    title: "AI Tool Integration",
    desc: "Integrating AI solutions to automate tasks, enhance decision-making, and drive innovation.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%206.svg",
    title: "CRM Integration",
    desc: "Connecting and automating customer data to improve relationships, streamline workflows, and boost productivity.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%207.svg",
    title: "Front-End Development",
    desc: "Crafting responsive, user-friendly interfaces that enhance user experience and bring designs to life.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%208.svg",
    title: "Full-Stack Development",
    desc: "Building end-to-end web applications by combining both front-end and back-end expertise for seamless functionality.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%209.svg",
    title: "SaaS MVP",
    desc: "Developing a scalable, minimal viable product for a Software-as-a-Service platform to quickly validate ideas and attract users.",
  },
];

export const digitalEssentials = [
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%201.svg",
    title: "Website Content",
    desc: "Crafting engaging, informative, and SEO-optimized content that communicates your brand message and drives user action.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%202.svg",
    title: "Marketing Research",
    desc: "Analyzing market trends, consumer behavior, and competitors to inform strategies and drive business growth.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%203.svg",
    title: "Social Media Ads",
    desc: "Creating targeted ad campaigns across social platforms to boost brand visibility, engagement, and conversions.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%204.svg",
    title: "Google Ads",
    desc: "Optimizing paid search campaigns on Google to drive traffic, increase visibility, and maximize ROI.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%205.svg",
    title: "Landing Page CRO",
    desc: "Optimizing landing pages to enhance user experience, increase conversions, and maximize business goals.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%206.svg",
    title: "Business Website Essentials",
    desc: "Building a professional, responsive website with key features to enhance branding, navigation, and performance.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/digital%20icon%207.svg",
    title: "E-commerce Essentials",
    desc: "Creating a secure, user-friendly online store with key features to drive sales.",
  },
];

export const creativeEssentials = [
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%201.svg",
    title: "UI/UX - Web",
    desc: "Designing intuitive, user-friendly websites that enhance user experience and engagement.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%202.svg",
    title: "UI/UX - Mobile",
    desc: "Crafting seamless, responsive mobile interfaces for a flawless user experience across devices.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%203.svg",
    title: "Logo Design",
    desc: "Creating unique, memorable logos that represent your brand's identity.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%204.svg",
    title: "Graphic Design",
    desc: "Designing visually appealing graphics that communicate your message effectively.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%205.svg",
    title: "Print Design",
    desc: "Developing designs for brochures, posters, and other printed materials that leave a lasting impression.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%206.svg",
    title: "Mockup Design",
    desc: "Creating realistic representations of digital designs to showcase concepts and ideas.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%207.svg",
    title: "3D Design",
    desc: "Producing dynamic, detailed 3D visuals for products, environments, and concepts.",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/IT%20icon%207.svg",
    title: "Interactive Website",
    desc: "Designing engaging, interactive websites that enhance user experience and functionality.",
  },
];

export const shine = [
  {
    title: "Business Website Creation",
    desc: "We build tailored, professional websites that reflect your brand and provide seamless user experiences.",
  },
  {
    title: "Technical Research and Integration",
    desc: "Our team ensures that every technical component is carefully researched and integrated, offering smooth system performance.",
  },
  {
    title: "UI/UX Audit and Implementation",
    desc: "We optimize your digital presence with in-depth UI/UX audits and implement enhancements for superior user engagement.",
  },
  {
    title: "SaaS MVP Development",
    desc: "We specialize in developing scalable and functional MVPs for SaaS platforms, enabling fast market entry and validation.",
  },
  {
    title: "Fullstack Development",
    desc: "From front-end to back-end, we deliver full-stack development solutions that are scalable, secure, and perfectly suited for your business needs.",
  },
];

export const allProjectsLists = [
  {
    img: "https://cdn.webibee.com/Webibee/logos/VBCC-Logo.svg",
    alt: "VBCC Logo Image",
    title: "VBCC",
    year: "2024",
    desc: "VBCC specializes in high-precision laboratory and industrial instruments, delivering quality and innovation across various sectors.",
    bg: "#13294F",
    href: "vbcc",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/rasim-logo.svg",
    alt: "Rasim Logo Image",
    title: "Rasim",
    year: "2024",
    desc: "Rasims Exports manufactures high-quality clothing for men, women, and kids, serving international B2B clients.",
    bg: "#F3F3F3",
    href: "rasim",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/ensileta-logo.svg",
    alt: "Ensileta Logo Image",
    title: "Ensileta Interior",
    year: "2024",
    desc: "Ensileta Interiors is a leading interior design firm focused on delivering innovative, high-quality design solutions that elevate client spaces and enhance user experiences.",
    bg: "#3D652E",
    href: "ensileta",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/intermont-logo.svg",
    alt: "Intermont Logo Image",
    title: "Intermont",
    year: "2024",
    desc: "Our team ensures that every technical component is carefully researched and integrated, offering smooth system performance.",
    bg: "#FFE4AF",
    href: "intermont",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/ashok-logo.png",
    alt: "Ashok Minerals Logo Image",
    title: "Ashok Minerals",
    year: "2024",
    desc: "Our team ensures that every technical component is carefully researched and integrated, offering smooth system performance.",
    bg: "#FFFFFF",
    href: "ashokMinerals",
  },
  {
    img: "https://cdn.webibee.com/Webibee/logos/oneus-logo.png",
    alt: "OneUs Logo Image",
    title: "OneUs",
    year: "2024",
    desc: "Our team ensures that every technical component is carefully researched and integrated, offering smooth system performance.",
    bg: "#A1C3F2",
    href: "oneus",
  },
];

export const caseStudies = [
  {
    title: "VBCC Instruments",
    href: "vbcc",
    mainBgImg: "/vbcccasestudy.png",
    summary:
      "A Website Revamp To Explore International Market And Improve Conversion Optimisation (CRO)",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web",
          "Front end development",
          "Crm integration",
          "3rd party API integration",
          "Industrial",
        ],
      },
      { title: "sector", list: "Industrial" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "3 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Grow (retainer work)" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/vbcc-1.png",
        alt: "vbcc home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/vbcc-2.png",
        alt: "vbcc products",
      },
    ],
    video: "https://cdn.webibee.com/Webibee/CS_Videos/vbcc.mp4",
    alt: "VBCC Website overview",
    about:
      "VBCC Instruments, part of a group of companies specializing in high-precision laboratory and industrial instruments, needed a revamped online presence to align with their brand's vision and marketing goals. They sought a modern, user-friendly design that could showcase their offerings while achieving high website performance metrics and seamless integration with their marketing and SEO teams.Our team at Webibee stepped in to redesign their website and provide technical expertise for their ongoing SEO strategy, including work on another affiliated website, VBCC Research.",
    OCLists: [
      {
        title: "Outdated Design",
        desc: "Their previous website lacked a modern, visually engaging design, affecting user trust and engagement.",
      },
      {
        title: "Low SEO Performance",
        desc: "The site struggled with organic visibility and slow load times.",
      },
      {
        title: "Team Integration",
        desc: "Ensuring smooth collaboration with their marketing and content teams was critical for success.",
      },
      {
        title: "Technical Customization",
        desc: "Tailor-made features specific to their niche were required, alongside long-term website scalability.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Enhanced User Experience",
        desc: "Designed a visually appealing, intuitive interface that reflects expertise and builds trust. Incorporated consistent branding and ensured user-friendly navigation for seamless product and service exploration.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "Improved Page Speed Scores",
        desc: "Implemented clean code practices and advanced optimizations to achieve high Google Page Speed scores. Built SEO-friendly content structures to support their marketing team's keyword strategies.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "Seamless Collaboration",
        desc: "Actively communicated with their in-house marketing and content teams to align the website's functionality with ongoing campaigns. Offered technical support to ensure smooth transitions during SEO implementations.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "Long-Term Solutions",
        desc: "Designed scalable infrastructure to support future updates and projects. Delivered detailed documentation and training for their internal team.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-5.png",
        title: "Broader Reach",
        desc: "With improved SEO performance, VBCC Instruments expanded its online visibility and attracted more organic traffic.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/CS%20-2.png",
        alt: "vbcc products",
      },
      {
        img: "https://cdn.webibee.com/Webibee/vbcc-1.png",
        alt: "vbcc home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/vbcc-2.png",
        alt: "vbcc products",
      },
    ],
    testimonialImg: "https://cdn.webibee.com/Webibee/vbcc-ceo.png",
    testimonialName: "Naveen V",
    testimonialPosition: "CEO, VBCC Instruments",
    testimonials:
      "Our group of companies faced a big challenge one time before engaging with Webibee, which was improving our online presence. In this light, we sought for some assistance in developing websites that were beautiful to look at and featured that were tailor-made for our requirements as well as technical help and a long-term commitment to cooperate with our SEO and content teams.Not only did <span className='tags2'>Webibee meet our expectations, but also surpassed them by far.</span><br/> They followed closely to the design guidelines we provided giving useful suggestions on how to improve the functionality of our site. For now, we have reached the point where these websites have an attractive look due to timely delivery of the project. This was facilitated by their integration into my team members. Also, it is worth mentioning that <span className='tags2'>they are knowledgeable about various aspects of online presence management.</span><br/> I highly recommend Prithvi together with his team at Webibee because they do very good work. To put it simply, they didn’t just develop websites; instead <span className='tags2'>they optimized them leading to extremely high scores in Google’s website optimization metrics.</span> On top of that, during the revision process, they always supported us until we were all satisfied with their work. I believe that Webibee is a reliable partner for current and future projects since they make me feel confident enough to tackle even bigger assignments going forward.",
  },
  {
    title: "Ensileta",
    href: "ensileta",
    mainBgImg: "/ensilatacasestudy.png",
    summary: "A Design Approval and Project Management System for Customers",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web | Mobile",
          "Front end development",
          "Full stack development",
          "Sass MVP",
          "Automation and Integration",
        ],
      },
      { title: "sector", list: "Interior Design" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "4 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Scale ( custom product )" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/ensileta-1.png",
        alt: "ensileta dashboard",
      },
      {
        img: "https://cdn.webibee.com/Webibee/ensileta-2.png",
        alt: "ensileta drawings",
      },
    ],
    // { video: "https://ik.imagekit.io/webibee/Webibee/sample.mp4?updatedAt=1735897295029", alt: "sample video" },
    about:
      "Ensileta Interiors, a leading interior design firm, needed a comprehensive solution to streamline their project management process and enhance client communication. They required a customer portal that simplified approval workflows, provided a professional tech-forward interface, and elevated their brand's perception.  Webibee partnered with Ensileta to create the Design Management Hub, a feature-rich platform tailored to their business needs, enabling efficient project management and client satisfaction.",
    OCLists: [
      {
        title: "Approval Bottlenecks",
        desc: "Managing multiple project approvals manually led to delays and miscommunication with clients.",
      },
      {
        title: "Lack of Centralized Communication",
        desc: "Designers, project managers, and clients lacked a single platform for sharing updates, feedback, and approvals.",
      },
      {
        title: "Brand Perception",
        desc: "Ensileta aimed to position itself as a tech-savvy brand with modern tools to match their innovative design work.",
      },
      {
        title: "Scalable Solution",
        desc: "The platform needed to support growth, allowing more clients and projects to be managed effectively.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Custom Approval System",
        desc: "Built a role-based access system to streamline the management of design mockups, quotes, and deliverable approvals, ensuring seamless project oversight.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "Client-Centric Dashboard",
        desc: "Implemented clean code practices and advanced optimizations to achieve high Google Page Speed scores. Built SEO-friendly content structures to support their marketing team's keyword strategies.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "Interactive Comment & Revision",
        desc: "Introduced a structured commenting system that allows clients to leave feedback directly on mockups, accelerating the revision process and improving communication.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "Branded User Experience",
        desc: "Incorporated Ensileta's branding to create a polished, professional look that reflects innovation and reinforces customer trust in the platform.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-ensileta-5.svg",
        title: "Scalable Integration & Training",
        desc: "Developed a scalable backend framework to manage multiple clients and projects, integrated it into existing workflows, and provided hands-on training for seamless adoption.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/ensileta-1.png",
        alt: "ensileta dashboard",
      },
      {
        img: "https://cdn.webibee.com/Webibee/ensileta-2.png",
        alt: "ensileta drawings",
      },
      {
        img: "https://cdn.webibee.com/Webibee/ensileta-3.png",
        alt: "ensileta drawing upload",
      },
    ],
  },
  {
    title: "Rasim Exports",
    href: "rasim",
    mainBgImg: "https://cdn.webibee.com/Webibee/rasim-bg.png",
    summary: "Premium Branding & Website Design for Rasim Exports",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web | Mobile",
          "Front end development",
          "Crm integration",
          "3rd party API integration",
        ],
      },
      { title: "sector", list: "Textile" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "3 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Grow (retainer work)" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/rasim-1.png",
        alt: "rasim home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/rasim-1.png",
        alt: "rasim home page",
      },
    ],
    video: "https://cdn.webibee.com/Webibee/CS_Videos/rasims.mp4",
    alt: "Rasim website overview",
    about:
      "Rasim Exports, a leading textile manufacturer, partnered with Webibee to redefine their brand identity and create a visually stunning online presence. With a major focus on showcasing their textile collections and impressing international buyers, especially for an Australian expo, we delivered a project that combined premium design, branding expertise, and multimedia production.This project went beyond just a website; it involved logo creation, brand image development, brochure design, product photography, and video production to ensure Rasim Exports stood out in a competitive market.",
    OCLists: [
      {
        title: "Lack of Cohesive Branding",
        desc: "Rasim Exports needed a professional and consistent logo and brand identity to compete in the global market.",
      },
      {
        title: "Need for High-Quality Visuals",
        desc: "The company required premium product images and videos to attract international buyers and showcase their offerings.",
      },
      {
        title: "Website Redesign",
        desc: "Their outdated website required a modern, user-friendly design to present their wide product range effectively.",
      },
      {
        title: "Expo Marketing Materials",
        desc: "They needed brochures and promotional materials to effectively present their collections at the Australian expo.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Stronger Brand Identity",
        desc: "A new logo and a refined brand image now position Rasim Exports as a premium and trustworthy manufacturer, enhancing their market credibility.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "Enhanced Visual Appeal",
        desc: "The professional drone footage, product photos, and videos provided high-quality visuals, making the brand more appealing at the Australian expo and online.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "User-Friendly Website",
        desc: "The newly designed website offers a clean, easy-to-navigate layout with detailed product pages, leading to a smoother and more engaging user experience for buyers.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "Successful Expo Promotion",
        desc: "The branded brochures and promotional videos helped attract attention at the Australian expo, strengthening Rasim Exports’ presence and generating new client inquiries.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-rasim-5.svg",
        title: "Seamless Product Updates",
        desc: "The dynamic content management system ensures the website stays up-to-date with the latest collections, providing buyers with timely and relevant product information.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/rasim-1.png",
        alt: "rasim home page",
      },
    ],
  },
  {
    title: "Daga & Daga",
    href: "daga",
    mainBgImg: "https://cdn.webibee.com/Webibee/daga-bg.png",
    summary: "Modern Web Design for Daga & Daga Law Firm",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web | Mobile",
          "Front end development",
          "Crm integration",
          "3rd party API integration",
        ],
      },
      { title: "sector", list: "Law firm" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "3 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Grow (retainer work)" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/daga-1.png",
        alt: "Daga home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/daga-1.png",
        alt: "Daga home page",
      },
    ],
    // { video: "https://ik.imagekit.io/webibee/Webibee/sample.mp4?updatedAt=1735897295029", alt: "sample video" },
    about:
      "Daga & Daga, a prestigious law firm, sought to modernize their digital presence and internal workflows. They had no prior website and relied on outdated methods for creating and managing documents. Webibee collaborated with their team to design a professional website, establish streamlined workflows, and implement cloud-based tools to transform their operations and enhance their online visibility.This comprehensive project, completed in just 4 weeks, empowered Daga & Daga with a minimal, modern digital identity and an efficient content management system.",
    OCLists: [
      {
        title: "No Digital Presence",
        desc: "The firm lacked a website, limiting online visibility and client acquisition opportunities.",
      },
      {
        title: "Outdated Identity",
        desc: "The firm’s logo and branding felt outdated, impacting their professional image.",
      },
      {
        title: "Manual Recruitment Process",
        desc: "Job applications were handled manually, creating inefficiencies and delays.",
      },
      {
        title: "No Automation",
        desc: "The absence of email automation meant slow follow-ups and missed opportunities.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Strong Online Presence",
        desc: "We designed a sleek, responsive website that established the firm's digital presence, improving visibility and credibility.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "Simplified Inquiries",
        desc: "Integrated WhatsApp chat for direct communication, increasing client engagement and reducing response times.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "Efficient Recruitment",
        desc: "Developed a career portal with automated resume submissions and email acknowledgments, streamlining the hiring process.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "Modern Branding",
        desc: "Recreated the firm’s logo and designed custom icons to enhance brand identity and professionalism.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-daga-5.svg",
        title: "Improved Operations",
        desc: "Set up cloud-based workflows and automated email systems, saving time and boosting productivity.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/daga-1.png",
        alt: "Daga home page",
      },
    ],
  },
  {
    title: "OneUS Travels",
    href: "oneus",
    mainBgImg: "https://cdn.webibee.com/Webibee/oneus-bg.png",
    summary: "Premium Travel-Themed Website for OneUS Travels",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web | Mobile",
          "Front end development",
          "Crm integration",
          "3rd party API integration",
        ],
      },
      { title: "sector", list: "Travels & Tour" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "3 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Grow (retainer work)" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/oneus-1.png",
        alt: "oneUs home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/oneus-1.png",
        alt: "oneUs home page",
      },
    ],
    video: "https://cdn.webibee.com/Webibee/CS_Videos/oneus.mp4",
    alt: "OneUs website overview",
    about:
      "OneUS Travels approached us to build a dynamic and visually appealing website that aligns with their travel industry branding. They required a snappy, user-friendly design with customized content, seamless navigation, and multimedia elements to enhance customer engagement. Additionally, we incorporated a customer portal and accommodated multiple tailored pages to meet their specific business needs.Our objective was to deliver a travel-themed website that not only looks premium but also provides an excellent user experience, complete with branded videos and interactive elements.",
    OCLists: [
      {
        title: "Distinct Travel Aesthetic",
        desc: "Designing a visually engaging yet professional travel-themed site that aligns with the brand’s identity.",
      },
      {
        title: "Content Creation & SEO",
        desc: "Crafting unique, SEO-optimized content to improve search visibility and resonate with travelers.",
      },
      {
        title: "Portal Integration",
        desc: "Embedding a secure and intuitive customer portal to simplify client interactions and manage services.",
      },
      {
        title: "Performance & Customization",
        desc: "Ensuring the site is fast, responsive, and capable of handling multiple custom pages for diverse services.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Premium Travel Design",
        desc: "Delivered a visually captivating and cohesive travel-themed website that reflects the brand's identity, attracting more visitors and enhancing credibility.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "SEO-Driven Content",
        desc: "Developed engaging, keyword-optimized content that boosted search rankings and increased organic traffic to service pages.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "Seamless Portal Access",
        desc: "Integrated a customer portal directly into the site navigation, streamlining bookings and improving the overall client experience.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "Dynamic Custom Pages",
        desc: "Created multiple tailored service pages, allowing OneUS Travels to highlight their offerings and expand their service catalog.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-oneus-5.svg",
        title: "Optimized Performance",
        desc: "Enhanced loading speeds and responsiveness across all devices, providing users with a seamless browsing experience that increased site engagement by 30%.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/oneus-1.png",
        alt: "oneUs home page",
      },
    ],
  },
  {
    title: "Lotus AI Real Estate",
    href: "lotus",
    mainBgImg: "https://cdn.webibee.com/Webibee/lotus-bg.png",
    summary:
      "Front-End Development and Data Analytics for Lotus AI Real Estate Listing Website",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web | Mobile",
          "Front end development",
          "Crm integration",
          "3rd party API integration",
        ],
      },
      { title: "sector", list: "Real Estate" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "3 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Grow (retainer work)" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/lotus-1.png",
        alt: "Lotus AI home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/lotus-1.png",
        alt: "Lotus AI home page",
      },
    ],
    // { video: "https://ik.imagekit.io/webibee/Webibee/sample.mp4?updatedAt=1735897295029", alt: "sample video" },
    about:
      "Webibee supported the Lotus AI Real Estate Listing website for four months, contributing to front-end development and the integration of advanced features. Our role included designing an intuitive UI, developing a web scraper for real-time property listings, and implementing data analytics on a map for a dynamic user experience. We worked collaboratively with another team, handling the integration of back-end systems, ensuring smooth data flow, and helping the site meet evolving needs. The goal was to provide users with a seamless, interactive platform for exploring real estate listings while maintaining high performance and ease of navigation.",
    OCLists: [
      {
        title: "Responsive UI Design",
        desc: "Designing a responsive and user-friendly interface for property listings that ensures seamless experiences on both desktop and mobile.",
      },
      {
        title: "Web Scraper Integration",
        desc: "Developing a custom web scraper to collect accurate, up-to-date real estate data from multiple sources.",
      },
      {
        title: "Interactive Data Analytics",
        desc: "Implementing map-based analytics to provide users with interactive property exploration and data visualization.",
      },
      {
        title: "Cross-Team Collaboration",
        desc: "Coordinating with back-end teams to ensure smooth integration and consistent user experience across the platform.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Polished UI Design",
        desc: "A sleek, modern interface that is both user-friendly and responsive, providing an easy browsing experience for property listings across all devices.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "Reliable Real-Time Listings",
        desc: "The custom web scraper ensures that property data remains accurate and up-to-date, enhancing the website’s reliability and trustworthiness.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "Engaging Data Map",
        desc: "Interactive map analytics allowed users to filter properties based on metrics, improving their search experience and providing rich, data-driven insights.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "Successful Project Milestones",
        desc: "We achieved key milestones, such as integrating the web scraper, building the analytics map, and optimizing performance, ensuring continuous project progress.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-lotus-5.svg",
        title: "Ongoing Development Support",
        desc: "Continuous front-end development support over four months ensured timely bug fixes, feature enhancements, and performance improvements, keeping the site up-to-date.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/lotus-1.png",
        alt: "Lotus AI home page",
      },
    ],
  },
  {
    title: "Lavender Salon Portal",
    href: "lavender",
    mainBgImg: "https://cdn.webibee.com/Webibee/lavender-bg.png",
    summary: "Front-End Development and Support for Lavender Salon Portal",
    table: [
      {
        title: "services",
        list: [
          "Technical Research",
          "UI/UX - Web | Mobile",
          "Front end development",
          "Crm integration",
          "3rd party API integration",
        ],
      },
      { title: "sector", list: "Real Estate" },
      { title: "Company Stage", list: "SME, Private" },
      { title: "Timeline", list: "3 months" },
      { title: "Year", list: "2024" },
      { title: "Project Type", list: "Grow (retainer work)" },
    ],
    slides: [
      {
        img: "https://cdn.webibee.com/Webibee/lavender-1.png",
        alt: "Lavender home page",
      },
      {
        img: "https://cdn.webibee.com/Webibee/lavender-1.png",
        alt: "Lavender home page",
      },
      // { video: "https://ik.imagekit.io/webibee/Webibee/sample.mp4?updatedAt=1735897295029", alt: "sample video" },
    ],
    about:
      "Lavender Salon Portal approached us to provide front-end development support during a few key sprints. Our role focused on implementing custom features, integrating backend APIs, and ensuring smooth user flows. We worked on refining the business logic in the front end, fixing critical production bugs, and offering expert consultation to improve overall functionality and user experience.Our aim was to deliver fast and reliable solutions that directly addressed the salon's business needs while maintaining a high-quality user experience.",
    OCLists: [
      {
        title: "Custom Calendar System",
        desc: "Designing and implementing a calendar for efficient salon appointment management.",
      },
      {
        title: "API Integration",
        desc: " Ensuring seamless communication between the front-end and back-end for booking and salon services.",
      },
      {
        title: "Complex Business Logic",
        desc: "Managing and optimizing intricate business logic for dynamic user operations.",
      },
      {
        title: "Bug Resolution Under Pressure",
        desc: "Identifying and fixing critical bugs swiftly to maintain portal functionality while adhering to tight deadlines.",
      },
    ],
    results: [
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-1.png",
        title: "Streamlined Booking",
        desc: "The custom calendar simplified appointment management with available slots and instant confirmations, improving the process for staff and clients.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-2.png",
        title: "Real-Time Sync",
        desc: "API integration ensured real-time updates, providing immediate confirmations and reducing delays, boosting reliability and satisfaction.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-3.png",
        title: "Stable Performance",
        desc: "Critical bugs were quickly fixed, ensuring reliability and minimizing downtime, leading to fewer disruptions and improved functionality.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-4.png",
        title: "On-Time Delivery",
        desc: "Features and fixes were delivered on schedule, keeping the project on track and meeting client expectations.",
      },
      {
        img: "https://cdn.webibee.com/Webibee/logos/CS-lavender-5.svg",
        title: "Enhanced UX",
        desc: "Front-end optimizations improved speed and responsiveness, leading to a more user-friendly experience and higher engagement.",
      },
    ],
    images: [
      {
        img: "https://cdn.webibee.com/Webibee/lavender-1.png",
        alt: "Lavender home page",
      },
    ],
  },
];

export const outPerforms = [
  "Code as a Creative Mindset",
  "AI & Intelligent Experiences",
  "Future-First Development",
  "Code as a Creative Mindset",
  "AI & Intelligent Experiences",
  "Future-First Development",
];

// Benefits

export const benefits = [
  {
    title: "Premium Design",
    para: "A well-designed website builds immediate trust, boosting engagement and conversions.",
  },
  {
    title: "Fast Loading",
    para: "Faster websites correlate with higher conversion rates, driving business success.",
  },
  {
    title: "All Device Optimized",
    para: "A well-designed website builds immediate trust, boosting engagement and conversions.",
  },
  {
    title: "Scalability",
    para: "Faster websites correlate with higher conversion rates, driving business success.",
  },
  {
    title: "Transparency",
    para: "A well-designed website builds immediate trust, boosting engagement and conversions.",
  },
  {
    title: "Post Delivery Support",
    para: "Faster websites correlate with higher conversion rates, driving business success.",
  },
];

// FAQ
export const FaqIndia = [
  {
    title: "How can we get started with Webibee?",
    content:
      "You can book a consulation slot via 'Get Expert Advice in 15mins' Button where we discuss your project requirements, scope and next steps to provide services for your business.",
  },
  {
    title: "How much does it cost?",
    content:
      "Our projects tend to start at Rs 65,000 which includes various services like branding, UX, graphic design, and more. Dont worry hosting and maintainence is on us! Additionaly you might have to purchase a domain incase of new websites",
  },
  {
    title: "What do Webibee specialise in?",
    content:
      "We are tech savvy with all the cutting edge tech and AI workflow, if you want to explore creative ideas in terms of design and functionality, we shine there.",
  },
  {
    title: "What industries do you work with?",
    content:
      "We work with Industrial , Real estate, Startups , Creative businessnes ",
  },
  {
    title: "What if Webibee services doesn't meet my expectations?",
    content:
      "We rarely face that but we'll understand your situation and got your back. We guarantee a Rs 25,000 refund from the advance within 2 weeks of cancelation including our work resources till that period.",
  },
  {
    title: "Do I own the IP and how will my privacy be protected?",
    content:
      "Whatever services we offer is totally owned by you and we have an NDA to make sure your business information is kept confidential",
  },
  // {
  //   title: "Who will create my website content?",
  //   content:
  //     "We will be reliant upon you to create your own websites content. We have a opt in to help you with content ",
  // },
  // {
  //   title: "How do your make the websites",
  //   content: `We use latest opensource javascript tools to build industry standard websites`,
  // },
];
export const FaqWestern = [
  {
    title: "How can we get started with Webibee?",
    content:
      "You can book a consulation slot via 'Get Expert Advice in 15mins' Button where we discuss your project requirements, scope and next steps to provide services for your business.",
  },
  {
    title: "How much does it cost?",
    content:
      "Our projects tend to start at 2500$ which includes various services like Branding, UX, Graphic design, Analytics, and more. Dont worry hosting and maintainence is on us! Additionaly you might have to purchase a domain incase of new websites",
  },
  {
    title: "What do Webibee specialise in?",
    content:
      "We are tech savvy with all the cutting edge tech and AI workflow, if you want to explore creative ideas in terms of design and functionality, we shine there.",
  },
  {
    title: "What industries do you work with?",
    content:
      "We work with Industrial , Real estate, Startups , Creative businessnes ",
  },
  {
    title: "What if Webibee services doesn't meet my expectations?",
    content:
      "We rarely face that but we'll understand your situation and got your back. We guarantee a 500$ refund from the advance within 2 weeks of cancelation including our work resources till that period.",
  },
  {
    title: "Do I own the IP and how will my privacy be protected?",
    content:
      "Whatever services we offer is totally owned by you and we have an NDA to make sure your business information is kept confidential",
  },
  // {
  //   title: "Who will create my website content?",
  //   content:
  //     "We will be reliant upon you to create your own websites content. We have a opt in to help you with content ",
  // },
  // {
  //   title: "How do your make the websites",
  //   content: `We use latest opensource javascript tools to build industry standard websites`,
  // },
];
// Contact Us
// export const services = [
//   { label: "New Business Website", value: "New Business Website" },
//   { label: "Website Revamp", value: "Website Revamp" },
//   // { label: "Google Ads", value: "Google Ads" },
//   // { label: "Instagram Ads	", value: "Instagram Ads" },
//   // { label: "E-commerce Store", value: "E-commerce Setup" },
//   {
//     label: "Custom software development",
//     value: "Custom software development",
//   },
//   { label: "Mobile development", value: "Mobile development" },

//   // { label: "Branding", value: "Branding" },

//   // {
//   //   label: "Search Engine Optimization (SEO)",
//   //   value: "Search Engine Optimization (SEO)",
//   // },
//   // { label: "Content Creation", value: "Content Creation" },
//   // { label: "Email Marketing", value: "Email Marketing" },
//   // { label: "Whatsapp Marketing", value: "Whatsapp Marketing" },
//   // { label: "UI UX", value: "UI UX" },
// ];

export const about = [
  { label: "Media 1", value: "Media 1" },
  { label: "Media 2", value: "Media 2" },
  { label: "Media 3", value: "Media 3" },
  { label: "Media 4", value: "Media 4" },
];

// WORKFLOW
export const workflow = [
  { para: "Research from our side" },
  { para: "Introductory call to understand your business needs" },
  { para: "Design phase where we finalise UI/UX" },
  { para: "Development with cutting edge tools" },
  { para: "Revisions" },
  { para: "QA testing" },
  { para: "Web vitals Optimization and deployment" },
];

// TEAM
export const team = [
  {
    name: "Prithvi",
    img: "/avatar-1.jpg",
    designation: "Founder/ Lead Developer",
    passion: "We don't just build websites, we build websites that SELLS",
  },
  {
    name: "Gokul",
    img: "/avatar-3.jpg",
    designation: "FullStack Developer",
    passion:
      "Great web design without functionality is like a sports car with no engine",
  },
];

// Services
export const ourservices = [
  {
    title: "Portfolio",
    desc: "Business and personal websites with a focus on high conversion",
  },
  {
    title: "Landing Page",
    desc: "High converting landing page development",
  },
  {
    title: "Shopify",
    desc: "Store setup to custom storefront theme development",
  },
  {
    title: "Plugin Development ",
    desc: "Custom apps for Bubble, Shopify marketplace ",
  },
  {
    title: "SEO Optimization",
    desc: "Web vitals and analytics setup",
  },
  {
    title: "UI/UX Design",
    desc: "Web designs as per your need",
  },
  {
    title: "3D Design integration",
    desc: "Add 3d models, animation to existing website",
  },
  {
    title: "CMS integration",
    desc: "Connect Wordpress, WIX or other systems to your website",
  },
  {
    title: "API integration",
    desc: "3rd party api's of any custom requirements ",
  },
  {
    title: "Feature Development",
    desc: "Solving your business requirements through code",
  },
];
//
// sample data

export const clip = [
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "img1.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "img1.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "img1.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
  {
    desc: "Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolores maiores cupiditat",
    img: "/article-mg.jpg",
  },
];

// Dynamic page data

export const aboutData = [
  {
    mainTitle: "Social Media",
    highlight: "Marketing",
    about:
      "We understand that social media is not just a platform; it’s a powerful tool to connect, engage, and build relationships with your audience. Our skilled social media marketing team is passionate about creating data-driven strategies that drive brand awareness, foster meaningful interactions, and generate measurable results.",
    img: "/sample-1.jpg",
    alt: "marketing",
  },
  {
    mainTitle: "Social Media",
    highlight: "Management",
    about:
      "We understand that social media is not just a platform; it’s a powerful tool to connect, engage, and build relationships with your audience. Our skilled social media marketing team is passionate about creating data-driven strategies that drive brand awareness, foster meaningful interactions, and generate measurable results.",
    img: "/sample-2.jpg",
    alt: "management",
  },
  {
    mainTitle: "Content",
    highlight: "Marketing",
    about:
      "Content is the cornerstone of digital marketing strategies. In an era where consumers are inundated with information, compelling and valuable content serves as the foundation for building brand awareness, driving engagement, and nurturing relationships with your audience. Content marketing involves the creation and distribution of relevant, informative, and entertaining content across various digital channels, including websites, blogs, social media platforms, email newsletters, and more.",
    img: "/sample-1.jpg",
    alt: "marketing",
  },
];

// dynamic places && category

// Valid cities array
export const VALID_CITIES = ["bangalore", "chennai", "usa"];

// City display names mapping
export const CITY_DISPLAY_NAMES = {
  bangalore: "Bangalore",
  chennai: "Chennai",
  usa: "USA",
};

// dynmic valid category

export const VALID_CATEGORY = [
  "seo",
  "web-design",
  "branding",
  "design",
  "wordpress",
  "shopify-apps",
  "fullstack",
  "ai",
  "ads",
  "ui-ux",
];

const SpanTag = ({ tag }: { tag: string }) => {
  return <span className="text-info">{tag}</span>;
};

export const dynamicContactDetails = [
  {
    category: "seo",
    ContactDetails: {
      title: (
        <>
          Boost Your Online Visibility with Expert{" "}
          <SpanTag tag="SEO Services" />
        </>
      ),
      desc: "Our SEO strategies help your business rank higher, attract the right audience, and drive consistent growth {{Country}}.",
      btn: "Start Ranking Today",
    },
    counterStatus: [
      {
        num: 2.7,
        suffix: "M",
        subheading: "Keyword Rankings",
        isDecimal: true,
      },
      {
        num: 250,
        suffix: "+",
        subheading: "Organic Traffic",
        isDecimal: false,
      },
      {
        num: 1000,
        suffix: "+",
        subheading: "Conversion Rates",
        isDecimal: false,
      },
      {
        num: 800,
        suffix: "+",
        subheading: "Local Visibility",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            Research & <SpanTag tag="Strategy" />
          </>
        ),
        desc: "We believe every successful SEO campaign begins with a strong foundation. Our team {{Country}} conducts in-depth keyword research, competitor analysis, and audience targeting to uncover opportunities that align with your business goals. This step ensures we focus on the right search terms and create a roadmap for long-term success.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            On-Page & Technical <SpanTag tag="SEO" />
          </>
        ),
        desc: "Optimizing your website goes beyond content—it’s about structure, performance, and accessibility. We refine your site’s on-page elements, such as meta tags, headings, and URLs, while addressing technical aspects like speed, mobile responsiveness, and crawlability. These improvements help search engines understand your website and deliver a seamless experience for users {{Country}}.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            Content & <SpanTag tag="Authority Building" />
          </>
        ),
        desc: "Content is the voice of your brand, and authority is what makes it trusted. Our SEO content strategies focus on creating keyword-rich, valuable blogs and landing pages while strengthening your site with internal links and high-quality backlinks. By building credibility and authority, your business {{Country}} earns higher rankings and long-term visibility.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            Monitoring & Continuous <SpanTag tag="Optimization" />
          </>
        ),
        desc: "SEO is not a one-time effort—it’s an ongoing process. We continuously track keyword rankings, traffic, and conversions, making data-driven adjustments to keep your site ahead of algorithm changes. From local SEO enhancements to regular reporting, our team ensures your business {{Country}} stays visible, relevant, and competitive.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "How long does it take to see SEO results {{Country}}?",
        desc: "SEO is a long-term strategy. While minor improvements can be seen within weeks, significant results usually take 3-6 months.",
      },
      {
        title:
          "Do you offer local SEO services for small businesses {{Country}}?",
        desc: "Yes! We specialize in optimizing for local searches to help small businesses rank in their area.",
      },
      {
        title: "What’s included in your SEO packages?",
        desc: "Our SEO includes keyword research, on-page optimization, technical fixes, content optimization, link building, local SEO, and monthly reporting.",
      },
      {
        title: "How do you measure SEO success?",
        desc: "We measure success by improvements in keyword rankings, organic traffic, lead conversions, and ROI for your business {{Country}}.",
      },
      {
        title: "Why is SEO better than paid ads?",
        desc: "Ads deliver quick but short-term results. SEO builds long-term visibility, credibility, and sustainable traffic without paying for every click.",
      },
    ],
  },
  {
    category: "web-design",
    ContactDetails: {
      title: (
        <>
          Create Stunning, <SpanTag tag="User-Friendly" /> Websites that Drive
          Results
        </>
      ),
      desc: "Our web design services combine creativity, usability, and strategy to deliver websites that look great and perform even better {{Country}}.",
      btn: "Book a Call",
    },
    counterStatus: [
      {
        num: 3,
        suffix: "secs",
        subheading: "Faster Load Times",
        isDecimal: false,
      },
      {
        num: 40,
        suffix: "%",
        subheading: "Improved Conversions",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "User Engagement",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Mobile Responsiveness",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="Custom" /> Website Design
          </>
        ),
        desc: "We understand that your website is your digital storefront. Our custom website designs {{Country}} are crafted to reflect your brand identity, capture attention, and guide users toward meaningful actions.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Responsive" /> Web Design
          </>
        ),
        desc: "Your audience is everywhere—desktop, tablet, and mobile. We create responsive websites that adapt flawlessly to all screen sizes, ensuring every visitor {{Country}} has a seamless browsing experience.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="E-Commerce" /> Web Design
          </>
        ),
        desc: "E-commerce is more than a shopping cart; it’s an experience. We design user-friendly, secure, and conversion-focused online stores {{Country}} that make shopping simple and enjoyable.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Landing Page" /> Design
          </>
        ),
        desc: "Whether for ads or campaigns, a landing page should convert. We design high-performing landing pages {{Country}} optimized to capture leads and maximize ROI.",
        img: "/sample-1.jpg",
      },
    ],
    faq: [
      {
        title: "How long does it take to design a website {{Country}}?",
        desc: "Depending on the project size, it can take anywhere from 3-8 weeks, including research, design, development, and testing.",
      },
      {
        title: "Will my website be mobile-friendly?",
        desc: "Absolutely. All our web designs are fully responsive, ensuring compatibility across all devices.",
      },
      {
        title: "Do you also handle website development or just design?",
        desc: "Yes, we handle both. Our team {{Country}} designs and develops websites to be visually stunning and technically sound.",
      },
      {
        title: "Can you redesign my existing website?",
        desc: "Definitely. We offer website redesign services to give your current site a modern, user-friendly, and performance-driven makeover.",
      },
      {
        title: "Will I be able to update my website after it’s built?",
        desc: "Yes, we provide CMS-based solutions like WordPress and Shopify, so you can easily update content without needing technical skills.",
      },
    ],
  },
  {
    category: "branding",
    ContactDetails: {
      title: (
        <>
          Build a <SpanTag tag="Brand Identity" /> That Stands Out
        </>
      ),
      desc: "Your brand is more than a logo—it’s the story, values, and personality that connect you with your audience {{Country}}. We craft branding solutions that make you unforgettable.",
      btn: "Build My Brand",
    },
    counterStatus: [
      {
        num: 90,
        suffix: "%",
        subheading: "Brand Recognition",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "X",
        subheading: "Customer Loyalty",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "%",
        subheading: "Market Differentiation",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Engagement Growth",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            Logo Design & <SpanTag tag="Visual Identity" />
          </>
        ),
        desc: "We design logos and brand visuals that reflect your company’s personality and values, creating a memorable first impression for your audience {{Country}}.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            Brand <SpanTag tag="Strategy" />
          </>
        ),
        desc: "A brand is more than visuals—it’s direction. We develop a clear brand strategy {{Country}} to define your voice, values, and positioning in the market.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            Brand <SpanTag tag="Guidelines" />
          </>
        ),
        desc: "Consistency builds trust. We create comprehensive brand guidelines that cover fonts, colors, tone, and visuals to ensure your brand looks and feels the same everywhere.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Rebranding" />
          </>
        ),
        desc: "Markets evolve, and so should brands. Whether refreshing your logo or redefining your message, we help businesses {{Country}} successfully reposition and reintroduce themselves.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "Why is branding important for my business {{Country}}?",
        desc: "Branding shapes how people see your business. It builds recognition, trust, and loyalty—making your company stand out {{Country}} competitive market.",
      },
      {
        title: "How long does the branding process take?",
        desc: "Depending on the scope (logo, guidelines, full strategy), it can take 3-6 weeks.",
      },
      {
        title: "Can you redesign my existing logo or brand identity?",
        desc: "Yes! We specialize in rebranding projects to modernize and reposition existing businesses {{Country}}.",
      },
      {
        title: " Do you provide brand guidelines?",
        desc: "Absolutely. Every branding project includes a style guide to maintain visual and messaging consistency across all platforms.",
      },
      {
        title: "What industries do you work with?",
        desc: "We work with startups, SMEs, and enterprises across multiple industries {{Country}}, tailoring branding to each sector’s unique needs.",
      },
    ],
  },
  {
    category: "design",
    ContactDetails: {
      title: (
        <>
          <SpanTag tag="Creative" /> Graphic Design Services That Speak Your
          Brand
        </>
      ),
      desc: "From brochures to social media creatives, our designs capture attention, communicate clearly, and leave a lasting impression {{Country}}.",
      btn: "Book a call",
    },
    counterStatus: [
      {
        num: 90,
        suffix: "%",
        subheading: "Higher audience recall",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "%",
        subheading: "More engagement",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "Better conversions",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Customers trust",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            Poster & Flyer Design <SpanTag tag="" />
          </>
        ),
        desc: "We create eye-catching posters and flyers {{Country}} designed to grab attention and communicate your message instantly.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            Brochure & PDF Design <SpanTag tag="" />
          </>
        ),
        desc: "Our professional brochures and PDFs make it easy to present your business, products, or services in a polished, branded format.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            Social Media Creatives <SpanTag tag="" />
          </>
        ),
        desc: "Stand out online with scroll-stopping social media graphics that increase engagement and strengthen your brand presence {{Country}}.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            Corporate & Marketing Collateral <SpanTag tag="" />
          </>
        ),
        desc: "From business cards to pitch decks, we design professional marketing materials that reflect your brand identity and values.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "What kind of graphic design services do you offer {{Country}}?",
        desc: "We design posters, brochures, social media graphics, business cards, PDFs, and other marketing materials.",
      },
      {
        title: "Can you design content for social media campaigns?",
        desc: "Yes! We create platform-specific designs (Instagram, LinkedIn, Facebook, etc.) optimized for engagement {{Country}}.",
      },
      {
        title: "Will the designs match my brand identity?",
        desc: "Absolutely. We follow your brand guidelines (colors, fonts, tone) or create new ones if needed.",
      },
      {
        title: "Do you provide editable design files?",
        desc: "Yes, upon request we provide editable files (AI, PSD, or source formats) so you can update them later.",
      },
      {
        title: "How quickly can you deliver designs?",
        desc: "Timelines vary by project, but most social media creatives and posters can be delivered within 2-3 business days {{Country}}.",
      },
    ],
  },
  {
    category: "wordpress",
    ContactDetails: {
      title: (
        <>
          <SpanTag tag="Custom WordPress Solutions" /> Built for Growth
        </>
      ),
      desc: "We design, develop, and optimize WordPress websites that are fast, secure, and easy to manage—tailored to your business needs {{Country}}.",
      btn: "Build with WordPress",
    },
    counterStatus: [
      {
        num: 43,
        suffix: "%",
        subheading: "WordPress Websites Globally",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "%",
        subheading: "Average load time",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "Reliability",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Content updates",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="Custom" /> WordPress Development
          </>
        ),
        desc: "We build fully customized WordPress websites {{Country}}, designed to fit your business goals and branding.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Theme Design" /> & Customization
          </>
        ),
        desc: "From scratch designs to tailoring existing themes, we create user-friendly layouts that stand out.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Plugin" /> Integration
          </>
        ),
        desc: "Our team integrates plugins to extend functionality and improve your site’s performance.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            WordPress <SpanTag tag="Maintenance & Support" />
          </>
        ),
        desc: "We provide regular updates, security monitoring, and performance optimization to keep your site running smoothly.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "Why should I choose WordPress for my website {{Country}}?",
        desc: "WordPress is flexible, scalable, and easy to manage, making it the most popular CMS for businesses worldwide.",
      },
      {
        title: "Can you customize themes to match my brand?",
        desc: "Yes! We create fully customized designs that reflect your brand identity and improve user experience.",
      },
      {
        title: "Do you provide hosting and security setup?",
        desc: "Absolutely. We set up secure, reliable WordPress hosting with 99.9% uptime.",
      },
      {
        title: "Will I be able to update my website easily?",
        desc: "Yes. WordPress allows you to manage content without technical expertise, and we’ll guide you with training.",
      },
      {
        title: " Do you offer ongoing support and maintenance?",
        desc: "Yes, we provide packages for regular updates, backups, bug fixes, and performance optimization {{Country}}.",
      },
    ],
  },
  {
    category: "shopify-apps",
    ContactDetails: {
      title: (
        <>
          <SpanTag tag="Custom Shopify apps" /> that Scale You Business.
        </>
      ),
      desc: "Empowering your store with tailored apps that enhance functionality, improve user experience, and drive growth — no matter where your customers are shopping from.",
      btn: "Build My App",
    },
    counterStatus: [
      {
        num: 43,
        suffix: "%",
        subheading: "Custom Shopify apps",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "%",
        subheading: "Client satisfaction rate",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "Average store efficiency boost",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Industries served",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="Custom" /> App Development
          </>
        ),
        desc: "We specialize in building apps tailored to your store’s unique needs, whether it’s streamlining inventory, managing subscriptions, or enhancing checkout. Our solutions are scalable, reliable, and built to grow with your business.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            App <SpanTag tag="Integration" />
          </>
        ),
        desc: "Seamlessly connect your Shopify store with third-party tools like CRMs, payment gateways, and shipping providers. We ensure smooth integration so you can automate processes and provide a hassle-free customer experience.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            App <SpanTag tag="Optimization & Maintenance" />
          </>
        ),
        desc: "Your app’s performance directly impacts your sales. Our team continuously monitors, optimizes, and updates your Shopify apps to ensure they run smoothly, adapt to platform changes, and stay ahead of competitors.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            Migration & <SpanTag tag="Upgrade" /> Services
          </>
        ),
        desc: "Moving from a generic app to a custom-built solution? We handle smooth migrations and upgrades, making sure your data, features, and user experience remain intact while your store gets more powerful and efficient.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title:
          "Why should I build a custom Shopify app instead of using existing ones?",
        desc: "While pre-built apps are useful, they often don’t cover every business need. Custom apps are designed specifically for your store, giving you unique features and better performance.",
      },
      {
        title:
          "Will my custom Shopify app work globally (e.g., India, USA, UK)?",
        desc: "Yes, we build apps that adapt to your business location. Your app can be optimized for country-specific taxes, currencies, shipping methods, and customer experiences.",
      },
      {
        title: "Can you integrate my app with other business tools?",
        desc: "Absolutely. We ensure your Shopify app connects seamlessly with tools like CRMs, email marketing platforms, and logistics solutions for maximum efficiency.",
      },
      {
        title: "Do you provide ongoing support after launch?",
        desc: "Yes, we offer continuous support, maintenance, and upgrades to keep your app running flawlessly as your store evolves.",
      },
      {
        title: "How long does it take to develop a custom Shopify app?",
        desc: "Timelines vary depending on complexity, but most custom apps are delivered within 4-8 weeks. We’ll provide a clear roadmap before starting development.",
      },
    ],
  },
  {
    category: "fullstack",
    ContactDetails: {
      title: (
        <>
          End-to-End Full Stack Development for <SpanTag tag="Scalable" />{" "}
          Digital Solutions
        </>
      ),
      desc: "From crafting seamless frontends to building powerful backends, we deliver complete full stack solutions tailored for businesses {{Country}}. Whether you need a dynamic web app, enterprise platform, or custom-built software, our full stack expertise ensures speed, performance, and reliability.",
      btn: "Book a Call",
    },
    counterStatus: [
      {
        num: 43,
        suffix: "%",
        subheading: "Projects Delivered",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "%",
        subheading: "Client satisfaction rate",
        isDecimal: false,
      },
      {
        num: 24,
        suffix: "/7",
        subheading: "Technical support",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Industries served",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="Frontend" /> Development
          </>
        ),
        desc: "We create user-friendly, responsive, and visually appealing interfaces that engage your audience. Using the latest frameworks like React, Angular, or Vue.js, we ensure smooth navigation, fast loading times, and an intuitive design experience tailored to your business needs.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Backend" /> Development
          </>
        ),
        desc: "The backbone of your application is built with secure and scalable server-side solutions. From APIs to database management, our backend development ensures your platform runs smoothly, handling data and processes without compromising on performance or security.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Database" /> Design & Management
          </>
        ),
        desc: "Efficient data handling is key to any successful application. We design and manage databases that are optimized for speed, accuracy, and scalability. Whether it’s SQL or NoSQL, we choose the right database solution to support your growing business requirements.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="API" /> Development & Integration
          </>
        ),
        desc: "We connect your application with external services and tools to enhance functionality. Our API development and integration services ensure seamless communication between systems—whether it’s payment gateways, CRMs, or third-party software.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Maintenance" /> & Support
          </>
        ),
        desc: "Technology evolves, and so should your application. We provide continuous monitoring, updates, bug fixes, and performance optimizations to keep your full-stack solution running at its best—long after the launch.",
        img: "/sample-1.jpg",
      },
    ],
    faq: [
      {
        title: "What is full stack development?",
        desc: " Full stack development covers both frontend (user-facing) and backend (server-side) development, ensuring end-to-end functionality of a website or application.",
      },
      {
        title:
          "Why should I choose a full stack developer instead of separate frontend and backend teams?",
        desc: "Full stack developers streamline communication, reduce costs, and accelerate development by managing the complete project flow.",
      },
      {
        title: "Which technologies do you use for full stack projects?",
        desc: "We use a modern tech stack including React, Angular, Node.js, Express, Django, Laravel, MySQL, and MongoDB, based on your project needs.",
      },
      {
        title: "Can you scale my project as my business grows?",
        desc: "Absolutely. We build scalable and flexible full stack applications that evolve with your business growth.",
      },
    ],
  },
  {
    category: "ai",
    ContactDetails: {
      title: (
        <>
          <SpanTag tag="AI Solutions" /> Tailored for Businesses
        </>
      ),
      desc: "From automation to advanced data insights, our AI development services empower businesses {{Country}} to innovate, optimize operations, and stay ahead of the competition.",
      btn: "Get Started with AI",
    },
    counterStatus: [
      {
        num: 43,
        suffix: "%",
        subheading: "Improved efficiency",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "%",
        subheading: "Reduction in manual tasks",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "Faster decision-making",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Customer satisfaction improved",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="AI-" /> Powered Automation
          </>
        ),
        desc: "Automate repetitive and time-consuming tasks with AI-driven workflows. From chatbots to process automation, we help businesses {{Country}} save time and focus on growth.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Machine Learning" /> Solutions
          </>
        ),
        desc: "Leverage predictive models and smart algorithms to analyze data, forecast trends, and make data-driven decisions that keep your business competitive.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            Natural Language Processing <SpanTag tag="(NLP)" />
          </>
        ),
        desc: "Build smarter systems that understand and respond to human language—perfect for chatbots, voice assistants, and customer engagement platforms.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Computer Vision" /> Applications
          </>
        ),
        desc: "Enable your systems to interpret and process visual data through AI-powered image recognition, video analysis, and quality checks—tailored to industry-specific needs.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "How can AI benefit my business {{Country}}?",
        desc: "AI helps automate tasks, improve efficiency, reduce costs, and enhance customer experience, allowing your business to grow smarter.",
      },
      {
        title: "Do I need a lot of data to implement AI?",
        desc: "Not always. Our AI solutions can start small and scale as your data grows, ensuring flexibility.",
      },
      {
        title: "Is AI only for large enterprises?",
        desc: "No, businesses of all sizes in [Country] can leverage AI. We customize solutions based on your industry and business needs.",
      },
      {
        title: "How long does it take to implement AI solutions?",
        desc: "Implementation time depends on the complexity of your project, but we aim for efficient deployment with measurable results.",
      },
    ],
  },
  {
    category: "ads",
    ContactDetails: {
      title: (
        <>
          Drive Measurable Results with <SpanTag tag="Performance-Driven Ads" />
        </>
      ),
      desc: "From Google to social platforms, we create ad campaigns that don’t just get clicks—they bring real customers to your business.",
      btn: "Launch My Campaign",
    },
    counterStatus: [
      {
        num: 43,
        suffix: "%",
        subheading: "Improved efficiency",
        isDecimal: false,
      },
      {
        num: 30,
        suffix: "%",
        subheading: "Impressions delivered",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "Advertising channels",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Average cost saved",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="Google" /> Ads
          </>
        ),
        desc: "Be visible exactly when your customers are searching. We set up and optimize Google Search, Display, and Shopping campaigns to capture high-intent leads at the right moment.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Social Media" /> Ads
          </>
        ),
        desc: "Reach, engage, and convert across Facebook, Instagram and LinkedIn. We craft creatives and targeting strategies that resonate with your audience while maximizing ROI.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            Retargeting & Remarketing <SpanTag tag="" />
          </>
        ),
        desc: "Don’t let potential customers slip away. With retargeting campaigns, we remind visitors of your brand and bring them back until they convert.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="YouTube & Video" /> Ads
          </>
        ),
        desc: "Tell your story through video. We create YouTube and OTT ads that engage viewers, increase brand recall, and convert attention into action.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "Which platforms do you run ads on?",
        desc: "We run ads across Google, Meta (Facebook/Instagram), LinkedIn, TikTok, YouTube, and more—based on where your target audience is most active.",
      },
      {
        title: "How do you measure success?",
        desc: "We track KPIs such as CTR, conversions, cost per acquisition, and ROI to ensure every ad dollar works harder for you.",
      },
      {
        title: "What budget do I need to start?",
        desc: "Budgets are flexible. We typically recommend starting with at least $500-$1000 monthly for testing and scaling gradually.",
      },
      {
        title: "Do you also handle ad creatives?",
        desc: "Yes! From copywriting to design and video production, we provide complete creative support for campaigns.",
      },
    ],
  },
  {
    category: "ui-ux",
    ContactDetails: {
      title: (
        <>
          Crafting <SpanTag tag="User Experiences" />, Built to Last
        </>
      ),
      desc: "We craft intuitive, user-friendly, and visually appealing digital experiences. Our UI/UX design services blend creativity with strategy to ensure your website, app, or product not only looks great but also performs seamlessly.",
      btn: "Book a Call",
    },
    counterStatus: [
      {
        num: 43,
        suffix: "%",
        subheading: "Interfaces Designed",
        isDecimal: false,
      },
      {
        num: 3,
        suffix: "X",
        subheading: "Better Engagement",
        isDecimal: false,
      },
      {
        num: 2,
        suffix: "X",
        subheading: "Higher Conversions",
        isDecimal: false,
      },
      {
        num: 100,
        suffix: "%",
        subheading: "Client Satisfaction Rate",
        isDecimal: false,
      },
    ],
    aboutSection: [
      {
        title: (
          <>
            <SpanTag tag="User Research" /> & Wireframing
          </>
        ),
        desc: "We start by understanding your users—their needs, pain points, and goals. Through user research and wireframes, we map out the flow and structure to ensure every interaction is smooth and purposeful.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="UI Design" /> & Prototyping
          </>
        ),
        desc: "From typography to color palettes, our UI design process focuses on creating pixel-perfect interfaces. With clickable prototypes, you can visualize the product experience before development.",
        img: "/sample-2.jpg",
      },
      {
        title: (
          <>
            <SpanTag tag="Iterations" />
          </>
        ),
        desc: "Continuous iterations ensure that the design is user-centric and drives results.",
        img: "/sample-1.jpg",
      },
      {
        title: (
          <>
            Design System & <SpanTag tag="Branding" />
          </>
        ),
        desc: "We create scalable design systems for consistency across your digital products while aligning with your brand’s voice, identity, and guidelines.",
        img: "/sample-2.jpg",
      },
    ],
    faq: [
      {
        title: "Why is UI/UX important for my business?",
        desc: "A well-designed user experience improves engagement, reduces drop-offs, and builds trust—directly impacting conversions and customer loyalty.",
      },
      {
        title: "Do you only design websites?",
        desc: "No, we design websites, mobile apps, dashboards, and even enterprise solutions that need intuitive interfaces.",
      },
      {
        title: "How do you ensure designs match our brand identity?",
        desc: "We analyze your brand elements and integrate them into the design system—ensuring every visual aligns with your brand’s personality.",
      },
      {
        title: "Can you redesign my existing website or app?",
        desc: "Absolutely! We specialize in redesigning outdated interfaces into modern, conversion-driven digital products.",
      },
    ],
  },
];

// lead generation engine page data

export const LGEMarketingNeeds = [
  {
    title: "One Partner, Zero Headache",
    description: "No need to hire 4-5 different agencies.",
  },
  {
    title: "SME-Friendly Pricing",
    description: "Affordable and effective services for your needs.",
  },
  {
    title: "Future-Ready",
    description: "We bring AI + automation to simplify your business.",
  },
  {
    title: "Scalable",
    description: "Start small, grow as your business grows.",
  },
];

export const LGEFaqs = [
  {
    title: " Do I need to spend a big budget on ads?",
    desc: "Not at all. We optimize for SMEs, so you can start lean and scale as results come in.",
  },
  {
    title: "How quickly can I see leads?",
    desc: "Most clients start seeing results within 2-4 weeks.",
  },
  {
    title: "Can you integrate with my existing CRM?",
    desc: "Yes, we connect with HubSpot, Zoho, Salesforce, and more.",
  },
  {
    title: "Is this for western businesses only?",
    desc: "No, we support SMEs globally with localized pricing.",
  },
  {
    title: "I’m not very tech-savvy. Can I still use this?",
    desc: "Absolutely. We handle the tech, design, and automation — you just focus on running your business.",
  },
];

export const LGEServices = [
  {
    icon: <FaChartArea className="text-info text-3xl" />,
    title: "Business Development & Consulting",
    summaryList: [
      "Growth strategies tailored for SMEs",
      "Sales enablement playbooks",
      "Consulting on replacing outdated systems",
    ],
  },
  {
    icon: <RiInstagramFill className="text-info text-3xl" />,
    title: "Content & Media",
    summaryList: [
      "Copywriting & AI content creation",
      "Blog posts, SEO content, email campaigns",
      "Video editing & short-form reels",
    ],
  },
  {
    icon: <RiGlobalFill className="text-info text-3xl" />,
    title: "Web & Technology",
    summaryList: [
      "Website design & development",
      "API integrations (payments, CRMs, ERPs)",
      "AI-driven workflows & automation",
    ],
  },
  {
    icon: <HiSpeakerphone className="text-info text-3xl" />,
    title: "Marketing & Tools",
    summaryList: [
      "Marketing tool setup (CRM, email, chatbots)",
      "Campaign automation & tracking",
      "Lead generation systems that actually work",
    ],
  },
  {
    icon: <TbTools className="text-info text-3xl" />,
    title: "Creatives & Design",
    summaryList: [
      "Posters, social media creatives, brochures",
      "AI-powered content & design",
      "Brand identity & visual storytelling",
    ],
  },
  {
    icon: <MdMonitorHeart className="text-info text-3xl" />,
    title: "Monitoring & Reports",
    summaryList: [
      "Real-time dashboards",
      "Performance analysis & ROI tracking",
    ],
  },
];
