// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle registration form data
app.post('/register', (req, res) => {
  const { name, email, ticketType } = req.body;

  // Define the path for the Excel file
  const filePath = './registrations.xlsx';

  // Check if the file already exists
  let workbook;
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
  } else {
    workbook = XLSX.utils.book_new();
    workbook.SheetNames.push('Registrations');
    workbook.Sheets['Registrations'] = XLSX.utils.json_to_sheet([]);
  }

  // Read existing data and add new registration
  const sheet = workbook.Sheets['Registrations'];
  const data = XLSX.utils.sheet_to_json(sheet);
  data.push({ Name: name, Email: email, TicketType: ticketType });

  // Update the sheet with new data
  const newSheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets['Registrations'] = newSheet;

  // Write updated data back to the Excel file
  XLSX.writeFile(workbook, filePath);

  res.send({ message: 'Registration successful!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
