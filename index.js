fetch('./body.html')
  .then(response => response.text())
  .then(body => {
    
    const a = document.getElementById("bodypart");
    a.innerHTML += body;
  })
  .catch(error => console.error('Error fetching HTML:', error));
 
 
 