import React, { useState } from 'react';
import Line from '../Common/Line';
import { Tabs } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import categories from '../../utils/Categories';
import '../../styles/TechStack.css';

const TechStack: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(categories[0].name);

  const handleTabChange = (key: string) => {
    setSelectedTab(categories[parseInt(key) - 1].name);
  };

  return (
    <div className="container w-[85%] m-auto mt-5">
      <Line />
      <h1 className="text-[35px] font-inter text-center">
        Our
        <span className="font-bold block">Tech Stack</span>
      </h1>
      <Tabs
        defaultActiveKey="1"
        centered
        tabBarStyle={{ backgroundColor: '#f0f0f0', color: '#000', fontWeight: 'bold' }}
        onChange={handleTabChange}
      >
        {categories.map((category, idx) => (
          <Tabs.TabPane tab={category.name} key={idx + 1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={category.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="image-container">
                  {category.images.map((img, index) => (
                    <img key={index} src={img} alt={`${category.name} tech stack ${index + 1}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TechStack;
