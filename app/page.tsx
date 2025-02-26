"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { faq, services, partners, about } from "./data";
import OfferCard from "@/components/offerCard";
import PartnersCard from "@/components/partnersCard";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useAnimate, useInView } from "framer-motion";

// Home Page
export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "backInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 }, { delay: 0.3, duration: 1 });
    }
  }, [isInView]);

  const [activeService, setActiveService] = useState(services[0]);

  type Service = {
    title: string;
    desc: string;
    card01: string;
    card01desc: string;
    card02: string;
    card02desc: string;
    card03: string;
    card03desc: string;
    card04: string;
    card04desc: string;
    image: string;
  };

  function handleButtonClick(service: Service) {
    setActiveService(service); // Set the active service on button click
  }
  // Render the Home Page
  return (
    <body className="bg-slate-300">
      <Header />
      {/* Main */}
      <main>
        {/* Welcome Box */}
        <section className="flex flex-col items-center justify-center font-istok px-6 md:px-16">
          <div className="flex flex-col w-full min-h-[30rem] max-w-[90rem] z-10 p-8 rounded-3xl bg-opacity-75 bg-gray-900 shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black mb-16 justify-center">
            <div className="flex flex-wrap text-5xl md:text-8xl max-w-lg font-istok font-bold">
              <motion.div
                className="flex flex-col space-y-4 text-left text-white justify-center md:m-8"
                variants={parentVariants}
                initial="hidden"
                animate="show"
              >
                <motion.h1 variants={childVariants}>simple.</motion.h1>
                <motion.h1 variants={childVariants}>secure.</motion.h1>
                <motion.h1 variants={childVariants}>reliable.</motion.h1>
                <hr className="my-4 border-t-2 border-white w-full" />
                <motion.p
                  variants={childVariants}
                  className="text-xl mt-6 font-istok font-bold break-words"
                >
                  IT solutions for your small buisness
                </motion.p>
                <motion.div variants={childVariants}>
                  <Button className="mt-8 h-12 w-full bg-slate-700 text-lg tracking-widest font-bold">
                    <a href="#contact">Get Started</a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col items-end justify-end w-full h-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: .75 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <img
              src="/background3.png"
              alt="Background"
              className="absolute bottom-0 right-0 max-h-[35rem] max-w-[45rem] object-cover rounded-3xl"
              />
            </motion.div>
          </div>
        </section>

        {/* What do we offer? Section */}
        <section id="services" className="py-16 px-6 md:px-16 font-istok">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }} // Adjust delay to match the end of the previous animation
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 text-center"
          >
            What do we offer?
          </motion.h2>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="grid md:grid-cols-2 justify-center w-full max-w-[90rem] h-auto z-10 text-left text-white p-8 rounded-3xl bg-opacity-75 bg-gray-900 shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <div className="flex flex-col">
                  <motion.p
                    ref={scope}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className="font-istok font-bold text-3xl md:text-5xl max-w-md px-8 py-8"
                  >
                    We tailor our services to all your needs
                  </motion.p>
                  {services?.map((service) => (
                    <div
                      key={service.title}
                      className="flex flex-col space-y-2 px-8 py-1"
                    >
                      <motion.button
                        onClick={() => handleButtonClick(service)}
                        transition={{ duration: 0.25 }}
                        whileHover={{
                          scale: 1.01,
                          backgroundColor: "#94a3b8",
                          color: "black",
                          transition: { duration: 0.3 },
                        }}
                        className={`flex flex-col space-y-2 text-white py-4 px-6 ${
                          activeService.title === service.title
                            ? "bg-slate-500"
                            : "bg-slate-600"
                        } max-w-[25rem] font-istok font-bold text-xl md:text-2xl rounded-lg`}
                        style={{
                          backgroundColor:
                            activeService.title === service.title
                              ? "#94a3b8"
                              : "#334155",
                          color:
                            activeService.title === service.title
                              ? "black"
                              : "white",
                        }}
                      >
                        {service.title}
                      </motion.button>
                    </div>
                  ))}
                </div>
                {/* Display the Content for Active Service */}
                <div className="grid md:grid-cols-2 flex-grow mt-10 rounded-lg shadow-md text-white font-istok">
                  <motion.div
                    key={activeService.card01}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <OfferCard
                      title={activeService.card01}
                      desc={activeService.card01desc}
                    />
                  </motion.div>
                  <motion.div
                    key={activeService.card02}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <OfferCard
                      title={activeService.card02}
                      desc={activeService.card02desc}
                    />
                  </motion.div>
                  <motion.div
                    key={activeService.card03}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <OfferCard
                      title={activeService.card03}
                      desc={activeService.card03desc}
                    />
                  </motion.div>
                  <motion.div
                    key={activeService.card04}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <OfferCard
                      title={activeService.card04}
                      desc={activeService.card04desc}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 px-6 md:px-16 font-istok">
          <div className="flex max-w-[90rem] flex-col md:flex-row mx-auto justify-center gap-10 p-16">
            <div className="py-8 md:w-1/3">
              <h2 className="sticky top-[280px] text-5xl font-bold mb-10 text-gray-800 py-8">
                About Us
              </h2>
            </div>

            <div className="md:w-2/3">
              <div className="py-8">
                <h3 className="text-3xl font-bold mb-4">Our Clients</h3>

                <p className="text-xl mb-8">{about.ourClients}</p>
              </div>

              <div className="py-8">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

                <p className="text-xl mb-8">{about.ourMission}</p>
              </div>

              <div className="py-8">
                <h3 className="text-3xl font-bold mb-4">Our Story</h3>

                <p className="text-xl mb-8">{about.ourStory}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section id="partners" className="py-16 px-6 font-istok mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800 text-center">
            Our Partners
          </h2>

          <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto">
            {partners.map((partner, index) => (
              <PartnersCard
                key={index}
                image={partner.image}
                title={partner.name}
                description={partner.desc}
                link="#"
              />
            ))}
          </div>
        </section>

        {/* Contact Info Section */}
        <section id="contact" className="py-16 font-istok">
          <div className="grid md:grid-cols-2 max-w-[80rem] p-8 items-center justify-center mx-auto">
            {/* Company Contact Information */}
            <div className="h-auto w-full max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-10 text-gray-800">
                Contact us today!
              </h2>
              <p className="text-lg font-light mb-8 md:w-4/6">
                We are here to help you with all your IT needs. Please fill out
                the contact form or reach out directly to get in touch.
              </p>
              <div className="w-full bg-white shadow-md p-8 mb-8 rounded-lg">
                <h3 className="text-3xl font-bold"></h3>
                <ul className="space-y-4">
                  <li className="text-lg font-semibold">ComTech Specialists</li>
                  <li className="text-lg">
                    <span className="font-semibold">Phone:</span> (336) 208-2310
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href="mailto:info@comtechspec.com"
                      className="text-blue-500 underline"
                    >
                      info@comtechspec.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full max-w-2xl bg-white shadow-md p-6 rounded-lg h-auto">
              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Name
                  </label>
                  <Input type="text" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Company
                  </label>
                  <Input type="text" placeholder="Enter your company name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Details
                  </label>
                  <Textarea placeholder="Type your message here" />
                </div>
                <Button type="submit" className="w-full bg-black">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 font-istok">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[80rem] mx-auto grid grid-cols-1 gap-4 items-center p-4">
            {faq?.map((card, index) => (
              <div key={index} className="flex flex-col font-bold text-xl">
                <div className="flex bg-slate-400 h-[.1rem] m-2"></div>
                <div className="flex flex-col md:flex-row">
                  <div className="flex flex-row md:max-w-[40rem] md:min-w-[30rem] md:mt-[1rem] px-4">
                    {card.title}
                  </div>
                  <div className="flex flex-row font-light">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section*/}
      <footer>
        <div className="bg-slate-300 text-black py-4 font-istok">
          <div className="container mx-auto flex justify-center items-center px-16 py-4">
            <p>&copy; 2024 ComTech Specialists. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}
