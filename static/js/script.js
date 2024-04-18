$(document).ready(function() {
    // Populate state dropdown
    $.getJSON('/static/states.json', function(states) {
        $.each(states, function(index, state) {
            $('#stateSelect').append($('<option>', {
                value: state,
                text: state
            }));
        });
    });

    // Handle state selection
    $('#stateSelect').change(function() {
        var selectedState = $(this).val();
        if (selectedState !== '') {
            $.post('/get_sightings', { state: selectedState }, function(sightings) {
                $('#sightings').empty();
                $.each(sightings, function(index, sighting) {
                    $('#sightings').append('<p>Date: ' + sighting['Date'] + ', City: ' + sighting['City'] + '</p>');
                });
            });
        } else {
            $('#sightings').empty();
        }
    });
});
