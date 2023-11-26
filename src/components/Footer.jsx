const Footer = () => {
  return (
    <footer className="bg-darkBlue2  text-white ">
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6 ">
            <div className="flex items-center space-x-3 md:-mt-10 ">
              <img src="/images/icon-phone.svg" alt="phone" className="w-6" />
              <p>08766564444</p>
            </div>
            <div className="flex items-center space-x-3 md:-mt-10 ">
              <img src="/images/icon-email.svg" alt="email" className="w-6" />
              <p>lorem@email.com</p>
            </div>
          </div>
          {/*Menu */}
          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accentCyan">
                About
              </a>
              <a href="#" className="hover:text-accentCyan">
                Jobs
              </a>
              <a href="#" className="hover:text-accentCyan">
                Press
              </a>
              <a href="#" className="hover:text-accentCyan">
                Blog
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accentCyan">
                Contact Us
              </a>
              <a href="#" className="hover:text-accentCyan">
                Terms
              </a>
              <a href="#" className="hover:text-accentCyan">
                Privacy
              </a>
            </div>
          </div>
          {/*Social */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <img
                src="/images/twitter.svg"
                alt="twitter"
                className="bg-darkBlue rounded-full ficon p-2"
              />
            </div>
            <div>
              <img
                src="/images/instagram.svg"
                alt="instagram"
                className="bg-darkBlue rounded-full ficon p-2"
              />
            </div>
            <div>
              <img
                src="/images/facebook.svg"
                alt="facebook"
                className="bg-darkBlue rounded-full ficon p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
