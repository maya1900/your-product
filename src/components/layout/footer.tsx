import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui';

const REPO_URL = 'https://github.com/maya1900/your-product';
const ISSUES_URL = `${REPO_URL}/issues`;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-6 text-sm text-slate-500">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              关于本站
            </p>
            <p className="mt-2 leading-6">
              使用 React + Vite + Tailwind 构建的个人作品集模板，开源可自取。欢迎提 Issue 反馈使用问题或想法。
            </p>
          </div>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-700"
            >
              GitHub 仓库
            </a>
            <a
              href={ISSUES_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-blue-700"
            >
              提交反馈 / Issues
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
        </div>
      </Container>
    </footer>
  );
}
