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

function jeu (bonneR, userR){  // create objects
    this.bonneR= bonneR;
    this.userR= userR;
   }
Tab2= [];

//i = 0;
var i;
//to show questions in each <div>
for (i=0; i<Tab.length; i++) {

    $('.quizz').append('<div class="divQ" id=' + 'question' + i + '></div>'); //new div for question

    //$('#question'+i).html(Tab[i].question);//get question in HTML

    $('#question' + i).append("<div class='titre' id='intitule" + i + "'></div><div class='answer' id='choixM1" + i + "'></div><div class='answer' id='choixM2" + i + "'></div><div class='answer' id='choixM3" + i + "'></div>");
    //new div for each answer (3) IN question's div

    document.getElementById("intitule" + i).innerHTML = Tab[i].numero + " - " + Tab[i].question;

    //to show answers for each questions
    document.getElementById("choixM1" + i).innerHTML = Tab[i].choix1;
    document.getElementById("choixM2" + i).innerHTML = Tab[i].choix2;
    document.getElementById("choixM3" + i).innerHTML = Tab[i].choix3;

    //play

       // console.log(goodA);


   //Tab2.push(new jeu(goodA));
  // console.log(Tab2);

    //var reponse = document.getElementsByClassName('answer');
   /* (function(i)
    {
        $(".answer").click(function()
        {
            //alert(this.innerHTML); // =  var choixU = e.target.innerHTML;
            //alert($(".answer").index(this));
            //alert(this.index());
            alert(i);
            //i=i+1;


        });
    })(i);*/


    /*
    (function(i) {
        reponse[i].addEventListener("click", function (e) {

            console.log(i);
            console.log(Tab[i].repOK);

            var goodA= Tab[i].repOK;


            Tab2.push(new jeu(goodA, choixU));
            console.log(Tab2);






        });


    })(i);*/


}







/*

Tab2=[];


for (var n=0;n<Tab.length; n++){


        var reponse = document.getElementsByClassName('answer');

        reponse[n].addEventListener("click", function (e) {

           console.log(e.target);

          var rep= e.target.innerHTML;
          //console.log(rep);
           Tab2.push(rep);
           //Tab2.push(Tab[n].repOk);
           //console.log(Tab2)
           //Tab[0].repOK;
           //console.log(Tab[n].repOK);


    });

}




    for ( var [j]=0; j<Tab.length; [j]++){




            var good= Tab[j].repOK;
            console.log(good);


            var rep= e.target.innerHTML;


            console.log(rep);

            /*if (rep==Tab[j].repOK){

                alert("test");

            }

        });

    }

*/




/*for (var j=0; j<Tab.length; j++){

    var reponse = document.getElementsByClassName('answer');


    reponse[j].addEventListener("click", function (e){

        console.log(e.target);//OK
        var rep= e.target.id;

        console.log(rep);

        if (==)

        /*

            })


}*/
