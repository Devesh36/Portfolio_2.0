import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Function to authenticate with Google
const authenticate = async () => {
  try {
    console.log('Starting authentication...');
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    console.log('Service account email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID);

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    console.log('Successfully authenticated and loaded doc');
    return doc;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};

export async function POST(req) {
  try {
    console.log('Starting POST request handling...');
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log('Received form data:', { name, email, subject, message });

    // Get current date and time
    const timestamp = new Date().toLocaleString();

    // Connect to the Google Sheet
    const doc = await authenticate();
    const sheet = doc.sheetsByIndex[0]; // Gets the first sheet
    
    console.log('Adding row to sheet...');
    // Add the row to the sheet
    await sheet.addRow({
      Timestamp: timestamp,
      Name: name,
      Email: email,
      Subject: subject,
      Message: message
    });

    console.log('Successfully added row to sheet');
    return new Response(JSON.stringify({ message: 'Message saved successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return new Response(JSON.stringify({ 
      message: 'Failed to save message',
      error: error.message,
      details: error.stack
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}