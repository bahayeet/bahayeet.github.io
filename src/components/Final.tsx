import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Final() {
  return (
    <section className="container p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-8 text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-6">Let's Connect</h1>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-center text-md md:text-xl text-cream/80">
            <p>I'm always interested in discussing research collaborations, engineering projects, or opportunities in electrophysiology and mechatronics. Feel free to reach out through any of the links below—I'd be happy to connect!</p>
          </div>

          <div id="icons" className="flex space-x-6 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/baha-demir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl md:text-5xl hover:text-accent transition" />
            </a>
            <a
              href="https://github.com/bahayeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl md:text-5xl hover:text-accent transition" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=fjxjAJUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglescholar className="text-3xl md:text-5xl hover:text-accent transition" />
            </a>
            <a
              href="mailto:baha.yigit.demir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-3xl md:text-5xl hover:text-accent transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
