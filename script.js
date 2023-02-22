//alert("Привет, я JS");

function letGuessNum() {
	var guessNum = 5;
	var number = prompt("Введи, что-нибудь");

	if (guessNum > number) {
		alert("Число должно быть больше!");
		return letGuessNum();
	} else if (guessNum < number) {
		alert("Число должно быть меньше!")
		return letGuessNum();
	} else {
		return alert("Вы угадали!");
	}
}
//letGuessNum();

function reminder() {
	//alert("Ты здесь слишком долго");
	window.close();
	window.location.href = "https:/misis.ru"
}

//setTimeout(reminder, 5000);





function validForm() {
	var name = document.getElementById("name").value;
	console.log(name);
	
	var password = document.getElementById("password")
	console.log(password);

	
	var reg_name = /^[a-za-яё]+$/i;
	var reg_password = /^[a-z0-9]{10,100}/i;
		
	if (reg_name.test(name) == false) {
		alert("Ошибка в данных поля ФИО");
	}
	
	if (reg_password.test(password) == false) {
		alert("Ошибка в данных поля ФИО");
	}
}

document.querySelector(".button").addEventListener("click", validform)

//test = document.querySelector("input");
//console.log(test);