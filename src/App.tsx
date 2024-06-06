/*
 * @Author: xiangshangzhi
 * @Date: 2024-06-04 17:12:27
 * @FilePath: \react-base\src\App.tsx
 * @Description:
 */

import { Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import './assets/style/common.css';
import './style.less';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <Home />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
