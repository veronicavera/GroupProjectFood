$(document).ready(function(){

    loadMainMenu();
    
    // $('#cocktailMenu').on('click',function(){
    //     loadMainMenu()
    // })
    $(document.body).on('click','#getFoodMenu',function(){
        loadFoodMenu();
    })
    $(document.body).on('click','#getCocktailMenu',function(){
        loadCocktailMenu();
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
    
    // $(document.body).on('click','#searchCocktailByInputName',function(){
    //     $('#display').append('<input id="cocktailNameInput">');
    //     $('#display').append('<button id="searchCocktailByInputName">Search cocktail by Name</button>');
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+$('#cocktailNameInput').val();
    //     $('#display').html('');
    //     console.log(call)
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //           console.log(callback)
    //           for(var i=0;i<callback.drinks.length;i++){
    //               var cocktailDiv=`<div class='cocktail' data-id=${callback.drinks[i].idDrink}>${callback.drinks[i].strDrink} <img src=${callback.drinks[i].strDrinkThumb} width=200px></div>`
    //               $('#display').append(cocktailDiv)
    //           }
    //         })
    // })
    
    // $(document.body).on('click','#searchCocktailByInputAlcohol',function(){
        
    //     $('#display').append('<input id="alcoholInput">');
    //     $('#display').append('<button id="searchCocktailByInputAlcohol">Search cocktail by alcohol</button>');
    
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+$('#alcoholInput').val();
    //     $('#display').html('');
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
    //           console.log(callback)
    //           for(var i=0;i<callback.drinks.length;i++){
    //               var cocktailDiv=`<div class='cocktail' data-id=${callback.drinks[i].idDrink}>${callback.drinks[i].strDrink} <img src=${callback.drinks[i].strDrinkThumb} width=200px></div>`
    //               $('#display').append(cocktailDiv)
    //           }
           
    //       });
    
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
    function loadMainMenu(){
        $('#display').html('');
        $('#display').append(`
        <div class="card-group">
        <div class="card" id='getFoodMenu'>
          <img class="card-img-top" src="images/Brunch & Specials-4.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">— Food Menu —</h5>
          </div>
        </div>
        <div class="card" id='getCocktailMenu'>
          <img class="card-img-top" src="images/Monnie Burkes-8.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">— Cocktail Menu —</h5>
          </div>
        </div>
    </div>
    `);
    }
    function loadFoodMenu(){
        $('#display').html('');
        $('#display').append(`<div class="card-group">
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="images/Mussels.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Protein</h5>
                <p class="card-text">Choose a protein option from the list below.</p>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" id="proteinMenu" type="button" data-toggle="dropdown">Proteins
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li role="presentation">
                            <a href="#">Beef</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Chicken</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Lamb</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Pork</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Seafood</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Vegetarian</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Vegan</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="images/Veggie.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Vegetable</h5>
                <p class="card-text">Choose a vegetable option from the list below.</p>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" id="vegetableMenu" type="button" data-toggle="dropdown">Vegetables
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li role="presentation">
                            <a href="#">Tomato</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Zucchini</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Green Beans</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Broccoli</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card foodCard" style="width: 18rem;">
            <img class="card-img-top" src="images/Carb.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Carb</h5>
                <p class="card-text">Choose a carb option from the list below.</p>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" id="carbMenu" type="button" data-toggle="dropdown">Carbs
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li role="presentation">
                            <a href="#">Pasta</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Rice</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Potatoes</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Quinoa</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `)};
    function loadCocktailMenu(){
        $('#display').html('');
        $('#display').append(`<div class="card-group">
        <div class="card cocktailCard" style="width: 18rem;">
            <img class="card-img-top" src="images/drinks2.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Drinks by Alcohol Type</h5>
                <p class="card-text">Choose an alcohol option from the list below.</p>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" id="cocktailMenu" type="button" data-toggle="dropdown">Alcohol
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li role="presentation">
                            <a href="#">Vodka</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Gin</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Tequila</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Rum</a>
                        </li>
                        <li role="presentation">
                            <a href="#">Whiskey</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card cocktailCard" style="width: 18rem;">
            <img class="card-img-top" src="images/drinks.jpg" alt="Card image cap" width="100%">
            <div class="card-body">
                <h5 class="card-title">Random drinks</h5>
                <p class="card-text">Click below for 10 random cocktails.</p>
                <div class="random">
                    <button class="btn btn-primary" id="randomCocktail" type="button">Random
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `)};

    // function random(){
    //     var call='https://www.thecocktaildb.com/api/json/v1/1/random.php';
    //     $.ajax({
    //         url: call,
    //         method: 'GET'
    //       }).then(function(callback) {
            
    //           for(var i=0;i<callback.drinks.length;i++){
    //             var cocktailDiv=`<div class='cocktail' data-id=${callback.drinks[i].idDrink}>${callback.drinks[i].strDrink} <img src=${callback.drinks[i].strDrinkThumb} width=200px></div>`
    //             $('#display').append(cocktailDiv);
    //             }
    //         })
    // }
