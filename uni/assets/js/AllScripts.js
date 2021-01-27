////////////// Login Cridentials  ////////////////
$("#processingcompletedtable").on("click", "#send", function() {
    Swal.fire({
        title: '<strong>تم إرسال الطلب الى رئيس البلدية بنجاح</strong>',
        icon: 'success',
        html:
        '',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
        'أغلق',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
        })
    $(this).closest("tr").remove();
 });

 $('[id="btnarchive"]').click(function() {
    Swal.fire({
        title: '<strong>لقد تمت أرشفة الطلب وإعلام المستخدم</strong>',
        icon: 'success',
        html:
        '',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
        'أغلق',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
        })
  });



$(document).ready(() => {
   
    window.addEventListener('load', onWndLoad, false);
   
    function onWndLoad() {
        var slider = document.querySelector('.slider');
        var sliders = slider.children;


        var initX = null;
        var transX = 0;
        var rotZ = 0;
        var transY = 0;

        var curSlide = null;

        var Z_DIS = 50;
        var Y_DIS = 10;
        var TRANS_DUR = 0.4;

        var images = document.querySelectorAll('img');
        for (var i = 0; i < images.length; i++) {
            images[i].onmousemove = function (e) {
                e.preventDefault()

            }
            images[i].ondragstart = function (e) {
                return false;

            }
        }

        function init() {

            var z = 0, y = 0;

            for (var i = sliders.length - 1; i >= 0; i--) {
                sliders[i].style.transform = 'translateZ(' + z + 'px) translateY(' + y + 'px)';

                z -= Z_DIS;
                y += Y_DIS;
            }


            attachEvents(sliders[sliders.length - 1]);



        }
        function attachEvents(elem) {

            curSlide = elem;

            curSlide.addEventListener('mousedown', slideMouseDown, false);
            curSlide.addEventListener('touchstart', slideMouseDown, false);


            //  Show spinner as table is refeching data 
            $('#reload').click()          

        }
        

        init();

        function slideMouseDown(e) {

            if (e.touches) {
                initX = e.touches[0].clientX;
            }
            else {
                initX = e.pageX;
            }


            document.addEventListener('mousemove', slideMouseMove, false);
            document.addEventListener('touchmove', slideMouseMove, false);

            document.addEventListener('mouseup', slideMouseUp, false);
            document.addEventListener('touchend', slideMouseUp, false);

            document.getElementById("search").addEventListener("click", () => {
                console.log("slideMouseMove")
            });

        }
        var prevSlide = null;

        function slideMouseMove(e, r) {

            var mouseX;

            if (e.touches) {
                mouseX = e.touches[0].clientX;
            }
            else {
                mouseX = e.pageX;
            }

            transX += mouseX - initX;
            rotZ = transX / 20;


            transY = -Math.abs(transX / 15);

            curSlide.style.transition = 'none';
            curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
            curSlide.style.transform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
            var j = 1;
            //remains elements
            for (var i = sliders.length - 2; i >= 0; i--) {

                sliders[i].style.webkitTransform = 'translateX(' + transX / (2 * j) + 'px)' + ' rotateZ(' + rotZ / (2 * j) + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' + ' translateZ(' + (-Z_DIS * j) + 'px)';
                sliders[i].style.transform = 'translateX(' + transX / (2 * j) + 'px)' + ' rotateZ(' + rotZ / (2 * j) + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' + ' translateZ(' + (-Z_DIS * j) + 'px)';
                sliders[i].style.transition = 'none';
                j++;
            }



            initX = mouseX;
            e.preventDefault();
            if (Math.abs(transX) >= curSlide.offsetWidth - 30) {


                document.removeEventListener('mousemove', slideMouseMove, false);
                document.removeEventListener('touchmove', slideMouseMove, false);
                curSlide.style.transition = 'ease 0.2s';
                curSlide.style.opacity = 0;
                prevSlide = curSlide;
                attachEvents(sliders[sliders.length - 2]);
                slideMouseUp();
                setTimeout(function () {

                    document.getElementById("checkmark-loader").style.display = "block";
                    setTimeout(function() {
                
                        $('.circle-loader').addClass('load-complete');
                        // $('.checkmark').toggle();
                        $('.checkmark').show();
                        document.getElementsByClassName("checkmark").style.display = "block";
                        document.getElementsByClassName("checkmark").style.display = "block";
                    }, 2000);

                    slider.insertBefore(prevSlide, slider.firstChild);

                    prevSlide.style.transition = 'none';
                    prevSlide.style.opacity = '1';
                    slideMouseUp();

                }, 201);

                return;
            }
        }
        function slideMouseUp() {
            transX = 0;
            rotZ = 0;
            transY = 0;

            curSlide.style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + TRANS_DUR + 's';

            curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
            curSlide.style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
            //remains elements
            var j = 1;
            for (var i = sliders.length - 2; i >= 0; i--) {
                sliders[i].style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + TRANS_DUR / (j + 0.9) + 's';
                sliders[i].style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' + ' translateZ(' + (-Z_DIS * j) + 'px)';
                sliders[i].style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' + ' translateZ(' + (-Z_DIS * j) + 'px)';

                j++;
            }

            document.removeEventListener('mousemove', slideMouseMove, false);
            document.removeEventListener('touchmove', slideMouseMove, false);

        }

    }
});

$(document).ready(() => {
    (function( $ ) { 
        $.fn.tabbedTable = function() { 
            this.filter( "table" ).each(function() {
                var tabs = [];
                var table = $(this);
                var randomId = 'tabbedTable-' + Math.floor((Math.random() * 100000) + 1);
              
                // wrap our table
                table.wrap('<div class="tabbedTable-wrapper">');
              
                // add an id
                table.addClass(randomId);
              
                // add a style tag to store visible / invisible columns
                $('body').append('<style class="'+ randomId +'-style"></style>');
              
                var wrapper = table.parent('.tabbedTable-wrapper');
              
                // Find table headers to hide
                $('th', table).each(function(i) {
                  var tabName = $(this).attr('data-tabbedTable');
                  if(tabName !== undefined) {
                    var columnNumber = i + 1;
                    // hide the columns
                    // $('th:nth-child('+ columnNumber +'), td:nth-child('+ columnNumber +')', table).hide();
                    
                    // add the tabname to 
                    if(tabs.indexOf(tabName) ==  -1) {
                      tabs.push(tabName);
                    } 
                  }
                });
              
                // add buttons
                var buttons = '';
                for (t = 0; t < tabs.length; t++) { 
                    buttons += '<label class="tabbedTable-label">'+ tabs[t] + '</label>';
                }
                wrapper.prepend('<div class="tabbedTable-labels">' + buttons + '</div>');
              
                // click events
                $('.tabbedTable-label', wrapper).on('click', function(){
                  $('.tabbedTable-label', wrapper).removeClass('tabbedTable-label--active');
                  $(this).addClass('tabbedTable-label--active');
                  var tabSelected = $(this).text();
                  var styleContent = '';
                  $('th', table).each(function(i){
                    if($(this).attr('data-tabbedTable') !== undefined) {
                      // header index
                      var columnNumber = i + 1;
    
                      if(tabSelected == $(this).attr('data-tabbedTable')) {
                        // show columns
                        // $('th:nth-child('+ columnNumber +'), td:nth-child('+ columnNumber +')', table).show();
                        styleContent += '.'+ randomId +' th:nth-child(' + columnNumber + ') { display: table-cell; } ';
                        styleContent += '.'+ randomId +' td:nth-child(' + columnNumber + ') { display: table-cell; } ';
                      }
                      else {
                        // show columns
                        // $('th:nth-child('+ columnNumber +'), td:nth-child('+ columnNumber +')', table).hide(); 
                        styleContent += '.'+ randomId +' th:nth-child(' + columnNumber + ') { display: none; } ';
                        styleContent += '.'+ randomId +' td:nth-child(' + columnNumber + ') { display: none; } ';                 
                      }                  
                    }
                  });
                  
                  //var styleContent = '.'+ randomId +' td:nth-child(2) { background: red; }';
                  
                  // update <style> tag
                  $('.' + randomId +'-style').html(styleContent);
                });
              
                // click first
                $('.tabbedTable-labels label:first', wrapper).click();
            }); 
            return this; 
        }; 
    }( jQuery ));

    // Usage example:
    $( ".tabbedTable" ).tabbedTable();
    $(".modal-toggle").on("click", function(e) {
        e.preventDefault();
        $(".modal").toggleClass("is-visible");
    });
    $('#someButton').click(function() {
        window.location.href = './Employee_2.html';
        return false;
    });

});
$(".login").on("click", function() {
    var username = "ever";
    var password = "123";
    var user = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    if (username == user && password == pass) {
        window.location.replace("inside.html");
    } else {
        if (user != "" && pass == "") {
            document.getElementById("Login_Msg").innerHTML =
                "Password is Missing";
        } else if (user == "" && pass != "") {
            document.getElementById("Login_Msg").innerHTML =
                "Username is Missing";
        } else {
            document.getElementById("Login_Msg").innerHTML =
                "Username & Passwrod Doesn't Match";
        }
    }
});

////////////// Right Animation - Hands ////////////////

setTimeout(function() {
    $("#right_hand").animate(
        {
            bottom: "-14px"
        },
        1000
    );
    $("#left_hand").animate(
        {
            bottom: "-20px"
        },
        1000
    );
}, 1500);

////////////// Plus  ////////////////

$("#plus").click(function() {
    $("#create span").hide();
    $("#class_icon").hide();
    $(this).removeClass("plus");
    // $(this).removeClass('plus').addClass('active_plus');
    $(this)
        .css({ position: "absolute", cursor: "auto" })
        .animate({
            width: "160%",
            height: "160%",
            left: "-100px",
            top: "-100px"
        });
    setTimeout(function() {
        $("#drag").fadeIn("slow");
    }, 400);
});

////////////// Login Animation ////////////////

$(function() {
    let process = document.getElementsByClassName("process");
    let btnProcess = document.getElementById("btn-process");
    let check = document.getElementById("check");
    let checkIcon = document.getElementsByClassName("check-icon");
    let checkCircle = document.getElementById("check-circle");
    let checkmark = document.getElementById("check-mark");

    // strokeDashoffset: [anime.setDashoffset, 0],

    processLoader = () => {
        let checkIcon = anime.timeline({
            duration: 800
        });

        checkIcon
            .add({
                targets: checkCircle,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "easeOutCirc"
            })
            .add({
                targets: checkmark,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "easeOutCirc"
            });
    };

    feather.replace();
    $(".input input")
        .focus(function() {
            $(this)
                .parent(".input")
                .each(function() {
                    $("label", this).css({
                        "line-height": "18px",
                        "font-size": "18px",
                        "font-weight": "100",
                        top: "0px"
                    });
                    $(".spin", this).css({
                        width: "100%"
                    });
                });
        })
        .blur(function() {
            $(".spin").css({
                width: "0px"
            });
            if ($(this).val() == "") {
                $(this)
                    .parent(".input")
                    .each(function() {
                        $("label", this).css({
                            "line-height": "60px",
                            "font-size": "18px",
                            "font-weight": "300",
                            top: "10px"
                        });
                    });
            }
        });

    $(".button").click(function(e) {
        var pX = e.pageX,
            pY = e.pageY,
            oX = parseInt($(this).offset().left),
            oY = parseInt($(this).offset().top);

        $(this).append(
            '<span class="click-efect x-' +
                oX +
                " y-" +
                oY +
                '" style="margin-left:' +
                (pX - oX) +
                "px;margin-top:" +
                (pY - oY) +
                'px;"></span>'
        );
        $(".x-" + oX + ".y-" + oY + "").animate(
            {
                width: "500px",
                height: "500px",
                top: "-250px",
                left: "-250px"
            },
            600
        );
        $("button", this).addClass("active");
    });

    $(".alt-2").click(function() {
        if (!$(this).hasClass("material-button")) {
            $(".shape").css({
                width: "100%",
                height: "100%",
                transform: "rotate(0deg)"
            });

            setTimeout(function() {
                $(".overbox").css({
                    overflow: "initial"
                });
            }, 600);

            $(this).animate(
                {
                    width: "80px",
                    height: "80px"
                },
                500,
                function() {
                    $(".box").removeClass("back");

                    $(this).removeClass("active");
                }
            );

            $(".overbox .title").fadeOut(300);
            $(".overbox .input").fadeOut(300);
            $(".overbox .button").fadeOut(300);

            $(".alt-2").addClass("material-buton");
        }
    });

    $(".material-button").click(function() {
        if ($(this).hasClass("material-button")) {
            setTimeout(function() {
                $(".overbox").css({
                    overflow: "hidden"
                });
                $(".box").addClass("back");
            }, 200);
            $(this)
                .addClass("active")
                .animate({
                    width: "700px",
                    height: "700px"
                });

            setTimeout(function() {
                $(".shape").css({
                    width: "50%",
                    height: "50%",
                    transform: "rotate(45deg)"
                });

                $(".overbox .title").fadeIn(300);
                $(".overbox .input").fadeIn(300);
                $(".overbox .button").fadeIn(300);
            }, 700);

            $(this).removeClass("material-button");
        }

        if ($(".alt-2").hasClass("material-buton")) {
            $(".alt-2").removeClass("material-buton");
            $(".alt-2").addClass("material-button");
        }
    });
});

////////////// drag & drop ////////////////

var drop = $("input");
drop.on("dragenter", function(e) {
    $(".drop").css({
        border: "4px dashed #09f",
        background: "rgba(0, 153, 255, .05)"
    });
    $(".cont").css({
        color: "#09f"
    });
}).on("dragleave dragend mouseout drop", function(e) {
    $(".drop").css({
        border: "3px dashed #DADFE3",
        background: "transparent"
    });
    $(".cont").css({
        color: "#8E99A5"
    });
});

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; (f = files[i]); i++) {
        // Only process image files.
        if (!f.type.match("image.*")) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                var span = document.createElement("span");
                span.innerHTML = [
                    '<img class="thumb" src="',
                    e.target.result,
                    '" title="',
                    escape(theFile.name),
                    '"/>'
                ].join("");
                document.getElementById("list").insertBefore(span, null);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

$("#files").change(handleFileSelect);

//////////////// Process ////////////////

$("#process").click(function() {
    document.getElementById("process").innerHTML =
        "PROCESSING <span class='3points'>...</span>";
    setInterval(() => {
        setTimeout(function() {
            $(".3points").fadeIn("slow");
        }, 250);
        setTimeout(function() {
            $(".3points").fadeOut("slow");
        }, 250);
    }, 500);

    $("#laptop").animate(
        {
            marginTop: "-900px"
        },
        1000
    );
    $("#left_hand, #right_hand").animate(
        {
            bottom: "-600px"
        },
        1000
    );
    $("#card").fadeOut("slow");

    $(this).removeClass("proce");

    setTimeout(function() {
        $("#file, #man_hand, #man, #b_card").fadeIn("slow");
    }, 1000);

    $("#b_card")
        .show()
        .animate(
            {
                left: "300px",
                bottom: "220px"
            },
            1000
        )
        .animate(
            {
                left: "840px",
                bottom: "65px"
            },
            1000
        );

    setTimeout(function() {
        $("#r_card")
            .show()
            .animate(
                {
                    left: "300px",
                    bottom: "220px"
                },
                1000
            )
            .animate(
                {
                    left: "860px",
                    bottom: "65px"
                },
                1000
            );
    }, 2000);

    setTimeout(function() {
        $("#w_card")
            .show()
            .animate(
                {
                    left: "300px",
                    bottom: "220px"
                },
                1000
            )
            .animate(
                {
                    left: "890px",
                    bottom: "65px"
                },
                1000
            );
    }, 4000);

    setInterval(() => {
        $("#b_card, #r_card, #w_card").css({
            left: "145px",
            bottom: "85px"
        });
        $("#b_card")
            .show()
            .animate(
                {
                    left: "300px",
                    bottom: "220px"
                },
                1000
            )
            .animate(
                {
                    left: "840px",
                    bottom: "65px"
                },
                1000
            );

        setTimeout(function() {
            $("#r_card")
                .show()
                .animate(
                    {
                        left: "300px",
                        bottom: "220px"
                    },
                    1000
                )
                .animate(
                    {
                        left: "960px",
                        bottom: "65px"
                    },
                    1000
                );
        }, 2000);

        setTimeout(function() {
            $("#w_card")
                .show()
                .animate(
                    {
                        left: "300px",
                        bottom: "220px"
                    },
                    1000
                )
                .animate(
                    {
                        left: "880px",
                        bottom: "65px"
                    },
                    1000
                );
        }, 4000);
    }, 7000);

    setTimeout(function() {
        $("#file, #man_hand, #man, #b_card, #w_card, #r_card").fadeOut("slow");
        $("#documents").fadeIn("slow");
        document.getElementById("process").innerHTML = "DONE";
    }, 10000);

    setTimeout(function() {
        $("#extract_data").fadeOut();
        $("#submit").fadeIn();
        $("#data_show").fadeIn("slow");
        $("#desktop_animation").hide();
    }, 18000);
});

var edit_i = 0;
$("#edit").click(function() {
    if (edit_i == 0) {
        document.getElementById("edit").innerHTML =
            "<img src='images/svg/done.svg'/>";

        var name = document.getElementById("li_name").dataset.name;
        document.getElementById("li_name").innerHTML =
            "<input type='text' value='" +
            name +
            "' name='name' id='inpt_name' class='input_class'/>";

        var name = document.getElementById("li_nationality").dataset
            .nationality;
        document.getElementById("li_nationality").innerHTML =
            "<input type='text' value='" +
            name +
            "' name='nationality' id='inpt_nationality' class='input_class'/>";

        var name = document.getElementById("li_birthday").dataset.birthday;
        document.getElementById("li_birthday").innerHTML =
            "<input type='text' value='" +
            name +
            "' name='birthday' id='inpt_birthday' class='input_class'/>";

        edit_i = 1;
    } else {
        document.getElementById("edit").innerHTML =
            "<img src='images/svg/edit.svg'/>";

        var name = document.getElementById("inpt_name").value;
        document.getElementById("li_name").innerHTML = name;

        var nationality = document.getElementById("inpt_nationality").value;
        document.getElementById("li_nationality").innerHTML = nationality;

        var birthday = document.getElementById("inpt_birthday").value;
        document.getElementById("li_birthday").innerHTML = birthday;

        edit_i = 0;
    }
});

$("#submit").click(function() {
    var imageSource = $("#imgClickAndChange").attr("src");
    if (imageSource == "./assets/images/email-validate.gif") {
        showMessage("Please wait, validating signature", "blue", 1000);
    }
    if (imageSource == "./assets/images/validate.png") {
        showMessage("Please validate signature", "red", 3000);
    }
    if (imageSource == "./assets/images/valid.png") {
        showMessage("Checking decision doc", "yellow", 5000);
        setTimeout(function() {
            showMessage("Decision doc is valid", "green", 5000);
            setTimeout(function() {
                showMessage("Checking Invoice", "yellow", 5000);
                setTimeout(function() {
                    showMessage("Invoice is valid", "green", 5000);
                    setTimeout(function() {
                        showMessage("Checking Pay Slip", "yellow", 5000);
                        setTimeout(function() {
                            showMessage("Pay Slip is valid", "green", 5000);
                            setTimeout(function() {
                                showMessage(
                                    "Checking customer details",
                                    "yellow",
                                    5000
                                );
                                setTimeout(function() {
                                    showMessage(
                                        "Customer details are validated",
                                        "green",
                                        5000
                                    );
                                    setTimeout(function() {
                                        showMessage(
                                            "Checking credit amount",
                                            "yellow",
                                            5000
                                        );
                                        setTimeout(function() {
                                            showMessage(
                                                "Credit is below 110%",
                                                "green",
                                                5000
                                            );
                                            setTimeout(function() {
                                                window.location.href =
                                                    "thankyou.html";
                                            }, 2000);
                                        }, 500);
                                    }, 1000);
                                }, 500);
                            }, 1000);
                        }, 500);
                    }, 1000);
                }, 500);
            }, 1000);
        }, 500);
    }
    // alert(imageSource);
    //$('#loader').fadeIn();
    // $(this).css('backgroundColor', '#059278');
});

$("#camera").click(function() {
    $("#popup").fadeIn("slow");

    setTimeout(function() {
        $("#detect")
            .animate(
                {
                    top: "70px",
                    right: "80px"
                },
                500
            )
            .delay(500)
            .animate(
                {
                    top: "20px",
                    right: "200px"
                },
                500
            );
    }, 1000);
    setTimeout(function() {
        $("#detect").hide();
        $("#camera_loader").fadeIn("slow");
        setTimeout(function() {
            $("#camera_loader").fadeOut("slow");
            $("#done_camera").fadeIn("slow");
        }, 2000);
    }, 3500);

    setTimeout(function() {
        $("#popup").fadeOut("slow");
    }, 7000);
});
function datachecking() {
    document.getElementById("check-button").style.display = "none"
    $('#exampleModal').modal('toggle');
    document.getElementById("wrapper-id").style.display = "flex";
    setTimeout(function () {    document.getElementById("check-button").style.display = "flex";processLoader(); document.getElementById("wrapper-id").style.display = "none"; }, 4000);
}
function Finish(){
    document.getElementById("check-button").style.display = "none"
    $('#exampleModal').modal('hide');
}
function changeImage() {
    // if (document.getElementById("imgClickAndChange").src == "./images/validate.png") {
    //     document.getElementById("imgClickAndChange").src = "./images/email-validate.gif";
    // }
    // else {
    //     document.getElementById("imgClickAndChange").src = "./images/validate.png";
    // }
    document.getElementById("checkmark-loader").style.display = "block";
    document.getElementById("svg").style.display = "block";
    document.getElementById("photo_id").style.display = "none";
    document.getElementById("data-button").style.display = "none";
  
    setTimeout(function() {
        document.getElementById("svg").style.display = "none";
        $('.circle-loader').toggleClass('load-complete');
        $('.checkmark').toggle();
    }, 8000);
}
function Redirecting(){
    window.location.href = "Employee_1.html"
}
function showMessage(message, color, mseconds) {
    iziToast.show({
        id: null,
        class: "",
        title: message,
        titleColor: "",
        titleSize: "",
        titleLineHeight: "",
        message: "",
        messageColor: "",
        messageSize: "",
        messageLineHeight: "",
        backgroundColor: "",
        theme: "light", // dark
        color: color, // blue, red, green, yellow
        icon: "",
        iconText: "",
        iconColor: "",
        iconUrl: null,
        image: "",
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        position: "center", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: "",
        targetFirst: true,
        timeout: mseconds,
        rtl: false,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        progressBarColor: "",
        progressBarEasing: "linear",
        overlay: false,
        overlayClose: false,
        overlayColor: "rgba(0, 0, 0, 0.6)",
        transitionIn: "fadeInUp",
        transitionOut: "fadeOut",
        transitionInMobile: "fadeInUp",
        transitionOutMobile: "fadeOutDown",
        buttons: {},
        inputs: {},
        onOpening: function() {},
        onOpened: function() {},
        onClosing: function() {},
        onClosed: function() {}
    });
}

/////////////////// called when drag and drop///////////////
$(document).ready(function() {
    $("#files").on("change", function() {
        iziToast.show({
            id: null,
            class: "",
            title: "Uploading documents",
            titleColor: "black",
            titleSize: "20px",
            titleLineHeight: "",
            message: "",
            messageColor: "",
            messageSize: "",
            messageLineHeight: "",
            backgroundColor: "",
            theme: "dark", // dark
            color: "blue", // blue, red, green, yellow
            icon: "",
            iconText: "",
            iconColor: "",
            iconUrl: null,
            image: "",
            imageWidth: 50,
            maxWidth: null,
            zindex: null,
            layout: 1,
            balloon: false,
            close: true,
            closeOnEscape: false,
            closeOnClick: false,
            displayMode: 0, // once, replace
            position: "topLeft", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            target: "",
            targetFirst: true,
            timeout: 1200,
            rtl: false,
            animateInside: true,
            drag: true,
            pauseOnHover: true,
            resetOnHover: false,
            progressBar: true,
            progressBarColor: "",
            progressBarEasing: "linear",
            overlay: false,
            overlayClose: false,
            overlayColor: "rgba(0, 0, 0, 0.6)",
            transitionIn: "fadeInUp",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeInUp",
            transitionOutMobile: "fadeOutDown",
            buttons: {},
            inputs: {},
            onOpening: function() {},
            onOpened: function() {},
            onClosing: function() {},
            onClosed: function() {}
        });

        setTimeout(function() {
            var content =
                '<img style="max-width: 70%; margin-top: -50px;" src="images/svg/files-uploaded.png" />';
            document.getElementById("drag-and-drop").innerHTML = content;
            $("#upload-files").css("margin-top", "70px");
        }, 1200);
    });
});
