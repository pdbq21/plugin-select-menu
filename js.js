/**
 * Created by ruslan on 07.07.16.
 */
$(document).ready(function () {

    (function ($) {
        $.fn.myPlugin = function () {


            var cityList = {
                city: [],
                ajax: function () {
                    $.ajax({
                        //url: "http://localhost:8000/json-router/cities/",
                        url: 'https://pdbq21.github.io/plugin-select-menu/cities.json',
                        type: 'GET',
                        dataType: "json",
                        success: function (data) {
                            for (var i = 0, dataLength = data.length; i < dataLength; i++) {
                                cityList.city.push(" " + data[i].name);
                            }
                        }
                    });
                }
            };

            var HTML_Container_SelectMenu = "<div class='container' id='selectMenu'>" +
                "<div class='row'>" +
                "<div class='col-md-12 col-sm-12 col-xs-12' id='divUl'><ul class='list-group' id='cityList'></ul></div>" +
                "<div class='col-md-12 col-sm-12 col-xs-12'><button type='submit' class='btn btn-default'>Done</button></div>" +
                "</div>" +
                "</div>";

            var HTML_Li_SelectMenu = "<div class='col-md-4 col-sm-4 col-xs-4 nameCity'><span>%nameCity%</span></div>";

            function list(arr) {
                var listLi = "";
                for (var i = 0, lengthArr = arr.length; i < lengthArr; i += 3) {

                    if (arr[i+1] === undefined){
                        listLi += "<li>" + arr[i + 0] + "" + "" + "</li>";
                    }else if(arr[i+2] === undefined){
                        listLi += "<li>" + arr[i + 0] + arr[i + 1] + "" + "</li>";
                    }else

                        listLi += "<li>" + arr[i + 0] + arr[i + 1] + arr[i + 2] + "</li>";
                }
                return listLi;
            }

            function listPhone(arr) {
                var listLi = '';
                for (var i = 0, lengthArr = arr.length; i < lengthArr; i++) {
                    listLi += "<li>" + arr[i] + "</li>";

                }
                return listLi;
            }

            function UpOrDown(elem) {

                var documentViewTop = $(window).scrollTop(),
                    elementTop = $(elem).offset().top,
                    gratifyElementHeight = elementTop - 200;


                if (gratifyElementHeight > documentViewTop) {
                    return $("#selectMenu").addClass("up");
                } else {
                    return $("#selectMenu").addClass("down");
                }

            }

            function updateDiv() {

                if ($("div").is("#selectMenu")) {
                    if ($("#selectMenu").attr('style') === "display: none;") {
                        $("#selectMenu").show();
                        UpOrDown($("input"));
                    }
                    else {
                        $("#selectMenu").hide();
                        $("#selectMenu").removeClass("up down");
                    }

                    return;
                }


                $(".container-fluid .div .col-md-12 form").append(HTML_Container_SelectMenu);//add container

                UpOrDown($("input"));

                /******************** append select menu in document ************************/

                var arr = [];

                for (var key in cityList.city) {

                    var formatted = HTML_Li_SelectMenu.replace("%nameCity%", cityList.city[key]);
                    arr.push(formatted);
                }

                if ($(window).width() < 480) {

                    $("#cityList").append(listPhone(arr));
                    $(".nameCity").removeClass("col-md-4 col-sm-4 col-xs-4");

                    $(".nameCity").addClass("col-md-12 col-sm-12 col-xs-12");

                } else {
                    $("#cityList").append(list(arr));
                }


                /************** end *************/
                var inputValue = [];

                $("span").click(function () {

                    /************** check availability class 'active' ***********/

                    if ($(this).parents(".nameCity").attr('class') === "col-md-4 col-sm-4 col-xs-4 nameCity active" ||
                        $(this).parents(".nameCity").attr('class') === "nameCity col-md-12 col-sm-12 col-xs-12 active") {
                        $(this).parents(".nameCity").removeClass("active");

                        for (var i = inputValue.length - 1; i >= 0; i--) {
                            if (inputValue[i] === $(this).text()) {

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
                /**************** add input ********************/

                $("button").click(function () {
                    $(this).parents("#selectMenu").remove();
                    $("input").focus();
                });
                /****** end ****/


            }


            this.click(function (event) {

                if (cityList.city[0] === undefined) cityList.ajax();

                setTimeout(updateDiv, 250);

            });//end this.click(function (event)


        };// end $.fn.myPlugin

    }(jQuery));

    $("input").myPlugin();


});// end.
