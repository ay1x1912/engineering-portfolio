import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Skills",
      description: (
        <ul className="text-left space-y-1">
          <li>• Design & Analysis: Motor Design, Thermal Management, Circuit Simulation</li>
          <li>• Domains: Electric Machines, EV Powertrain Systems, Control Systems, Automation</li>
          <li>• Software & Tools: ANSYS Maxwell, MotorSolve, MATLAB/Simulink, PLC & SCADA(schneider electric), Quartus Altera, Microwind, Auto-CAD</li>
          <li>• Others: CNC programming language, HTML, CSS, Javascript, verilog HDL, Aurduino, esp32, 8051 microcontroller.</li>
        </ul>
      ),
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: (
        <ul className="text-left space-y-1">
          <li>• Explored advanced Phase Change Materials (PCM) for innovative thermal management in electric vehicle powertrains, enhancing system reliability.</li>
          <li>• Pioneered rotor geometry modifications in a Switched Reluctance Motor (SRM) to achieve smoother torque output and mitigate ripple.</li>
          <li>• Designed PLC and SCADA-based automation frameworks to bring efficiency and intelligence to industrial operations.</li>
          <li>• Developed a compact Single-Port RAM architecture in Verilog, emphasizing high-speed memory access with optimized resource usage.</li>
          <li>• Engineered a specialized KL Algorithm Calculator in Verilog to accelerate complex probabilistic computations.</li>
          <li>• Innovatively implemented a CMOS-based equivalent inverter circuit for a 2-bit Full Adder, optimizing carry-output generation for reduced complexity. </li>
          <li> •Created a 4-bit synchronous up/down counter with dynamic mode-switching in Verilog, showcasing versatile digital system design.</li>
        </ul>
      ),
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{"About Me"}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {
              "I'm a final-year Electrical Engineering student with a passion for electrical systems and innovative technology solutions. My journey has been focused on building practical electrical systems and gaining hands-on experience."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <div className="text-sm text-muted-foreground text-pretty">{highlight.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">{"My Journey"}</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 text-pretty">
                  {
                    "Currently in my final year of Electrical Engineering at Nirma University, I've spent the last four years diving deep into both theoretical concepts and practical applications. My coursework has covered everything from circuit analysis and to embedded programming and motor control technologies."
                  }
                </p>
                <p className="mb-4 text-pretty">
                  {
                    "What sets me apart is my hands-on approach to learning. I believe in building projects that solve real electrical engineering problems, which has led me to develop power monitoring systems, embedded control solutions, and motor configuration projects. Each project has taught me valuable lessons about system design, efficiency optimization, and the importance of reliable, maintainable electrical systems."
                  }
                </p>
                <p className="text-pretty">
                  {
                    "As I prepare to enter the professional world, I'm excited to bring my technical skills, analytical problem-solving abilities, and collaborative mindset to a dynamic engineering team where I can continue to learn and make meaningful contributions to electrical engineering projects."
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
