document.addEventListener('DOMContentLoaded', function() {

    // create and open banner events
    var logo = document.getElementById('logo');
    var args = { content: 'Hello Paperless Post!' };

    var hello = new Banner(args);

    logo.addEventListener('click', function() {
        hello.open();
    });

    hello.init();
});
