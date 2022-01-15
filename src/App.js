import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
  const [checked, setChecked] = useState(); //Truyền id trực tiếp vào trong sẽ tạo ra lựa chọn mặc định trên UI

  console.log(checked);

  const handleSubmit = () => {

  }
  return (
    <div style={{ padding: 200 }}>
      {courses.map(course => (
        <div key={course.id}> 
          <input 
            type='radio' 
            checked={checked === course.id} //Khớp đúng id với ô tích, những lựa chọn không khớp sẽ bị loại -> tạo ra 1 lựa chọn duy nhất
            onChange={() => setChecked(course.id)} //Kiểm tra ô radio đúng với id của dữ liệu
          />
          {course.name}
        </div>
  ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
