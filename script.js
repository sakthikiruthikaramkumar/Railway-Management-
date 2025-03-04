$(document).ready(function() {
    var availableSeats = 60;
    var reservedSeats = 0;

    updateSeatCounts();

    $("#reserve-button").click(function() {
        var seatsToReserve = parseInt($("#reserve-seats").val());

        if (seatsToReserve > 0 && seatsToReserve <= availableSeats) {
            reservedSeats += seatsToReserve;
            availableSeats -= seatsToReserve;

            updateSeatCounts();
        } else {
            alert("Invalid number of seats to reserve. Please select a valid number.");
        }
    });

    function updateSeatCounts() {
        $("#available-seats").text(availableSeats);
        $("#reserved-seats").text(reservedSeats);
    }
});
