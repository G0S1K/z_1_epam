// Обработка iframe1. При загрузке все элементы переносятся на главную страницу
let iframe1 = document.querySelector('.iframe1');
iframe1.onload = () => {
    iframe1.before((iframe1.contentDocument.body || iframe1.contentDocument).children[0]);
    iframe1.remove();
}
// Обработка iframe2. При загрузке все элементы переносятся на главную страницу
let iframe2 = document.querySelector('.iframe2');
iframe2.onload = () => {
    iframe2.before((iframe2.contentDocument.body || iframe2.contentDocument).children[0]);
    iframe2.remove();

    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.btn-close');
    const menu = document.querySelector('.menu');

    //Обработка события на открытие и закрытие меню
    floating_btn.addEventListener('click', () => {
        menu.classList.toggle('visible');
        floating_btn.style.display = "none";
    });

    close_btn.addEventListener('click', () => {
        menu.classList.remove('visible');
        floating_btn.style.display = "block";
    });
}

// Обработка iframe3. При загрузке все элементы переносятся на главную страницу
let iframe3 = document.querySelector('.iframe3');
iframe3.onload = () => {
    iframe3.before((iframe3.contentDocument.body || iframe3.contentDocument).children[0]);
    iframe3.remove();
    
    //Вывод даты в footer
    const date_now = document.querySelector('.date_now');
    const logo = document.querySelector('.header_logo');
    date_now.textContent = new Date().toLocaleDateString();
}


//вывод данных из XML-файла
fetch('schedule.xml').then((response) => {
    response.text().then((xml) => {
        let xmlContent = xml;
        let parser = new DOMParser();
        let xmlDom = parser.parseFromString(xmlContent, 'application/xml');
        let books = xmlDom.querySelectorAll('day');
        //создание таблиц
        books.forEach(booksXmlNode => {
            let table = document.createElement('table');
            table.classList.add('style1');
            document.querySelector('.schedule_table').appendChild(table);

            let th = document.createElement('th');
            th.innerText = booksXmlNode.children[0].innerHTML;
            table.appendChild(th);

            let tr = document.createElement('tr');
            tr.innerText = booksXmlNode.children[1].innerHTML;
            table.appendChild(tr);

            tr = document.createElement('tr');
            tr.innerText = booksXmlNode.children[2].innerHTML;
            table.appendChild(tr);

            tr = document.createElement('tr');
            tr.innerText = booksXmlNode.children[3].innerHTML;
            table.appendChild(tr);
        })
    });
});

//проверка RadioBtn и  присвоение стиля
const check = () => {
    let tables = document.getElementsByTagName('table');
    let rArr = document.getElementsByName('rgroup1');
    if (rArr[0].checked) {
        for (const table of tables) {
            table.className = 'style1';
        }
    } else if (rArr[1].checked) {
        for (const table of tables) {
            table.className = 'style2';
        }
    } else if (rArr[2].checked) {
        for (const table of tables) {
            table.className = 'style3';
        }
    }
}





    
    
