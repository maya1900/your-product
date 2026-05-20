# 个人作品集网站 TECH_DESIGN

## 1. 技术目标

本项目使用 React + TypeScript + Vite + Tailwind CSS 搭建一个轻量、高性能、易维护的个人作品集网站。

目标是：

- 静态优先，保证首屏速度
- 内容数据化，便于更新
- 组件模块化，便于扩展
- 视觉统一，符合个人品牌气质
- 动效克制，不影响性能

## 2. 推荐技术栈

### 2.1 基础栈

- React
- TypeScript
- Vite
- Tailwind CSS

### 2.2 可选补充

- Framer Motion：少量动效
- Lucide React：图标
- React Hook Form + Zod：联系表单

### 2.3 部署

- Vercel

## 3. 架构设计

### 3.1 分层

1. 页面层：组织首页模块
2. 区块层：Home、About、Projects、Contact
3. 组件层：Button、Card、Container、SectionHeading
4. 数据层：个人信息、项目数据、联系信息
5. 工具层：格式化和通用方法

### 3.2 目录结构

```txt
src/
  components/
    layout/
    ui/
  sections/
  data/
  lib/
  types/
public/
  images/
```

## 4. 数据模型

### 4.1 Profile

```ts
type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatar: string;
  email: string;
  socials: { label: string; href: string }[];
};
```

### 4.2 Project

```ts
type Project = {
  title: string;
  summary: string;
  cover: string;
  tags: string[];
  outcome?: string;
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
};
```

### 4.3 Contact

```ts
type ContactInfo = {
  title: string;
  description: string;
  email: string;
  socials: { label: string; href: string }[];
};
```

## 5. 页面实现原则

### 5.1 首页

首页使用静态优先渲染，内容从 data 文件读取。

建议结构：

```tsx
<main>
  <Home />
  <About />
  <Projects />
  <Contact />
</main>
```

### 5.2 客户端组件

仅在必要时使用客户端组件，例如：

- 动效包装
- 联系表单状态
- 简单计数动画

其余展示内容尽量保持静态。

## 6. 组件设计

### 6.1 基础组件

- Button
- Badge
- Card
- Container
- SectionHeading

### 6.2 设计原则

- 单一职责
- 可复用
- 低耦合
- 易维护

## 7. 设计系统

### 7.1 颜色

- 背景：白色或接近白色
- 文本：深灰蓝
- 边框：浅灰
- 强调色：蓝色或蓝紫色

### 7.2 字体

- 标题：足够大、足够醒目
- 正文：清晰易读
- 避免使用过多字体

### 7.3 间距

- 区块保持足够留白
- 卡片内边距统一
- 控制内容最大宽度

## 8. 动效设计

动效要少而精，只用于增强体验：

- 区块渐显
- 卡片 hover 上浮
- 按钮状态变化
- Hero 图片轻微浮动

如果系统启用了减少动态效果，应降低或关闭动画。

## 9. 表单设计

如果实现联系表单，建议字段：

- name
- email
- message

可选字段：

- projectType
- budget

## 10. SEO 设计

必须配置：

- title
- description
- Open Graph
- Twitter Card
- 图片 alt

## 11. 性能设计

### 11.1 要求

- 优先静态资源
- 图片优化
- 非首屏懒加载
- 避免不必要的大依赖

### 11.2 目标

- 首页加载快
- 滚动流畅
- 移动端体验稳定

## 12. 测试与验收

建议检查：

- 页面能正常构建
- TypeScript 无错误
- 响应式正常
- 导航锚点可用
- SEO 信息完整

## 13. 部署

建议使用 Vercel 部署，便于预览和持续发布。
