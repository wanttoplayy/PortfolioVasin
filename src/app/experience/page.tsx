import Header from '@/components/Header';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Professional Experience</h1>
        
        <div className="space-y-8">
          <ExperienceItem
            title="Software Engineer"
            company="Gosoft (CPAll)"
            period="Present"
            description={[
              "Migrated SQL queries from an old DB2 database to MySQL, transitioning from an on-premise server to a cloud-based server environment.",
              "Developed an internal website using Next.js and TypeScript, focusing on usability and delivering a seamless user experience.",
            ]}
          />

          <ExperienceItem
            title="Corporate Finance"
            company="Electricity Generating Public Company"
            period="2020 - 2022"
            description={[
              "Process/issue all payments of responsible subsidiaries",
              "Coordinate with financial institutions for the permitted investment to be proceeded and negotiate for the best interest of company",
              "Coordinate with bank, and prepare all the required documents for Good and service expense to be disbursed",
              "Update the outstanding balances and return on investment including detail of financial instrument being invested in responsible accounts",
            ]}
          />

          <ExperienceItem
            title="Financial Advisor"
            company="AIA"
            period="2019 - 2020"
            description={[
              "Carefully evaluate financial status of client to best determine proper investment for client interest",
              "Advise clients on risks and benefits of each category on market and addressing questions and concerns",
            ]}
          />

          <ExperienceItem
            title="Cabin Crew"
            company="Thai Lion Air"
            period="2014 - 2019"
            description={[
              "Ensure safety of passengers",
              "Maintaining a friendly, positive demeanor while communicating with passengers and responding to their demands",
              "Collaborating with colleagues to plan tasks and ensure sale activities were completed on time during flights",
            ]}
          />
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Education</h2>
        <div className="space-y-8">
          <EducationItem
            degree="Full-Stack Software Development"
            institution="TechUp Coding Bootcamp"
            period="Aug - Dec 2022"
          />

          <EducationItem
            degree="Bachelor of Science in Agricultural Economics"
            institution="Kasetsart University"
            period="2010 - 2014"
          />
        </div>
      </main>
    </div>
  );
}

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="border-l-4 border-primary pl-4 py-2">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <Briefcase size={18} className="mr-2" />
      <span>{company}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-2">
      <Calendar size={18} className="mr-2" />
      <span>{period}</span>
    </div>
    <ul className="list-disc list-inside space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const EducationItem = ({ degree, institution, period }) => (
  <div className="border-l-4 border-secondary pl-4 py-2">
    <h3 className="text-xl font-semibold">{degree}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <GraduationCap size={18} className="mr-2" />
      <span>{institution}</span>
    </div>
    <div className="flex items-center text-gray-600">
      <Calendar size={18} className="mr-2" />
      <span>{period}</span>
    </div>
  </div>
);