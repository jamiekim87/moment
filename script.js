$(document).ready(function (){

    $(".saveBtn").click(function() {
        let value = $(this).siblings(".description").val()
        console.log(value)
        let time = $(this).parents().attr("id")
        console.log(time)

        localStorage.setItem(time, value)
    })

    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))

    let currentHour = parseInt(moment().format("H"))

    $(".time-block").each(function () {
       let timeBlock = parseInt($(this).attr("id"))
        if(timeBlock === currentHour){
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }

    })


})
