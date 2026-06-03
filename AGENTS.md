# AGENTS.md

- 本项目为 React 18 + taro + TypeScript 前端应用
- 包管理器：yarn，Node >= 24.14.0
- 样式方案：Less + CSS Modules

## Project Structure

src/
├── pages/          # 页面
├── hooks/          # 自定义 Hooks
├── services/       # API 请求封装
├── models/         # 全局状态
├── utils/          # 工具函数
├── typings/        # 类型定义
├── constants/      # 常量
└── app.tsx         # 应用入口

- Never edit dist/ — 构建产物

## Coding Style

- 使用 interface 定义 Props
- 组件命名：PascalCase，文件名 index.tsx
- Never 使用 any 类型
- Never 使用内联样式

## Build Commands

npm run dev:h5    # 开发服务器
npm run build:h5    # 生产构建
