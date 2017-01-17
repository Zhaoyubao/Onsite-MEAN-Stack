$(document).ready( () => {
    var socket = io.connect();
    $('button').click( () => {
        var name = $('#name').val().replace(/\s/g, '');
        if(!name) alert('Please enter your name!');
        else {
            data = {
                name : $('#name').val().toUpperCase(),
                location : $('#location').val(),
                language : $('#language').val(),
                comment : $('#comment').val(),
            }
            $('#result').show();
            socket.emit('posting_form', data);
            $('#name').val('');
            $('#comment').val('');
        }
    })
    socket.on('updated_message', data => {
        $('#info').html("You emitted the following information to the server:"+ JSON.stringify(data));
    })
    socket.on('random_number', data => {
        $('#num').html(`Your lucky number emitted by the server is <span>${data.random}</span>`);
    })
})
