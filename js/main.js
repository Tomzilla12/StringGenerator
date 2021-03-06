function rnd(min, max) {
    return Math.floor(Math.random() * ((max-min)+1) + min);
}

function generateRandomString(includeLetters, includeNumbers, numberOfCharacters) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var randomString = "";

    var counter = 0;
    var characterType;
    var characterGenerated;
    while (counter < numberOfCharacters) {
        characterGenerated = false;
        characterType = rnd(0, 1);
        
        if (characterType == 0 && includeLetters) {
            randomString += letters.substr(rnd(0, letters.length - 1), 1);
            characterGenerated = true;
        } else if (characterType == 1 && includeNumbers) {
            randomString += numbers.substr(rnd(0, numbers.length - 1), 1);
            characterGenerated = true;
        }
        
        if (characterGenerated) {
            counter++;
        }
    }

    return randomString;
}

function setColorMode() {
    var newColorMode = localStorage.colorMode;
    $('#page').removeClass('darkmode');
    $('#page').removeClass('lightmode');
    $('#page').addClass(newColorMode);
}

$(function(){
    // Generate String
    $('#generate').click(function() {
        var includeLetters = $('#includeLetters').prop('checked');
        var includeNumbers = $('#includeNumbers').prop('checked');
        var numberOfCharacters = $('#numberOfCharacters').val();
        
        $('#randomString').html(generateRandomString(includeLetters, includeNumbers, numberOfCharacters).toUpperCase());
    });
    $('#generate').click();

    
    // Modes
    $('.changeMode').click(function(){
        var newColorMode = $(this).attr('class').split(' ')[1];
        localStorage.colorMode = newColorMode;
        setColorMode();
    });
    setColorMode();
});