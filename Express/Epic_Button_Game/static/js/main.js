$(document).ready( () => {
    var socket = io.connect();
    $('#count').click( () => {
        socket.emit('click_epic_button', {});
    });
    socket.on('increment', data => {
        $('span').html(data.count);
    });
    $('#reset').click( () => {
        socket.emit('click_reset', {});
    });
    socket.on('reset', data => {
        $('span').html(data.count);
    });
    socket.on('refresh', data => {
        $('span').html(data.count);
    });
})
