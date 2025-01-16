const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
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
