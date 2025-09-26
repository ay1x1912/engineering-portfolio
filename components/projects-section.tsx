import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Optimized SRM Design for Reduced Torque Ripple",
      description:
        "Advanced electrical engineering project focused on Switched Reluctance Motor (SRM) optimization. Implemented Torque Ripple Mitigation (TRM) techniques to significantly reduce torque variations, achieving smoother motor operation and improved performance characteristics.",
      image: "/SRM_torque_ripple.png",
      technologies: ["Motosolve", "Simulink", "Motor Control", "Design Modification", "Motorsolve"],
      github: "#",
      demo: "#",
      featured: true, // Fixed commented syntax
    },
    {
      title: "KL Algorithm Calculator",
      description:
        "The Kernighan-Lin algorithm is a heuristic for graph partitioning that minimizes edge cuts between two sets of nodes. A Python-based calculator for it takes a weighted graph as input and iteratively swaps node pairs to reduce cut cost. This helps in applications like VLSI design, load balancing, and network optimization.",
      image: "/KL_Algo.png",
      technologies: ["C++", "Python"],
      github: "#",
      demo: "#",
    },
    {
      title: "PCM-Assisted Thermal Management for Electric Vehicles",
      description:
        "Implemented PCM-based thermal management for EV batteries using MATLAB and ANSYS; developed system-level thermal models in MATLAB and performed 3D multiphysics simulations in ANSYS to evaluate PCM effectiveness in reducing hotspots, enhancing temperature uniformity, and improving battery safety",
      image: "/stock-market-charts-and-graphs-on-computer-screen.jpg",
      technologies: ["MATLAB", "Simulink", "ANSYS", "EV", "TMS"],
      github: "#",
      demo: "#",
    },
    {
      title: "PMBLDC Motor for drones",
      description:
        "Simulated Permanent Magnet BLDC Motor design using MotorSolve, analyzing performance parameters such as torque, efficiency, and speed-torque characteristics.",
      image: "/Drone.png",
      technologies: ["Motorsolve", "High RPM", "Motor Control", "Simulink", "Design Calculation"], // Removed empty string
      github: "#",
      demo: "#",
    },
    {
      title: "PMSM Drive with Field-Oriented Control (FOC)",
      description:
        "The project involved designing and simulating a Permanent Magnet Synchronous Motor (PMSM) drive with Field-Oriented Control (FOC) to achieve precise torque and flux regulation with mathematical modeling. Using MATLAB/Simulink, vector control algorithms were implemented to decouple torque and flux components, enabling dynamic performance analysis under varying speed and load conditions. The simulations evaluated torque ripple, efficiency, and transient response, demonstrating the effectiveness of FOC in enhancing PMSM performance for high-precision and energy-efficient electric drives.",
      image: "/PMSM.png",
      technologies: ["Mathematical Modeling", "MATLAB", "Simulink", "FOC", "Motor controller"],
      github: "#",
      demo: "#",
    },
    {
      title: "Transformer design and analysis: core, yoke, frame, LV/HV windings, and loss estimation",
      description:
        "Proficient in designing and calculating transformer components, including core, yoke, frame, LV and HV windings, and evaluating associated losses. Experienced in analyzing transformer performance parameters to optimize efficiency, minimize losses, and ensure reliable operation under various load conditions.",
      image: "/T_W.png",
      technologies: ["Auto-CAD", "Engineering Drawing", "Mathematical Equation"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Projects</h2> {/* Fixed string formatting */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are some of the projects I've worked on that showcase my technical skills and problem-solving
            abilities. Each project represents a different aspect of my engineering journey.{" "}
            {/* Fixed string formatting */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>}{" "}
                {/* Fixed string formatting */}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    Code {/* Fixed string formatting */}
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo {/* Fixed string formatting */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
