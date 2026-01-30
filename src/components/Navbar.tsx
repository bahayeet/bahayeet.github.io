import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > window.innerHeight / 2) {
        navbar?.classList.remove("-translate-y-full");
      } else {
        navbar?.classList.add("-translate-y-full");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full bg-sage-green text-cream flex justify-between items-center px-6 py-4 transition-transform transform -translate-y-full z-50"
    >
      <h1 className="text-2xl font-bold">baha demir.</h1>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/baha-yigit-demir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl hover:text-white" />
        </a>
        <a
          href="https://github.com/bahayigitdemir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl hover:text-white" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=YOUR_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGooglescholar className="text-xl hover:text-white" />
        </a>
        <a
          href="mailto:baha.yigit.demir@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-xl hover:text-white" />
        </a>
      </div>
    </div>
  );
}
