$(function() {
    var files = [
            'YOUR_FILES_HERE',
        ],
        $extras = $('<div></div>').addClass('hiders').insertAfter($('#toc p.explain')),
        $files = $('<div></div>').addClass('file').prependTo( $('#files') );

    $.each(files, function( i, file ) {
        var $hide = $('[data-path="' + file + '"]');

        if( $hide.length ) {
            $extras[0].innerHTML += 'Hidden ' + file + ' by diffhide<br />';
            //$('<div><span class="fyle">' + file + '</span> changed and hidden by diffhide</div>').addClass('diffhidden').prependTo( $files );
            $hide.parent().hide();
            //$hide.clone().prependTo( $files );
        }
    });
});
