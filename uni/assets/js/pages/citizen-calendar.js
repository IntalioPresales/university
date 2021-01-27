/* ------------------------------------------------------------------------------
*
*  # Timelines
*
*  Specific JS code additions for Timeline pages set
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function () {


    // Schedule
    // ------------------------------




    // Add events
    var eventsColors = [
        // {
        //     title: 'Day off',
        //     start: '2014-11-01',
        //     color: '#DB7272'
        // },
        // {
        //     title: 'University',
        //     start: '2014-11-07',
        //     end: '2014-11-10',
        //     color: '#42A5F5'
        // },
        // {
        //     id: 999,
        //     title: 'Shopping',
        //     start: '2014-11-09T13:00:00',
        //     color: '#8D6E63'
        // },
        // {
        //     id: 999,
        //     title: 'Shopping',
        //     start: '2014-11-15T16:00:00',
        //     color: '#00BCD4'
        // },
        // {
        //     title: 'Conference',
        //     start: '2014-11-11',
        //     end: '2014-11-13',
        //     color: '#26A69A'
        // },
        // {
        //     title: 'Meeting',
        //     start: '2014-11-14T08:30:00',
        //     end: '2014-11-14T12:30:00',
        //     color: '#7986CB'
        // },
        // {
        //     title: 'Meeting',
        //     start: '2014-11-11T09:30:00',
        //     color: '#78909C'
        // },
        // {
        //     title: 'Happy Hour',
        //     start: '2014-11-12T14:30:00',
        //     color: '#26A69A'
        // },
        // {
        //     title: 'Dinner',
        //     start: '2014-11-13T19:00:00',
        //     color: '#FF7043'
        // },
        // {
        //     title: 'Birthday Party',
        //     start: '2014-11-13T03:00:00',
        //     color: '#4CAF50'
        // }
    ];


        var d1 = new Date();
        d1.setHours(12);
        d1.setMinutes(0);
        d1.setDate(d1.getDate() - 2);

        let ev1 = {
            title: 'الحضور لاستلام طلب بطاقة طالب بدل فاقد',
            start: d1,
            color: '#4CAF50'
        }
        eventsColors.push(ev1)

        var d2 = new Date();
        d2.setHours(12);
        d2.setMinutes(0);
        d2.setDate(d2.getDate() + 2);

        let ev2 = {
            title: 'الحضور لاستلام طلب افادة عن الشهادة',
            start: d2,
            color: '#4CAF50'
        }
        eventsColors.push(ev2)


        var d3 = new Date();
        d3.setHours(12);
        d3.setMinutes(0);
        d3.setDate(d3.getDate() - 15);

        let ev3 = {
            title: 'الحضور لاستلام طلب بطاقة طالب بدل فاقد',
            start: d3,
            color: '#4CAF50'
        }
        eventsColors.push(ev3)


        var d4 = new Date();
        d4.setHours(12);
        d4.setMinutes(0);
        d4.setDate(d4.getDate() - 20);

        let ev4 = {
            title: 'الحضور لاستلام طلب بطاقة طالب بدل فاقد',
            start: d4,
            color: '#4CAF50'
        }
        eventsColors.push(ev4)


    // Initialize with optinos
    $('.schedule').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        defaultDate: new Date(),
        editable: true,
        height: 450,
        isRTL: true,
        events: eventsColors
    });


    // Render if inside hidden element
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.schedule').fullCalendar('render');
    });

});
