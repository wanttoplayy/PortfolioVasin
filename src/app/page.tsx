import Header from '@/components/Header';
import { Code, Server, Cloud, Database, GraduationCap } from 'lucide-react';

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
            <SkillCard icon={<Code />} title="Front-End" skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"]} />
            <SkillCard icon={<Server />} title="Back-End" skills={["Node.js", "Express.js", "MongoDB", "PostgreSQL"]} />
            <SkillCard icon={<Cloud />} title="Cloud & DevOps" skills={["AWS", "Git", "GitHub", "CI/CD"]} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertificationCard icon={<Cloud />} title="AWS Cloud Practitioner" />
            <CertificationCard icon={<Database />} title="Azure Fundamentals" />
            <CertificationCard icon={<GraduationCap />} title="Full-Stack Software Development Bootcamp" org="TechUp" />
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
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
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