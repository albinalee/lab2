const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 5;
let dy = 2;
let radius = 15;
let af;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#65318e";
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if (y + dy + radius > canvas.height || y + dy - radius < 0) {
    dy = -dy;
  }
  if (x + dx + radius > canvas.width || x + dx - radius < 0) {
    dx = -dx;
  }

  af = requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function (e) {
  af = requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function (e) {
  cancelAnimationFrame(af);
});

drawBall();

//

let message = '';
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
    }
      
//

document.getElementById('searchInput').addEventListener('keyup', function() {
  let searchValue = this.value.toLowerCase();
  let tableRows = document.getElementById('myTable').getElementsByTagName('tr');
  
  for (let i = 1; i < tableRows.length; i++) {
    let rowText = tableRows[i].textContent.toLowerCase();
    if (rowText.indexOf(searchValue) > -1) {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
});

    function sortTable(columnIndex) {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;

        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("tr");

            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[columnIndex];
                y = rows[i + 1].getElementsByTagName("td")[columnIndex];

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

//

const items = [...document.querySelectorAll(".item")];
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
}