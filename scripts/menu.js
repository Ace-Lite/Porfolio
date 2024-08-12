links.forEach(function(value, index, array)
{
    var li = $('<li>').appendTo($('#menu'));
    $('<a>').text(value[1]).on('click', function() {ChangeSwitch(index)}).appendTo(li);                   
})      