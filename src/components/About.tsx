export default function About() {
  let aboutMeItems: string[] = [
    "I'm a mechanical engineer with a strong foundation in electrophysiology, electrochemistry, and computational modeling. My research at Penn State focuses on voltage-gated ion channel dynamics using patch-clamp techniques and impedance spectroscopy, bridging the gap between biological systems and engineering solutions.",
    "I thrive at the intersection of hardware and software—designing low-noise amplifier circuits for nanoampere-scale measurements, developing MATLAB models for ion transport dynamics, and interfacing with DAQ systems for real-time data acquisition. I believe the best engineering happens when theory meets hands-on experimentation.",
    "Beyond research, I've had the privilege of teaching mechanical engineering courses, helping students apply core concepts to interdisciplinary projects in sustainability, robotics, and energy. Guiding others through complex problems while learning alongside them has been one of the most rewarding parts of my academic journey.",
    "When I'm not in the lab, you'll find me tinkering with electronics projects, designing mechatronic systems, or exploring the latest in circuit design and embedded systems. I'm passionate about creating things that work—from self-balancing robots to automated drawing machines."
  ];

  return (
    <>
      <section className="container p-4 h-fit md:h-screen">
        <div className="flex flex-col space-y-8 mx-15 md:mx-0">
          <h1 className="text-5xl md:text-8xl font-bold font-poppins text-center md:text-start">About</h1>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            {aboutMeItems.slice(0, 2).map((item, index) => (
              <div key={index} className={`md:space-y-8 ${index === 1 ? "md:mt-32" : ""}`}>
                <p className="text-start">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto -my-6">
            {aboutMeItems.slice(2, 4).map((item, index) => (
              <div key={index} className={`space-y-8 ${index === 1 ? "md:mt-32" : ""}`}>
                <p className="text-start">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
