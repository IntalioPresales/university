
/* ------------------------------------------------------------------------------
*
*  # Invoice archive
*
*  Specific JS code additions for invoice_archive.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function () {


    // Table setup
    // ------------------------------

    // Initialize
    $('.invoice-archive').DataTable({
        autoWidth: false,
        columnDefs: [
            {
                width: '30px',
                targets: 0
            },
            {
                visible: false,
                targets: 1
            },
            {
                orderable: false,
                width: '100px',
                targets: 7
            },
            {
                width: '15%',
                targets: [4, 5]
            },
            {
                width: '15%',
                targets: 6
            },
            {
                width: '15%',
                targets: 3
            }
        ],
        order: [[0, 'desc']],
        dom: '<"datatable-scroll-lg"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            searchPlaceholder: 'Type to filter...',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&larr;', 'previous': '&rarr;' }
        },
        lengthMenu: [25, 50, 75, 100],
        displayLength: 25,
        drawCallback: function (settings) {
            var api = this.api();
            var rows = api.rows({ page: 'current' }).nodes();
            var last = null;

            api.column(1, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="active border-double"><td colspan="8" class="text-semibold">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });

            $('.select').select2({
                width: '150px',
                minimumResultsForSearch: Infinity
            });

            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function (settings) {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
            $('.select').select2().select2('destroy');
        }
    });



    // External table additions
    // ------------------------------

    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });

});


function searchClick() {
    // $('#timeline').show()
    window.location.href = "citizen-timeline.html"

}

function hideTimeline() {
    $('#timeline').hide()
}

// Chart setup
function progressCounter(element, radius, border, color, end, iconClass, textTitle, textAverage) {


    // Basic setup
    // ------------------------------

    // Main variables
    var d3Container = d3.select(element),
        startPercent = 0,
        iconSize = 32,
        endPercent = end,
        twoPi = Math.PI * 2,
        formatPercent = d3.format('.0%'),
        boxSize = radius * 2;

    // Values count
    var count = Math.abs((endPercent - startPercent) / 0.01);

    // Values step
    var step = endPercent < startPercent ? -0.01 : 0.01;



    // Create chart
    // ------------------------------

    // Add SVG element
    var container = d3Container.append('svg');

    // Add SVG group
    var svg = container
        .attr('width', boxSize)
        .attr('height', boxSize)
        .append('g')
        .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



    // Construct chart layout
    // ------------------------------

    // Arc
    var arc = d3.svg.arc()
        .startAngle(0)
        .innerRadius(radius)
        .outerRadius(radius - border);



    //
    // Append chart elements
    //

    // Paths
    // ------------------------------

    // Background path
    svg.append('path')
        .attr('class', 'd3-progress-background')
        .attr('d', arc.endAngle(twoPi))
        .style('fill', '#eee');

    // Foreground path
    var foreground = svg.append('path')
        .attr('class', 'd3-progress-foreground')
        .attr('filter', 'url(#blur)')
        .style('fill', color)
        .style('stroke', color);

    // Front path
    var front = svg.append('path')
        .attr('class', 'd3-progress-front')
        .style('fill', color)
        .style('fill-opacity', 1);



    // Text
    // ------------------------------

    // Percentage text value
    var numberText = d3.select(element)
        .append('h2')
        .attr('class', 'mt-15 mb-5')

    // Icon
    d3.select(element)
        .append("i")
        .attr("class", iconClass + " counter-icon")
        .attr('style', 'top: ' + ((boxSize - iconSize) / 2) + 'px');

    // Title
    d3.select(element)
        .append('div')
        .text(textTitle);

    // Subtitle
    d3.select(element)
        .append('div')
        .attr('class', 'text-size-small text-muted')
        .text(textAverage);



    // Animation
    // ------------------------------

    // Animate path
    function updateProgress(progress) {
        foreground.attr('d', arc.endAngle(twoPi * progress));
        front.attr('d', arc.endAngle(twoPi * progress));
        numberText.text(formatPercent(progress));
    }

    // Animate text
    var progress = startPercent;
    (function loops() {
        updateProgress(progress);
        if (count > 0) {
            count--;
            progress += step;
            setTimeout(loops, 10);
        }
    })();
}

$(document).ready(() => {
    progressCounter('#hours-available-progress', 38, 2, "#F06292", 0.91, "icon-watch text-pink-400", 'الرضا عن الخدمة', '91% معدل')
    progressCounter('#in-progress', 38, 2, "#FF9800", 0.20, "icon-hour-glass3 text-orange", 'طلبات قيد التنفيذ', '8')
    progressCounter('#goal-progress', 38, 2, "#5C6BC0", 0.75, "icon-trophy3 text-indigo-400", 'طالبات منجزة', '30')
    progressCounter('#rejected', 38, 2, "#777777", 0.05, "icon-enter3 text-grey-500", 'طلبات مرفوضة', '2')
    
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
