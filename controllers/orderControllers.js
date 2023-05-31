const Orders= require('../model/orders')
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');
const fs = require('fs');



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
        // let date = `${datenow.getDate()}-0${datenow.getMonth()+1}-${datenow.getFullYear()}`
        let date = {
          Day : datenow.getDate(),
          Month : datenow.getMonth()+1,
          Year : datenow.getFullYear()
        }
        const order= req.body
        const newOrder = new Orders({...order,OrderNum:num,OrderDate:date})
        await newOrder.save()
        res.status(200).send({msg:"adding order success", response: newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"adding order feiled"})
    }
}

exports.getOrdersByMonth = async(req,res)=>{
      try {
        let month = req.query.Month
        console.log(req.query)
        const orders = await Orders.find({'OrderDate.Month': month})
        if(orders){
          res.status(200).send({response:orders})
        }else{
          res.status(400).send({msg: 'No orders maked in this month'})
        }
      } catch (error) {
        console.log(error)
        res.status(500).send({msg:'finding orders failed'})
      }

}


exports.getInvoiceOrder = async(req,res)=>{
    
  const doc = new PDFDocument();
  // Set the PDF content type
  res.set('Content-Type', 'application/pdf');
  // file name
  const filname= 'invoice.pdf'
  // Set the PDF filename
  res.setHeader('Content-Disposition', `attachment; filename=${filname}`);

   // Pipe the PDF document to the response
  doc.pipe(res);
 
  try {
    
    const id = req.params.id
    
    // Retrieve invoice data from the database
    const invoiceData = await Orders.findById(id).lean();

    // Company Logo
    doc.image('./elyes-ammar-logo.png', 50, 40, { width: 200 });

    // Company Details
    doc.fontSize(14).text('Elyes Ammar', 180, 50, { align: 'right' });
    doc.fontSize(10).text('8000 Nabeul', 180, 70, { align: 'right' });
    doc.fontSize(10).text('50253720', 180, 85, { align: 'right' });

    // Customer Information
    doc.fontSize(14).text('Customer', 50, 180);
    doc.fontSize(10).text(`Name: ${invoiceData.OrderClient.Name}`, 50, 210);
    doc.fontSize(10).text(`Address: ${invoiceData.OrderClient.Address}`, 50, 225);
    doc.fontSize(10).text(`Company: ${invoiceData.OrderClient.Company}`, 50, 240);
    doc.fontSize(10).text(`Phone: ${invoiceData.OrderClient.Phone}`, 50, 255);
    
    // Invoice information
    doc.fontSize(14).text('Invoice', 400, 180);
    doc.fontSize(10).text(`Invoice N°: ${invoiceData.OrderNum}`, 400, 210);
    doc.fontSize(10).text(`Invoice Date: ${invoiceData.OrderDate.Day}-0${invoiceData.OrderDate.Month}-${invoiceData.OrderDate.Year}`, 400, 225);

    // Set the table properties
  const tableTop = 330;
  const tableLeft = 50;
  const columnSpacing = 150;

  // Table headers
  doc.font('Helvetica-Bold').fontSize(12);
  doc.text('Products', tableLeft, tableTop);
  doc.text('Quantity', tableLeft + columnSpacing + 20, tableTop);
  doc.text('Price', tableLeft + 2 * columnSpacing, tableTop);
  doc.text('Total', tableLeft + 3 * columnSpacing, tableTop);

  // Set the initial table y-position
  let tableY = tableTop + 20;

      // Loop through each product and render the table row
      doc.font('Helvetica').fontSize(10);
      invoiceData.Products.forEach((product) => {
        doc.text(product.Name, tableLeft, tableY);
        doc.text(product.Quantity.toString(), tableLeft +  columnSpacing + 30, tableY);
        doc.text(product.Price.toString(), tableLeft + 2 * columnSpacing, tableY);
        doc.text(product.TotalPrice.toString(), tableLeft + 3 * columnSpacing, tableY);
    
        // Increment the y-position for the next row
        tableY += 20;
      });

      // Total
    const total = invoiceData.TotalPrice.toString();
    doc.fontSize(12).text('Total:', tableLeft + 2 * columnSpacing, tableTop + (invoiceData.Products.length + 1) * 20  );
    doc.fontSize(12).text(total, tableLeft + 3 * columnSpacing , tableTop + (invoiceData.Products.length + 1) * 20 );

    // Finalize the PDF document
    doc.end();

  } catch (error) {
    console.error('Error retrieving invoice data:', error);
    res.status(500).send('Error generating invoice PDF')
}
}
