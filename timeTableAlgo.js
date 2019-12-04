function templateTimetable(){
    //formula free time of week = lunch + sleep + priority 4 (count)
    var template = [[],[],[],[],[],[],[]]; // create array with 7 days ( Monday -> Sunday)
    for(i = 0; i < 7; i++){
        template[i][7] = "hygene";
        template[i][8] = "Breakfast";
        template[i][12] = "Lunch";
        template[i][18] = "Dinner";
        template[i][20] = "hygene";
        for(o = 1; o < 6; o++){
            template[i][o] = "sleep";
        }
    }
    return JSON.stringify(template);
    
}

function finalTimetable1(){
    var template = templateTimetable(); //this is for general timetable, TODO: attach template to wider scope variable ( less runn time )
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