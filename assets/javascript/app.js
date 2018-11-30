    //When the page is loaded, call function loadMainMenu that loads our display div.
$(document).ready(function () {
    loadMainMenu();
    //If user clicks on food menu, we call loadFoodMenu function that changes our display div.
    $(document.body).on('click', '#getFoodMenu', function () {
        loadFoodMenu();
    })
    //We check if age verification is passed(we store that value in local storage). If no, we call loadAgePage function that changes our display div.
    $(document.body).on('click', '#getCocktailMenu', function () {
        if (localStorage.ageVerification != "passed") {
            loadAgePage();
        //If age verification is passed, we call loadCocktailMenu function that changes our display div.
        } else { 
            loadCocktailMenu();
        };
    });
     //If user clicks on home button, we call loadMainMenu function that loads our strarting display div.
    $(document.body).on('click', '#goHome', function () {
        loadMainMenu();
    })
    //If user clicks on food menu button we call loadFoodMenu function that changes our display div.
    $(document.body).on('click', '#goFoodMenu', function () {
        loadFoodMenu();
    })
    //If our user clicks on cocktail menu button we check age verificaion.
    $(document.body).on('click', '#goCocktailMenu', function () {
        //If age verification is not passed yet, we call loadAgePage function that changes our div.
        if (localStorage.ageVerification != "passed") {
            loadAgePage();
        //If age verification is passed we call loadCocktailMenu function that changes our display div.
        } else {
            loadCocktailMenu();
        };
    });
    //On the cocktail page if user pushed button serch cocktail by type, we check if he changed the value of select.
    $(document.body).on('click', '#cocktailSearchByType', function () {
        if ($('#alcoholChoice').val() !== 'Select') {
            //If user selected random we load our random function that gives us a random cocktail.
            if ($('#alcoholChoice').val() == 'Random') { random(); }
            //We grab the value of select and modify our call with it.
            var call = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + $('#alcoholChoice').val();
            //Clearing our display.
            $('#display').html('');
            //Our AJAX call.
            $.ajax({
                url: call,
                method: 'GET'
            }).then(function (callback) {
                //For loop to go over callback values.
                for (var i = 0; i < callback.drinks.length; i++) {
                    //We go over our callback and storing data values in our cocktailDiv variable.
                    var cocktailDiv = `<div class='cocktailCard' data-id=${callback.drinks[i].idDrink}><h5 class='cocktailNameCard'>${callback.drinks[i].strDrink}</h5> <img class='cocktailImgCard' src=${callback.drinks[i].strDrinkThumb}></div>`
                    //We append our cocktailDiv with data to the display.
                    $('#display').append(cocktailDiv)
                }

            });
        }
    })
    //On the cocktail page if user pushed button serch cocktail by name we grab the value of input and modify our call.
    $(document.body).on('click', '#cocktailSearchByName', function () {
        var call = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + $('#cocktailNameInput').val();
        //Clearing the display.
        $('#display').html('');
        //Our AJAX call.
        $.ajax({
            url: call,
            method: 'GET'
        }).then(function (callback) {
            //For loop to go over callback values.
            for (var i = 0; i < callback.drinks.length; i++) {
                //We go over our callback and storing data values in our cocktailDiv variable.
                var cocktailDiv = `<div class='cocktailCard' data-id=${callback.drinks[i].idDrink}><h5 class='cocktailNameCard'>${callback.drinks[i].strDrink}</h5> <img class='cocktailImgCard' src=${callback.drinks[i].strDrinkThumb}></div>`
                //We append our cocktailDiv with data to the display.
                $('#display').append(cocktailDiv)
            }
        })
    })
    //When user clicks on a cocktail card we grab the values of data id of this card and modify our call to get the data for this specific cocktail.
    $(document.body).on('click', '.cocktailCard', function () {
        var call = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + $(this).attr('data-id');
        //Emptyind the display.
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
        }).then(function (callback) {
            //We create cocktailFullDiv element and modify it with the data from callback for specific cocktail user clicked on.
            var cocktailFullDiv = $('<div>');
            cocktailFullDiv.attr('class', 'cocktailFullCard');
            cocktailFullDiv.append(`<img class='cocktailImgFullCard' src=${callback.drinks[0].strDrinkThumb}>`);
            cocktailFullDiv.append(`<h3 class='fullCard cocktailNameFullCard'>${callback.drinks[0].strDrink}</h3>`);
            cocktailFullDiv.append(`<h4 class='fullCard cocktailGlassFullCard '>Instructions :</h4>`);
            if (callback.drinks[0].strIngredient1) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure1} ${callback.drinks[0].strIngredient1}</h4>`) };
            if (callback.drinks[0].strIngredient2) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure2} ${callback.drinks[0].strIngredient2}</h4>`) };
            if (callback.drinks[0].strIngredient3) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure3} ${callback.drinks[0].strIngredient3}</h4>`) };
            if (callback.drinks[0].strIngredient4) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure4} ${callback.drinks[0].strIngredient4}</h4>`) };
            if (callback.drinks[0].strIngredient5) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure5} ${callback.drinks[0].strIngredient5}</h4>`) };
            if (callback.drinks[0].strIngredient6) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure6} ${callback.drinks[0].strIngredient6}</h4>`) };
            if (callback.drinks[0].strIngredient7) { cocktailFullDiv.append(`<h4 class='ingredientFullCard'>${callback.drinks[0].strMeasure7} ${callback.drinks[0].strIngredient7}</h4>`) };
            cocktailFullDiv.append(`<h4 class='instructionsFullCard'>Instructions: ${callback.drinks[0].strInstructions}</h4>`);
            //We append our element to display.
            $('#display').append(cocktailFullDiv)
        });
    })
    //If user clicked on search by main ingredient button we grab the value form input and modify our call.
    $(document.body).on('click', '#searchByMainIngredient', function () {
        var call = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + $('#mainIngredientChoice').val();
        //Clearing the display.
        $('#display').html('');
        //Our AJAX call.
        $.ajax({
            url: call,
            method: 'GET'
        }).then(function (callback) {
            //For loop to go over callback values.
            for (var i = 0; i < callback.meals.length; i++) {
                //We create a variable recipeDiv and modify it with the data from callback.
                var reciepeDiv = `<div class='recipeCard' data-id=${callback.meals[i].idMeal}><h5 class='recipeNameCard'>${callback.meals[i].strMeal}</h5> <img class='recipeImgCard' src=${callback.meals[i].strMealThumb}></div>`
                //Appending our recipeDiv to our display.
                $('#display').append(reciepeDiv)
            }
        })
    })
    //If users clicked on search by category button we grab the value form input and modify our call.
    $(document.body).on('click', '#searchByCategory', function () {
        var call = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + $('#categoryChoice').val();
        //Clearing the display.
        $('#display').html('');
        //Our AJAX call.
        $.ajax({
            url: call,
            method: 'GET'
        }).then(function (callback) {
            //For loop to go over callback values.
            for (var i = 0; i < callback.meals.length; i++) {
                //We create a variable recipeDiv and modify it with the data from callback.
                var reciepeDiv = `<div class='recipeCard' data-id=${callback.meals[i].idMeal}><h5 class='recipeNameCard'>${callback.meals[i].strMeal}</h5> <img class='recipeImgCard' src=${callback.meals[i].strMealThumb}></div>`
                //Appending our recipeDiv to our display.
                $('#display').append(reciepeDiv)
            }
        })
    })
    //If users clicked on search by cuisine button we grab the value form input and modify our call.
    $(document.body).on('click', '#searchByCuisine', function () {
        var call = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + $('#cuisineChoice').val();
        //Clearing the display.
        $('#display').html('');
        //Our AJAX call.
        $.ajax({
            url: call,
            method: 'GET'
        }).then(function (callback) {
            //For loop to go over callback values.
            for (var i = 0; i < callback.meals.length; i++) {
                //We create a variable recipeDiv and modify it with the data from callback.
                var reciepeDiv = `<div class='recipeCard' data-id=${callback.meals[i].idMeal}><h5 class='recipeNameCard'>${callback.meals[i].strMeal}</h5> <img class='recipeImgCard' src=${callback.meals[i].strMealThumb}></div>`
                //Appending our recipeDiv to our display.
                $('#display').append(reciepeDiv)
            }
        })
    })
    //When user clicks on a recipe card we grab the values of data id of this card and modify our call to get the data for this specific cocktail.
    $(document.body).on('click', '.recipeCard', function () {
        var call = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + $(this).attr('data-id');
        //Emptyind the display.
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
        }).then(function (callback) {
            //We create recipeFullDiv element and modify it with the data from callback for specific recipe user clicked on.
            var recipeFullDiv = $('<div>');
            recipeFullDiv.attr('class', 'recipeFullCard');
            recipeFullDiv.append(`<img class='recipeImgFullCard' src=${callback.meals[0].strMealThumb}>`);
            recipeFullDiv.append(`<h3 class='fullCard recipeNameFullCard'>${callback.meals[0].strMeal}</h3>`);
            recipeFullDiv.append(`<h3 class="fullCard">Instructions :</h3>`);
            if (callback.meals[0].strIngredient1) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure1} ${callback.meals[0].strIngredient1}</h4>`) };
            if (callback.meals[0].strIngredient2) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure2} ${callback.meals[0].strIngredient2}</h4>`) };
            if (callback.meals[0].strIngredient3) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure3} ${callback.meals[0].strIngredient3}</h4>`) };
            if (callback.meals[0].strIngredient4) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure4} ${callback.meals[0].strIngredient4}</h4>`) };
            if (callback.meals[0].strIngredient5) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure5} ${callback.meals[0].strIngredient5}</h4>`) };
            if (callback.meals[0].strIngredient6) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure6} ${callback.meals[0].strIngredient6}</h4>`) };
            if (callback.meals[0].strIngredient7) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure7} ${callback.meals[0].strIngredient7}</h4>`) };
            if (callback.meals[0].strIngredient8) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure8} ${callback.meals[0].strIngredient8}</h4>`) };
            if (callback.meals[0].strIngredient9) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure9} ${callback.meals[0].strIngredient9}</h4>`) };
            if (callback.meals[0].strIngredient10) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure10} ${callback.meals[0].strIngredient10}</h4>`) };
            if (callback.meals[0].strIngredient11) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure11} ${callback.meals[0].strIngredient11}</h4>`) };
            if (callback.meals[0].strIngredient12) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure12} ${callback.meals[0].strIngredient12}</h4>`) };
            if (callback.meals[0].strIngredient13) { recipeFullDiv.append(`<h4 class='ingredientFullCard'>${callback.meals[0].strMeasure13} ${callback.meals[0].strIngredient13}</h4>`) };
            recipeFullDiv.append(`<h4 class='instructionsFullCard'>Instructions: ${callback.meals[0].strInstructions}</h4>`);
            //we append that recipeFullDiv variable to display div.
            $('#display').append(recipeFullDiv)
        });
    })

})
//Our loadMainMenu function. We clear the display and append new elements for main menu.
function loadMainMenu() {
    $('#display').html('');
    $('#display').append(`
        <div class="card-group">
        <div class="card" id='getFoodMenu'>
          <img class="card-img-top mainPageImages" src="assets/images/Brunch & Specials-4.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title main-links">— Food Menu —</h5>
          </div>
        </div>
        <div class="card" id='getCocktailMenu'>
          <img class="card-img-top mainPageImages" src="assets/images/Monnie Burkes-8.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title main-links">— Cocktail Menu —</h5>
          </div>
        </div>
    </div>
    `);
}
//Our loadFoodMenu function. We clear the display and load new elements for food menu.
function loadFoodMenu() {
    $('#display').html('');
    $('#display').append(`<div class="card-group">
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="assets/images/Mussels.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Main Ingredient</h5>
                <p class="card-text">Find recipes by main ingredient</p>
                <input class="form-control form-control-lg" id='mainIngredientChoice'>
            </div>
            <div>
                <button id="searchByMainIngredient">Search Recipes</button>
            </div>
        </div>
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="assets/images/veggies.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Find recipes by category</h5>
                <p class="card-text">Choose a category from the list below.</p>
                    <select class="form-control form-control-lg" id='categoryChoice'>
                    <option>— Select —</option>
                    <option>Beef</option>
                    <option>Breakfast</option>
                    <option>Chicken</option>
                    <option>Dessert</option>
                    <option>Lamb</option>
                    <option>Pasta</option>
                    <option>Pork</option>
                    <option>Seafood</option>
                    <option>Side</option>
                    <option>Starter</option>
                    <option>Vegan</option>
                    <option>Vegetarian</option>
                </select>
            </div>
            <div>
                <button id="searchByCategory">Search Recipes</button>
            </div>
        </div>
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="assets/images/Carb.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Cuisine</h5>
                <p class="card-text">Choose a cuisine from the list below.</p>
                    <select class="form-control form-control-lg" id='cuisineChoice'>
                    <option>— Select —</option>
                    <option>American</option>
                    <option>British</option>
                    <option>Canadian</option>
                    <option>Chinese</option>
                    <option>Dutch</option>
                    <option>French</option>
                    <option>Greek</option>
                    <option>Indian</option>
                    <option>Irish</option>
                    <option>Italian</option>
                    <option>Jamaican</option>
                    <option>Japanese</option>
                    <option>Malaysian</option>
                    <option>Mexican</option>
                    <option>Moroccan</option>
                    <option>Russian</option>
                    <option>Spanish</option>
                    <option>Thai</option>
                    <option>Vietnamese</option>
                </select>
            </div>
            <div>
                <button id="searchByCuisine">Search Recipes</button>
            </div>
        </div>
    </div>
    `)
};
//Our loadCocktailMenu function. We clear the display and load new elements for our cocktail menu.
function loadCocktailMenu() {
    $('#display').html('');
    $('#display').append(`<div class="card-group">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="assets/images/drinks2.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Cocktails by Alcohol Type</h5>
                <p class="card-text">Choose an alcohol option from the list below.</p>
                <select class="form-control form-control-lg" id='alcoholChoice'>
                    <option>— Select —</option>
                    <option>Random</option>
                    <option>Gin</option>
                    <option>Rum</option>
                    <option>Tequila</option>
                    <option>Vodka</option>
                    <option>Whiskey</option>
                </select>
                <button id="cocktailSearchByType">Search For Your Next Cocktail</button>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="assets/images/drinks.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Cocktails by Name</h5>
                <p class="card-text">Search below for cocktails by name.</p>
                <input class="form-control" id="cocktailNameInput">
                <button id="cocktailSearchByName">Search For Your Next Cocktail</button>
            </div>
        </div>
    </div>
    </div>
    `)
};
//Our load age page function. We clear the display and load new elements.
function loadAgePage() {
    $('#display').html('');
    $('#display').append(`<div class="wrapper-body box">

    <div class="age">
        <p id="ageText">Please enter your birthdate below to view cocktails</p>
        <input class="form-control" id="dobMonth" maxlength="2" pattern="[0-9]*" placeholder="MM">

        <input class="form-control" id="dobDay" maxlength="2" pattern="[0-9]*" placeholder="DD">

        <input class="form-control" id="dobYear" maxlength="4" pattern="[0-9]*" placeholder="YYYY">
        <br>
        <button id="ageEnter">Enter</button>
    </div>
</div>`);
};
//our valid age function. It clears the display and loads new elements.
function validAge() {
    $('#display').html('');
    $('#display').append(`<div class="wrapper-body box">
    <div class="age">
        <p id="validText">Please enter a valid birthdate.</p>
        <input class="form-control" id="dobMonth" maxlength="2" pattern="[0-9]*" placeholder="MM">

        <input class="form-control" id="dobDay" maxlength="2" pattern="[0-9]*" placeholder="DD">

        <input class="form-control" id="dobYear" maxlength="4" pattern="[0-9]*" placeholder="YYYY">
        <br>
        <button id="ageEnter">Enter</button>
    </div>
</div>`);
}
//Our age dinied function. We clear the display and load new elements for age denied menu.
function ageDenied() {
    $('#display').html('');
    $('#display').append(`<div class="wrapper-body box">

    <div class="age">
        <p id="ageUnder">Sorry, your age restricts you from viewing our cocktail lists.</p>
        <button id="homeReturn">Return to Home Page</button>
    </div>
</div>`);
    $(document.body).on('click', '#homeReturn', function () {
        loadMainMenu();
    });
}

//our age page function. it grabs the values of dates user entered and checks if user is over 21. if yes, it loads ageDenied function, if no it loads loadCocktailMenu function and stores age verification variable as passed.
$(document).on('click', '#ageEnter', function () {
    var month = $("#dobMonth").val();
    var day = $("#dobDay").val();
    var year = $("#dobYear").val();
    var age = 21;
    var mydate = new Date();

    mydate.setFullYear(year, month - 1, day);

    var currdate = new Date();

    currdate.setFullYear(currdate.getFullYear() - age);

    if (month == "" || isNaN(month) || day == "" || isNaN(day) || year == "" || isNaN(year)) {
        validAge();
    } else if ((currdate - mydate) < 0) {
        ageDenied();
    } else {
        loadCocktailMenu();
        localStorage.ageVerification = "passed";

    };
});
//Our random function to get a random cocktail.
function random() {
    var call = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    $.ajax({
        url: call,
        method: 'GET'
    }).then(function (callback) {
        for (var i = 0; i < callback.drinks.length; i++) {
            var cocktailDiv = `<div class='cocktailCard' data-id=${callback.drinks[i].idDrink}><h5 class='cocktailNameCard'>${callback.drinks[i].strDrink}</h5> <img class='cocktailImgCard' src=${callback.drinks[i].strDrinkThumb}></div>`
            $('#display').append(cocktailDiv);
        }
    })
}