var PG = PG || {};

PG.ghosts = [];

$(document).ready(function() {
    $('#video1Thumbnail').click(function() {
        $(this).html('<iframe width="420" height="315" src="https://www.youtube.com/embed/3jyIfyPN7o8?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
    });
    $('#video2Thumbnail').click(function() {
        $(this).html('<iframe width="420" height="315" src="https://www.youtube.com/embed/W5f26v-MB3A?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
    });
    
    window.setTimeout(PG.addGhosts, 3000);
});


PG.addGhosts = function() {

    for (var n = 0; n < 4; n++) {
        PG.addGhost('ghosts');
    }
    for (var n = 0; n < 3; n++) {
        PG.addGhost('evil');
    }
    for (var n = 0; n < 2; n++) {
        PG.addGhost('devil');
    }
    for (var n = 0; n < 1; n++) {
        PG.addGhost('goblin');
    }
    
    for (var n = 0; n < PG.ghosts.length; n++) {
        PG.moveGhost(PG.ghosts[n]);
    }

};

PG.moveGhost = function(ghost) {
    var width = $(window).width();
    var height =$(window).height();
    var pos = ghost.position();
    var destLeft;
    var destRight;
    if (pos.left < 0.5 * width) {
        destLeft = pos.left + Math.random() * width * 0.5;
    } else {
        destLeft = pos.left - Math.random() * width * 0.5;
    }

    if (pos.top < 0.5 * height) {
        destTop = pos.top + Math.random() * height * 0.5;
    } else {
        destTop = pos.top - Math.random() * height * 0.5;
    }

    var duration = Math.floor(5000 + 5000 * Math.random());
    ghost.animate(
        {
            left: destLeft,
            top: destTop
        },
        duration,
        function() {
            PG.moveGhost(ghost);
        }           
    );
};

PG.addGhost = function(name) {
    var index = PG.ghosts.length;
    var id = name + index;
    var left = Math.random() * $(window).width();
    var top = Math.random() * $(window).height();

    $("body").append('<div id="' + id + '" class = "ghost" style = "position:absolute;left:' + left + 'px;top:' + top + 'px"><img src="resources/' + name + '.png" /></div>');
    PG.ghosts[index] = $("#" + id);

};
