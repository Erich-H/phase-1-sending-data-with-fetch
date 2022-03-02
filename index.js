// Add your code here
function submitData(userName, userEmail) {
    let form = document.querySelector('form')
   return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })

    })
    .then(res => res.json())
    .then(data => {
      let userID = data.id
      form.querySelector('span#userID').textContent = userID 
    })
    .catch(function (err) {
        let errorMsg = err.message
        form.querySelector('span#error').textContent = errorMsg
    })
}

