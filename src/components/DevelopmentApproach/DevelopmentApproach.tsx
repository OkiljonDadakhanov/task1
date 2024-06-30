import React, { useRef } from "react";
import { Col, Row } from "antd";
import Line from "../Common/Line";
import development from "../../utils/DevelopmentApproach";
import { motion, useInView } from "framer-motion";

const DevelopmentApproach: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <>
      <Line />
      <h1 className="text-[35px] font-inter text-center">
        Our design and
        <span className="font-bold block">development approach</span>
      </h1>

      <div className="w-[85%] m-auto mt-4" ref={ref}>
        <Row gutter={[16, 16]} className="w-full mt-4">
          {development.map((item, index) => (
            <Col key={item.id} span={12}>
              <motion.div
                className="driven border-2 border-slate-300 flex justify-evenly p-6"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="rounded-lg p-4 h-[75px] w-[75px]"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${item.from}, ${item.to})`,
                  }}
                />
                <div className="info ml-3 flex flex-col gap-3">
                  <h1 className="font-semibold text-[20px] text-[#1A202C]">
                    {item.title}
                  </h1>
                  <p className="text-[14px] text-[#4A5568]">
                    Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default DevelopmentApproach;
