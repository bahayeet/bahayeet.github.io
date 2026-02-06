import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Hero() {
  return (
    <>
      <section className="relative flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen overflow-hidden">
        {/* Spinning 4D cube background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
          <img 
            src="/spinning-4d-cube.gif" 
            alt="" 
            className="w-96 h-96 md:w-[600px] md:h-[600px] object-contain animate-spin-slow"
          />
        </div>
        
        {/* Content */}
        <div className="flex-col relative z-10">
          <h1 className="text-8xl font-bold font-poppins">Baha Demir</h1>
          <div id="icons" className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/baha-demir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-accent transition" />
            </a>
            <a
              href="https://github.com/bahayeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-accent transition" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=fjxjAJUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglescholar className="text-3xl hover:text-accent transition" />
            </a>
            <a
              href="mailto:baha.yigit.demir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-3xl hover:text-accent transition" />
            </a>
          </div>
        </div>

        <p className="text-xl mt-8 md:mt-0 relative z-10">
          Mechanical Engineer • Researcher • Maker
        </p>
      </section>


    </>
  );
}
