document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#create-task-form');
    let p = document.querySelector('#alert');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const input = document.querySelector('#new-task-description');
        const taskList = document.querySelector('#tasks');
        const li = document.createElement('li');

        if (input.value) {

            li.innerHTML = input.value;

            taskList.appendChild(li);

            input.value = '';

            if (p) {
                p.remove();
                p = null;
            }
        } else {
            if (!p) {
                p = document.createElement('p');
                p.textContent = 'Enter some text please!';
                p.id = 'alert';
                form.insertAdjacentElement('afterend', p);
            } else {
                p.textContent = 'Enter some text please!';
            }
        }
    });


});
