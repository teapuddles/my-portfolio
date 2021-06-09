import React from "react";
import { setOptions, Document } from "react-pdf";
const pdfjsVersion = "2.0.305";
setOptions({
  workerSrc: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.js`
});

const ResumeViewer = () => {

    return (
        <Document
          file="../images/Resume_Tech_2021.pdf" />
    );
  }

export default ResumeViewer
