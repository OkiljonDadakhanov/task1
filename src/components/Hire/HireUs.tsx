import '../../styles.css'

import lines from '../../assets/imgs/featured/lines.png'

import lines1 from '../../assets/imgs/featured/lines1.png'


const HireUs: React.FC = () => (

    <>

        <div className="hire__container flex justify-between w-[85%] m-auto h-[285px] items-center rounded-lg p-6 mt-[155px]">
            <div className="h">
                <h1 className='text-[#29272E] text-[35px] font-inter font-bold'>Hire the best developers and designers around!</h1>
            </div>

            <div className="btn relative">
                <img src={lines}  alt="lines" className='absolute bottom-[80px] left-[60px]' />
                <button className='text-[#FAFAFA] font-inter font-bold text-[18px] py-[10px] px-[30px] border-none rounded-md hire__btn'>
                    <img src={lines1} alt="lines 1" className='absolute top-[80px] right-[60px]' />
                    Hire Top Developers
</button>

            </div>
        </div>

        

    </>

)

export default HireUs;