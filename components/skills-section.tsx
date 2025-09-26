import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "Python", level: 85 },
  { name: "React/Next.js", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Database Design", level: 78 },
  { name: "Machine Learning", level: 75 },
  { name: "System Design", level: 80 },
  { name: "DevOps/CI/CD", level: 70 },
]

const categories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "TensorFlow"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Engineering Skills",
    skills: ["System Design", "Algorithm Design", "Data Structures", "Testing", "Debugging", "Code Review"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Proficiency Levels</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Technical Stack</h3>
            <div className="space-y-6">
              {categories.map((category) => (
                <Card key={category.title} className="border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
