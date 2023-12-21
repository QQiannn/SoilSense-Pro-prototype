// Read a page's GET URL variables and return them as an associative array.


$(function() {
    var pHValue = getUrlVars()[ "phValue" ];

    var precision = 10; // 2 decimals
    // var randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
    randomnum = 5.6;
    $("#currentpH").text( randomnum );

    showHideMessage( pHValue == randomnum, pHValue, randomnum );

    function showHideMessage( isSuccessful, pHValue, randomnum )
    {
        if ( isSuccessful ) {
            $( "#successBox" ).removeClass( "hide" );
        
            if ( !$( "#failBox" ).hasClass( "hide" ) ) {
                $( "#failBox" ).addClass( "hide" );
            }
            $( "#explanation" ).text( "Current pH value is same as expected value." );
        } else {
            $( "#failBox" ).removeClass( "hide" );
            if ( !$( "#successBox" ).hasClass( "hide" ) ) {
                $( "#successBox" ).addClass( "hide" );
            }

            if ( randomnum > pHValue ) {
                $( "#explanation" ).text( "Current pH value is more basic than expected value." );
            } else{
                $( "#explanation" ).text( "Current pH value is more acidic than expected value." );
            }
        }
    }

    function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
});