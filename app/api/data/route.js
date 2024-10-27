import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path for data.json
const filePath = path.join(process.cwd(), 'data.json');

// Function to read data from the JSON file
function readDataFromFile() {
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  }
  return []; // Return an empty array if file doesn't exist
}

// Function to write data to the JSON file
function writeDataToFile(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET request handler: Reads data from data.json and sends it
export async function GET() {
  const fileData = readDataFromFile();
  return NextResponse.json({ data: fileData });
}

// POST request handler: Adds new data to data.json
export async function POST(request) {
  try {
    const newData = await request.json(); // Get new data from the request body
    const currentData = readDataFromFile(); // Read existing data
    const updatedData = [...currentData, newData]; // Add new data

    writeDataToFile(updatedData); // Write updated data back to the file

    return NextResponse.json({ message: 'Data saved successfully!', data: updatedData });
  } catch (error) {
    console.error("Error writing data:", error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
