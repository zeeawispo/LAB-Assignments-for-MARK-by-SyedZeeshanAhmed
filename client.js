// client.js

function sendPostRequest() {
    const name = document.getElementById('nameInput').value;
    fetch('/post-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('postResponse').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
  }
  
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('/feedback', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
  });
  
  function deleteFeedback(id) {
    fetch(`/feedback/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
  }
  