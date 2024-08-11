import Header from '@/components/Header';
import { Code, Server, Cloud, Database, GraduationCap } from 'lucide-react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, 
 SiCypress, SiAzuredevops
} from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Vasin Suksuchit</h1>
          <p className="text-xl">Software Developer | Full-Stack Engineer</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard 
              icon={<Code size={24} />} 
              title="Front-End" 
              skills={[
                { name: "HTML", icon: <FaHtml5 size={24} className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs size={24} className="text-yellow-400" /> },
                { name: "React", icon: <FaReact size={24} className="text-blue-400" /> },
                { name: "Next.js", icon: <SiNextdotjs size={24} /> },
                { name: "TypeScript", icon: <SiTypescript size={24} className="text-blue-600" /> },
              ]} 
            />
            <SkillCard 
              icon={<Server size={24} />} 
              title="Back-End" 
              skills={[
                { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress size={24} /> },
                { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-600" /> },
                { name: "PostgreSQL", icon: <SiPostgresql size={24} className="text-blue-400" /> },
              ]} 
            />
            <SkillCard 
              icon={<Cloud size={24} />} 
              title="Cloud & DevOps" 
              skills={[
                { name: "AWS", icon: <FaAws size={24} className="text-orange-400" /> },
                { name: "Azure", icon: <SiAzuredevops size={24} className="text-blue-500" /> },
                { name: "Git", icon: <FaGitAlt size={24} className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub size={24} /> },
                { name: "Docker", icon: <FaDocker size={24} className="text-blue-400" /> },
                { name: "Cypress", icon: <SiCypress size={24} /> },
              ]} 
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertificationCard icon={<FaAws size={24} className="text-orange-400" />} title="AWS Cloud Practitioner" />
            <CertificationCard icon={<SiAzuredevops size={24} className="text-blue-500" />} title="Azure Fundamentals" />
            <CertificationCard icon={<GraduationCap size={24} />} title="Full-Stack Software Development Bootcamp" org="TechUp" />
          </div>
        </section>
      </main>
    </div>
  );
}

const SkillCard = ({ icon, title, skills }) => (
  <div className="p-4 border rounded-lg shadow-sm">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          {skill.icon}
          <span className="ml-2">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CertificationCard = ({ icon, title, org }) => (
  <div className="p-4 border rounded-lg shadow-sm flex items-center">
    {icon}
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {org && <p className="text-sm text-gray-600">{org}</p>}
    </div>
  </div>
);