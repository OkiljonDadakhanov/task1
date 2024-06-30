import React from 'react';
import Line from '../Common/Line';
import { Tabs } from 'antd'; 
import categories from '../../utils/Categories'
import '../../styles/TechStack.css';


const TechStack: React.FC = () => {

  
  return (
    <div className="container w-[85%] m-auto mt-5">
      <Line />
      <h1 className="text-[35px] font-inter text-center">
        Our
        <span className="font-bold block">Tech Stack</span>
      </h1>
      <Tabs defaultActiveKey="1" centered tabBarStyle={{ backgroundColor: '#f0f0f0', color: '#000', fontWeight: 'bold' }}>
        {categories.map((category, idx) => (
          <Tabs.TabPane tab={category.name} key={idx + 1}>
            <div className="image-container " >
              {category.images.map((img, index) => (
                <img key={index} src={img} alt={`${category.name} tech stack ${index + 1}`} />
              ))}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TechStack;
