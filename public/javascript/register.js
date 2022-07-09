async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const workoutType = document.querySelector('#workouttype-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const weight = document.querySelector('#weight-signup').value.trim();
    const height = document.querySelector('#height-signup').value.trim();

    if (username && email && password && workoutType && weight && height) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                workoutType,
                age,
                weight,
                height
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);