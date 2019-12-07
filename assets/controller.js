$(function(){
    $(".try").click(function(){
        $(".getInformation").trigger("reset");
    })
})

$(function(){
    $(".result").click(function(){
        $('p').html("work in progress");
    })
});

$(function(){
    var list = $('.list');
    for(var i = 1; i < list.length; i++)
        $(list[i]).hide();


    var control = 0;
    $(".next").click(function(){
        $(list[control]).hide();
        control++;
        if(control == list.length-1)
        $(".next").hide();
        $(list[control]).show();
    })
    

    $('.information').on('submit',function(){
        var activities = $("input[name = 'activities']").val();
        var priority = $("input[name = 'priority']").val();
        var record = {activities: activities, priority: priority};
        $.ajax({    
            type: 'POST',
            url: '/process',
            data: record,
            /*success: function(){
                $(".getInformation").trigger("reset");
            }*/
        });
    })
});

$(function(){
    $('.sign_in').on('submit',function(){
        var information = $('form input');
        $.ajax({
            type: 'POST',
            url: '/registration',
            data: information
        })
    })
})

