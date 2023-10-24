async function newFormHandler(event) {
    event.preventDefault();
    const record_name = document.querySelector('#record_name').value;
    const artist_name = document.querySelector('#artist_name').value;
    const genre = document.querySelector('#genre').value;
    const condition = document.querySelector('#condition').value;
    const price = document.querySelector('#price').value;
    const user_name = document.querySelector('#user_name').value;
   
    const response = await fetch(`/api/newlisting`, {
      method: 'POST',
      body: JSON.stringify({
        record_name,
        artist_name,
        genre,
        condition,
        price,
        user_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add record');
    }
  }
  
  document.querySelector('.new-record-form').addEventListener('submit', newFormHandler);