// Reddit GET

$('#searchform').on('submit', function(event){
    	event.preventDefault();
    	$('#listings').html('<center><img src="images/loading.gif" alt="loading"></center>');
	
		var searchinput = $('#keyword').val();
		var newkeyword = searchinput.replace(' ', '+');
		var finalurl = "http://www.reddit.com/search.json?q=" + searchinput + "&sort=top&limit=10&jsonp=?";

      	$.getJSON(finalurl,
			function foo(json){
				var searchlisting = json.data.children;
    			var html = '<ol>';
			  	for (var i=0; i<searchlisting.length; i++) {
					var obj = searchlisting[i].data;
				  
					html += '<li><p><img src="images/upvote.gif" /><span class="upvotes">' + obj.ups + '</span> &ndash; ';
					html += '<strong><a href="' + obj.url + '" target="_blank">' + obj.title + '</a></strong>';
					html += ', posted in <a href="http://www.reddit.com/r/' + obj.subreddit + '/" target="_blank">/r/' + obj.subreddit + '</a></p></li>';
  				}; // end for loop
  				htmlOutput(html);
		}); //end .getJSON
}); // end .on(submit) listener
	 
function htmlOutput(html) {
	html += '</ol>';
    $('#listings').html(html);
};