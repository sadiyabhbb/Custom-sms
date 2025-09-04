const axios = require('axios');

// তোমার Textbelt API key এখানে বসাও
const API_KEY = 'textbelt'; // Free key, প্রতিদিন 1 SMS limit

// SMS পাঠানোর function
async function sendSMS(phone, message) {
  try {
    const response = await axios.post('https://textbelt.com/text', {
      phone: phone,
      message: message,
      key: API_KEY
    });

    console.log('Response:', response.data);

    if (response.data.success) {
      console.log(`SMS sent to ${phone} ✅`);
    } else {
      console.log(`Failed to send SMS to ${phone} ❌`, response.data.error);
    }

  } catch (err) {
    console.error('Error sending SMS:', err.message);
  }
}

// Example: multiple numbers
const numbers = ['8801XXXXXXXXX', '8801YYYYYYYYY'];
numbers.forEach(number => sendSMS(number, 'Hello from Textbelt API!'));
