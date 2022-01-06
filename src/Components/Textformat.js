import React from "react";

function Textformat({ setstyle }) {
  const bold = {
    bolded: {
      fontWeight: "bold",
    },
    notBold: {
      fontWeight: 400,
    },
  };
  const italic = {
    italiced: {
      fontStyle: "italic",
    },
    notItalic: {
      fontStyle: "normal",
    },
  };
  const underlineStyle = {
    underlined: {
      textDecoration: "underline",
    },
    notUnderlined: {
      textDecoration: "default",
    },
  };
  return (
    <div>
      <button className="button" onClick={() => setstyle(bold.bolded)}>
        Bold
      </button>
      <button className="button" onClick={() => setstyle(italic.italiced)}>
        Italic
      </button>
      <button
        className="button"
        onClick={() => setstyle(underlineStyle.underlined)}
      >
        Underline
      </button>
    </div>
  );
}

export default Textformat;
