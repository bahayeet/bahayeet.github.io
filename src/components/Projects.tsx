import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <section className="container p-4 space-y-8 h-fit">
        <h1 className="text-4xl md:text-8xl font-bold text-center md:text-start">projects.</h1>

        <div className="mx-15 my-15 md:my-0">
          <ProjectCard
            title="Self-Balancing Mini-Bicycle"
            description="Designed, modeled, and fabricated a two-wheel self-balancing bicycle utilizing gyroscopic precession for stability. The system employed dual 1kg steel flywheels mounted on perpendicular axes, whose counter-rotation produced a stabilizing torque. Created the full assembly in SolidWorks with dynamic weight distribution analysis and programmed an Arduino-based PID controller with IMU feedback. Earned 3rd place in the ME department design competition."
            websiteUrl="#"
            imageUrl="https://i.imgur.com/placeholder1.png"
            techStack={["SolidWorks", "Arduino", "PID Control", "IMU", "MATLAB", "3D Printing"]}
            isGithub={false}
            reverse={true}
          />

          <ProjectCard
            title="DIY Etch-a-Sketch Printer"
            description="Developed an automated Etch-a-Sketch drawing robot translating grayscale images into synchronized rotary-motion commands. Implemented MATLAB-based image-processing and path-optimization routines converting rasterized images into continuous Bézier trajectories while minimizing dead travel paths. Designed an Arduino-driven stepper-motor system actuating X–Y knobs simultaneously integrated with MATLAB serial communication."
            websiteUrl="#"
            imageUrl="https://i.imgur.com/placeholder2.png"
            techStack={["MATLAB", "Arduino", "Stepper Motors", "Image Processing", "Serial Communication"]}
            isGithub={false}
            reverse={false}
          />

          <ProjectCard
            title="Connect-4 Gantry Simulation"
            description="Designed and simulated an autonomous gantry robot to play Connect-4 against human users using algorithm-based AI decision-making. Built a virtual prototype in CoppeliaSim and programmed MATLAB-Lua API communication for real-time motion. Implemented inverse kinematics for coordinated motion and optimized trajectory smoothing to minimize cycle times. Demonstrated reliable piece placement with visual feedback using MATLAB's App Designer."
            websiteUrl="#"
            imageUrl="https://i.imgur.com/placeholder3.png"
            techStack={["MATLAB", "CoppeliaSim", "Lua", "Inverse Kinematics", "App Designer", "Robotics"]}
            isGithub={false}
            reverse={true}
          />

          <ProjectCard
            title="Beam Stability and Buckling Analysis"
            description="Constructed 3D finite-element models in ABAQUS to simulate beam buckling under linearly distributed and point loads. Performed parametric studies on mesh density, material properties, and end-constraint effects for model convergence analysis. Compared simulation results to theoretical Euler-buckling predictions, achieving less than 8% error across all configurations."
            websiteUrl="#"
            imageUrl="https://i.imgur.com/placeholder4.png"
            techStack={["ABAQUS", "FEA", "MATLAB", "Structural Analysis", "Numerical Methods"]}
            isGithub={false}
            reverse={false}
          />

          <ProjectCard
            title="Ion Channel Dynamics Research"
            description="Master's research investigating high currents and prolonged stimulation effects on dynamic salt gradients in Droplet Interface Bilayers. Developed computational models in MATLAB for ion transport and electrochemical dynamics, designed transimpedance amplifier circuits for nanoampere measurements, and created data acquisition systems using NI DAQ modules."
            websiteUrl="https://scholar.google.com"
            imageUrl="https://i.imgur.com/placeholder5.png"
            techStack={["MATLAB", "LTspice", "NI DAQ", "Patch-Clamp", "Electrochemistry", "Circuit Design"]}
            isGithub={false}
            reverse={true}
          />

          <ProjectCard
            title="Biomedical Implant Corrosion Study"
            description="Published research on surface properties and in vitro corrosion studies of blasted and thermally treated Ti6Al4V alloy for bioimplant applications. Conducted comprehensive material characterization using SEM, XRD, AFM, and electrochemical testing methods to evaluate biocompatibility and corrosion resistance."
            websiteUrl="https://doi.org/10.3390/ma15217615"
            imageUrl="https://i.imgur.com/placeholder6.png"
            techStack={["SEM", "XRD", "AFM", "Corrosion Testing", "Materials Science", "ASTM Standards"]}
            isGithub={false}
            reverse={false}
          />
        </div>
      </section>
    </>
  );
}
