'use client'

import { useState } from 'react';
import { Briefcase, Calendar, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold mb-6">Professional Experience</h1>
        </ScrollAnimation>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <ExperienceItem
            title="Software Engineer"
            company="Gosoft (CPAll)"
            period="Present"
            description={[
              "Migrated SQL queries from an old DB2 database to MySQL, transitioning from an on-premise server to a cloud-based server environment.",
              "Developed an internal website using Next.js and TypeScript, focusing on usability and delivering a seamless user experience.",
            ]}
            skills={['Next.js', 'TypeScript', 'MySQL', 'Cloud Migration']}
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
            skills={['Financial Analysis', 'Investment Management', 'Negotiation', 'Documentation']}
          />

          <ExperienceItem
            title="Financial Advisor"
            company="AIA"
            period="2019 - 2020"
            description={[
              "Carefully evaluate financial status of client to best determine proper investment for client interest",
              "Advise clients on risks and benefits of each category on market and addressing questions and concerns",
            ]}
            skills={['Financial Planning', 'Risk Assessment', 'Client Relations', 'Market Analysis']}
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
            skills={['Customer Service', 'Safety Procedures', 'Teamwork', 'Sales', 'Crisis Management']}
          />
        </div>

        <ScrollAnimation>
          <h2 className="text-3xl font-bold mt-12 mb-6">Education</h2>
        </ScrollAnimation>
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

const ExperienceItem = ({ title, company, period, description, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollAnimation>
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
          {period}
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            {period}
          </time>
          <div className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</div>
        </div>
        <div className="text-slate-500 dark:text-slate-400 mb-2">{company}</div>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : '0' }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="list-disc list-inside space-y-1 text-foreground mb-4">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-sm font-medium text-primary hover:underline"
        >
          {isOpen ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show More
            </>
          )}
        </button>
      </div>
    </ScrollAnimation>
  );
};

const EducationItem = ({ degree, institution, period }) => (
  <ScrollAnimation>
    <div className="border-l-4 border-secondary pl-4 py-2 bg-secondary/5 rounded hover:bg-secondary/10 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-foreground">{degree}</h3>
      <div className="flex items-center text-secondary mb-2">
        <GraduationCap size={18} className="mr-2" />
        <span className='text-slate-400'>{institution}</span>
      </div>
      <div className="flex items-center text-secondary">
        <Calendar size={18} className="mr-2" />
        <span className='text-slate-400'>{period}</span>
      </div>
    </div>
  </ScrollAnimation>
);