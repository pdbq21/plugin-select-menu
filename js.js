/**
 * Created by ruslan on 07.07.16.
 */
$(document).ready(function() {

    (function ($) {
        $.fn.myPlugin = function () {

            this.click(function (event) {

                    console.log("Start");

//Object tags name
                var cityList = {
                    city: ["New York", "Orlando", "Las Vegas", "Los Angeles","New Orleans","Denver", "Anchorage" ,
                        "Honolulu" ,"San Antonio"]
                };

//template a select menu in HTML
                var HTML_Container_SelectMenu = "<div class='container' id='selectMenu'>" +
                    "<div class='row'>" +
                    "<ul id='cityList'></ul>" +
                    "<div class='col-md-12'><span>Done</span></div>" +
                    "</div>" +
                    "</div>";

                var HTML_Li_SelectMenu = "<li><div class='col-md-4 nameCity'><span>%nameCity%</span></div></li>";

                /*
                "<li>" +
                 "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>" +
                 "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>" +
                 "<div class='col-md-4 nameCity'><span>%nameCity%</span></div></li>";
                */


/******************** append select menu in document ************************/
$("body:last").append(HTMLContainerSelectMenu);

                for (var key in cityList.city) {

                    var formatted = HTMLTagSelectMenu.replace("%nameCity%"+key, cityList.city[key]);
console.log(formatted);



                    $("#cityList:last").append(formatted);

                }






                return event.preventDefault();//re-play block

            });//end this.submit(function (event)


        };// end $.fn.myPlugin

    }(jQuery));

    $("input").myPlugin();


});// end.