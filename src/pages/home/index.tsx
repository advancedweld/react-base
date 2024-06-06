/*
 * @Author: xiangshangzhi
 * @Date: 2024-06-04 17:12:27
 * @FilePath: \react-base\src\App.tsx
 * @Description:
 */

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>hello, react!</h1>
      <Link to='/vue'>vueSub</Link>
    </div>
  );
}
