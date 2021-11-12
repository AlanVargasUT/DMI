// const {By,Key,Builder} = require("selenium-webdriver");
// require("chromedriver");
 
// async function example(){
 
//        var searchString = "Automation testing with Selenium";
 
//        //To wait for browser to build and launch properly
//        let driver = await new Builder().forBrowser("chrome").build();
 
//         //To fetch http://google.com from the browser with our code.
//         await driver.get("http://google.com");
            
//         //To send a search query by passing the value in searchString.
//         await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
//         //Verify the page title and print it
//         var title = await driver.getTitle();
//         console.log('Title is:',title);
 
//         //It is always a safe practice to quit the browser after execution
//         await driver.quit();
 
// }
// example()

// Agregamos el chromedriver
require("chromedriver");

// Agregamos el seleniumdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

// En esta parte conseguiremos los datos que queremos que ingrese por medio de un json
let { email, pass } = require("./credentials.json");

// Primero se abrira la pagina web de geeksforgeeks
let tabToOpen =
	tab.get("http://localhost:3000/Login");
tabToOpen

	.then(function () {

		// Tiempo de espera agotado si la conexión es lenta mas
		let findTimeOutP =
			tab.manage().setTimeouts({
				implicit: 10000,  // 10 segundos
			});
		return findTimeOutP;
	})
	
	.then(function () {
		// Encontrar la entrada del nombre de usuario (el input)
		let promiseUsernameBox =
			tab.findElement(swd.By.css("#basic_user"));
		return promiseUsernameBox;
	})
	.then(function (usernameBox) {

		// Se ingresa las llaves del nombre de usuario obtenidas por el json
		let promiseFillUsername =
			usernameBox.sendKeys(email);
		return promiseFillUsername;
	})
	.then(function () {
		console.log(
			"Nombre de usuario ingresado correctamente" 
		);

		// Luego encontrara el input de la contraseña y hara el mismo paso que el anterior
		let promisePasswordBox =
			tab.findElement(swd.By.css("#basic_contrasena"));
		return promisePasswordBox;
	})
	.then(function (passwordBox) {

		// Ingresa los datos de la contraseña del json
		let promiseFillPassword =
			passwordBox.sendKeys(pass);
		return promiseFillPassword;
	})
	.then(function () {
		console.log(
			"Contraseña ingresada correctamente" 
		);

		// Despues procederemos a encontrar el boton de SignIn de la pagina
		let promiseSignInBtn = tab.findElement(
			swd.By.css(".ant-btn ant-btn-primary")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Y por ultimo se le dara click a la pagina
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})
	.then(function () {
		console.log("Exitosamente ");
	})
	.catch(function (err) {
		console.log("Error ", err, " Ocurrio algo inesperado!");
	});

