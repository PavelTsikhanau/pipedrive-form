import { dictionary_sandbox } from "./dictionary-sandbox.js";

const api_token = new URL(window.location.href).searchParams.get('api_key');   
const company_domain = 'paveltsikhanau-sandbox';
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

  const formData = {
    title: 'deal',
    [dictionary_sandbox.clients_first_name]: event.target.querySelector('#first-name').value,
    [dictionary_sandbox.clients_last_name]: event.target.querySelector('#last-name').value,
    [dictionary_sandbox.phone]: event.target.querySelector('#phone').value,
    [dictionary_sandbox.email]: event.target.querySelector('#email').value,
    [dictionary_sandbox.job_type]: event.target.querySelector('#job-type').value,
    [dictionary_sandbox.job_source]: event.target.querySelector('#job-source').value,
    [dictionary_sandbox.job_description]: event.target.querySelector('#job-description').value,
    [dictionary_sandbox.address]: event.target.querySelector('#address').value,
    [dictionary_sandbox.city]: event.target.querySelector('#city').value,
    [dictionary_sandbox.state]: event.target.querySelector('#state').value,
    [dictionary_sandbox.zip_code]: event.target.querySelector('#zip-code').value,
    [dictionary_sandbox.area]: event.target.querySelector('#area').value,
    [dictionary_sandbox.start_date]: event.target.querySelector('#start-date').value,
    [dictionary_sandbox.start_time]: event.target.querySelector('#start-time').value,
    [dictionary_sandbox.end_time]: event.target.querySelector('#end-time').value,
    [dictionary_sandbox.test_select]: event.target.querySelector('#test-select').value,
  }

  const res = await makeHttpCall(url, formData, 'POST');

  event.target.reset();
})





