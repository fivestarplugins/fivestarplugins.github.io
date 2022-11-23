jQuery( document ).ready( function( $ ) {

    var url = window.location.href,
        urlArray = url.split( '/' ),
        currentSection = urlArray[ urlArray.length - 2 ],
        urlLastPart = urlArray[ urlArray.length - 1 ];
    
    $( '.sidebar ul li ul' ).hide();

    if ( currentSection == 'user' ) {

        $( '.sidebar ul li.getting-started ul' ).show();
    }

    if ( currentSection == 'user' && urlLastPart == 'faq' ) {

        $( '.sidebar ul li.getting-started ul' ).hide();
        $( '.sidebar ul li.faq ul' ).show();
    }

    $( '.sidebar ul li' ).each( function() {

        thisMenuSection = $( this );

        if ( thisMenuSection.hasClass( currentSection ) ) {

            thisMenuSection.find( 'ul' ).show();
        }
    });
});