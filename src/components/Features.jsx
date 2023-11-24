import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const [showSecondRow, setShowSecondRow] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount, e.g., 300 pixels

      if (window.scrollY > 910) {
        setShowSecondRow(true);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:text-left md:space-y-0">
          <FeatureCard
            title={"Access your file from anywhere"}
            content={
              "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
            }
            image={"/images/icon-access-anywhere.svg"}
          />
          <FeatureCard
            title={"Security you can trust"}
            content={
              "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"
            }
            image={"/images/icon-security.svg"}
          />
        </div>

        {showSecondRow && (
          <div className="flex flex-col space-y-24 text-center md:flex-row md:text-left md:space-y-0">
            <FeatureCard
              title={"Access your file from anywhere"}
              content={
                "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
              }
              image={"/images/icon-collaboration.svg"}
            />
            <FeatureCard
              title={"Security you can trust"}
              content={
                "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"
              }
              image={"/images/icon-any-file.svg"}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
