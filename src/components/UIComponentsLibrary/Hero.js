import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../../styles/Header.css";
import { SectionHeading } from "./Headings.js";
import { SectionDescription } from "./Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "./Buttons.js";
import { ContentWithVerticalPadding } from "./Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "./dot-pattern.svg";
import { navigate } from "@reach/router";

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(
  Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;

export default ({
  imageDecoratorBlob = true,
  buttonRounded = true,
  features = [
    "Automated Proctoring via Webcam",
    "Complete Browser Lockdown",
    "Completely Open Source and Customizable",
    "Easily Scalable, Powered by AWS",
  ],
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  return (
    <>
      <div style={{ position: "relative" }}>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>Better, Safer, Secure Remote Exams</Heading>
              <Description>
                Ensure the authenticity and integrity of your examinations with
                ExamSecure's AI-powered proctoring solution for remote
                examinations.
              </Description>
              <PrimaryButton
                as="a"
                css={buttonRoundedCss}
                className={"heroSectionButton"}
                href={"#"}
                onClick={() => navigate("/landing")}
              >
                Get Started
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image
                  src={"http://assets.rajrajhans.com/examsecure_logo.png"}
                  className={"heroLogo"}
                />
                {imageDecoratorBlob && (
                  <ImageDecoratorBlob className={"heroDecoratorBlob"} />
                )}
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </div>
    </>
  );
};
