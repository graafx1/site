$(function() {
    $('#submit').click (function(e) {
        e.preventDefault();
        $.ajax ({
            url: "https://formspree.io/graafx1@gmail.com",
            method: "POST",
            data: {email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('#contact').html('<h1>Дякую!</h1>')
        });
    });
});