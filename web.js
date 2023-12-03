function calculate() {
    const form_data = {
        name: document.getElementsByName('name')[0].value,
        surname: document.getElementsByName('surname')[0].value,
        number: parseInt(document.getElementsByName('number')[0].value)
    };

    if (isNaN(form_data.number) || form_data.number < 10 || form_data.number > 99) {
        alert('Enter two-digit number');
        return;
    }

    const random_num = Math.random() * 10;
    const multiplied_num = Math.round(Math.sqrt(random_num * form_data.number));

    const display_data = `
        Name: ${form_data.name}
        Surname: ${form_data.surname}
        Selected number: ${form_data.number}
        Random number: ${random_num}
        ${form_data.name} ${form_data.surname} rolled ${multiplied_num}
    `;

    const display_area = document.getElementById('display');
    display_area.textContent = display_data;

    if (random_num < 3) {
        display_area.innerHTML = display_area.innerHTML.replace(`${random_num}`, `<b>${random_num}</b>`);
    } else if (random_num >= 3 && random_num < 6) {
        display_area.innerHTML = display_area.innerHTML.replace(`${random_num}`, `<u>${random_num}</u>`);
    } else {
        display_area.innerHTML = display_area.innerHTML.replace(`${random_num}`, `<i>${random_num}</i>`);
    }

    console.log(form_data);
    console.log(`Random number: ${random_num}`);
    console.log(`Multiplication result: ${multiplied_num}`);
}
