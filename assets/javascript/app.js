$(document).ready(function () {

    loadMainMenu();
    
    $(document.body).on('click', '#getFoodMenu', function () {
        loadFoodMenu();
    })
    $(document.body).on('click', '#getCocktailMenu', function () {
        loadCocktailMenu();
    })
    $(document.body).on('click', '#goHome', function () {
        loadMainMenu();
    })
    $(document.body).on('click', '#goFoodMenu', function () {
        loadFoodMenu();
    })
    $(document.body).on('click', '#goCocktailMenu', function () {
        loadCocktailMenu();
    })
    $(document.body).on('click', '#cocktailSearchByType', function () {
        if ($('#alcoholChoice').val() !== 'Select') {
            if($('#alcoholChoice').val() == 'Random'){random();}
            var call = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + $('#alcoholChoice').val();
            $('#display').html('');
            $.ajax({
                url: call,
                method: 'GET'
            }).then(function (callback) {
                console.log(callback)
                for (var i = 0; i < callback.drinks.length; i++) {
                    var cocktailDiv = `<div class='cocktailCard' data-id=${callback.drinks[i].idDrink}><h5 class='cocktailNameCard'>${callback.drinks[i].strDrink}</h5> <img class='cocktailImgCard' src=${callback.drinks[i].strDrinkThumb}></div>`
                    $('#display').append(cocktailDiv)
                }

            });
        }
    })
    $(document.body).on('click','#cocktailSearchByName',function(){
        var call='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+$('#cocktailNameInput').val();
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
              console.log(callback)
              for(var i=0;i<callback.drinks.length;i++){
                var cocktailDiv = `<div class='cocktailCard' data-id=${callback.drinks[i].idDrink}><h5 class='cocktailNameCard'>${callback.drinks[i].strDrink}</h5> <img class='cocktailImgCard' src=${callback.drinks[i].strDrinkThumb}></div>`
                  $('#display').append(cocktailDiv)
              }
            })
    })
    $(document.body).on('click','.cocktailCard',function(){
        var call='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+$(this).attr('data-id');
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
             var cocktailFullDiv=$('<div>');
            cocktailFullDiv.attr('class','cocktailFullCard');
            cocktailFullDiv.append(`<img class='cocktailImgFullCard' src=${callback.drinks[0].strDrinkThumb}>`);
            cocktailFullDiv.append(`<h3 class='cocktailNameFullCard'>Name: ${callback.drinks[0].strDrink}</h3>`);
            cocktailFullDiv.append(`<h4 class='cocktailTypeFullCard'>Type: ${callback.drinks[0].strAlcoholic}</h4>`);
            cocktailFullDiv.append(`<h4 class='cocktailGlassFullCard'>Glass: ${callback.drinks[0].strGlass}</h4>`);
            cocktailFullDiv.append(`<h4 class='cocktailCategoryFullCard'>Category: ${callback.drinks[0].strCategory}</h4>`);
            if(callback.drinks[0].strIngredient1){cocktailFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 1: ${callback.drinks[0].strMeasure1} ${callback.drinks[0].strIngredient1}</h4>`)};
            if(callback.drinks[0].strIngredient2){cocktailFullDiv.append(`<h4 class='ingredientFullCard'>Ingredient 2: ${callback.drinks[0].strMeasure2} ${callback.drinks[0].strIngredient2}</h4>`)};
            if(callback.drinks[0].strIngredient3){cocktailFullDiv.append(`<h4 class='ingredientFullCard'>Ingredient 3: ${callback.drinks[0].strMeasure3} ${callback.drinks[0].strIngredient3}</h4>`)};
            if(callback.drinks[0].strIngredient4){cocktailFullDiv.append(`<h4 class='ingredientFullCard'>Ingredient 4: ${callback.drinks[0].strMeasure4} ${callback.drinks[0].strIngredient4}</h4>`)};
            if(callback.drinks[0].strIngredient5){cocktailFullDiv.append(`<h4 class='ingredientFullCard'>Ingredient 5: ${callback.drinks[0].strMeasure5} ${callback.drinks[0].strIngredient5}</h4>`)};
            if(callback.drinks[0].strIngredient6){cocktailFullDiv.append(`<h4 class='ingredientFullCard'>Ingredient 6: ${callback.drinks[0].strMeasure6} ${callback.drinks[0].strIngredient6}</h4>`)};
            if(callback.drinks[0].strIngredient7){cocktailFullDiv.append(`<h4 class='ingredientFullCard'>Ingredient 7: ${callback.drinks[0].strMeasure7} ${callback.drinks[0].strIngredient7}</h4>`)};
            cocktailFullDiv.append(`<h4 class='instructionsFullCard'>Instructions: ${callback.drinks[0].strInstructions}</h4>`);
             $('#display').append(cocktailFullDiv)    
          });
    })
    $(document.body).on('click','#searchByMainIngredient',function(){
        var call='https://www.themealdb.com/api/json/v1/1/filter.php?i='+$('#mainIngredientChoice').val();
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
              for(var i=0;i<callback.meals.length;i++){
                var reciepeDiv = `<div class='recipeCard' data-id=${callback.meals[i].idMeal}><h5 class='recipeNameCard'>${callback.meals[i].strMeal}</h5> <img class='recipeImgCard' src=${callback.meals[i].strMealThumb}></div>`
                  $('#display').append(reciepeDiv)
              }
            })
    })
    $(document.body).on('click','#searchByCategory',function(){
        var call='https://www.themealdb.com/api/json/v1/1/filter.php?c='+$('#categoryChoice').val();
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
              for(var i=0;i<callback.meals.length;i++){
                var reciepeDiv = `<div class='recipeCard' data-id=${callback.meals[i].idMeal}><h5 class='recipeNameCard'>${callback.meals[i].strMeal}</h5> <img class='recipeImgCard' src=${callback.meals[i].strMealThumb}></div>`
                  $('#display').append(reciepeDiv)
              }
            })
    })
    $(document.body).on('click','#searchByCuisine',function(){
        var call='https://www.themealdb.com/api/json/v1/1/filter.php?a='+$('#cuisineChoice').val();
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
              console.log(callback)
              for(var i=0;i<callback.meals.length;i++){
                var reciepeDiv = `<div class='recipeCard' data-id=${callback.meals[i].idMeal}><h5 class='recipeNameCard'>${callback.meals[i].strMeal}</h5> <img class='recipeImgCard' src=${callback.meals[i].strMealThumb}></div>`
                  $('#display').append(reciepeDiv)
              }
            })
    })
    $(document.body).on('click','.recipeCard',function(){
        var call='https://www.themealdb.com/api/json/v1/1/lookup.php?i='+$(this).attr('data-id');
        $('#display').html('');
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
            console.log(callback)
             var recipeFullDiv=$('<div>');
             recipeFullDiv.attr('class','recipeFullCard');
             recipeFullDiv.append(`<img class='recipeImgFullCard' src=${callback.meals[0].strMealThumb}>`);
             recipeFullDiv.append(`<h3 class='recipeNameFullCard'>Name: ${callback.meals[0].strMeal}</h3>`);
             recipeFullDiv.append(`<h4 class='recipeTypeFullCard'>Area: ${callback.meals[0].strArea}</h4>`);
             recipeFullDiv.append(`<h4 class='recipeCategoryFullCard'>Category: ${callback.meals[0].strCategory}</h4>`);
             if(callback.meals[0].strIngredient1){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 1: ${callback.meals[0].strMeasure1} ${callback.meals[0].strIngredient1}</h4>`)};
             if(callback.meals[0].strIngredient2){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 2: ${callback.meals[0].strMeasure2} ${callback.meals[0].strIngredient2}</h4>`)};
             if(callback.meals[0].strIngredient3){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 3: ${callback.meals[0].strMeasure3} ${callback.meals[0].strIngredient3}</h4>`)};
             if(callback.meals[0].strIngredient4){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 4: ${callback.meals[0].strMeasure4} ${callback.meals[0].strIngredient4}</h4>`)};
             if(callback.meals[0].strIngredient5){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 5: ${callback.meals[0].strMeasure5} ${callback.meals[0].strIngredient5}</h4>`)};
             if(callback.meals[0].strIngredient6){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 6: ${callback.meals[0].strMeasure6} ${callback.meals[0].strIngredient6}</h4>`)};
             if(callback.meals[0].strIngredient7){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 7: ${callback.meals[0].strMeasure7} ${callback.meals[0].strIngredient7}</h4>`)};
             if(callback.meals[0].strIngredient8){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 8: ${callback.meals[0].strMeasure8} ${callback.meals[0].strIngredient8}</h4>`)};
             if(callback.meals[0].strIngredient9){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 9: ${callback.meals[0].strMeasure9} ${callback.meals[0].strIngredient9}</h4>`)};
             if(callback.meals[0].strIngredient10){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 10: ${callback.meals[0].strMeasure10} ${callback.meals[0].strIngredient10}</h4>`)};
             if(callback.meals[0].strIngredient11){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 11: ${callback.meals[0].strMeasure11} ${callback.meals[0].strIngredient11}</h4>`)};
             if(callback.meals[0].strIngredient12){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 12: ${callback.meals[0].strMeasure12} ${callback.meals[0].strIngredient12}</h4>`)};
             if(callback.meals[0].strIngredient13){recipeFullDiv.append(`<h4 class='ingredientFullCard'> Ingredient 13: ${callback.meals[0].strMeasure13} ${callback.meals[0].strIngredient13}</h4>`)};
            recipeFullDiv.append(`<h4 class='instructionsFullCard'>Instructions: ${callback.meals[0].strInstructions}</h4>`);
             $('#display').append(recipeFullDiv)    
          });
    })

    // $(document.body).on('click','#searchByName',function(){
    //     $('#display').html('');
    //     $('#display').append('<input id="cocktailNameInput">');
    //     $('#display').append('<button id="searchCocktailByInputName">Search cocktail by Name</button>');
    // })
    // $(document.body).on('click','#searchByAlcohol',function(){
    //     $('#display').html('');
    //     $('#display').append('<input id="alcoholInput">');
    //     $('#display').append('<button id="searchCocktailByInputAlcohol">Search cocktail by alcohol</button>');
    // })
    // $(document.body).on('click','#searchByGlass',function(){
    //     $('#display').html('');
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //           console.log(callback)
    //           for(var i=0;i<callback.drinks.length;i++){
    //               var glassButton=$('<button>');
    //               glassButton.append(callback.drinks[i].strGlass);
    //               glassButton.attr('data-glass',callback.drinks[i].strGlass);
    //               glassButton.attr('class','buttonGlass');
    //               $('#display').append(glassButton);
    //           }
    //         })
    // })
    // $(document.body).on('click','#searchByCategory',function(){
    //     $('#display').html('');
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //           console.log(callback)
    //           for(var i=0;i<callback.drinks.length;i++){
    //               var categoryButton=$('<button>');
    //               categoryButton.append(callback.drinks[i].strCategory);
    //               categoryButton.attr('data-category',callback.drinks[i].strCategory);
    //               categoryButton.attr('class','cocktailCategory');
    //               $('#display').append(categoryButton);
    //           }
    //         })
    // })
    // $(document.body).on('click','#getRandomCocktail',function(){
    //     $('#display').html('');
    //     for(i=0;i<5;i++){
    //         random();    
    //     }
    // })
    // $(document.body).on('click','.cocktailCategory',function(){
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+$(this).attr('data-category');
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //         $('#display').html('');
    //           for(var i=0;i<callback.drinks.length;i++){
    //             var cocktailDiv=`<div class='cocktail' data-id=${callback.drinks[i].idDrink}>${callback.drinks[i].strDrink} <img src=${callback.drinks[i].strDrinkThumb} width=200px></div>`
    //             $('#display').append(cocktailDiv);
    //             }
    //         })
    // })
    // $(document.body).on('click','.buttonGlass',function(){
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g='+$(this).attr('data-glass');
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //         $('#display').html('');
    //           for(var i=0;i<callback.drinks.length;i++){
    //             var cocktailDiv=`<div class='cocktail' data-id=${callback.drinks[i].idDrink}>${callback.drinks[i].strDrink} <img src=${callback.drinks[i].strDrinkThumb} width=200px></div>`
    //             $('#display').append(cocktailDiv);
    //             }
    //         })
    // })



    // $(document.body).on('click','#searchCocktailByInputAlcohol',function(){

    // $('#display').append('<input id="alcoholInput">');
    // $('#display').append('<button id="searchCocktailByInputAlcohol">Search cocktail by alcohol</button>');

    // var call='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+$('#alcoholInput').val();
    // $('#display').html('');
    // $.ajax({
    //     url: call,
    //     method: 'GET'
    //   }).then(function(callback) {
    //       console.log(callback)
    //       for(var i=0;i<callback.drinks.length;i++){
    //           var cocktailDiv=`<div class='cocktail' data-id=${callback.drinks[i].idDrink}>${callback.drinks[i].strDrink} <img src=${callback.drinks[i].strDrinkThumb} width=200px></div>`
    //           $('#display').append(cocktailDiv)
    //       }

    //   });

    // })
    // $(document.body).on('click','.cocktail',function(){
    //     $('#display').html('');
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+$(this).attr('data-id');
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //           console.log(callback)
    //          var cocktailFullDiv=$('<div>');
    //          cocktailFullDiv.append(`<img src=${callback.drinks[0].strDrinkThumb} width=300px>`);
    //          cocktailFullDiv.append(`<h3>Name: ${callback.drinks[0].strDrink}</h3>`);
    //          cocktailFullDiv.append(`<h4>Type: ${callback.drinks[0].strAlcoholic}</h4>`);
    //          cocktailFullDiv.append(`<h4>Glass: ${callback.drinks[0].strGlass}</h4>`);
    //          cocktailFullDiv.append(`<h4>Category: ${callback.drinks[0].strCategory}</h4>`);
    //          if(callback.drinks[0].strIngredient1){cocktailFullDiv.append(`<h4>Ingredient 1: ${callback.drinks[0].strMeasure1} ${callback.drinks[0].strIngredient1}</h4>`)};
    //          if(callback.drinks[0].strIngredient2){cocktailFullDiv.append(`<h4>Ingredient 2: ${callback.drinks[0].strMeasure2} ${callback.drinks[0].strIngredient2}</h4>`)};
    //          if(callback.drinks[0].strIngredient3){cocktailFullDiv.append(`<h4>Ingredient 3: ${callback.drinks[0].strMeasure3} ${callback.drinks[0].strIngredient3}</h4>`)};
    //          if(callback.drinks[0].strIngredient4){cocktailFullDiv.append(`<h4>Ingredient 4: ${callback.drinks[0].strMeasure4} ${callback.drinks[0].strIngredient4}</h4>`)};
    //          if(callback.drinks[0].strIngredient5){cocktailFullDiv.append(`<h4>Ingredient 5: ${callback.drinks[0].strMeasure5} ${callback.drinks[0].strIngredient5}</h4>`)};
    //          if(callback.drinks[0].strIngredient6){cocktailFullDiv.append(`<h4>Ingredient 6: ${callback.drinks[0].strMeasure6} ${callback.drinks[0].strIngredient6}</h4>`)};
    //          if(callback.drinks[0].strIngredient7){cocktailFullDiv.append(`<h4>Ingredient 7: ${callback.drinks[0].strMeasure7} ${callback.drinks[0].strIngredient7}</h4>`)};
    //          cocktailFullDiv.append(`<h4>Instructions: ${callback.drinks[0].strInstructions}</h4>`);
    //          $('#display').append(cocktailFullDiv)
    //         console.log(cocktailFullDiv)      
    //       });
    //   })



})
function loadMainMenu() {
    $('#display').html('');
    $('#display').append(`
        <div class="card-group">
        <div class="card" id='getFoodMenu'>
          <img class="card-img-top mainPageImages" src="images/Brunch & Specials-4.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title main-links">— Food Menu —</h5>
          </div>
        </div>
        <div class="card" id='getCocktailMenu'>
          <img class="card-img-top mainPageImages" src="images/Monnie Burkes-8.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title main-links">— Cocktail Menu —</h5>
          </div>
        </div>
    </div>
    `);
}
function loadFoodMenu() {
    $('#display').html('');
    $('#display').append(`<div class="card-group">
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="images/Mussels.jpg" alt="Card image cap" width="100%">
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
            <img class="card-img-top" src="images/veggies.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Find recipes by category</h5>
                <p class="card-text">Choose a category from the list below.</p>
                    <select class="form-control form-control-lg" id='categoryChoice'>
                    <option>— Select —</option>
                    <option>Beef</option>
                    <option>Breakfast</option>
                    <option>Chicken</option>
                    <option>Desert</option>
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
            <img class="card-img-top" src="images/Carb.jpg" alt="Card image cap" width="100%">
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
function loadCocktailMenu() {
    $('#display').html('');
    $('#display').append(`<div class="card-group">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="images/drinks2.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Cocktails by Alcohol Type</h5>
                <p class="card-text">Choose an alcohol option from the list below.</p>
                <select class="form-control form-control-lg" id='alcoholChoice'>
                    <option>— Select —</option>
                    <option>Gin</option>
                    <option>Whiskey</option>
                    <option>Vodka</option>
                    <option>Tequila</option>
                    <option>Rum</option>
                    <option>Random</option>
                </select>
                <button class="btn-primary" id="cocktailSearchByType">Search For Your Next Cocktail</button>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="images/drinks.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Cocktails by Name</h5>
                <p class="card-text">Search below for cocktails by name.</p>
                <input class="form-control" id="cocktailNameInput">
                <button class = "btn-primary" id="cocktailSearchByName">Search For Your Next Cocktail</button>
            </div>
        </div>
    </div>
    </div>
    `)
};

    function random(){
        var call='https://www.thecocktaildb.com/api/json/v1/1/random.php';
        $.ajax({
            url: call,
            method: 'GET'
          }).then(function(callback) {
              for(var i=0;i<callback.drinks.length;i++){
                var cocktailDiv = `<div class='cocktailCard' data-id=${callback.drinks[i].idDrink}><h5 class='cocktailNameCard'>${callback.drinks[i].strDrink}</h5> <img class='cocktailImgCard' src=${callback.drinks[i].strDrinkThumb}></div>`
                $('#display').append(cocktailDiv);
                }
            })
    }
