import WorkCard from "./WorkCard";

export default function WorkExperience() {
  return (
    <section className="container p-4 h-fit md:h-screen mt-10">
      <div className="flex flex-col space-y-8">
        <h1 className="text-5xl md:text-8xl font-bold font-poppins text-center md:text-start">Work</h1>
        <div className="mx-15">
          <WorkCard
            logo="https://i.imgur.com/30ZxJVd.png"
            jobTitle="Graduate Research Assistant"
            companyName="Penn State University"
            companyUrl="https://www.psu.edu/"
            dates="May 2023 - August 2025"
            location="State College, Pennsylvania"
            description="Conducted electrophysiological and electrochemical characterization of voltage-gated ion channel dynamics using patch-clamp techniques and impedance spectroscopy. Modeled ion transport and electrochemical dynamics of synthetic membranes in MATLAB, designed low-noise transimpedance amplifier circuits for nanoampere-scale measurements, and developed scripts to interface with NI DAQ modules for real-time data acquisition."
          />

          <WorkCard
            logo="https://i.imgur.com/30ZxJVd.png"
            jobTitle="Graduate Teaching Assistant"
            companyName="Penn State University"
            companyUrl="https://www.psu.edu/"
            dates="August 2022 - May 2024"
            location="State College, Pennsylvania"
            description="ME 435 – Mechanical Engineering Systems Lab: Led lab sessions applying concepts from core ME courses to interdisciplinary projects in sustainability, robotics, and energy. Provided hands-on training with SEM imaging, mechanical testing (UTM), additive manufacturing, and embedded systems. ME 450 – Modeling of Dynamic Systems: Taught modeling, analysis, and control of dynamical systems."
          />

          <WorkCard
            logo="https://i.imgur.com/30ZxJVd.png"
            jobTitle="Undergraduate Researcher"
            companyName="King Fahd University of Petroleum and Minerals"
            companyUrl="https://www.kfupm.edu.sa/"
            dates="August 2020 - May 2022"
            location="Dhahran, KSA"
            description="Published two peer-reviewed studies on biomedical implants and epoxy coatings. Conducted corrosion tests on biocompatible Ti6Al4V alloy substrates and prepared nanofiller-reinforced epoxy coating specimens, performing SEM imaging, hardness and contact angle tests under ASTM standards."
          />
        </div>
      </div>
    </section>
  );
}
