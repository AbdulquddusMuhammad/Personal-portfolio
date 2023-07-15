

const scriptURL = 'https://script.google.com/macros/s/AKfycbyqtO2oanJkFTXn14IB0jBIGwKK4O0uS7hWfA4O-TTZkcu9c2JInFfECx2o9nYDTjqH/exec'
  const form = document.forms['submit-to-google-sheet']
  const confirmation = document.getElementById("confirmation")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        confirmation.innerHTML = "Your message has succesfully been submitted" 
        setTimeout(function(){
          confirmation.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })