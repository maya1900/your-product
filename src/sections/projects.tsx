import { projects } from '../data/projects';
import { Badge, Card, Container, SectionHeading } from '../components/ui';

export function Projects() {
  return (
    <section id="projects" className="section-reveal relative overflow-hidden bg-white py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Selected Works"
          title="项目展示"
          description="精选一些能体现产品理解、页面实现、组件设计和工程交付能力的项目。"
        />

        <div className="mt-10 space-y-8">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 1;

            return (
              <Card key={project.title} interactive className="overflow-hidden p-0">
                <div className="grid items-center gap-0 lg:grid-cols-2">
                  <div className={imageFirst ? 'lg:order-2' : ''}>
                    <div className="relative overflow-hidden bg-blue-50 p-5 sm:p-6">
                      <div className="dot-texture absolute right-5 top-5 h-24 w-24 opacity-25" />
                      <img
                        src={project.cover}
                        alt={`${project.title} 项目封面`}
                        className="relative aspect-[16/10] w-full border border-white object-cover shadow-xl shadow-blue-100/70"
                      />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <Badge className="border-slate-200 bg-slate-50 text-slate-700">
                      {project.tags[0]}
                    </Badge>
                    <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{project.summary}</p>
                    {project.outcome ? (
                      <p className="mt-5 border-l-4 border-blue-600 pl-4 text-sm leading-6 text-slate-700">
                        {project.outcome}
                      </p>
                    ) : null}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="border-slate-200 bg-slate-50 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.links ? (
                      <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-blue-700">
                        {project.links.demo ? <a className="border border-blue-200 bg-white px-4 py-2" href={project.links.demo}>Demo</a> : null}
                        {project.links.github ? <a className="border border-blue-200 bg-white px-4 py-2" href={project.links.github}>GitHub</a> : null}
                        {project.links.caseStudy ? <a className="border border-blue-200 bg-white px-4 py-2" href={project.links.caseStudy}>Case Study</a> : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
