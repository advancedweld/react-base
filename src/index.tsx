/*
 * @Author: xiangshangzhi
 * @Date: 2024-06-04 17:12:27
 * @FilePath: \react-base\src\index.tsx
 * @Description:
 */
// webpack的入口文件：src/index.tsx

// import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import { registerMicroApps, start } from 'qiankun';
import InnerApp from './App';
// import './assets/style/common.css';
// import './style.less';

function App() {
  return <InnerApp />;
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

console.log('app loaded!');

registerMicroApps([
  // {
  //   name: 'aisha',
  //   entry: '//localhost:3000',
  //   container: '#reactSub',
  //   activeRule: '/app-react',
  // },
  {
    name: 'vueSub',
    entry: '//localhost:3005',
    container: '#vueSub',
    activeRule: '/vue',
  },
]);
// 启动 qiankun
start();
