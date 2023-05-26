const BASE_URL = '/contact'
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
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}

// * Create Contact
export function createContact(contactData){
    console.log('Creating contact through API');
    return sendRequest(`${BASE_URL}`, 'POST', contactData);
    
};

// ! Delete contact
export function removeContact(contactData){
    return sendRequest(`${BASE_URL}`, 'DELETE', contactData);
};