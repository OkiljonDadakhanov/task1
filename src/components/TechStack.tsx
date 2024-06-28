import React from 'react'
import Line from './Line'
import { Tabs } from 'antd'; 
import categories from '../utils/categories'




import '../styles/techStack.css'



const TechStack: React.FC = () => {
  return (
    <div className="container w-[85%] m-auto">
      <Line />
      <h1 className="text-[35px] font-inter text-center">
        Our
        <span className="font-bold block">Tech Stack</span>
      </h1>
      <Tabs defaultActiveKey="1" centered>
        {categories.map((category, idx) => (
          <Tabs.TabPane tab={category.name} key={idx + 1}>
            <div className="image-container">
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
