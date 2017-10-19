slideShowURL = 'SlideShow_assets/SlideShow.html';       // parameter from openSlideShowWindow.js
slideShowNS4URL = 'SlideShow_assets/SlideShowNS4.html'; // parameter from openSlideShowWindow.js

slides = new Array();
slides[0] = new Slide('../Photos_files/IMG_0031.jpg', '600', '800', 'With GD at the Patch.');
slides[1] = new Slide('../Photos_files/IMG_0032.jpg', '600', '800', 'Look at all the pumpkins.');
slides[2] = new Slide('../Photos_files/IMG_0035.jpg', '600', '800', 'The Grandparent paparazzi are always on the lookout for that money pic.');
slides[3] = new Slide('../Photos_files/IMG_0039.jpg', '600', '800', 'Checkin’ out the corn with Mom.');
slides[4] = new Slide('../Photos_files/IMG_0041.jpg', '800', '600', 'What the . . .');
slides[5] = new Slide('../Photos_files/IMG_0043.jpg', '800', '600', 'Oh, I’m Dorothy!');
slides[6] = new Slide('../Photos_files/IMG_0044.jpg', '600', '800', 'Yah, that’s the one.');
slides[7] = new Slide('../Photos_files/IMG_0059.jpg', '600', '800', 'With Mom and Nana.');
slides[8] = new Slide('../Photos_files/IMG_0105.jpg', '600', '800', 'I went to a Halloween party and this little dude kept banging his head into me.  Kids!');
slides[9] = new Slide('../Photos_files/IMG_0110.jpg', '800', '600', 'My family.');
slides[10] = new Slide('../Photos_files/IMG_0111.jpg', '600', '800', 'With my Nanny Rama.');
slides[11] = new Slide('../Photos_files/IMG_0114_2.jpg', '600', '800', 'I love it when Rama takes me to see Mary at the library for story time.');
slides[12] = new Slide('../Photos_files/IMG_0118_2.jpg', '600', '800', 'Waiting for the trick or treaters.');
slides[13] = new Slide('../Photos_files/IMG_0123.jpg', '600', '800', 'Wait . . .  if Delaney is a doggie, why isn’t Denali dressed like a Baby?');
isPureISOLatin1 = true;
contentEncodingConstant = 4;
feedbackURL = "TODO";
showFeedbackButton = false;
feedbackEnabled = true;

function fixupIEPNGBG(oBlock) 
{
    if (oBlock)
    {
        var currentBGImage = oBlock.currentStyle.backgroundImage;
        var currentBGRepeat = oBlock.currentStyle.backgroundRepeat;
        var urlStart = currentBGImage.indexOf('url(');
        var urlEnd = currentBGImage.indexOf(')', urlStart);
        var imageURL = currentBGImage.substring(urlStart + 4, urlEnd);

        if (imageURL.charAt(0) == '"')
        {
            imageURL = imageURL.substring(1);
        }
        
        if (imageURL.charAt(imageURL.length - 1) == '"')
        {
            imageURL = imageURL.substring(0, imageURL.length - 1);
        }

        var overrideRepeat = false;

        var filterStyle =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            imageURL +
            "', sizingMethod='crop');";

        if (RegExp("/C[0-9A-F]{8}.png$").exec(imageURL) != null)
        {
            filterStyle =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                imageURL +
                "', sizingMethod='scale');";

            overrideRepeat = true;
        }

        var backgroundImage = new Image();
        backgroundImage.src = imageURL;
        var tileWidth = backgroundImage.width;
        var tileHeight = backgroundImage.height; 
        
        var blockWidth = 0;
        var blockHeight = 0;
        if (oBlock.style.width)
        {
            blockWidth = parseInt(oBlock.style.width);
        }
        else
        {
            blockWidth = oBlock.offsetWidth;
        }
        if (oBlock.style.height)
        {
            blockHeight = parseInt(oBlock.style.height);
        }
        else
        {
            blockHeight = oBlock.offsetHeight;
        }

        if ((blockWidth == 0) || (blockHeight == 0))
        {
            return;
        }
        
        var wholeRows = 1;
        var wholeCols = 1;
        var extraHeight = 0;
        var extraWidth = 0;
        
        if ((currentBGRepeat.indexOf("no-repeat") != -1) ||
              ((tileWidth == 0) && (tileHeight == 0)) ||
              overrideRepeat)
        {
            tileWidth = blockWidth;
            tileHeight = blockHeight;

        }
        else if ((currentBGRepeat.indexOf("repeat-x") != -1) ||
              (tileHeight == 0))
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            tileHeight = blockHeight;

        }
        else if (currentBGRepeat.indexOf("repeat-y") != -1)
        {
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraHeight = blockHeight - (tileHeight * wholeRows);
            tileWidth = blockWidth;

        }
        else
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            extraHeight = blockHeight - (tileHeight * wholeRows);
        }
        
        var wrappedContent = document.createElement("div");
        wrappedContent.style.position = "relative";
        wrappedContent.style.zIndex = "1";
        wrappedContent.style.left = "0px";
        wrappedContent.style.top = "0px";
        if (!isNaN(parseInt(oBlock.style.width)))
        {
            wrappedContent.style.width = "" + blockWidth + "px";
        }
        if (!isNaN(parseInt(oBlock.style.height)))
        {
            wrappedContent.style.height = "" + blockHeight + "px";
        }
        var pngBGFixIsWrappedContentEmpty = true;
        while (oBlock.hasChildNodes())
        {
            if (oBlock.firstChild.nodeType == 3)
            {
                if (RegExp("^ *$").exec(oBlock.firstChild.data) == null)
                {
                    pngBGFixIsWrappedContentEmpty = false;
                }
            }
            else
            {
                pngBGFixIsWrappedContentEmpty = false;
            }
            wrappedContent.appendChild(oBlock.firstChild);
        }
        if (pngBGFixIsWrappedContentEmpty)
        {
            wrappedContent.style.lineHeight = "0px";
        }
        
        var newMarkup = "";
        for (var currentRow = 0; 
             currentRow < wholeRows; 
             currentRow++)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        
        if (extraHeight != 0)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        oBlock.innerHTML = newMarkup;

        oBlock.appendChild(wrappedContent);
        oBlock.style.background= "";
    }
}

function fixupAllIEPNGBGs()
{
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        try
        {
            var oDivNodes = document.getElementsByTagName('DIV');
            for (var iIndex=0; iIndex<oDivNodes.length; iIndex++)
            {
                var oNode = oDivNodes.item(iIndex);
                if (oNode.currentStyle &&
                    oNode.currentStyle.backgroundImage &&
                    (oNode.currentStyle.backgroundImage.indexOf('url(') != -1) &&
                    (oNode.currentStyle.backgroundImage.indexOf('.png")') != -1))
                {
                    fixupIEPNGBG(oNode);
                }
            }
        }
        catch (e)
        {
        }
    }
}

var windowsInternetExplorer = false;
var browserVersion = 0;
function detectBrowser()
{
    windowsInternetExplorer = false;
    var appVersion = navigator.appVersion;
    if ((appVersion.indexOf("MSIE") != -1) &&
        (appVersion.indexOf("Macintosh") == -1))
    {
        var temp = appVersion.split("MSIE");
        browserVersion = parseFloat(temp[1]);
        windowsInternetExplorer = true;
    }
}

function onPageLoad()
{
    detectBrowser();
    fixupIEPNG("id1", "Photos_files/transparent.gif");
    fixupAllIEPNGBGs();
    fixupIEPNG("id2", "Photos_files/transparent.gif");
    fixupIEPNG("id3", "Photos_files/transparent.gif");
    return true;
}

var smallTransparentGif = "";
function fixupIEPNG(strImageID, transparentGif) 
{
    smallTransparentGif = transparentGif;
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        var img = document.getElementById(strImageID);
        if (img)
        {
            var src = img.src;
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
            img.src = transparentGif;
            img.attachEvent("onpropertychange", imgPropertyChanged);
        }
    }
}

var inImgPropertyChanged = false;
function imgPropertyChanged()
{
    if ((window.event.propertyName == "src") && (! inImgPropertyChanged))
    {
        inImgPropertyChanged = true;
        var el = window.event.srcElement;
        if (el.src != smallTransparentGif)
        {
            el.filters.item(0).src = el.src;
            el.src = smallTransparentGif;
        }
        inImgPropertyChanged = false;
    }
}

