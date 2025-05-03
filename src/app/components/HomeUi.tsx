"use client"
import Header from "./Header";
import WeddingInfo from "./WeddingInfo";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import Location from "./Location";
import RsvpForm from "./RsvpForm";
import {motion} from "framer-motion";

export default function HomeUi() {
 return (
  <div className="max-w-4xl mx-auto px-4 py-8">
   <Header />

   <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}>
    <WeddingInfo />
   </motion.div>

   <Countdown />

   <Gallery />

   <Location />

   <RsvpForm />
  </div>
 );
}
