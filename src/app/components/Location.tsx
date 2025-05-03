import {motion} from "framer-motion";
import {FaMapMarkerAlt, FaClock, FaCalendarDay} from "react-icons/fa";

export default function Location() {
 return (
  <section className="mb-16">
   <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    className="bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-rose-700 text-center mb-6">
     Lokasi Acara
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     <div>
      <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center">
       <FaCalendarDay className="mr-2 text-rose-500" /> Akad Nikah
      </h3>
      <div className="mb-4">
       <p className="text-gray-700">Sabtu, 12 Juni 2024</p>
       <p className="text-gray-700 flex items-center">
        <FaClock className="mr-2 text-rose-500" /> 08.00 - 10.00 WIB
       </p>
      </div>
      <div className="flex items-start">
       <FaMapMarkerAlt className="text-rose-500 mt-1 mr-2" />
       <div>
        <p className="text-gray-700 font-medium">Masjid Agung Al-Falah</p>
        <p className="text-gray-600">Jl. Merdeka No. 123, Jakarta Pusat</p>
       </div>
      </div>
     </div>

     <div>
      <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center">
       <FaCalendarDay className="mr-2 text-rose-500" /> Resepsi
      </h3>
      <div className="mb-4">
       <p className="text-gray-700">Sabtu, 12 Juni 2024</p>
       <p className="text-gray-700 flex items-center">
        <FaClock className="mr-2 text-rose-500" /> 11.00 - 15.00 WIB
       </p>
      </div>
      <div className="flex items-start">
       <FaMapMarkerAlt className="text-rose-500 mt-1 mr-2" />
       <div>
        <p className="text-gray-700 font-medium">
         Grand Ballroom Hotel Majestic
        </p>
        <p className="text-gray-600">Jl. Sudirman No. 456, Jakarta Selatan</p>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
     {/* Embed Google Maps */}
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.82256141529484!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f44a495e4c07%3A0x4c9c8a7f9568655e!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{border: 0}}
      allowFullScreen
      loading="lazy"></iframe>
    </div>
   </motion.div>
  </section>
 );
}
