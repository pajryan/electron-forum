import jetpack from 'fs-jetpack';

export const haveALook = () => {
  
	console.log('having a look')

	var posts = jetpack.read('app/data/forumText.json','json');
	var c = document.getElementById('container');				//root container

	console.log('before manipulation, have '+posts.length+' records something like this', posts[0]);


/**
LOGGING
**/
//logging the status of images.  Clear those logs
jetpack.write('app/data/imagesMappingFailed.txt','');
jetpack.write('app/data/imageInForumText.txt','');
jetpack.write('app/data/urlsWanted.txt','');


/*
DATA MANIPULATION
*/

	//first, organize the data and get some reasonable types out of this
	posts = posts.map(function(p){
		return{
			forum_desc: p.forum_desc,
			forum_id: +p.forum_id,
			forum_name: p.forum_name,
		
			postTime: new Date(p.postTime),
			postTimeStr: p.postTime,
			post_id: +p.post_id,
			post_subject: p.post_subject,
			post_text: p.post_text,
			post_time: p.post_time,
			poster_id: +p.poster_id,
			username: p.username,

			topicTime: new Date(p.topicTime),
			topicTimeStr: p.topicTime,
			topic_id: +p.topic_id,
			topic_poster: p.topic_poster,
			topic_replies: +p.topic_replies,
			topic_time: p.topic_time,
			topic_title: p.topic_title,
			topic_views: +p.topic_views
			
		}
	})
	
	//sort posts by most recent first, so we pick up the LAST post to the topic
	posts.sort(function(a,b){return b.postTime.getTime() - a.postTime.getTime()});


	//get unique forum and topic IDs
	var forumIds = [...new Set(posts.map(item => item.forum_id))];
	var topicIds = [...new Set(posts.map(item => item.topic_id))];
	


	//get the unique forums
	var forums = [];
	forumIds.forEach(function(f){
		forums.push(posts.find(function(p){return p.forum_id===f}))
	});
	forums.sort(function(a,b){return b.forum_id - a.forum_id})

	//get the unique topics
	var topics = [];
	topicIds.forEach(function(t){
		topics.push(posts.find(function(p){return p.topic_id===t}))
	})





	//remap forums to the bits we care about
	forums = forums.map(function(f){
		return{
			forum_desc: f.forum_desc, 
			forum_id: f.forum_id, 
			forum_name: f.forum_name,
			topics:[]
		}
	});

	// forums are:  RyanRyanRyan=8, Classics=7, __=6, DrunkenMcMaster=5, Family=4, SuperSecret=3, GeneralStuff=2
	console.log('filtering the forums to classics, SuperSecret and General Stuff');
	forums = forums.filter(function(f){return f.forum_id===7||f.forum_id===3||f.forum_id===2})

// console.error('filtering the forums to classics ONLY for now!');
// forums = forums.filter(function(f){return f.forum_id===7})	


	//remap topics to the bits we care about
	topics = topics.map(function(t){
		return{
			forum_id: t.forum_id, 
			topicTime: t.topicTime,
			topicTimeStr: t.topicTime,
			topic_id: t.topic_id,
			topic_poster: t.topic_poster,
			topic_replies: t.topic_replies,
			topic_time: t.topic_time,
			topic_title: t.topic_title,
			topic_views: t.topic_views,
			posts:[]
		}
	});
	//remap posts to the bits we care about
	posts = posts.map(function(p){
		return{
			forum_id: p.forum_id, 
			topic_id: p.topic_id,
			postTime: p.postTime,
			postTimeStr: p.postTime,
			post_id: p.post_id,
			post_subject: p.post_subject,
			post_text: p.post_text,
			post_time: p.post_time,
			poster_id: p.poster_id,
			username: p.username
		}
	});




	//for each topic, add the relevant posts.  Sort them descending for print
	posts.sort(function(a,b){return a.postTime.getTime() - b.postTime.getTime()});
	topics.forEach(function(t){
		t.posts = posts.filter(function(p){return p.topic_id === t.topic_id});
	});
	//for each forum, add the relevant topics
	forums.forEach(function(f){
		f.topics = topics.filter(function(t){return t.forum_id === f.forum_id});
	});




	console.log('final forums', forums)









/*
UI
*/


	//now do some UI stuff
	forums.forEach(function(f){
		var fd = document.createElement('div');	fd.className = 'forumHolder';	fd.dataset.forumId = f.forum_id;
		var fdp1 = document.createElement('p');	fdp1.className = 'forumTitle';
		var fdp2 = document.createElement('p');	fdp2.className = 'forumDescription';
		fdp1.innerHTML = f.forum_name;
		fdp2.innerHTML = f.forum_desc;

		c.appendChild(fd);
		fd.appendChild(fdp1);
		fd.appendChild(fdp2);


		f.topics.forEach(function(t){
			var td = document.createElement('div');		td.className = 'topicHolder';	td.dataset.topicId = t.topic_id;
			var tdp1 = document.createElement('p');		tdp1.className = 'topicTitle';
			tdp1.innerHTML = t.topic_title;

			fd.appendChild(td);
			td.appendChild(tdp1);


			t.posts.forEach(function(p){
				var pd = document.createElement('div');		pd.className = 'postHolder';	pd.dataset.postId = p.post_id;
				var pdp1 = document.createElement('p');		pdp1.className = 'postText';
				var pdp3 = document.createElement('p');		pdp3.className = 'postAuthor';
				var pdp4 = document.createElement('p');		pdp4.className = 'postTime';


				pdp1.innerHTML = applyMarkup(p.post_text, 'html');
				pdp3.innerHTML = p.username;
				pdp4.innerHTML = p.postTime;

				td.appendChild(pd);
				pd.appendChild(pdp4);
				pd.appendChild(pdp3);
				pd.appendChild(pdp1);

			});

		})



	});

};










function applyMarkup(text, type){
	if(text==null){return '';}

	/*
	MARKUP
		I want 2 types of markup: XML and HTML
	*/



	var markup = [
		//note these regexs have some slighly strange sytnax because they're being stored as strings - so all the escapes need to be escaped (\\)
		//		the comments off the right are the 'real' regular expresions
		{extract:false, replace:'\\[b:[^\\]]+\\]', html:'<b>', xml: '<bold>'},									//  /\[b:[^\]]+\]
		{extract:false, replace:'\\[\\/b:[^\\]]+\\]', html:'</b>', xml: '</bold>'},								//	/\[\/b:[^\]]+\]

		{extract:false, replace:'\\[i:[^\\]]+\\]', html:'<i>', xml: '<italic>'},								//  /\[i:[^\]]+\]
		{extract:false, replace:'\\[\\/i:[^\\]]+\\]', html:'</i>', xml: '</italic>'},							//	/\[\/i:[^\]]+\]

		{extract:false, replace:'\\[u:[^\\]]+\\]', html:'<u>', xml: '<underline>'},								//  /\[u:[^\]]+\]
		{replace:'\\[\\/u:[^\\]]+\\]', html:'</u>', xml: '</underline>'},										//	/\[\/u:[^\]]+\]
		
		{extract:true, replace:'\\[size=([0-9]+):[^\\]]+\\]', html:'<span style="font-size:|EXTRACT|px">', xml: '<size_|EXTRACT|>'},	//	/\[size=([0-9]+):[^\]]+\]/
		{extract:false, replace:'\\[\\/size:[^\\]]+\\]', html:'</span>', xml: '</size_SIZE>'},					//	/\[\/size:[^\]]+]

		{extract:true, replace:'\\[img:[^\\]]+]([^\\[]+)\\[\\/img:[^\\]]+\\]', html:'<img src="|EXTRACT|" data-original-url="|EXTRACT|" />', xml: '<image>|EXTRACT|</image>', alsoDo:imgManage},				//	/\[img:[^\]]+]([^\[]+)\[\/img:[^\]]+\]

		//simple URL
		{extract:true, replace:'\\[url]([^\\[]+)\\[\\/url]', html:'<a class="link" href="|EXTRACT|">|EXTRACT|</a>', xml: '<link>|EXTRACT|</link>', alsoDo:urlManage},	//	/\[url]([^\[]+)\[\/url]
		//url linking URL specific text
		{extract:true, replace:'\\[url=([^\\]]+)]([^[]+)\\[\\/url]', html:'<a href="|EXTRACT|">|EXTRACT2|</a>', xml: '<link>|EXTRACT2| (|EXTRACT|)</link>', alsoDo:urlManage},	//	/\[url=([^\]]+)]([^[]+)\[\/url]


		//quote by a person
		{extract:true, replace:'\\[quote:[^=]+="([^"]+)"]', html:'<span class="quote"><span class="quoting">|EXTRACT|:</span>', xml: '<quote><quoting>|EXTRACT|:</quoting>'},		//	/\[quote:[^=]+="([^"]+)"]
		//anonymous quote
		{extract:false, replace:'\\[quote:[^=\\]]+]', html:'<span class="quote">', xml: '<quote>'},	//	/\[quote:[^=\]]+]
		{extract:false, replace:'\\[\\/quote:[^\\]]+]', html:'</span>', xml: '</quote>'},	//	/\[\/quote:[^\]]+]

		{extract:false, replace:'(?:\r\n|\r|\n)', html:'<br />', xml: ''}
	];




	markup.forEach(function(m){
		if(m.extract){
			//extracting a piece of the regex'd string (e.g. a font size) and using it in the new markup
			var extr = text.match(new RegExp(m.replace));
			while(extr){
				//for images and urls, we want to do some post-processing (e.g. point image links to local resources)
				//  so alsoDo is a function that does some stuff, PRIOR to updating the actual text
				if(m.alsoDo){	
					extr = m.alsoDo(extr, text, type);
				}

				var fullReplace;
				if(extr[2]){
					//in the case of linked text, we have two linked texts (url and text)
					fullReplace = m[type].replace('|EXTRACT|',extr[1]);
					fullReplace = fullReplace.replace('|EXTRACT2|',extr[2]);
					text = text.replace(new RegExp(m.replace), fullReplace);
				}else{
					//just a single extract
					fullReplace = m[type];
					while(fullReplace.indexOf('|EXTRACT|')!=-1){
						fullReplace = fullReplace.replace('|EXTRACT|',extr[1]);
					}
					text = text.replace(new RegExp(m.replace), fullReplace);
				}

				extr = text.match(new RegExp(m.replace));
			}
			
		}else{
			//just simple text replace
			text = text.replace(new RegExp(m.replace,'g'), m[type])
		}


		// text = text.replace(/\[i:[^\]]+\]/g, m[type])
	});

	return text;

}


function urlManage(extr, text, type){
	//extr[1] contains a URL.  What to do with it...?
	// var urlStatus = jetpack.exists(extr[1]);
	// console.log('url:', extr[1])
	// console.log('url?', urlStatus)

	jetpack.append('app/data/urlsWanted.txt',extr[1]+'\n');


	return extr;
}


function imgManage(extr, text, type){
	//will ultimatley have a file (or something) that maps existing paths to new paths to the actual images I was able to recover.


	var imagePaths = {html:'data/images/', xml:''};
	var imageMissingFile = 'imageMissing.png';

	var haveImg=false;
	var imgUrl = extr[1];

	//record the raw version of any image we're looking for.  This will be used in imageFetch.js to get as many images as we can later
	jetpack.append('app/data/imageInForumText.txt',imgUrl+'\n');


//next get the new image mapped from the original...
	var imTxt = jetpack.read('app/data/imageMapping.txt');
	if(imTxt===undefined){
		console.error('no app/data/imageMapping.txt file found. has it been built yet? (via "fetch remote images")');
		return extr;
	}

// return extr;

	var imTxtLines = imTxt.split('\n');
	var found=false;
	for(var imI = 0; imI<imTxtLines.length; imI++){
		var parts = imTxtLines[imI].split('\t');

		if(parts[0]==imgUrl){
			//we have a mapping, make sure it actually exists
			if(jetpack.exists('app/data/images/'+parts[1]) == 'file'){
				extr[1] = imagePaths[type] + parts[1];
				found=true;
				break;
			}
		}


	}

	if(!found){
		jetpack.append('app/data/imagesMappingFailed.txt',extr[1]+'\n');
		extr[1] = imagePaths[type] + imageMissingFile;
	}
	


	return extr;

}


















