function showprojects(){
    $("#projects_container").css("display","inherit");
    $("#projects_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideInDown");
    },800);
}
function closeprojects(){
    $("#projects_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideOutUp");
        $("#projects_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}

//phase de test fonction RSS
function showRSS(){
    $("#RSS_container").css("display", "inherit");
    $("#RSS_container").addClass("slideInFromBottomLeft");
    setTimeout(function(){
        $("#RSS_container").removeClass("slideInFromBottomLeft");
    }, 800); // Assurez-vous que cette durée correspond à celle de votre animation CSS
}

function closeRSS(){
    $("#RSS_container").addClass("slideOutToBottomLeft");
    setTimeout(function(){
        $("#RSS_container").removeClass("slideOutToBottomLeft");
        $("#RSS_container").css("display", "none");
    }, 800); // Assurez-vous que cette durée correspond à celle de votre animation CSS
}

//phase de test fonction RSS
function showCertif(){
    $("#Certif_container").css("display", "inherit");
    $("#Certif_container").addClass("slideInFromTopLeft");
    setTimeout(function(){
        $("#Certif_container").removeClass("slideInFromTopLeft");
    }, 800); // Assurez-vous que cette durée correspond à celle de votre animation CSS
}

function closeCertif(){
    $("#Certif_container").addClass("slideOutToTopLeft");
    setTimeout(function(){
        $("#Certif_container").removeClass("slideOutToTopLeft");
        $("#Certif_container").css("display", "none");
    }, 800); // Assurez-vous que cette durée correspond à celle de votre animation CSS
}




setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#projects").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
      $("#RSS").removeClass("animated fadeIn");
    },1000);
},1500);
