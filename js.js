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

                var HTML_Li_SelectMenu = "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>";

                /*
                "<li>" +
                 "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>" +
                 "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>" +
                 "<div class='col-md-4 nameCity'><span>%nameCity%</span></div></li>";
                */


/******************** append select menu in document ************************/
$("body:last").append(HTML_Container_SelectMenu);//add container

var arr = [];
                for (var key in cityList.city) {


                    var formatted =  HTML_Li_SelectMenu.replace("%nameCity%", cityList.city[key]);

                    arr.push(formatted);

                }

var li = "<li>"+arr[0]+arr[1]+arr[2]+"</li><li>"+arr[3]+arr[4]+arr[5]+"</li><li>"+arr[6]+arr[7]+arr[8]+"</li>";

                $("#cityList").append(li);
/************** end *************/



                return event.preventDefault();//re-play block

            });//end this.submit(function (event)


        };// end $.fn.myPlugin

    }(jQuery));

    $("input").myPlugin();


});// end.