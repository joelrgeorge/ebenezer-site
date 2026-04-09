import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ConstructionWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null); // ✅ ADD THIS
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 will-change-transform ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-white/0 backdrop-blur-0 shadow-md"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Ebenezer Constructions</h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {["home", "about", "services", "plans", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="relative group capitalize">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg px-6 pb-6 pt-2 space-y-4 shadow-lg"
          >
            {["home", "about", "services", "plans", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-lg font-medium capitalize"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* HERO */}
      <section id="home" className="h-screen grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-10">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            We Build <span className="text-gray-400">Modern Spaces</span>
          </motion.h2>

          <motion.p
            className="mb-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Premium construction with architectural precision and timeless design.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-6 py-3 rounded-xl w-fit"
          >
            Start Project
          </motion.button>
        </div>

        <motion.div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200')",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Who We Are</h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              We are a team of skilled engineers, architects, and builders dedicated to
              delivering high-quality construction projects with precision and reliability.
              From residential homes to commercial spaces, we focus on craftsmanship,
              durability, and modern design.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With years of industry experience, we combine traditional construction
              expertise with innovative techniques to bring your vision to life — on time
              and within budget.
            </p>

            {/* stats */}
            <div className="flex gap-10 mt-8">
              <div>
                <h4 className="text-2xl font-bold">100+</h4>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold">10+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold">50+</h4>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600"
              alt="Construction building exterior"
              className="rounded-xl h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600"
              alt="Modern house construction"
              className="rounded-xl h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600"
              alt="Commercial building structure"
              className="rounded-xl h-48 object-cover col-span-2"
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end construction solutions tailored to your needs — from design to delivery.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Turnkey Construction",
              desc: "Complete build from foundation to key handover.",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            },
            {
              title: "Residential Projects",
              desc: "Modern homes, villas, and apartments built to perfection.",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            },
            {
              title: "Commercial Construction",
              desc: "Offices, retail spaces, and large-scale developments.",
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
            },
            {
              title: "Architectural Design",
              desc: "Smart layouts, 3D designs, and planning services.",
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c",
            },
            {
              title: "Interior & Finishing",
              desc: "Premium interiors, furniture, POP, and painting.",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            },
            {
              title: "Renovation & Remodeling",
              desc: "Transforming old spaces into modern environments.",
              img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image */}
              <img
                src={`${service.img}?auto=format&fit=crop&w=800`}
                alt={service.title}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Construction Packages</h3>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-100 p-8 rounded-2xl shadow"
          >
            <h4 className="text-xl font-bold mb-4">With Materials</h4>

            <p className="text-gray-600 mb-6">
              Complete construction package with materials & execution.
            </p>

            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Column Base</li>
              <li>Stone Wall</li>
              <li>Sand Filling</li>
              <li>Brick Wall</li>
              <li>Roof Casting</li>
              <li>Plaster Work</li>
            </ul>

            <h5 className="mt-6 mb-2 font-semibold">Execution Experts:</h5>

            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Sand Filling</li>
              <li>Sanitary</li>
              <li>Electrical</li>
              <li>Steel & Railing</li>
              <li>AC Installation</li>
              <li>Tile / Marble</li>
              <li>POP</li>
              <li>Painting</li>
              <li>Furniture</li>
              <li>Iron Works</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-black text-white p-8 rounded-2xl shadow">
            <h4 className="text-xl font-bold mb-4">Labour Only</h4>
            <p className="text-gray-400 mb-6">
              Execution-focused construction without materials.
            </p>
            <ul className="space-y-2 text-white-700 list-disc list-inside">
              <li>Column Base</li>
              <li>Stone Wall</li>
              <li>Sand Filling</li>
              <li>Brick Wall</li>
              <li>Roof Casting</li>
              <li>Plaster Work</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.img
              key={i}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800"
              alt="Construction project"
              className="rounded-2xl h-60 w-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800"
              alt="Construction team working"
              className="rounded-2xl shadow-xl"
            />

            {/* floating card */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-xl shadow-lg">
              <p className="text-sm">10+ Years Experience</p>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <div className="space-y-10">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver high-quality construction solutions with precision,
                transparency, and modern design standards while ensuring complete
                client satisfaction at every stage of the project.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a leading name in the construction industry by building
                innovative, sustainable, and timeless structures that shape the future
                of modern living.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FROM FOUNDATION TO FINISH */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            From Foundation to Finish
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We manage every stage of your construction journey — from the first consultation to the final handover.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Consultation",
              desc: "Understanding your requirements, budget, and vision.",
            },
            {
              title: "Design & Planning",
              desc: "Architectural drawings, layouts, and approvals.",
            },
            {
              title: "Structural Work",
              desc: "Foundation, columns, brickwork, and roof casting.",
            },
            {
              title: "Electrical & Plumbing",
              desc: "Complete wiring, piping, and fittings.",
            },
            {
              title: "Finishing",
              desc: "Tiles, painting, interiors, and final touches.",
            },
            {
              title: "Handover",
              desc: "Final inspection and delivery of your dream space.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow">
                {i + 1}
              </div>

              <h4 className="text-xl font-semibold mb-2 mt-4">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHAT’S INCLUDED - PREMIUM */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Package Inclusions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A complete turnkey solution — from structure to final key handover.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            { title: "Structure Work", desc: "Foundation, columns, walls, roof casting" },
            { title: "Terrace Screeding", desc: "Bajarfoot waterproof finishing" },
            { title: "Boundary & Gate", desc: "Compound wall with iron gate" },
            { title: "Sanitary Work", desc: "Fittings, plumbing & accessories" },
            { title: "Electrical Work", desc: "Complete wiring, switches & fittings" },
            { title: "AC Work", desc: "AC wiring & installation support" },
            { title: "Flooring", desc: "Tiles / Marble flooring throughout" },
            { title: "Bathroom & Kitchen", desc: "Tiling + granite kitchen slab" },
            { title: "POP & Painting", desc: "Interior POP + exterior finishing" },
            { title: "Windows & Gates", desc: "Wooden / Iron structures" },
            { title: "Railings", desc: "MS / Steel railings" },
            { title: "Final Handover", desc: "Ready-to-move-in delivery" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {/* icon */}
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-white text-black font-bold">
                ✔
              </div>

              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Start Your Project
          </h3>

          <form className="grid md:grid-cols-2 gap-4">

            {/* Name */}
            <input
              className="w-full border p-3 rounded"
              placeholder="Full Name"
            />

            {/* Phone */}
            <input
              className="w-full border p-3 rounded"
              placeholder="Phone Number"
            />

            {/* Email */}
            <input
              className="w-full border p-3 rounded md:col-span-2"
              placeholder="Email Address"
            />

            {/* Location */}
            <input
              className="w-full border p-3 rounded"
              placeholder="Project Location"
            />

            {/* Project Type */}
            <select className="w-full border p-3 rounded">
              <option>Project Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Renovation</option>
            </select>

            {/* Budget */}
            <select className="w-full border p-3 rounded">
              <option>Budget Range</option>
              <option>₹5L - ₹10L</option>
              <option>₹10L - ₹25L</option>
              <option>₹25L - ₹50L</option>
              <option>₹50L+</option>
            </select>

            {/* Plot Size */}
            <input
              className="w-full border p-3 rounded"
              placeholder="Plot Size (sq.ft)"
            />

            {/* Timeline */}
            <select className="w-full border p-3 rounded md:col-span-2">
              <option>Project Timeline</option>
              <option>Immediate</option>
              <option>1-3 Months</option>
              <option>3-6 Months</option>
              <option>6+ Months</option>
            </select>

            {/* Message */}
            <textarea
              className="w-full border p-3 rounded md:col-span-2"
              placeholder="Tell us about your project"
              rows="4"
            />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white py-3 rounded-xl md:col-span-2"
            >
              Get Free Consultation
            </motion.button>

          </form>
        </div>
      </section>

      {/* PROJECT GALLERY WITH MODAL */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into some of our completed projects.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">         
          {[
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1497366216548-37526070297c",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1497366216548-37526070297c",
          ].map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(img)}
            >
              <img
                src={`${img}?auto=format&fit=crop&w=800`}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"            
              />
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={`${selected}?auto=format&fit=crop&w=1200`}
              alt="Expanded project"
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Ebenezer Constructions</h2>
            <p className="text-sm text-gray-400"> 
              Premium construction solutions from foundation to finish.
              We build with precision, quality, and trust.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#plans" className="hover:text-white">Packages</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Turnkey Construction</li>
              <li>Residential Projects</li>
              <li>Commercial Construction</li>
              <li>Interior & Finishing</li>
              <li>Renovation</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li> Jaipur, India</li>
              <li> +91 98765 43210</li>
              <li> contact@ebenezeconstructions.com</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ebenezer Constructions Pvt Ltd. All rights reserved.
        </div>
      </footer>

    </div>
  );
}