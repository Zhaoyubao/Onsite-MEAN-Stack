$(document).ready( () => {
    $('#click').click( () => {
        var name = $('input#name').val().replace(/\s/g, '');
        if (!name) {
            alert('Please enter your name!');
        }
        else {
            // var serialized = $('form').serialize() + '&ninja=blackbelt';
            $.ajax({
                url : '/result',
                method : 'post',
                // data : serialized,
                data : $('form').serialize(),
                success : resp => $('div').html(resp)
            })
        }
    })
})
