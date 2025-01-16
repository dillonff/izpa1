import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              IZ Planning and Architecture
            </h3>
            <p className="text-gray-400">
              Innovative solutions in town planning, architecture, and interior
              design.
            </p>
          </div>

          {/* Contact Info - Email */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Email</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <HiOutlineEnvelope className="w-5 h-5" />
              <a
                href="mailto:info@izplanning.com"
                className="hover:text-white transition-colors"
              >
                info@izplanning.com
              </a>
            </div>
          </div>

          {/* Contact Info - Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Address</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <HiOutlineMapPin className="w-5 h-5" />
              <p>
                123 Business Street
                <br />
                Melbourne, VIC 3000
              </p>
            </div>
          </div>

          {/* Contact Info - Phone */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Phone</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <HiOutlinePhone className="w-5 h-5" />
              <a
                href="tel:+61123456789"
                className="hover:text-white transition-colors"
              >
                +61 1234 56789
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} IZ Planning and Architecture. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
