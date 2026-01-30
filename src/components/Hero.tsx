import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
        <div className="flex-col">
          <h1 className="text-8xl font-bold">baha demir</h1>
          <div id="icons" className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/baha-yigit-demir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-white transition" />
            </a>
            <a
              href="https://github.com/bahayigitdemir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-white transition" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=YOUR_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglescholar className="text-3xl hover:text-white transition" />
            </a>
            <a
              href="mailto:baha.yigit.demir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-3xl hover:text-white transition" />
            </a>
          </div>
        </div>

        <p className="text-xl mt-8 md:mt-0">
          mechanical engineer • researcher • maker
        </p>


      </section>


    </>
  );
}
