let yellowBox = document.querySelector(".yellow");

let greenBox = document.querySelector(".green");

let grayBox = document.querySelector(".gray");

// Hover ô vàng
yellowBox.onmouseover = function () {
    document.body.style.backgroundColor = "yellow";
};

// Hover ô xanh
greenBox.onmouseover = function () {
    document.body.style.backgroundColor = "green";
};

// Hover ô xám
grayBox.onmouseover = function () {
    document.body.style.backgroundColor = "gray";
};