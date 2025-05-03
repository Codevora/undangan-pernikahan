import {motion} from "framer-motion";
import {FaImages} from "react-icons/fa";

const images = [
 {id: 1, src: "/images/couple1.jpg", alt: "Couple photo 1"},
 {id: 2, src: "/images/couple2.jpg", alt: "Couple photo 2"},
 {id: 3, src: "/images/couple3.jpg", alt: "Couple photo 3"},
 {id: 4, src: "/images/couple4.jpg", alt: "Couple photo 4"},
];

export default function Gallery() {
 return (
  <section className="mb-16">
   <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex items-center justify-center mb-6">
     <FaImages className="text-2xl text-rose-500 mr-2" />
     <h2 className="text-2xl font-semibold text-rose-700">Galeri Kami</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
     {images.map((image, index) => (
      <motion.div
       key={image.id}
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{delay: index * 0.1}}
       whileHover={{scale: 1.05}}
       className="overflow-hidden rounded-lg">
       <img
        src={image.src}
        alt={image.alt}
        className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
       />
      </motion.div>
     ))}
    </div>
   </motion.div>
  </section>
 );
}
