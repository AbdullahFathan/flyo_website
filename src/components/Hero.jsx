const Hero = () => {
  return (
    <section className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
      {/*Image */}
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img
          src="/images/illustration-intro.png"
          alt="intro"
          className="mx-auto"
        />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button
          type="button"
          className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
export default Hero;
