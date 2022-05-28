// on page load
 $(window).load(function() {
    // define api keys
    var apiKey = 'API Key:9b4b999eb2f9726ebad004f4f42bc6b7';
    var apiSecret = 'c38e59c12f705e2e89d7b91be92f6be9';
    // create a Cache object
    var cache = new LastFMCache();
    // create a LastFM object
    var lastfm = new LastFM({
        apiKey    : apiKey,
        apiSecret : apiSecret,
        cache     : cache
    });
    var topArtistName = '';
    // get weekly artist chart by tag 'trance'
    lastfm.tag.getWeeklyArtistChart({tag: 'trance', limit: 6}, {success: function(data){
        // render top weekly artist using 'lastfmTemplateArtists' template
        $('#top_artists').html(
            $('#lastfmTemplateArtists').render(data.weeklyartistchart.artist)
        );
        // define top artist name
        topArtistName = data.weeklyartistchart.artist[0].name;
        // load details of the artist
        lastfm.artist.getInfo({artist: topArtistName}, {success: function(data){
            // render the single artist info using 'lastfmTemplateArtistInfo' template
            $('#top_artist').html(
                $('#lastfmTemplateArtistInfo').render(data.artist)
            );
            // load the artis's top tracks
            lastfm.artist.getTopTracks({artist: topArtistName, limit: 9}, {success: function(data){
                // render the tracks using 'lastfmTemplateTracks' template
                $('#top_tracks').html(
                    $('#lastfmTemplateTracks').render(data.toptracks.track)
                );
            }});
        }, error: function(code, message){
            alert('Error #'+code+': '+message);
        }});
    }});
});