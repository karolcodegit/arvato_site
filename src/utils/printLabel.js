import React from 'react';
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

export const printLabel = () => {
    html2canvas(document.querySelector("#label")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
  
      // Ustawienie rozmiaru strony na 76.2 mm x 25.4 mm (3x1 cala) z orientacją poziomą
      const pdf = new jsPDF("l", "mm", [76.2, 25.4]);
  
     // Obliczenie skali obrazu do rozmiarów strony PDF
     const imgProps = pdf.getImageProperties(imgData);
     const pdfWidth = pdf.internal.pageSize.getWidth();
     const pdfHeight = pdf.internal.pageSize.getHeight();
     const widthScale = (pdfWidth - 2) / imgProps.width; // subtract margins
     const heightScale = (pdfHeight - 4) / imgProps.height; // subtract margins
     const scale = Math.min(widthScale, heightScale);
 
     const scaledWidth = imgProps.width * scale;
     const scaledHeight = imgProps.height * scale;
 
      // Obliczenie pozycji x i y, które umieszczą obraz na środku strony
    const x = (pdfWidth - scaledWidth) / 2;
    const y = (pdfHeight - scaledHeight) / 2;

    // Dodanie obrazu na środku strony
    pdf.addImage(imgData, "PNG", x, y, scaledWidth, scaledHeight);
  
      // Utworzenie nowego okna i ustawienie jego zawartości na wygenerowany PDF
      const pdfWindow = window.open("");
      pdfWindow.document.write(
        "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
          btoa(pdf.output()) +
          "'></iframe>"
      );
    });
  };