/* ======================================================================
   Dribbble Following Me: JavaScript
   ----------------------------------------------------------------------
   @author: hamish macpherson
   @url: http://hami.sh/
   ----------------------------------------------------------------------
 */

function onResponse(follow)
{
	realname = $(".shot-byline-user a").text();
	if (follow)
	{
		imgsrc = chrome.extension.getURL('following.gif');
		$(".plugin-follow-status").html("<img title='" + realname + " is following you.' src='" + imgsrc + "' />"); 
	}
	else
	{ 
		imgsrc = chrome.extension.getURL('notfollowing.gif');
		$(".plugin-follow-status").html("<img title='" + realname + " is not following you.' src='" + imgsrc + "' />"); 
	}
}

// Look for our username
username = $(".shot-byline-user a").attr("href").split("/")[1]
current_user = $("#t-profile a").attr("href").split("/")[1]

if (username)
{
	imgsrc = chrome.extension.getURL('loading2.gif');
	$("<span class='plugin-follow-status'><img src='" + imgsrc + "' /></span>").insertAfter(".follow-prompt");
	
	// Send the request...
	chrome.extension.sendRequest({'action' : 'fetchDribbbleFollowing', 'current_user' : current_user, 'username' : username, 'current_page' : 1}, onResponse);
}