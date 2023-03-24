import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import pdfFile from './cv.pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
export const Resume =() => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages);
    setNumPages(numPages);
  }

  return (
    <div style={{
        margin:'20px',
        display:'flex',
        justifyContent:'center',
        width:'100%',
        overflowY:'scroll',
        height:'100%',
        scrollbarWidth:'32px',
        scrollbarColor:'#ffffff'
        
    }}>
      <Document  file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
    </div>
  );
}
