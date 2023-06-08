import { BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
            <img className="w-32 " src="/logo.png" alt="" />
                <p className="text-slate-500"><span className="text-white text-2xl font-bold uppercase">Click Master</span><br />Empowering Student Photographers</p>
                <br />
                <p className='inline-flex gap-1'><BsFillTelephoneFill className='bg-orange-600 text-xl rounded p-1'/> ++880243744783</p>
            </div>
            <div>
                <span className="footer-title"></span>
                <a className="link link-hover">Education</a>
                <a className="link link-hover">Products</a>
                <a className="link link-hover">Cart</a>
                <a className="link link-hover">Feedback</a>
                
            </div>
            <div>
                <span className="footer-title"></span>
                <a className="link link-hover">Articles</a>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Gallery</a>
                <a className="link link-hover">Contacts</a>
                
            </div>
            
        </footer>
    );
};

export default Footer;