$(document).ready(function () {

    //**Queue Initialization code */
    {
        var sort = function () {
            
            function arrange(){
                for (let index = 0; index < $('.appointment-card').length; index++) {
                    $($('.appointment-card .queue-control span')[index]).html(index + 1);
                }
            }
            arrange();
            var $bringUp = $('.appointment-card .fa-arrow-up');
            //**up arrow */
            $bringUp.on('click touchstart', function () {
                var $card = $(this).closest('.appointment-card');
                if ($card.index() != 0) {
                    $card.prev().before($card);
                }
                arrange();
            })
            //**down arrow */
            var $bringDown = $('.appointment-card .fa-arrow-down');
            $bringDown.on('click touchstart', function () {
                var $card = $(this).closest('.appointment-card');
                if ($card.index() != $card.parent().children().length) {
                    $card.next().after($card);
                }
                arrange();
            })
            //**Delete card */
            var $trash = $('.appointment-card .fa-trash-o');
            if ($(window).width() < 768) {
                $trash.on('touchstart', function () {
                    $(this).closest('.appointment-card').remove();
                    arrange();
                })
            }else{
                $trash.on('click touchstart', function () {

                    $(this).closest('.appointment-card').remove();
                    arrange();
                })
            }
        }

        var $appointments = $('.appointment-card');
        $appointments.css('box-shadow', 'none');
        var DDconfig = {
            target: '.appointment-card',
            up: sort
        }
        if ($(window).width() < 768) {
            DDconfig.delay = 500;
        }
        $appointments.parent().DDSort(DDconfig);
        
        sort();
    }
    //**Adding Appointment */
    {
        var $addAppointment = $('#booking-form button[type="submit"]');

        $addAppointment.on('click', function (e) {
            e.preventDefault();
            var $patient = $('#patients').val();
            var $dentist = $('#dentists').val();
            var $unit = $('#units').val();
            var $facility = $('#facility').val();
            var $date = $('#date').val();
            var $time = $('#time').val();
            var today = new Date();

            $('#appointment-queue .appointment-wrapper').append(
                `
               <div class="appointment-card">
				<div class="patient-info ">
					<p class="patient-name text-center">${$patient}</p>
					<p>
						<i class="fa fa-hospital-o" aria-hidden="true"></i>
						<span>${$facility}</span>
					</p>
					<p>${$time}</p>
				</div>
				<div class="appointment-info ">
					<p class="doctor">
						<i class="fa fa-user-md" aria-hidden="true"></i>
						<span>${$dentist}</span>
					</p>
					<p class="unit">
						<i class="fa fa-bed" aria-hidden="true"></i>
						<span>${$unit}</span>
					</p>
					<p class="controls">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						<i class="fa fa-trash-o" aria-hidden="true"></i>
						<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
					</p>
				</div>
				<div class="queue-control">
					<i class="fa fa-arrow-up" aria-hidden="true"></i>
					<span>0</span>
					<i class="fa fa-arrow-down" aria-hidden="true"></i>
				</div>
			</div>
            `
            );
            sort();
        })
    }
    //**Sidebar hide-show */
    {
        var $sidebar = $('#sidebar');
        var $sidebarDetails = $('#sidebar #menu-icons ul li span');
        $sidebar.on('mouseenter mouseleave', () => {
            $sidebarDetails.toggle();
        });

        var $mobMenu = $('#menu-bar-icon')
        $mobMenu.on('click', function () {
            console.log(this);
            $sidebar.toggle();
            $sidebarDetails.toggle();
        })
    }
    //**Datepicker Initialization */
    {
        var blockedDays = ["2/7/2018", "2/10/2018", "2/14/2018", "2/19/2018"]
        $("#date").datepicker({
            minDate: new Date(),
            beforeShowDay: function (date) {
                if (blockedDays.some(day => day == date.toLocaleDateString()))
                    return false
                else
                    return true
            }
        });
        $('#time').timepicker({
            'minTime': '8:00AM',
            'maxTime': '5:00PM',
            'showDuration': false
        });
    }
    
    

})
