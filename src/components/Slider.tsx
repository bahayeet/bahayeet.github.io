import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

interface SliderProps {
  isHeroVisible: boolean;
}

export default function Slider({ isHeroVisible }: SliderProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-sage-green/95 backdrop-blur-md border-b border-cream/10 shadow-sm z-50 transition-transform duration-500 ${isHeroVisible ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-row items-center justify-between gap-8">
          {/* Name on the left */}
          <h1 className="text-xl md:text-2xl font-bold font-poppins whitespace-nowrap">Baha Demir</h1>
          
          {/* Navigation links in the center */}
          <div className="hidden md:flex flex-row items-center justify-center flex-1 space-x-8">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-accent transition font-poppins text-sm whitespace-nowrap"
            >
              Intro
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-accent transition font-poppins text-sm whitespace-nowrap"
            >
              About
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer hover:text-accent transition font-poppins text-sm whitespace-nowrap"
            >
              Work
            </Link>
            <Link
              to="school"
              smooth={true}
              duration={500}
              offset={0}
              className="cursor-pointer hover:text-accent transition font-poppins text-sm whitespace-nowrap"
            >
              Education
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-accent transition font-poppins text-sm whitespace-nowrap"
            >
              Projects
            </Link>
            <Link
              to="fin"
              smooth={true}
              duration={500}
              offset={-40}
              className="cursor-pointer hover:text-accent transition font-poppins text-sm whitespace-nowrap"
            >
              Connect
            </Link>
          </div>

          {/* Social icons on the right */}
          <div className="flex space-x-5 whitespace-nowrap">
            <a
              href="https://www.linkedin.com/in/baha-demir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg md:text-xl hover:text-accent transition" />
            </a>
            <a
              href="https://github.com/bahayeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg md:text-xl hover:text-accent transition" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=fjxjAJUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglescholar className="text-lg md:text-xl hover:text-accent transition" />
            </a>
            <a
              href="mailto:baha.yigit.demir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-lg md:text-xl hover:text-accent transition" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
