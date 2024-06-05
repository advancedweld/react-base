/*
 * @Author: xiangshangzhi xiangshangzhi@xtfer.com
 * @Date: 2022-07-20 12:55:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 16:08:38
 * @FilePath: \react-base\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
    name: 'clical',
    entry: '//localhost:8080',
    container: '#vueSub',
    activeRule: '/app-vue',
  },
]);
// 启动 qiankun
start();
