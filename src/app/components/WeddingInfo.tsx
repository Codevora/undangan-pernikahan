import {motion} from "framer-motion";
import {FaRing} from "react-icons/fa";

export default function WeddingInfo() {
 return (
  <section className="mb-16 text-center">
   <motion.div
    whileHover={{scale: 1.05}}
    className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">
     <FaRing className="text-3xl text-rose-500" />
    </div>
    <h2 className="text-2xl font-semibold text-rose-700 mb-4">
     Pernikahan Kami
    </h2>
    <p className="text-gray-700 mb-4">
     Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
     pernikahan putra-putri kami.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
     <div className="bg-rose-100 p-6 rounded-lg">
      <h3 className="text-xl font-medium text-rose-800 mb-2">
       Mempelai Wanita
      </h3>
      <p className="text-rose-900">Sarah Putri</p>
      <p className="text-gray-600">Putri dari Bpk. Ahmad & Ibu Siti</p>
     </div>
     <div className="bg-rose-100 p-6 rounded-lg">
      <h3 className="text-xl font-medium text-rose-800 mb-2">Mempelai Pria</h3>
      <p className="text-rose-900">Adi Pratama</p>
      <p className="text-gray-600">Putra dari Bpk. Budi & Ibu Ani</p>
     </div>
    </div>
   </motion.div>
  </section>
 );
}
