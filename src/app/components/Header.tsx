import {motion} from "framer-motion";
import {FaHeart} from "react-icons/fa";

export default function Header() {
 return (
  <header className="text-center mb-12">
   <motion.div
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{type: "spring", stiffness: 260, damping: 20}}>
    <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-2">
     Sarah <FaHeart className="inline text-rose-500 mx-2" /> Adi
    </h1>
   </motion.div>
   <p className="text-lg text-rose-900">Sabtu, 12 Juni 2024</p>
  </header>
 );
}
