import google from '../../assets/imgs/google.png'
import logo from '../../assets/icons/logo.png'
import devs from '../../assets/icons/devs.png'
import icons from '../../assets/icons/icons.png'   



const Footer: React.FC = () => (

    <>
        <div>
            <div className="footer__container flex justify-between w-[85%] m-auto mt-[170px]">
                <div className="first flex flex-col justify-between gap-2">
                    <div className="logo flex gap-2">
                        <img src={logo} alt="logo" />
                        <img src={devs} alt="" />
                    </div>

                    <p className='font-inter text-[18px] text-[#718096] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                    <img src={google} alt="google" className='w-[200px] h-[55px]' />
                </div>
                <div className="second">
                    <h2 className='font-inter font-bold text-[#4A5568]'>Links</h2>

                    <ul className='no-underline text-[#718096] font-poppins text-[16px] flex flex-col gap-3 mt-5'>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>How it works</li>
                        <li>Blog</li>
                        <li>CareersAreas We Serve</li>
                        <li>Areas We Serve</li>
                    </ul>
                </div>

                <div className="third">
                    <h2 className='font-inter font-bold text-[#4A5568]'>Contact us</h2>
                    <p className='font-inter text-[18px] text-[#718096] mt-3 leading-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p className='font-inter text-[18px] text-[#718096] mt-7'>+923183561921</p>
                </div>
                <div className="fourth ">
                    <img src={icons} alt="" className='cursor-pointer mt-[260px] '  />
                </div>
            </div>
        </div>

    </>
)

export default Footer;