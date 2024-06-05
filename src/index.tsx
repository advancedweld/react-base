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
import './assets/style/common.css';
import './style.less';

function App() {
  return (
    <div>
      <h1>hello , react!</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

console.log('app loaded!');

registerMicroApps([
  {
    name: 'aisha',
    entry: '//localhost:3000',
    container: '#reactSub',
    activeRule: '/app-react',
  },
  {
    name: 'clinical',
    entry: '//localhost:8080',
    container: '#vueSub',
    activeRule: '/app-vue',
  },
]);
// 启动 qiankun
start();
