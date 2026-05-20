import { profile } from '../data/profile';
import { Badge, Card, Container } from '../components/ui';

export function About() {
  return (
    <section id="about" className="section-reveal relative z-0 overflow-visible bg-white pb-14 pt-48 sm:pb-18 sm:pt-52">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative">
          <Badge>About Me</Badge>
          <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">
            Hi, I'm <span className="text-blue-600">{profile.name}</span>.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            用清晰的产品思维和稳定的工程实现，把想法落成真实可用的 Web 体验。
          </p>
          <div className="dot-texture absolute -bottom-12 right-8 hidden h-32 w-32 opacity-40 lg:block" />
        </div>

        <Card className="p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-700">{profile.bio}</p>

          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              专注领域
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.focusAreas.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {profile.strengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm font-semibold text-slate-700"
              >
                <span className="mb-3 block h-2 w-8 rounded-full bg-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
