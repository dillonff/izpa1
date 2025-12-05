import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from 'react-icons/hi2';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';
import { images } from '../../assets/media';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col space-y-8">
          {/* Top Section: Logo */}
          <div>
            <img
              src={images.logoWithName}
              alt="IZ Planning and Architecture"
              className="h-8 w-auto"
            />
          </div>

          {/* Middle Section: Contact Info */}
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12 text-gray-400">
            <div className="flex items-center space-x-2">
              <HiOutlineEnvelope className="w-4 h-4 flex-shrink-0" />
              <a
                href="mailto:info@izpa.com.au"
                className="hover:text-white transition-colors text-sm tracking-wide"
              >
                info@izpa.com.au
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <HiOutlineMapPin className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm tracking-wide">Sydney, Australia</p>
            </div>

            <div className="flex items-center space-x-2">
              <HiOutlinePhone className="w-4 h-4 flex-shrink-0" />
              <a
                href="tel:0408888888"
                className="hover:text-white transition-colors text-sm tracking-wide"
              >
                8888888888
              </a>
            </div>
          </div>

          {/* Bottom Section: Social Media and Copyright */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-6 border-t border-white/10">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.xiaohongshu.com/user/profile/629d4439000000001b024a85"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Xiaohongshu"
              >
                <SiXiaohongshu className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/iz-planning-and-architecture/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/iz_planning_architecture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-gray-400 tracking-wide font-light">
              &copy; {new Date().getFullYear()} IZ Planning and Architecture.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
