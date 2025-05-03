"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {FaUser, FaEnvelope, FaUsers, FaCheck} from "react-icons/fa";

export default function RsvpForm() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  guests: 1,
  attendance: "yes",
  message: "",
 });

 const [submitted, setSubmitted] = useState(false);

 const handleChange = (
  e: React.ChangeEvent<
   HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
 ) => {
  const {name, value} = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
   const response = await fetch("/api/rsvp", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
   });

   if (response.ok) {
    setSubmitted(true);
   }
  } catch (error) {
   console.error("Error submitting form:", error);
  }
 };

 return (
  <section className="mb-16">
   <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    className="bg-rose-700 text-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-center mb-6">
     Konfirmasi Kehadiran
    </h2>

    {submitted ? (
     <motion.div
      initial={{scale: 0.8, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="text-center py-8">
      <div className="inline-block bg-white text-rose-700 p-4 rounded-full mb-4">
       <FaCheck className="text-2xl" />
      </div>
      <h3 className="text-xl font-medium mb-2">Terima kasih!</h3>
      <p>Konfirmasi kehadiran Anda telah berhasil dikirim.</p>
     </motion.div>
    ) : (
     <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto">
      <div className="mb-4">
       <label
        htmlFor="name"
        className="block mb-2">
        Nama Lengkap
       </label>
       <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-rose-300">
         <FaUser />
        </div>
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         required
         className="w-full pl-10 pr-4 py-2 rounded bg-rose-800 border border-rose-600 text-white placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
         placeholder="Nama Anda"
        />
       </div>
      </div>

      <div className="mb-4">
       <label
        htmlFor="email"
        className="block mb-2">
        Email
       </label>
       <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-rose-300">
         <FaEnvelope />
        </div>
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required
         className="w-full pl-10 pr-4 py-2 rounded bg-rose-800 border border-rose-600 text-white placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
         placeholder="email@contoh.com"
        />
       </div>
      </div>

      <div className="mb-4">
       <label
        htmlFor="guests"
        className="block mb-2">
        Jumlah Tamu
       </label>
       <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-rose-300">
         <FaUsers />
        </div>
        <select
         id="guests"
         name="guests"
         value={formData.guests}
         onChange={handleChange}
         className="w-full pl-10 pr-4 py-2 rounded bg-rose-800 border border-rose-600 text-white focus:outline-none focus:ring-2 focus:ring-rose-400 appearance-none">
         {[1, 2, 3, 4, 5].map((num) => (
          <option
           key={num}
           value={num}>
           {num} orang
          </option>
         ))}
        </select>
       </div>
      </div>

      <div className="mb-4">
       <label className="block mb-2">Konfirmasi Kehadiran</label>
       <div className="flex gap-4">
        <label className="inline-flex items-center">
         <input
          type="radio"
          name="attendance"
          value="yes"
          checked={formData.attendance === "yes"}
          onChange={handleChange}
          className="text-rose-500 focus:ring-rose-400"
         />
         <span className="ml-2">Hadir</span>
        </label>
        <label className="inline-flex items-center">
         <input
          type="radio"
          name="attendance"
          value="no"
          checked={formData.attendance === "no"}
          onChange={handleChange}
          className="text-rose-500 focus:ring-rose-400"
         />
         <span className="ml-2">Tidak Hadir</span>
        </label>
       </div>
      </div>

      <div className="mb-6">
       <label
        htmlFor="message"
        className="block mb-2">
        Pesan (Opsional)
       </label>
       <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-2 rounded bg-rose-800 border border-rose-600 text-white placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
        placeholder="Tulis pesan untuk mempelai..."></textarea>
      </div>

      <motion.button
       whileHover={{scale: 1.05}}
       whileTap={{scale: 0.95}}
       type="submit"
       className="w-full bg-white text-rose-700 font-medium py-3 px-6 rounded-lg hover:bg-rose-100 transition duration-300">
       Kirim Konfirmasi
      </motion.button>
     </form>
    )}
   </motion.div>
  </section>
 );
}
