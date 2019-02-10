'use strict';


//Create function for when user clicks on button

function userSubmitHandle() {
    $('.selection-form').on('submit', function(event) {
        event.preventDefault();
        $('.selection-area').hide();
        getDogImage();
    })
}

//Create function to request random dog image

function getDogImage() {
    fetch('https:\/\/images.dog.ceo\/breeds\/hound-afghan\/n02088094_4420.jpg')
        .then(response => response.json())
        .then(responseJson => displayDogImage(responseJson))
        .catch(error => alert('This breed not found!'));
        $('.results-area').show();
}


//Create a function to display the random dog image

function displayDogImage(responseJson) {
    $('.dog-pics').append(`<img src= "${responseJson}" class= ".dog-pics">`);
}



$(userSubmitHandle);