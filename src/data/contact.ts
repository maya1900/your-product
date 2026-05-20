import type { ContactInfo } from '../types/portfolio';
import { profile } from './profile';

export const contact: ContactInfo = {
  title: '有想法想一起实现？',
  description: '如果你正在寻找一个能把产品想法转化为高质量 Web 体验的开发者，欢迎联系我。',
  email: profile.email,
  socials: profile.socials,
};
