/**
 * Created by ruslan on 07.07.16.
 */
$(document).ready(function () {

    (function ($) {
        $.fn.myPlugin = function () {


//Object tags name
            var cityList = {
                city: [" New York", " Orlando", " Las Vegas", " Los Angeles", " New Orleans", " Denver", " Anchorage",
                    " Honolulu", " San Antonio"]
            };

//template a select menu in HTML
            var HTML_Container_SelectMenu = "<div class='container' id='selectMenu'>" +
                "<div class='row'>" +
                "<ul class='list-group' id='cityList'></ul>" +
                "<div class='col-md-12 col-sm-12 col-xs-12'><button type='submit' class='btn btn-default'>Done</button></div>" +
                "</div>" +
                "</div>";

            var HTML_Li_SelectMenu = "<div class='col-md-4 col-sm-4 col-xs-4 nameCity'><span>%nameCity%</span></div>";

            /*
             "<li>" +
             "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>" +
             "<div class='col-md-4 nameCity'><span>%nameCity%</span></div>" +
             "<div class='col-md-4 nameCity'><span>%nameCity%</span></div></li>";
             */


            this.click(function (event) {



                function UpOrDown(elem) {
                    var documentViewTop = $(window).scrollTop(),
                        elementTop = $(elem).offset().top,

                        gratifyElementHeight = elementTop - 200; //- $("#selectMenu").css(height);
                    //return ( gratifyElementHeight > documentViewTop);
                    /** Test **/
                    if ( gratifyElementHeight > documentViewTop){
                        return $("#selectMenu").addClass("up");
                    } else {
return       $("#selectMenu").addClass("down");
                    }


                }



                if ($("div").is("#selectMenu")) {
                    if ($("#selectMenu").attr('style') === "display: none;"){
                        $("#selectMenu").show();
                        UpOrDown(this);
                    }
                    else{
                        $("#selectMenu").hide();
                        $("#selectMenu").removeClass("up down");
                    }


                    return;
                }
                //$( this ).parents("#selectMenu").remove();

                $(".container-fluid .div .col-md-12 form").append(HTML_Container_SelectMenu);//add container

                UpOrDown(this);
                /*
                if (UpOrDown(this)) {

                    //$(".container-fluid .div .col-md-12 form input").before(HTML_Container_SelectMenu);//add container

                    $("#selectMenu").addClass("up");
                } else {
                    //$(".container-fluid .div .col-md-12 form").append(HTML_Container_SelectMenu);//add container
                    $("#selectMenu").addClass("down");
                }*/

                /******************** append select menu in document ************************/

                var arr = [];
                for (var key in cityList.city) {
                    var formatted = HTML_Li_SelectMenu.replace("%nameCity%", cityList.city[key]);
                    arr.push(formatted);
                }

                var li = "<li>" + arr[0] + arr[1] + arr[2] + "</li><li>" + arr[3] + arr[4] + arr[5] + "</li>" +
                    "<li >" + arr[6] + arr[7] + arr[8] + "</li>";
                /*<span class="badge">12</span>*/
                $("#cityList").append(li);
                /************** end *************/

                /**************** add input ********************/
                var inputValue = [];
                $("span").click(function () {

                    /************** check availability class 'active' ***********/
                    if ($(this).parents(".nameCity").attr('class') === "col-md-4 col-sm-4 col-xs-4 nameCity active") {
                        $(this).parents(".nameCity").removeClass("active");

                        for (var i = inputValue.length - 1; i >= 0; i--) {
                            if (inputValue[i] === $(this).text()) {
                                //delete inputValue[i];
                                inputValue.splice(i, 1);

                                break;
                            }
                        }
                    }
                    else {
                        $(this).parents(".nameCity").addClass("active");
                        var temp = $(this).text();
                        inputValue.push(temp);
                    }

                    $("input").val(inputValue);

                });

                /****** end ****/


                $("button").click(function () {
                    $(this).parents("#selectMenu").remove();
                    $("input").focus();
                });


                return event.preventDefault();//re-play block

            });//end this.submit(function (event)


        };// end $.fn.myPlugin

    }(jQuery));

    $("input").myPlugin();


});// end.