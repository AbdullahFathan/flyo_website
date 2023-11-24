const Productive = () => {
  return (
    <div className="bg-white dark:bg-darkBlue">
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <img
          src="/images/illustration-stay-productive.png"
          alt="productive"
          className="md:w-1/2 mb-10"
        />
        <div className="flex flex-col space-y-5">
          <h4 className="max-w-md text-xl font-bold md:text-4xl">
            Stay productive, wherever you are
          </h4>
          <p className="text-md md:text-lg">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br className="mb-8" />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="block mt-4">
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Flyo works.
              <img
                src="/images/icon-arrow.svg"
                alt="arrow"
                className="inline pb-2 ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productive;
