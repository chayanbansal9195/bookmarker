//listen for form submit
document.getElementById('myform').addEventListener('submit',saveBookmark);


//save bookmark
function saveBookmark(e)
{
	//get form values
	var sitename = document.getElementById('sitename').value;
	var siteurl = document.getElementById('siteurl').value;
	
	var bookmark ={
		name:sitename,
		url:siteurl
	}
	/*
	//local storage text
    localStorage.setItem('test','Hello World');
      console.log(localStorage.getItem('test'));
      localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

     //Test if bookmarks is null
     if(localStorage.getItem('bookmarks')===null)
     	{
     	//init array
           var bookmarks = [];
           //Add to array
           bookmarks.push(bookmark);
                //set to localStorage
              localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

   }
else{

	//get bookmarks from local storage
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
       //add bookmarks to array
       bookmarks.push(bookmark);
       //reset back to localstorage
       localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
	   //prevent form from submitting
	e.preventDefault();
}

//fetch bookmarks

function fetchBookmarks()
{
   //Get bookmarks from localstorage
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	//get output id
	var bookmarksResults=document.getElementById('bookmarksResults');
//build output
   bookmarksResults.innerHTML='';
   for(var i = 0;i < bookmarks.length; i++) {
	
	var name = bookmarks[i].name;
	var url = bookmarks[i].url;

	bookmarksResults.innerHTML += '<div class="well">'+
	                               '<h3>'+name+
	                               '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'
	                               '</h3>'+
	                               '</div>';
}

}