import "./styles.css";
import * as React from "react";
const html2pdf = require("html2pdf.js");

function LongContent() {
  return (
    <div
      style={{
        height: "500px",
        width: '300px',
        backgroundColor: "#efef9999",
        margin: "20px"
      }}
    >
      long page content
    </div>
  );
}

export default function App() {
  const ref = React.useRef();

  function print() {
    console.log("print");
    const worker = html2pdf();

    // Assume 1px = 1mm
    const width = ref.current.offsetWidth
    const height = ref.current.offsetHeight
    const opt = {
      orientation: 'portrait',
      filename: "file.pdf",
      unit: 'mm',
      html2canvas: {
        width,
        height,
        windowWidth: width,
        windowHeight: height,
      },
      jsPDF: {
        format: [width, height]
      }
    };
    worker.set(opt).from(ref.current).save();
  }

  return (
    <div>
      <div
        onClick={print}
        style={{ backgroundColor: "grey", cursor: "pointer" }}
      >
        PRINT
      </div>
      <div className="App" ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
        <LongContent />
      </div>
    </div>
  );
}
