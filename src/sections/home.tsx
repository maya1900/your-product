import { profile } from '../data/profile';
import { Badge, Button, Container } from '../components/ui';

export function Home() {
  const roleWords = profile.role.split(' ');

  return (
    <section id="home" className="section-reveal relative z-10 overflow-visible pb-0 pt-16 sm:pt-20">
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="dot-texture absolute right-8 top-28 h-36 w-36 opacity-50" />
      <div className="scribble-circle absolute left-4 top-1/2 hidden h-28 w-28 -translate-y-1/2 sm:block" />
      <div className="soft-grid absolute inset-0 -z-20 opacity-[0.18]" />
      <Container className="grid min-h-[560px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <Badge>Personal Portfolio</Badge>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.9] tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
            {roleWords.map((word, index) => (
              <span key={`${word}-${index}`} className={index === 1 ? 'block text-blue-600' : 'block'}>
                {word}
              </span>
            ))}
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects">
              <Button size="lg" className="rounded-none">
                查看项目
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-none border-blue-600 bg-white text-blue-700 hover:border-blue-700 hover:text-blue-800"
              >
                联系我
              </Button>
            </a>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mb-44 w-full max-w-sm self-end lg:-mb-48 lg:max-w-md">
          <div className="absolute -right-4 top-12 h-[82%] w-[82%] bg-blue-600" />
          <div className="absolute -right-7 -top-5 h-20 w-20 rounded-full bg-violet-200" />
          <div className="absolute -bottom-7 -left-7 h-28 w-28 rounded-full bg-blue-100" />
          <div className="scribble-circle absolute -bottom-7 right-8 h-20 w-20" />
          <div className="hero-float relative overflow-hidden border border-white bg-white p-3 shadow-2xl shadow-blue-100/80">
            <img
              src={profile.avatar}
              alt={`${profile.name} 的个人形象图`}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
