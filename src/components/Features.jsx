import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
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
      </div>
    </section>
  );
};

export default Features;
