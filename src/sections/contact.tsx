import { contact } from '../data/contact';
import { Button, Card, Container, SectionHeading } from '../components/ui';

export function Contact() {
  return (
    <section id="contact" className="section-reveal py-14 sm:py-18">
      <Container>
        <Card className="relative overflow-hidden !border-blue-600 !bg-blue-600 p-8 !text-white shadow-2xl shadow-blue-200/80 sm:p-12 lg:p-16">
          <div className="dot-texture absolute right-10 top-10 h-40 w-40 opacity-55" />
          <div className="scribble-circle absolute bottom-8 left-8 h-24 w-24 border-white/40" />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="relative z-10">
              <SectionHeading
                eyebrow="Contact"
                title="Anything in Mind? Let's Talk"
                description={contact.description}
                inverted
              />
            </div>
            <div className="space-y-6">
              <a href={`mailto:${contact.email}`}>
                <Button size="lg" variant="secondary" className="w-full border-white bg-white text-blue-700 hover:text-blue-800 sm:w-auto">
                  {contact.email}
                </Button>
              </a>
              <div className="relative z-10 flex flex-wrap gap-4 text-sm font-semibold text-white">
                {contact.socials.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
