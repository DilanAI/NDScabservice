document.getElementById('generatePDF').addEventListener('click', () => {
    // Get form values
    const customerName = document.getElementById('customerName').value;
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropoffLocation = document.getElementById('dropoffLocation').value;
    const amount = document.getElementById('amount').value;

    // Validate inputs
    if (!customerName || !pickupLocation || !dropoffLocation || !amount) {
        alert('Please fill in all fields!');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add background color for header
    doc.setFillColor(230, 240, 255); // Light blue
    doc.rect(0, 0, 210, 40, 'F');

    // Add header text
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 51, 102); // Navy blue
    doc.text('NDS Cab Service', 105, 20, { align: 'center' });

    // Add company details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0); // Black
    doc.text('NDS Cab Service.', 10, 50);
    doc.text('C63, Nagahahena,Wahakula,Ruwanwella', 10, 57);
    doc.text('Phone: +94788427803 ', 10, 64);

    // Add invoice metadata
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 50);
    doc.text(`Invoice No: ${Math.floor(Math.random() * 100000)}`, 150, 57);

    // Draw a line separator
    doc.setDrawColor(0, 51, 102); // Navy blue
    doc.line(10, 70, 200, 70);

    // Add customer details section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 102, 204); // Bright blue
    doc.text('Customer Details:', 10, 80);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0); // Black
    doc.text(`Name: ${customerName}`, 10, 90);
    doc.text(`Pickup Location: ${pickupLocation}`, 10, 97);
    doc.text(`Drop-off Location: ${dropoffLocation}`, 10, 104);

    // Add amount section with highlighted background
    doc.setFillColor(255, 250, 230); // Light yellow
    doc.rect(10, 110, 190, 15, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 0); // Dark green
    doc.text(`Amount: Rs. ${parseFloat(amount).toFixed(2)}`, 15, 120);

    // Add bank details section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(0, 102, 204); // Bright blue
    doc.text('Bank Details:', 10, 140);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Black
    doc.text('Bank Name: Bank of Ceylon', 10, 150);
    doc.text('Branch: Ruwanwella', 10, 157);
    doc.text('Account Name:WANP Chathuranga.', 10, 164);
    doc.text('Account No:7025184', 10, 171);

    // Add system-generated invoice note
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(150, 0, 0); // Dark red
    doc.text('Note: This is a system-generated invoice. No signature is required.', 10, 185);

    // Add footer with a light background
    doc.setFillColor(230, 230, 230); // Light gray
    doc.rect(0, 270, 210, 30, 'F');
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black
    doc.text('Thank you for choosing NDS Cab Service!', 105, 280, { align: 'center' });
    doc.text('We value your trust and hope to serve you again soon.', 105, 287, { align: 'center' });

    // Save the PDF
    doc.save(`Invoice_${customerName}_${new Date().toISOString().slice(0, 10)}.pdf`);
});
