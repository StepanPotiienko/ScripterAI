"use client";

import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(Typewriter) => {
        Typewriter.typeString("📝 Taking notes has never been so beautiful")
          .pauseFor(1000)
          .deleteAll()
          .typeString(
            "🧘🏼‍♂️ No need to worry — AI will make it as easy as puncake!"
          )
          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
