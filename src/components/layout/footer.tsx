import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 font-semibold">
          <a href={`mailto:${contact.email}`} className="hover:text-blue-700">
            Email
          </a>
          {contact.socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-blue-700">
              {item.label}
            </a>
          ))}
          <a href="#home" className="hover:text-blue-700">
            返回顶部
          </a>
        </div>
      </Container>
    </footer>
  );
}
