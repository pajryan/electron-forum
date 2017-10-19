import jetpack from 'fs-jetpack';
import * as http from 'http';
import * as Stream from 'stream';	//.Transform


export const imageFetch = () => {
	//imageInForumText.txt is generated while the XML is being generated (so this is sort of iterative..)
	var imgTxt = jetpack.read('app/data/imageInForumText.txt');
	var imgLst = imgTxt.split('\n');
	// console.log(imgLst)

	//empty the current status file
	jetpack.write('app/data/imagesLost.txt','');
	jetpack.write('app/data/imageMapping.txt','');

	var inc=0;

	function pad(n, width, z) {
	  z = z || '0';
	  n = n + '';
	  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	var callbackWeb = function(res, urlString){
		//save the image somewhere
		inc++;
		console.log('found a valid web image: ' + urlString);
		var imgName = urlString.split('/')[urlString.split('/').length-1];
		imgName = pad(inc,5) + '_' + imgName.replace(/\s+/g, '-').toLowerCase();
		
		jetpack.write('app/data/recoveredImages/'+imgName,res);

		jetpack.append('app/data/imageMapping.txt', urlString + '\t' + imgName + '\n');
	}

	var callbackAG = function(localPath, urlString){
		inc++;
		console.log('found a valid AG image: ' + urlString);
		var imgName = localPath.split('/')[localPath.split('/').length-1];
		imgName = 'a' + pad(inc,4) + '_' + imgName.replace(/\s+/g, '-').toLowerCase();

		jetpack.copy(localPath, 'app/data/recoveredImages/'+imgName, { overwrite: true });

		jetpack.append('app/data/imageMapping.txt', urlString + '\t' + imgName + '\n');
	}


	imgLst.forEach(function(i){

		var urlString = i;

		//deal with AG images separately
		if(urlString.indexOf('agavegroup')!=-1){
			var urlParts = urlString.split('/');
			var imgPath = 'app/data/images/'+urlParts.slice(3).join('/');
			if(jetpack.exists(imgPath)=='file'){
				callbackAG(imgPath, urlString);
			}else{
				//missing image.  Note it in imagesLost, but also provide a mapping to the imageMissing.png
	        	jetpack.append('app/data/imagesLost.txt', '-AG' + '\t' + urlString + '\n');
	        	jetpack.append('app/data/imageMapping.txt', urlString + '\t' + 'imageMissing.png' + '\n');
			}
			
		}else{

			//now deal with web images
			var url = new URL(i);

			return http.get({
		        host: url.host,
		        path: url.pathname
		    }, function(response) {
		        // Continuously update stream with data
		        if(response.statusCode==200){
		        	//have an image.  download it
					var body = new Stream.Transform();
			        response.on('data', function(d) {
			            body.push(d);
			        });
			        response.on('end', function() {
			            callbackWeb(body.read(), urlString);
			        });
		        }else{
		        	//missing image
		        	jetpack.append('app/data/imagesLost.txt', response.statusCode + '\t' + urlString + '\n');
		        	jetpack.append('app/data/imageMapping.txt', urlString + '\t' + 'imageMissing.png' + '\n');
		        	
		        }
		        
		    });

		}

	});

}


