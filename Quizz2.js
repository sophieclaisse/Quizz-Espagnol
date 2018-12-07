var Tab= [
    {"numero":"1","question": "Comment dit-on blanc ?", "choix1": "Blanca", "choix2": "Blanco", "choix3": "Blanch", "repOK": "Blanco" },
    {"numero":"2","question": "Comment dit-on jaune ?","choix1": "Amarillo","choix2": "Jaunas","choix3": "Amarilo","repOK": "Amarillo"},
    {"numero":"3","question": "Comment-dit-on : La chaise est rose ?","choix1": "La oficina es rosada","choix2": "La silla es rosa","choix3": "El bolso es rosado","repOK":"La silla es rosa"},
    {"numero":"4","question": "Comment-dit-on janvier ?","choix1": "Enero","choix2": "Enerro","choix3": "Ennero","repOK": "Enero"},
    {"numero":"5","question": "Combien y avait-il de lettres dans l'alphabet espagnol traditionnel ?","choix1": "27","choix2": "28","choix3": "29","repOK": "29"},
    {"numero":"6","question": "Comment dit-on : J'ai 13 ans ?","choix1": "Tengo tres año","choix2": "Tengo trece año","choix3": "Tengo trece años","repOK": "Tengo trece años"},
    {"numero":"7","question": "Comment dit-on 17 ?","choix1": "Dieciséis","choix2": "Dieciocho","choix3": "Aucun des deux","repOK": "Aucun des deux"},
    {"numero":"8","question": "Comment dit-on chien ?","choix1": "Pedro","choix2": "Pero","choix3": "Perro","repOK": "Perro"},
    {"numero":"9","question": "Comment dit-on bonjour le matin ?","choix1": "Buenos días","choix2": "Buenas noches","choix3": "Bien, después de mediodía","repOK": "Buenos días"},
    {"numero":"10","question": "Comment dit-on étoile ?","choix1": "Estrelos","choix2": "Estrella","choix3": "Estrela","repOK": "Estrella"},
];

//$('.quizz').append('<div class="divQ" id="question"></div>');
var score=0;
$("#modal").hide();



var i=0;

$("#intitule").text(Tab[i].question);
$("#choixM1").text(Tab[i].choix1);
$("#choixM2").text(Tab[i].choix2);
$("#choixM3").text(Tab[i].choix3);


$(".answer").click(function()
{

   // console.log(i);
    var choixU= this.innerHTML;
    //console.log(choixU);

    var goodA= Tab[i].repOK;
    console.log(goodA);


    // INSERTION POP UP DIV+QUESTION+TARGET
    $('#recapitulatif').append('<div id="recap'+i+'"></div>');
    $('#recap'+i).append('<div id="Q'+i+'"></div><div id="R'+i+'"></div><div id="BR'+i+'"></div>' );
    $('#Q'+i).text(Tab[i].question);
    $('#R'+i).text("Vous avez répondu:" + Tab[i].repOK);


    if (i<=10){

        if (choixU==goodA){
            score++;
            //console.log(score);

            $('#BR'+ i).text( "Bonne réponse! Olé!");

        }

        else {

            $('#BR'+ i).text("Falso! La bonne réponse est: " + Tab[i].repOK );


        }

        //INCREMENTATION DE I
        i++;
        console.log(i);


        // CHANGEMENT DE QUESTION
        if (i<10){
        $("#intitule").text(Tab[i].question);
        $("#choixM1").text(Tab[i].choix1);
        $("#choixM2").text(Tab[i].choix2);
        $("#choixM3").text(Tab[i].choix3);

        }


    }

    if(i==10) {

        $("#modal").slideDown(3000);
        $("#score").text("Vous avez " + score + " / 10!")
    }




});






//alert(this.innerHTML); // =  var choixU = e.target.innerHTML;
//alert($(".answer").index(this));
//alert(this.index());
//alert(i);
//i=i+1;
