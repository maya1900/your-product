import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    summary: '一个用于展示个人品牌、精选项目和联系方式的响应式作品集网站。',
    cover: '/images/project-placeholder.svg',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    outcome: '建立清晰的个人展示入口，支持后续持续更新项目内容。',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Product Landing Page',
    summary: '面向产品宣传和转化的落地页设计与前端实现。',
    cover: '/images/project-placeholder.svg',
    tags: ['Landing Page', 'Responsive Design', 'UI Engineering'],
    outcome: '强化首屏表达和行动路径，提升访客理解效率。',
    links: {
      caseStudy: '#',
    },
  },
  {
    title: 'Dashboard Interface',
    summary: '数据看板界面原型，关注信息层级、组件复用和响应式体验。',
    cover: '/images/project-placeholder.svg',
    tags: ['Dashboard', 'Component Design', 'Data UI'],
    outcome: '沉淀可复用组件结构，便于后续扩展业务模块。',
  },
];
