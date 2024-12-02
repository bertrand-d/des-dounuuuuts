document.addEventListener("DOMContentLoaded", (event) => {
    const data = [
        {
            "id": 0,
            "name": "Strawberry iced with prinkles",
            "description": "Our glazed doughnut is dipped in strawberry icing and topped with festive rainbow sprinkles.",
            "imageUrl": "https://cdn.prod.website-files.com/6746e516f0765aa609fb0841/674723ca9e8a83b91ec6e148_Image.png",
            "calories": "210",
            "sugar": "11g",
            "totalFat": "5g",
            "sodium": "85mg",
            "bodyColor": "#fbe5e1",
            "textColor": "#fe707b"
        },
        {
            "id": 1,
            "name": "Chocolate iced with prinkles",
            "description": "Our glazed doughnut is dipped in chocolate icing and topped with festive rainbow sprinkles.",
            "imageUrl": "https://cdn.prod.website-files.com/6746e516f0765aa609fb0841/67498210d76464b18cf1f7e0_donut2.png",
            "calories": "200",
            "sugar": "15g",
            "totalFat": "10g",
            "sodium": "90mg",
            "bodyColor": "rgb(174, 131, 102)",
            "textColor": "#452917"
        },
        {
            "id": 2,
            "name": "Caramel iced",
            "description": "Our glazed doughnut is dipped in caramel icing.",
            "imageUrl": "https://cdn.prod.website-files.com/6746e516f0765aa609fb0841/674982101b9187f03a293195_donut3.png",
            "calories": "220",
            "sugar": "20g",
            "totalFat": "10g",
            "sodium": "90mg",
            "bodyColor": "#ffa369",
            "textColor": "#ad6537"
        },
    ];
    //get all the donuts
    const donutArray = document.querySelectorAll(".product-selector__list-item")
    const donutImage = document.querySelector("#donut-image")
    const donutInformationContainer = document.querySelector("#donut-informations")
    const donutTitle = document.querySelector("#donut-title")
    const donutDescription = document.querySelector("#donut-description")
    const donutSugar = document.querySelector("#donut-sugar")
    const donutCalories = document.querySelector("#donut-calories")
    const donutTotalFat = document.querySelector("#donut-total-fat")
    const donutSodium = document.querySelector("#donut-sodium")
    const donutWordContainer = document.querySelector("#donut-flavour")
    const donutWords = document.querySelectorAll(".flavour-name-text")
    const body = document.querySelector("body")
    //store the precedent selected element
    let elementPrecedent = null;
    donutArray.forEach((donut, index) => {
        const handleInteraction = (e) => {
            e.preventDefault();
            if (elementPrecedent === donut) {
                return
            }
            //remove the border color of the precedent element
            if (elementPrecedent) {
                elementPrecedent.style.borderColor = "white"
            }
            //add border color
            donut.style.borderColor = data[index].textColor
            elementPrecedent = donut
            //animate the donut informations
            donutImage.parentElement.classList.add("product-image--go-left")
            donutInformationContainer.classList.add("product-informations--go-right")
            donutWordContainer.classList.add("flavour-name--go-bottom")
            setTimeout(() => {
                //add new color to the body
                body.style.backgroundColor = data[index].bodyColor
                //add correct data to the donut
                donutImage.src = data[index].imageUrl
                donutTitle.textContent = data[index].name
                donutTitle.style.color = data[index].textColor
                donutDescription.textContent = data[index].description
                donutSugar.textContent = data[index].sugar
                donutCalories.textContent = data[index].calories
                donutTotalFat.textContent = data[index].totalFat
                donutSodium.textContent = data[index].sodium
                donutWords.forEach(wordElement => {
                    wordElement.style.color = data[index].textColor
                });
                //and then make it back
                donutImage.parentElement.classList.remove("product-image--go-left")
                donutInformationContainer.classList.remove("product-informations--go-right")
                donutWordContainer.classList.remove("flavour-name--go-bottom")
            }, 625)
        }
        // Add two types of events
        donut.addEventListener("click", handleInteraction);
        donut.addEventListener("touchstart", handleInteraction);
    });
    //add border color at the first load of the page
    const firstDonut = donutArray[0];
    firstDonut.style.borderColor = data[0].textColor;
    elementPrecedent = firstDonut;
    donutWords.forEach(wordElement => {
        wordElement.style.color = data[0].textColor;
    });
});