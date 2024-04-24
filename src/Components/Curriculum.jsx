import React from 'react';
import PDFViewer from './PDFViewer'; 

const Curriculum = () => {
  const pdfUrl = 'https://github.com/josepCortesManyanich/CV/blob/main/Josep%20Cort%C3%A9s.pdf'; 

  return (
    <div>
      <h1>Curriculum Vitae</h1>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default Curriculum