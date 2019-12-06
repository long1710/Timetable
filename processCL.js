$(function(){
    $(".try").click(function(){
        $(".getInformation").trigger("reset");
    })
});
$(function(){
    $(".result").click(function(){
        $('p').html("work in progress");
    })
});

$(function(){
    $('.getInformation').on('submit',function(){
        var activities = $("input[name = 'activities']").val();
        var priority = $("input[name = 'priority']").val();
        var record = {activities: activities, priority: priority};
        $.ajax({    
            type: 'POST',
            url: '/process',
            data: record,
            success: function(){
                location.reload();
            }
        });
    })
});