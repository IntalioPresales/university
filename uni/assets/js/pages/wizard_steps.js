/* ------------------------------------------------------------------------------
*
*  # Steps wizard
*
*  Specific JS code additions for wizard_steps.html page
*
*  Version: 1.1
*  Latest update: Dec 25, 2015
*
* ---------------------------------------------------------------------------- */

$(document).ready(() => {

    /* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

    setTimeout(() => {

        var card = new Card({
            // a selector or DOM element for the form where users will
            // be entering their information
            form: 'form', // *required*
            // a selector or DOM element for the container
            // where you want the card to appear
            container: '.card-wrapper', // *required*

            formSelectors: {
                nameInput: 'input[name="first-name"], input[name="last-name"]',
                // numberInput: 'input#number', // optional — default input[name="number"]
                // expiryInput: 'input#expiry', // optional — default input[name="expiry"]
                // cvcInput: 'input#cvc', // optional — default input[name="cvc"]
                // nameInput: 'input#name' // optional - defaults input[name="name"]
            },

            width: 330, // optional — default 350px
            formatting: true, // optional - default true

            // Strings for translation - optional
            messages: {
                validDate: 'valid\ndate', // optional - default 'valid\nthru'
                monthYear: 'mm/yyyy', // optional - default 'month/year'
            },

            // Default placeholders for rendered fields - optional
            placeholders: {
                number: '•••• •••• •••• ••••',
                name: 'Full Name',
                expiry: '••/••',
                cvc: '•••'
            },

            masks: {
                cardNumber: '•' // optional - mask card number
            },

            // if true, will log helpful messages for setting up Card
            debug: false // optional - default false
        });
    }, 2000);

    // function submitted() {
    //     window.location.href = "../thank-you/payment-done.html";
    // }

    // $("#myFormz").submit(function (event) {
    //     $("#myFormz").html(`
    //     <br><br>
    //     <div class="spinner-border text-secondary" role="status">
    //         <span class="sr-only">Loading...</span>
    //     </div>
    //     `);
    //     setTimeout(function () {
    //         window.top.location.href = "../thank-you/payment-done.html";
    //     }, 1300); //will call the function after 2 secs.
    //     event.preventDefault();
    // });


    setTimeout(() => {
        FilePond.registerPlugin(
            FilePondPluginImagePreview,
            FilePondPluginImageExifOrientation,
            FilePondPluginFileValidateSize,
            // FilePondPluginImageEdit
        );

        // Select the file input and use 
        // create() to turn it into a pond
        FilePond.create(
            document.querySelector('.filepond'),
            {
                labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
                imagePreviewHeight: 170,
                imageCropAspectRatio: '1:1',
                imageResizeTargetWidth: 200,
                imageResizeTargetHeight: 200,
                imagePreviewHeight: 100,
            }
        )

        setTimeout(() => {
            $(".filepond--drop-label > label").text(" قم بـسحب وإسقاط صورتك أو تصفح")
        }, 1000);

    }, 2000);


    // Use Doka.js as image editor
    // imageEditEditor: Doka.create({
    //     utils: ['crop', 'filter', 'color']
    // })
})

$(function () {



    // FilePond.registerPlugin(
    //     FilePondPluginImagePreview,
    //     FilePondPluginImageExifOrientation,
    //     FilePondPluginFileValidateSize,
    // );

    // FilePond.create(
    //     document.querySelector('input')
    // );




    // Wizard examples
    // ------------------------------

    // Basic wizard setup
    $(".steps-basic").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: 'Submit'

        },
        onFinished: function (event, currentIndex) {
            alert("Form submitted.");
        }
    });


    // Async content loading
    $(".steps-async").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: 'Submit'
        },
        onContentLoaded: function (event, currentIndex) {
            $(this).find('select.select').select2();

            $(this).find('select.select-simple').select2({
                minimumResultsForSearch: Infinity
            });

            $(this).find('.styled').uniform({
                radioClass: 'choice'
            });

            $(this).find('.file-styled').uniform({
                fileButtonClass: 'action btn bg-warning'
            });
        },
        onFinished: function (event, currentIndex) {
            alert("Form submitted.");
        }
    });


    // Saving wizard state
    $(".steps-state-saving").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        saveState: true,
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        onFinished: function (event, currentIndex) {
            alert("Form submitted.");
        }
    });


    // Specify custom starting step
    $(".steps-starting-step").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        startIndex: 0,
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        labels: {
            finish: 'أرسل',
            next: 'التالي',
            previous: 'السابق'
        },
        onFinished: function (event, currentIndex) {
            Swal.fire({
                title: 'تم إرسال الطلب بنجاح',
                text: "",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'حسنا'
              }).then((result) => {
                if (result.value) {
                    window.location.href = "citizen-home.html"
                }
              })
        }
    });

    
    // Specify custom starting step
    $(".steps-starting-step_transcript").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        startIndex: 0,
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        labels: {
            finish: 'حفظ',
            next: 'التالي',
            previous: 'السابق'
        },
        onFinished: function (event, currentIndex) {
            Swal.fire({
                title: 'تم اضافة الطلب الى محفظتك الالكترونية',
                text: "",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'حسنا'
              }).then((result) => {
                if (result.value) {
                    window.location.href = "citizen-home.html"
                }
              })
        }
    });


    //
    // Wizard with validation
    //

    // Show form
    var form = $(".steps-validation").show();


    // Initialize wizard
    $(".steps-validation").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        onStepChanging: function (event, currentIndex, newIndex) {

            // Allways allow previous action even if the current form is not valid!
            if (currentIndex > newIndex) {
                return true;
            }

            // Forbid next action on "Warning" step if the user is to young
            if (newIndex === 3 && Number($("#age-2").val()) < 18) {
                return false;
            }

            // Needed in some cases if the user went back (clean up)
            if (currentIndex < newIndex) {

                // To remove error styles
                form.find(".body:eq(" + newIndex + ") label.error").remove();
                form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
            }

            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },

        onStepChanged: function (event, currentIndex, priorIndex) {

            // Used to skip the "Warning" step if the user is old enough.
            if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
                form.steps("next");
            }

            // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
            if (currentIndex === 2 && priorIndex === 3) {
                form.steps("previous");
            }
        },

        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });


    // Initialize validation
    $(".steps-validation").validate({
        ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },

        // Different components require proper error label placement
        errorPlacement: function (error, element) {

            // Styled checkboxes, radios, bootstrap switch
            if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container')) {
                if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                    error.appendTo(element.parent().parent().parent().parent());
                }
                else {
                    error.appendTo(element.parent().parent().parent().parent().parent());
                }
            }

            // Unstyled checkboxes, radios
            else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
                error.appendTo(element.parent().parent().parent());
            }

            // Input with icons and Select2
            else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
                error.appendTo(element.parent());
            }

            // Inline checkboxes, radios
            else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo(element.parent().parent());
            }

            // Input group, styled file input
            else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
                error.appendTo(element.parent().parent());
            }

            else {
                error.insertAfter(element);
            }
        },
        rules: {
            email: {
                email: true
            }
        }
    });



    // Initialize plugins
    // ------------------------------

    // Select2 selects
    $('.select').select2();


    // Simple select without search
    $('.select-simple').select2({
        minimumResultsForSearch: Infinity
    });


    // Styled checkboxes and radios
    $('.styled').uniform({
        radioClass: 'choice'
    });


    // Styled file input
    $('.file-styled').uniform({
        fileButtonClass: 'action btn bg-blue'
    });

});
