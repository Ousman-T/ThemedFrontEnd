const BASE_URL = '/contact'
const contactData = require('../pages/Contact')
/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
      console.log("here we are");
    }
}

// * Create Contact
export function createContact(){
    console.log('Creating contact through API');
    return sendRequest(`${BASE_URL}`, 'POST', contactData);
    
};

// ! Delete contact
export function removeContact(){
    return sendRequest(`${BASE_URL}`, 'DELETE', contactData);
};