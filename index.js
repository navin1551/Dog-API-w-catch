'use strict';


//Create function for when user clicks on button

function userSubmitHandle() {
    $('.selection-form').on('submit', function(event) {
        event.preventDefault();
        getDogImage();
    })
}

//Create function to request random dog image

function getDogImage() {
    $('.dog-pics').empty();
    let dogBreed = $('#user-input').val();
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayDogImage(responseJson))
        .catch(error => alert('This breed not found!'));
        $('.results-area').show();
}


//Create a function to display the random dog image or show alert

function displayDogImage(responseJson) {
    if(responseJson.message == "Breed not found") {
        alert("This breed is not found");
    }
    else{
    $('.dog-pics').append(`<img src= "${responseJson.message}" class= ".dog-pics">`);
    }
}



$(userSubmitHandle);