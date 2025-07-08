// src/components/Skills.tsx
import { DiFirebase } from "react-icons/di";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaAmazon, FaJava, FaLinux, FaDocker, FaGithub, FaAirbnb, FaJira, FaPython } from "react-icons/fa";
import { Fa0, FaFigma, FaPhp } from "react-icons/fa6";
import { SiCplusplus, SiDotnet, SiTypescript } from "react-icons/si";



const IconCSharp = () => (
  <span className="inline-flex items-center px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-medium">
    C#
  </span>
);

const skills = [
    
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Next.js", icon: <FaReact className="text-gray-800" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-gray-700" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-800" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-blue-800" /> },
    { name: "MySQL", icon: <FaDatabase className="text-red-600" /> },
    { name: "SqlServer", icon: <FaDatabase className="text-blue-600" /> },
    { name: "Firebase", icon: <DiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <FaGithub className="text-orange-500" /> },
  
    { name: "REST APIs", icon: <FaAirbnb className="text-gray-600" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "AWS", icon: <FaAmazon className="text-yellow-500" /> },
    { name: "Agile/Scrum", icon: <FaJira className="text-green-500" /> },
    { name: "UI/UX Design", icon: <FaJsSquare className="text-pink-500" /> },
    
    { name: "Testing (Jest, Cypress)", icon: <Fa0 className="text-blue-500" /> },
    { name: "C#", icon: <IconCSharp  /> },
    { name: ".NET", icon: <SiDotnet className="text-blue-600" /> },
    
    { name: "Linux", icon: <FaLinux className="text-gray-700" /> },
   ,
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "PHP", icon: <FaPhp className="text-blue-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Java", icon: <FaJava className="text-red-700" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
   
    


];

export default function Skills() {
  return (
    <section className="bg-white py-16 px-4" id="skills">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Mes Compétences</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill, idx) =>
          skill ? (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm text-gray-600">{skill.name}</p>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
