/*
// Step 1 original code
$(document).ready(function() {
    $('#new-status form').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: '/status',
            type: 'POST',
            dataType: 'json',
            data: { text: $('#new-status textarea').val() },
            success: function(data) {
                $('#statuses ul').append('<li>' + data.text + '</li>');
                $('#new-status textarea').val('');
            }
        });
    });
});
*/
function addStatus(options){
    $.ajax({
        url: '/status',
        type: 'POST',
        dataType: 'json',
        data: { options.text },// options.data
        success: options.success
        }
    });
}


$(document).ready(function() {
    $('#new-status form').submit(function(e) {
        e.preventDefault();
        addStatus({
            text: $('#new-status textarea').val(),
            success: function(data) {
                $('#statuses ul').append('<li>' + data.text + '</li>');
                $('new-statuses textarea').val('');
            }
        });
    });
});