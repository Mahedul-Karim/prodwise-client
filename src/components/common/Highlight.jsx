import React from "react";

const Highlight = ({ text, highlight }) => {

   const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const safeHighlight = escapeRegex(highlight);

  const textArray = text.split(new RegExp(`(${safeHighlight})`, "gi"));

  return (
    <>
      {textArray.map((text, i) =>
        text?.toLowerCase() === highlight?.toLowerCase() ? (
          <span className="text-gradient" key={`highlight-${i}`}>
            {text}
          </span>
        ) : (
          text
        )
      )}
    </>
  );
};

export default Highlight;
