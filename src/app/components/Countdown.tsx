"use client";

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";

export default function Countdown() {
 const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
 });

 useEffect(() => {
  const weddingDate = new Date("2024-06-12T00:00:00").getTime();

  const timer = setInterval(() => {
   const now = new Date().getTime();
   const distance = weddingDate - now;

   if (distance < 0) {
    clearInterval(timer);
    return;
   }

   setTimeLeft({
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
   });
  }, 1000);

  return () => clearInterval(timer);
 }, []);

 return (
  <section className="mb-16">
   <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    className="bg-rose-700 text-white p-8 rounded-lg shadow-lg">
    <div className="flex items-center justify-center mb-4">
     <FaCalendarAlt className="text-2xl mr-2" />
     <h2 className="text-2xl font-semibold">Hitungan Mundur</h2>
    </div>

    <div className="grid grid-cols-4 gap-4 text-center mt-6">
     <motion.div
      whileHover={{scale: 1.1}}
      className="bg-white text-rose-700 p-4 rounded-lg">
      <div className="text-3xl font-bold">{timeLeft.days}</div>
      <div className="text-sm">Hari</div>
     </motion.div>
     <motion.div
      whileHover={{scale: 1.1}}
      className="bg-white text-rose-700 p-4 rounded-lg">
      <div className="text-3xl font-bold">{timeLeft.hours}</div>
      <div className="text-sm">Jam</div>
     </motion.div>
     <motion.div
      whileHover={{scale: 1.1}}
      className="bg-white text-rose-700 p-4 rounded-lg">
      <div className="text-3xl font-bold">{timeLeft.minutes}</div>
      <div className="text-sm">Menit</div>
     </motion.div>
     <motion.div
      whileHover={{scale: 1.1}}
      className="bg-white text-rose-700 p-4 rounded-lg">
      <div className="text-3xl font-bold">{timeLeft.seconds}</div>
      <div className="text-sm">Detik</div>
     </motion.div>
    </div>
   </motion.div>
  </section>
 );
}
