import Header from '@/components/Header';
import { Gamepad, Activity, Plane, User, Briefcase, Code } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
          <div className="flex items-center mb-2">
            <Gamepad className="mr-2" />
            <p>Avid video game enthusiast</p>
          </div>
          <div className="flex items-center">
            <Activity className="mr-2" />
            <p>Passionate badminton player</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <Timeline />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Software Development?</h2>
          <p className="mb-4">
            My journey into software development began when a friend opened my eyes to the possibilities in the tech industry.
            Despite not having a traditional IT background, I discovered that with dedication and the right training, I could
            build a career in this dynamic field.
          </p>
          <p>
            After completing an intensive 3.5-month bootcamp at TechUp, I successfully transitioned into a role as a
            full-stack developer at Gosoft (CP ALL). This experience has reinforced my belief in the power of continuous
            learning and adaptability in today&apos;s rapidly evolving job market.
          </p>
        </section>
      </main>
    </div>
  );
}

const TimelineItem = ({ icon, title, description }: any) => (
  <div className="flex mb-4">
    <div className="flex flex-col items-center mr-4">
      <div className="rounded-full bg-primary text-primary-foreground p-2">
        {icon}
      </div>
      <div className="h-full w-0.5 bg-border"></div>
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Timeline = () => (
  <div>
    <TimelineItem
      icon={<User />}
      title="Early Career Aspirations"
      description="After graduation, I pursued my dream of becoming a pilot, but despite not passing the student pilot test, this experience taught me valuable lessons about perseverance."
    />
    <TimelineItem
      icon={<Plane />}
      title="Cabin Crew"
      description="For 4 years, I worked happily as a cabin crew member, gaining invaluable experience in customer service and working in a fast-paced, multicultural environment."
    />
    <TimelineItem
      icon={<Briefcase />}
      title="Financial Sector"
      description="Seeking growth, I transitioned to roles as a Financial Advisor at AIA and later as a Finance Officer at EGCO, where I handled corporate finance, including loans and dividend payments."
    />
    <TimelineItem
      icon={<Code />}
      title="Tech Transition"
      description="Inspired by a friend, I enrolled in a 3.5-month bootcamp at TechUp, which led to my current role as a Full Stack Developer at Gosoft (CP ALL), marking an exciting new chapter in my career."
    />
  </div>
);