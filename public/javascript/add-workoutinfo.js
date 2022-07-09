var today = moment().format('YYYY-MM-DD');
document.querySelector('input[name="workout-date"]').value = today;

async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="workout-name"]').value;
    const date = document.querySelector('input[name="workout-date"]').value;
    const goal = document.querySelector('input[name="workout-goal"]').value;
    const sequence = document.querySelector('input[name="workout-sequence"]').value;
    const muscleGroup = document.querySelector('input[name="workout-muscleGroup"]').value;

    const response = await fetch(`/api/workouts`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            date,
            goal,
            sequence,
            muscleGroup
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-workout-form').addEventListener('submit', newFormHandler);