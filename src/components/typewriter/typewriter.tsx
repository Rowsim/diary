import React from "react";
import Typewriter from "typewriter-effect";

interface TypeWriterProps {
  typeString: string;
  delay: number;
  pauseFor?: number;
  additionalClass?: string;
}

const TypeWriter = ({
  typeString,
  delay,
  pauseFor,
  additionalClass,
}: TypeWriterProps) => (
  <div className={additionalClass}>
    <Typewriter
      onInit={(typewriter: any) => {
        typewriter
          .pauseFor(pauseFor)
          .changeDelay(delay)
          .typeString(typeString)
          .callFunction(() => {
            console.log("String typed out!");
          })
          .start();
      }}
    />
  </div>
);

export { TypeWriter };
