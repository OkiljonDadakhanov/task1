import React from 'react';
import Step from './AlcalineWorksCard';
import Line from '../Common/Line';
import VerticalLine from '../Common/VerticalLine';
import trophy from '../../assets/imgs/trophy.png'

import '../../styles.css'


const AlcalineWorks: React.FC = () => (
    <>
        <Line />

        <h1 className="text-[35px] font-inter text-center">
            How development
        <span className="font-bold block">through Alcaline works</span>
        </h1>

        <div className="container w-[80%] m-auto flex justify-between gap-5 mt-7">
            <Step
                stepNumber={1}
                title="Assemble the right team"
                description="We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
            />
            <Step
                stepNumber={3}
                title="Tech architecture"
                description="We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently."
            />
            <Step
                stepNumber={5}
                title="Code reviews"
                description="Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells."
            />

        </div>

        <VerticalLine className='top-3 ml-[300px]' />
        <VerticalLine className='top-3 ml-[750px]' />
        <VerticalLine className='top-3 ml-[1200px]' />

        <div className="div flex relative">

        <hr className=" hr w-[90%] m-auto h-1 bg-slate-950 mt-[70px] mb-[70px]" />

        <img src={trophy} alt="trophy" className="h-[42px] mt-[40px] mr-[30px]" />

        </div>

        <VerticalLine className="bottom-[10px] left-[430px]"  />
        <VerticalLine className="bottom-[10px]  left-[850px]"  />
        <VerticalLine className="bottom-[10px]  left-[1250px]"  />

        <div className="container w-[80%] m-auto flex justify-between gap-5 mt-7 mr-[60px]">
            <Step
                stepNumber={2}
                title="Sprint planning"
                description="Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
            />
            <Step
                stepNumber={4}
                title="Standups & weekly demos"
                description="Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
            />
            <Step
                stepNumber={6}
                title="Iterative delivery"
                description="We divide the implementation process into several checkpoints rather than a single deadline."
            />

        </div>



    </>
);


export default AlcalineWorks;
