import React, { useEffect, useMemo, useState } from "react";
import image1 from "../../../assets/images/image1.png";
import { motion, AnimatePresence } from "framer-motion";

import cdm from "../../../assets/images/services/cdm.png";
import os from "../../../assets/images/services/os.png";
import oso from "../../../assets/images/services/oso.jpg";
import pnms from "../../../assets/images/services/pnms.png";
import trc from "../../../assets/images/services/trc.png";
import eer from "../../../assets/images/services/eer.png";
import eer1 from "../../../assets/images/services/eer1.png";
import pharmacy from "../../../assets/images/services/pharmacy.jpg";
import AppServicesBG from "../../../assets/images/AppServicesBG.png";

import CTS from "../../../assets/images/CTS.png";

import IP from "../../../assets/images/IP.png";

import IT from "../../../assets/images/IT.png";
import chevron from "../../../assets/images/mobileview/chevronleft.png";

import { navigate } from "gatsby";
const IT_infra = [
  {
    key: "Network Management",
    name: "Network Management",
    content:
      "We specialize in designing and deploying secure and scalable network architectures tailored to business requirements. Our team of experts will assess your needs, plan the network infrastructure, and implement the solution to ensure seamless connectivity and reliable performance.",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "ITServerManagement",
    name: "IT Server Management",
    content:
      "Our server management services cover the complete lifecycle of your servers, from installation and configuration to ongoing maintenance and support. We monitor server performance, apply necessary updates and patches, and provide proactive troubleshooting to minimize downtime and ensure optimal server performance.",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "VirtualizationSolutions",
    name: "Virtualization Solutions",
    content:
      "As cloud computing continues to revolutionize the IT landscape, we offer a range of cloud solutions to help businesses leverage the power of the cloud. Whether you need assistance with cloud migration, infrastructure as a service (IaaS), platform as a service (PaaS), or software as a service (SaaS), Cloud Email Migration & Management for Microsoft 365 & Other Providers, Cloud Email Security, Cloud Data Backups",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "ITSecurityManagement",
    name: "IT Security Management",
    content:
      "Protecting business from cyber threats is critical in today's digital age. Our IT security services include vulnerability assessments, penetration testing, firewall management, intrusion detection, and incident response. We work closely with you to develop a robust security strategy and implement the necessary safeguards to safeguard your sensitive data and ensure regulatory compliance",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "RemoteInfrastructureManagement(RIM)Services",
    name: "Remote Infrastructure Management (RIM) Services",
    content:
      "We support the remote management of IT infrastructure Services for all our Internal & External clients. Our Remote Infrastructure Management (RIM) solutions ensure a lower risk of IT failure. We also enable a low up-front investment and reduced operational costs.",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "DatabaseManagement",
    name: "Database Management",
    content: (
      <p>
        Our Database Services ensure Client databases are protected and
        monitored by establishing backup and recovery procedures, providing a
        secure database environment, and monitoring database performance.
        <br />• Initial database software installation, including configuration
        and verification as required. <br />• Performance of daily or weekly
        backups to disk, as requested by Client.
        <br /> • Management and monitoring of disk space. <br />• Database
        restoration. <br />
      </p>
    ),
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "ExpertiseandExperience",
    name: "Expertise and Experience ",
    content:
      "Our team comprises highly skilled professionals with extensive experience in managing complex IT infrastructures. We stay up to date with the latest industry trends and best practices to deliver cutting-edge solutions that meet client specific needs.",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
  {
    key: "Cost-EffectiveSolutions",
    name: "Cost-Effective Solutions",
    content:
      "We strive to deliver cost-effective solutions without compromising on quality. By leveraging our expertise and industry partnerships, we can optimize client IT infrastructure, streamline processes, and identify cost-saving opportunities, ultimately improving your return on investment.",
    Image: <img src={image1} width={231} height={86} alt="" />

  },
];
const ContentArray = [
  {
    key: "ApplicationServices",
    name: "Application Services",
    content:
      "ParadigmIT under our Technology solutions line of services, provides custom application development and maintenance services to our global clients, applying industry standard delivery models. We build application support teams that work according to the project specific processes and SLAs with clear continuous improvement targets. As implementation partners, we have strong collaborations with some of the IT product companies that provide best-of-the-breed business solutions to their clients in various industry domains.",
    Image: AppServicesBG,
    children: [
      {
        key: "PNMS",
        name: " Application services",
        content:
          " Pharmacy Network Management System is an application designed by ParadigmIT to manage the contracting and credentialing of all pharmacies for our client’s business undertakings. It is an application that is best in class designed to be used internally by Pharmacy Network team and externally by pharmacies to directly update contracts and credentials.The solution will allow for growth, automation, and full network management and future integrations. Salient features of this application include, Credentials, Audits, Plans and Networks, Complaints/Grievances and Corrective action Plan (CAP), Integrations with Claims processing systems and integrate with 3rd Party Credentials validation service providers.",
        Image: (
          <img src={pnms} width={231} height={86} alt="" />

        ),
      },
      // {
      //   key: "AMS",
      //   name: " Maintenance Services",
      //   content:
      //     " ParadigmIT client engagement model not only ensures that relevant industry experienced professionals are deployed to handle client defined scope of services but also, helps the clients in improving current processes by bringing in industry best practices. Our embedded teams have been successfully supporting the solutions of our clients in niche areas and continually enhancing those solutions to be abreast with the technological changes.",
      //   Image: (
      //     <img src={ams} width={231} height={86} alt=" Image  Loading.." />
      //   ),
      // },
      {
        key: "TRC",
        name: " Integration services ",
        content:
          " Thingworx retail connector (TRC) is a product built by ParadigmIT’s group company in partnership with PTC ©. The main goal of this product is to make FlexPLM exchange/streamline data with wide variety of the systems like other PLMs’, ERP systems, SAP systems. ParadigmIT as an implementation partner for PTC ©, has successfully worked with several clients in Retail/Manufacturing domain to customize/implement TRC to integrate their material/supplier/other product relevant data.",
        Image: (
          <img src={trc} width={231} height={86} alt="" />
        ),
      },
    ],
  },
  // {
  //   key: "E-Gov",
  //   name: "E-Governance",
  //   content:
  //     "Our E-Governance practice under Govt BU plays a crucial role in the implementation of various government services linked with citizens (G2C), businesses (G2B), employees (G2E) and within the government department, state/ central ministries (G2G). These services help government to reach out to citizens for implementation of various schemes and facilitate and benefits vast population of the Country by utilizing them.",
  //   Image: EG,
  // },
  {
    key: "ClinicalTrialServices",
    name: "Clinical Trial Services",
    content:
      "Our Solution oriented approach is the strength till date that built our reputation as a Life Science Technology partner with our customers. We listen to our customers to understand the pain points in day-to-day tasks consuming their valuable resource pool. Our team works out of the framework to nullify or reduce the manual efforts by the valued resources to a greater extent. On the other hand, the Skill/knowledge can be utilized on more value-added tasks in saving patients’ lives.",
    Image: CTS,
    children: [
      {
        key: "about",
        name: " About Our Service ",
        content:
          "Utilizing a host of clinical research applications, ParadigmIT offers an extensive collection of services for pharmaceutical, biotech, medical device, and life science companies. We provide customized, end-to-end clinical data management services as per the client’s need. ParadigmIT team consists of functional, technical and industry experts who can successfully assist pharma and life science companies in navigating the complexity of the clinical trial lifecycle. This expert consulting can be leveraged to identify the most suitable and most cost effective clinical operational and clinical data management technologies from the market.",
        Image: <img src={os} width={231} height={86} alt="" />,
      },
      {
        key: "ServiceOfferings",
        name: "Our Service Offerings",
        content: (
          <p className="">
            ParadigmIT has assessed multiple systems and understands the
            best-in-class applications/tools for your clinical trials. We
            confidently offer our clients the right technology solution
            according to the trial design requirements.
            <br /> Our focus is to provide:
            <br />
            1. Technology enabled tools to speed up the trial start-up process.
            <br />
            2. Standardized eCRF development ready to map into respective SDTM
            domains.
            <br />
            3. Unambiguous and quality data from sites through well designed
            eCRFs.
            <br /> 4. Timely receipt of external vendor/third party data.
            <br /> 5. Frequent review of safety and protocol end points data via
            BI tools.
            <br /> 6. Insight to clinical operations and CDM teams on
            anticipated risks.
            <br /> 7. Custom solutions to handle the live integrated data of
            eCOA/ePRO.
          </p>
        ),
        Image: (
          <img src={oso} width={231} height={86} alt="" />
        ),
      },
      {
        key: "QualityControl",
        name: "Quality Control",
        content: (
          <p>
            1. Data Validation and documentation.
            <br />
            2. Pre & Post Platform upgrade Validation.
            <br />
            3. Audits for Test data validation.
          </p>
        ),
        Image: (
          <img src={eer1} width={231} height={86} alt="" />
        ),
      },
      {
        key: "CDM",
        name: "Clinical Data Management (CDM)",
        content: (
          <p className="">
            ParadigmIT offers, flexible engagement models through stand-alone,
            full service, or functional outsourcing in the following areas:
            <br /> • Database build, testing, and deployment.
            <br /> • Case report form (eCRF) design and review.
            <br /> • Edit check development.
            <br /> • Programming complex checks as allowed by each of the EDC
            tools.
            <br /> • Data entry (if needed), validation/verification.
            <br /> • Medical coding.
            <br /> • Safety and external data reconciliation.
            <br /> • Site/CRA EDC training (on demand).
            <br /> • EDC user/site administration.
            <br /> • Database lock and study closure.
            <br /> • Database migration/rescue from legacy systems.
            <br /> • Integration of EDC with other clinical applications.
            <br /> • Study data archival.
            <br /> • Custom function development (specific to RAVE).
            <br /> Custom reporting and visualization development such as:
            <br /> • Business Objects reports Crystal Reports development.
            <br /> • Spotfire business intelligence tools.
            <br /> • Power BI tools.
            <br /> • SAS/SQL based reporting.
            <br /> Custom scripts (specific to RAVE): Coder scripts | SIS
            integrations | Diagnostic scripts
            <br /> Custom data extracts and integrations:
            <br /> • Scheduling SAS Jobs/SQL data extracts.
            <br /> • SDTM/ADAM
            <br />• Rave web services (RWS)/ODM extracts.
            <br />
          </p>
        ),
        Image: (
          <img src={cdm} width={231} height={86} alt="" />
        ),
      },
      {
        key: "OtherServices",
        name: "Other Services",
        content: (
          <p className="">
            Statistics Programming :<br /> Our comprehensive biostatistics
            services encompass the following, ensuring your research and
            healthcare projects are driven by robust statistical methodologies
            for accurate results and compliance:
            <br /> • Randomization
            <br /> • Data analysis
            <br /> • Clinical trial design, including sample size identification
            <br /> • Statistical consulting
            <br /> • Regulatory query support
            <br /> Medical Writing :
            <br /> Our expert medical writing team ensures that your scientific
            and healthcare content is clear, concise, and compliant,
            facilitating effective communication in the ever-evolving field of
            medicine.
            <br /> We provide the following services:
            <br /> • Investigator Brochures
            <br /> • Protocols
            <br /> • Clinical Study Reports
            <br /> • Safety Reports – Narratives
            <br />• Manuscripts
          </p>
        ),
        Image: (
          <img src={cdm} width={231} height={86} alt="" />
        ),
      },
      {
        key: "Consulting",
        name: "Consulting for Clinical Trials",
        content: (
          <p className="">
            The following are the validated customized solutions we offer to our
            clients:
            <br /> Application development for pharma/life science companies to
            manage their routine tasks digitally to increase efficiency.
            <br /> Advanced technology adoption to manage the new complexities
            in clinical trial execution reducing drug development turnaround
            time.
            <br /> AL & ML powered Data Aggregation and Analysis to generate
            insight for the future drug development pipeline by:
            <br /> Defining disease prevalence.
            <br /> Identifying potential drug candidates.
            <br /> Collecting and analyzing post-marketing safety assessments.
            <br /> Compiling current market feedback on marketed products to
            initiate a more targeted approach to the R & D process for a new
            molecule.
          </p>
        ),
        Image: (
          <img src={pharmacy} width={231} height={86} alt=" " />
        ),
      },
      {
        key: "Excellence",
        name: "Excellence, Efficiency and Results",
        content: (
          <p className="">
            One of the key factors for a successful clinical study is to have an
            experienced team who can confidently execute your clinical trial on
            time with utmost and high-quality deliverables.
            <br /> Team of industry experts and clinical professionals <br />
            CDM “Full Service” support on all major EDC platforms <br />
            Experienced in multiple EDC Platforms on Study Build <br />
            Cost effective solution due to the technology/solutions
            <br /> Disaster Recovery Planning and Execution
            <br />
            Our focus is on utmost data quality and cost effective processes in
            validating the trial data. We had designed and tested the automated
            data validation/cleaning process keeping in mind the ease of
            adoption and pocket friendly to Customers. From the day we learnt
            Pharma industry will see a Paradigm shift in conducting trials our
            research involving industry experts and well qualified technology
            architects also began.
            <br /> The result of this brainstorming and research in the Clinical
            Trial conduct process involving multiple functional teams leading
            the ParadigmIT to be in the forefront.
            <br />
            Reduction of Specification review and Study build TAT
            <br />
            Improved Cognitive data insights generation using Business
            Intelligence tools
            <br /> Reduction in data cleaning/validating TAT Improved KPI of
            LPLV to DBL
            <br /> Recommendation of enhancing the EDC Platform and Clinical
            Tools based on our Technology DNA
          </p>
        ),
        Image: (
          <img src={eer} width={231} height={86} alt="" />
        ),
      },
    ],
  },

  // {
  //   key: "CyberSecurity",
  //   name: "Cyber Security",
  //   content:
  //     "We believe in bringing together the power of people and technology to create secure businesses for everyone. That’s why we offer end-to-end cybersecurity solutions for businesses of all sizes, from small start-ups to large corporations. We don’t just offer a few different products—we offer an entire suite of services that are designed to cover your needs from A to Z, protecting your company against cyber threats, data breaches, and other security issues. We work with clients across industries—from IT to healthcare and retail to manufacturing—and we see this as an opportunity to help them make their businesses safer and enable new opportunities for innovation and growth.",
  //   Image: Cyber,
  //   childurl: "https://paradigmitcyber.com/",
  // },
  {
    key: "ITInfra",
    name: "IT Infra",
    content:
      "Welcome to our IT Infra Services! We provide comprehensive IT infrastructure services designed to help businesses optimize their technology environment and maximize operational efficiency. Whether client need assistance with network design and implementation, server management, cloud solutions, IT security, Database Services we have the expertise and experience to meet client needs.",
    Image: IT,
    children: IT_infra,
  },
  {
    key: "ImplementationPartering",
    name: "Implementation Partering",
    content:
      "Implementation Partnering involves collaborating with an external organization or consultant to deploy and integrate new systems, processes, or solutions within a business.",
    Image: IP,
  },
 
];

const Services = (props) => {
  const [currentState, setCurrentState] = useState("CyberSecurity");
  const [child, setChild] = useState({
    isActive: 0,
    activeIndex: "",
    children: [],
  });
  useEffect(() => {
    console.log("children", child);
  }, [child]);

  const fadeInOutVariants = {
    initial: { opacity: 0 },
    out: {
      opacity: 0,
      x: 0,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      x: 10,
      y: 20,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  };
  const variants = {
    initial: { opacity: 0 },
    out: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  };
  const currentContent = useMemo(
    () => ContentArray.find((s) => s.key === currentState),
    [currentState]
  );

  const onExplore = (content) => {
    console.log("content", content);
    if (content?.children && content.children?.length) {
      setChild({
        isActive: true,
        activeIndex: content.children.at(0).key,
        children: content.children,
      });
    } else {
      navigate(content.childurl);
      return;
    }
  };
  const onBack = () => {
    setChild({
      isActive: false,
      activeIndex: "",
      children: [],
    });
  };
  return (
    <main id="services" className="grid grid-cols-1 grid-rows-[80px_calc(100%_-80px_-8vh)_8vh] w-screen h-screen">
      <div></div>

      <div
        className="grid grid-rows-[50px_calc(100%-50px)] grid-cols-1 "
        style={{
          // backgroundImage: `url(${currentContent.Image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <div className="flex flex-1 justify-end gap-2 mr-[2rem] items-end">
          {child?.isActive ? (
            <div className="flex  text-3xl text-[#2086FE]">
              {/* <p>{currentContent.name}</p> */}
            </div>
          ) : (
            [
              <div className=" flex w-full items-center justify-center ml-10">
                <div className=" text-3xl text-#252D2D">
                  ParadigmIT
                </div>

                <div className=" uppercase  text-3xl text-[#2086FE]">
                  Services
                </div>
              </div>,
            ]
          )}
        </div>
        <div className="flex w-full h-full overflow-y-scroll scrollbar-none gap-1  max-h-min">
          {!child?.isActive ? (
            <div className="w-[100%] h-full align-middile px-[10px]">
              <AnimatePresence>
                <motion.div
                  key={currentContent?.key}
                  variants={fadeInOutVariants}
                  animate="in"
                  initial="initial"
                  exit="out"
                >
                  {ContentArray.map((c, index) => (
                    <div
                      key={c.key}
                      className=" p-5 text-2xl align-middle text-[#2086FE]"
                    >
                      <h1 className=" text-2xl">{c.name}</h1>
                      <p className="text-left text-xl  mt-5 justify-content max-h-[1200px] text-[#000] ">
                        {c.content}
                      </p>
                      <button
                        onClick={() => {
                          console.log("ContentArray", ContentArray, "data", c);
                          onExplore(c);
                        }}
                        className=" bg-blue-500 hover:bg-[#2086FE] mt-6 text-white  py-2 px-4 rounded"
                      >
                        Explore
                      </button>
                      <img src={c.Image} alt="" className=" "></img>
                    </div>
                  ))}

                  <div></div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="w-[100%] h-full align-middile px-[10px]">
              <AnimatePresence>
                <motion.div
                  key={child.activeIndex}
                  variants={fadeInOutVariants}
                  animate="in"
                  initial="initial"
                  exit="out"
                >
                  <button onClick={onBack} className="flex w-full">
                    <div>
                      <img
                        src={chevron}
                        alt=""
                        className="  w-12 h-12 "
                      ></img>
                    </div>
                    <div className="w-full ">
                      <h1 className="text-3xl ">
                        ParadigmIT{" "}
                        <span className=" uppercase  text-[#2086FE]">
                          Services
                        </span>
                      </h1>
                    </div>
                  </button>

                  {child.children.map((c, index) => (
                    <div key={c.key} className="px-10 mt-8">
                      <ol className="flex gap-3 ">
                        <div>
                          <li className="text-2xl">{index + 1}.</li>
                        </div>
                        <div className="inline-block">
                          <h1 className="text-[#2086FE] text-2xl">{c.name}</h1>
                          <p className="text-left text-xl mt-5 justify-content max-h-[200px] overflow-hidden">
                            {c.content}
                          </p>
                        </div>
                      </ol>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div>
                <AnimatePresence>
                  <motion.div
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                  ></motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>

      <div></div>
    </main>
  );
};

export default Services;

export const Head = () => <title>services</title>;
