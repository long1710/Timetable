function templateTimetable(){//parse object inside this 
    //formula free time of week = lunch + sleep + priority 4 (count)
    var template = [[],[],[],[],[],[],[]]; // create array with 7 days ( Monday -> Sunday)
    for(var i = 0; i < 7; i++){
        template[i][7] = "hygene";
        template[i][8] = "Breakfast";
        template[i][12] = "Lunch";
        template[i][18] = "Dinner";
        template[i][20] = "hygene";
        template[i][23] = null;
        for(var o = 0; o < 6; o++){
            template[i][o] = "sleep";
        }
    }   

            
    return template;
    
}


function finalTimetable1(){
    var template = templateTimetable(); //this is for general timetable, TODO: attach template to wider scope variable ( less runn time )
    for(var i = 0; i < template.length; i++)
        for(var o = 0; o < template[i].length;o++){
            var rd = Math.round(Math.random());
            if(template[i][o] == null){
                switch(rd){
                    case 0:    
                    template[i][o] = "rest";
                    break;

                    case 1:
                    template[i][o] = "work";
                    break;
                }
            }
        }

    return template;
}

function finalTimetable2(){
    var template = templateTimetable(); //this is for hardcore timetable 
}

function finalTimetable3(){
    var template = templateTimetable(); //this of relax timetable
}

module.exports = {
    templateTimetable,
    finalTimetable1,
    finalTimetable2,
    finalTimetable3
}