import {dictionary} from "./keys.js";

const api_token = '6c28baba21c3a45094c5cf36f6e410551929382f';   
const company_domain = 'paveltsikhanau';
const url = `https://${company_domain}.pipedrive.com/api/v1/deals?api_token=${api_token}`;

async function makeHttpCall(url, body, method = 'GET') {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
    method,
  });
  if (!response.ok) {
    console.error(await response.json())
    throw new Error(`error: ${response.statusText}`);
  }
  return response.json();
}


document.querySelector('.form').addEventListener('submit', async (event) => {
  event.preventDefault();
  // const data = new FormData(event.target);
  // data.get('');
  const formData = {
    title: 'DEAL Three',
    [dictionary.clients_first_name]: event.target.querySelector('#first-name').value,
    [dictionary.clients_last_name]: event.target.querySelector('#last-name').value,
    [dictionary.phone]: event.target.querySelector('#phone').value,
    [dictionary.email]: event.target.querySelector('#email').value,
    [dictionary.job_type]: event.target.querySelector('#job-type').value,
    [dictionary.job_source]: event.target.querySelector('#job-source').value,
    [dictionary.job_description]: event.target.querySelector('#job-description').value,
    [dictionary.address]: event.target.querySelector('#address').value,
    [dictionary.city]: event.target.querySelector('#city').value,
    [dictionary.state]: event.target.querySelector('#state').value,
    [dictionary.zip_code]: event.target.querySelector('#zip-code').value,
    [dictionary.area]: event.target.querySelector('#area').value,
    [dictionary.start_date]: event.target.querySelector('#start-date').value,
    [dictionary.start_time]: event.target.querySelector('#start-time').value,
    [dictionary.end_time]: event.target.querySelector('#end-time').value,
    [dictionary.test_select]: event.target.querySelector('#test-select').value,
  }

  console.log(formData);
  const res = await makeHttpCall(url, formData, 'POST');
  console.log(res)

  event.target.reset();
})





