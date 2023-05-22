const Orders= require('../model/orders')
const PDFDocument = require('pdfkit');

exports.getOrders = async (req,res)=>{
    try {
        let result = await Orders.find({})
        res.status(200).send({msg:"getting orders success", response: result})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"getting orders feiled"})
    }
}

exports.postOrders = async(req,res)=>{
    try {
        let num= 0
        let lastOrder = await Orders.findOne().sort({_id: -1}); // Get the last ID in the database
        
        if(lastOrder){
            num= lastOrder.OrderNum + 1
          } else{                                     // If there are no products in the database, start with num 10000
            num= 10000
        } 
        const datenow = new Date();
        let date = `${datenow.getDate()}-${datenow.getMonth()}-${datenow.getFullYear()}`
        const order= req.body
        const newOrder = new Orders({...order,OrderNum:num,OrderDate:date})
        await newOrder.save()
        res.status(200).send({msg:"adding order success", response: newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"adding order feiled"})
    }
}

exports.getInvoiceOrder = async(req,res)=>{
    const doc = new PDFDocument();
   

  // Set the PDF content type
  res.set('Content-Type', 'application/pdf');

  // Set the PDF filename
  res.set('Content-Disposition', 'attachment; filename=invoice.pdf');

  // Pipe the PDF document to the response
  doc.pipe(res);

  try {
    
    const id = req.params.id
    console.log(id)
    // Retrieve invoice data from the database
    const invoiceData = await Orders.findById(id).lean();

    // Company Logo
    // doc.image('https://drive.google.com/file/d/1BmQoKRTqKfaz00GbOTHQTkdHodlyL2JW/view?usp=sharing', 50, 50, { width: 100 });

    // Company Details
    doc.fontSize(14).text('Elyes Ammar', 180, 50, { align: 'right' });
    doc.fontSize(10).text('8000 Nabeul', 180, 70, { align: 'right' });
    doc.fontSize(10).text('50253720', 180, 85, { align: 'right' });

    // Customer Information
    doc.fontSize(14).text('Customer', 50, 180);
    doc.fontSize(10).text(`Invoice N°: ${invoiceData.OrderNum}`, 50, 210);
    doc.fontSize(10).text(`Invoice Date: ${invoiceData.OrderDate}`, 50, 225);
    doc.fontSize(10).text(`Customer Name: ${invoiceData.OrderClient.Name}`, 50, 240);
    doc.fontSize(10).text(`Customer Address: ${invoiceData.OrderClient.Address}`, 50, 255);
    doc.fontSize(10).text(`Customer Email: ${invoiceData.OrderClient.Company}`, 50, 270);
    

    // Table of Products
    const tableTop = 330;
    const columnWidths = [200, 75, 100, 125];
    const tableHeaders = ['Products', 'Quantity', 'Price', 'Total'];

    doc.font('Helvetica-Bold');
    tableHeaders.forEach((header, columnIndex) => {
      const xPos = 50 + columnIndex * columnWidths[columnIndex];
      doc.fontSize(12).text(header, xPos, tableTop, { align: 'center' });
    });

    doc.font('Helvetica');
    invoiceData.Products.forEach((product, rowIndex) => {
      const row = [
        product.Name,
        product.Quantity.toString(),
        product.Price.toString(),
        product.TotalPrice.toString(),
      ];

      row.forEach((cell, columnIndex) => {
        const xPos = 50 + columnIndex * columnWidths[columnIndex];
        const yPos = tableTop + (rowIndex + 1) * 20;
        doc.fontSize(10).text(cell, xPos, yPos, { align: 'center' });
      });
    });

    // Total
    const total = invoiceData.TotalPrice.toString();
    doc.fontSize(12).text('Total:', 350, tableTop + (invoiceData.Products.length + 1) * 20, { align: 'right', width: 100 });
    doc.fontSize(12).text(total, 450, tableTop + (invoiceData.Products.length + 1) * 20, { align: 'right', width: 100 });

    // Finalize the PDF document
    doc.end();
  } catch (error) {
    console.error('Error retrieving invoice data:', error);
    res.status(500).send('Error generating invoice PDF')
}
}
// exports.getInvoiceOrder = async(req,res)=>{
//   try {
//     const id = req.params.id
//     const result = await Orders.findById(id)
//     res.status(200).send(result)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send('errreeeeeur')
//   }
// }