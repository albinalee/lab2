<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Ли Альбина Тевоновна</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №2. «HTML»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>Веб-разработка</b> — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются: </p>

<ul>
<li>Проектирование сайта или веб-приложения (сбор и анализ требований, разработка технического задания, проектирование интерфейсов);</li>
<li>Создание дизайн-концепции сайта;</li>
<li>Создание страниц;</li>
<li>Программирование;</li>
<li>Оптимизация и размещение материалов сайта;</li>
<li>Тестирование и внесение корректировок;</li>
<li>Публикация проекта на хостинге;</li>
<li>Обслуживание работающего сайта.</li>
</ul>

<br>

<h1 align = "center">Цели и задачи</h1>


<p>Цель: ознакомиться с принципами работы со стилями, классами, CSS, JavaScript.</p>

<p>Задачи:</p>

<ul>
<li>Создать несколько веб-страниц</li>
<li>Научиться форматированию различных элементов с применением CSS</li>
<li>Поэкспериментировать с классами, формами, кнопками, меню и т.д.</li>
<li>Научиться использовать JavaScript для программирования и анимирования элементов.</li>
</ul>

<p></p>

<h1 align = "center">Решение</h1>

<p>Для выполнения этой лабораторной работы, я пользовалась лекционным материалом и интернет-ресурсами для поиска решений задач оформления и для поиска медиаресурсов, а также различными социальными сетями и Yandex Maps:</p>

<ul>
<li><a href="https://youtube.com/">YouTube</a></li>
<li><a href="https://stackoverflow.com/">Stack Overflow</a></li>
<li><a href="https://fontawesome.com/">Font Awesome</a></li>
</ul>

<p>Создание бургер-меню:</p>
<code>.burger-menu {
        display: block;
        float: right;
    }
    .drawer_hidden {
        display: none;
    }
    .drawer_open {
        display: flex;
        height: 60px;
        width: 60px;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 100;
        cursor: pointer;
    }
    .drawer_open span,
    .drawer_open span::before,
    .drawer_open span::after {
        content: '';
        display: block;
        height: 3px;
        width: 25px;
        border-radius: 3px;
        background: white;
        transition: 0.5s;
        position: absolute;
    }
    .drawer_open span:before {
        bottom: 8px;
    }
    .drawer_open span:after {
        top: 8px;
    }
    .drawer_open span:hover {
        opacity: 0.8;
    }
    #drawer_input:checked ~ .drawer_open span {
        background: rgba(255, 255, 255, 0);
    }
    #drawer_input:checked ~ .drawer_open span::before {
        bottom: 0;
        transform: rotate(45deg);
    }
    #drawer_input:checked ~ .drawer_open span::after {
        top: 0;
        transform: rotate(-45deg);
    }
    .nav_content {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 100%;
        z-index: 99;
        background: #770f0f;
        transition: .5s;
    }
    .nav_content span {
        display: block;
        height: 60px;
        background: #410808;
    }
    .nav_list {
        list-style: none;
    }
    .nav_list li {
        font-size: 24px;
    }
    .nav_list li a {
        display: block;
        padding: 10px 20px;
    }
    .nav_list li a:hover {
        background: #410808;
    }
    #drawer_input:checked ~ .nav_content {
        left: 70%;
    }</code></br>
<img src="/image/burger.PNG"></img>
</br></br>
<p>Проверка данных в форме:</p>
<code>let message = '';
    document.getElementById('myForm').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').style.color = 'red';
            document.getElementById('errorMessage').textContent = message;
        }
    });
    function validateForm() {
      let passwordInput = document.getElementById('password');
      let emailInput = document.getElementById('email');
      let password = passwordInput.value.trim();
      let email = emailInput.value.trim();
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern) && !checkPassword(password)) {
            message = 'Incorrect e-mail and password';
            return false;
        }
        if (!email.match(emailPattern)) {
            message = 'Incorrect e-mail format';
            return false;
        }
        if (!checkPassword(password)) {
            message = 'Password must contain 8 symbols or above';
            return false;
        }
        return true;
    }
    function checkPassword(password) {
      if (password.length < 8) {
          return false;
      }
      return true;
    }</code></br>
<img src="/image/form.PNG"></img>
</br></br>
<p>Галерея изображений:</p>
</br>
<img src="/image/gallery.PNG"></img>
</br></br>
<p>Реализация функционала Drag-and-Drop:</p>
<code>const items = [...document.querySelectorAll(".item")];
const handleDragStart = (e) => {
  e.target.classList.add("dragging");
  e.dataTransfer.effectAllowed = "copyMove";
  const { id } = e.target;
  console.log(e.target);
  console.log(id);
  e.dataTransfer.setData("application/json", JSON.stringify({ id }));
};

const handleDragEnd = (e) => e.target.classList.remove("dragging");

for (const item of items) {
  item.addEventListener("dragstart", handleDragStart, false);
  item.addEventListener("dragend", handleDragEnd, false);
}

const handleDragEnter = (e) => {
  if ([...e.target.classList].includes("item")) {
    return;
  }
  e.target.classList.add("over");
};

const handleDragLeave = (e) => e.target.classList.remove("over");

const handleDragOver = (e) => {
  e.preventDefault();

  if ([...e.target.classList].includes("item")) {
    e.dataTransfer.dropEffect = "none";
    return;
  }

  if (event.ctrlKey) {
    e.dataTransfer.dropEffect = "copy";
  } else {
    e.dataTransfer.dropEffect = "move";
  }
};

const handleDrop = (e) => {
  e.preventDefault();
  e.target.classList.remove("over");
  if (e.dataTransfer.files.length > 0) {
    return;
  }

  const { id } = JSON.parse(e.dataTransfer.getData("application/json"));

  if (event.ctrlKey) {
    const oldItem = document.getElementById(id);
    const newItem = oldItem.cloneNode(true);
    const newId = `item${[...document.querySelectorAll(".item")].length + 1}`;
    newItem.id = newId;
    newItem.classList.remove("dragging");
    newItem.addEventListener("dragstart", handleDragStart, false);
    newItem.addEventListener("dragend", handleDragEnd, false);
    e.target.appendChild(newItem);
  } else {
    e.target.appendChild(document.getElementById(id));
  }
};

const boxes = [...document.querySelectorAll(".box")];

for (const box of boxes) {
  box.addEventListener("dragenter", handleDragEnter, false);
  box.addEventListener("dragleave", handleDragLeave, false);
  box.addEventListener("dragover", handleDragOver, false);
  box.addEventListener("drop", handleDrop, false);
}</code></br>
<img src="/image/drag.PNG"></img>
</br></br>
<p>Внедрение карты с маркером:</p>
<code>ymaps.ready(init);
        function init() {
        var myMap = new ymaps.Map("map", {
            center: [46.946654, 142.737860],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.geoObjects
        .add(new ymaps.Placemark([46.945044, 142.731032], {
            balloonContent: 'Ул. Пограничная, 68',
            iconCaption: 'ИЕНиТБ'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        }</code></br>
<img src="/image/map.PNG"></img>
</br></br>
<h1 align = "center">Вывод</h1>
<p>В результате проделанной лабораторной работы, я познакомилась с новыми элементами языка html, научилась реализовать их, потренировалась в использовании CSS и ознакомилась с языком JavaScript.</p>
