import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice';

const GenerateInvoice = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownloadClick = () => {
    setShowPDF(true);
  };

  return (
    <div>
      <button onClick={handleDownloadClick}>Download PDF</button>
      {showPDF ? (
        <PDFViewer width="1000" height="600">
          <Invoice />
        </PDFViewer>
      ) : null}
      {!showPDF ? (
        <PDFDownloadLink document={<Invoice />} fileName="document.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      ) : null}
    </div>
  );
};

export default GenerateInvoice;