import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Button, IconButton } from '@mui/material';
import { getBillById } from '../services/api';
import Bill from './Bill';
import CustomizationPanel from './Customizationpanel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SettingsIcon from '@mui/icons-material/Settings';

const BillPage = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [customization, setCustomization] = useState({
    companyName: 'CityTaxis',
    companyLogo: 'https://static.wixstatic.com/media/baf5fd_a33b11dfd9784d6a8a8c5a9a89f4ccc3~mv2.png',
    footerMessage: '',
  });
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

  useEffect(() => {
    const fetchBill = async () => {
      try {
        const response = await getBillById(id);
        if (response.data.success) {
          setBill(response.data.item);
        }
      } catch (error) {
        console.error('Error fetching bill:', error);
      }
    };

    fetchBill();
  }, [id]);

  const handleCustomizationSave = (customSettings) => {
    setCustomization(customSettings);
  };

  const generatePDF = () => {
    const input = document.getElementById('bill-details');
    const downloadButton = document.getElementById('download-button');
    downloadButton.style.display = 'none'; // Hide the button

    // Ensure images are fully loaded before capturing the canvas
    const images = input.getElementsByTagName('img');
    const promises = [];

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (!img.complete) {
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          })
        );
      }
    }

    Promise.all(promises).then(() => {
      html2canvas(input, {
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.text(customization.companyName || "CityTaxis Bill", 10, 10);
        pdf.addImage(imgData, 'PNG', 0, 20, 210, canvas.height * 210 / canvas.width);
        pdf.save('bill.pdf');
        downloadButton.style.display = 'block'; // Show the button again
      });
    });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">Bill Details</Typography>
        <IconButton onClick={() => setIsCustomizationOpen(true)}>
          <SettingsIcon />
        </IconButton>
      </Box>
      <CustomizationPanel
        open={isCustomizationOpen}
        onClose={() => setIsCustomizationOpen(false)}
        onSave={handleCustomizationSave}
        customization={customization}
      />
      {bill ? (
        <Box id="bill-details">
          <Bill
            bill={bill}
            companyName={customization.companyName}
            companyLogo={customization.companyLogo}
            footerMessage={customization.footerMessage}
          />
          <Box textAlign="center" mt={2}>
            <Button id="download-button" variant="contained" color="secondary" onClick={generatePDF}>
              Download PDF
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6">Loading...</Typography>
      )}
    </div>
  );
};

export default BillPage;
