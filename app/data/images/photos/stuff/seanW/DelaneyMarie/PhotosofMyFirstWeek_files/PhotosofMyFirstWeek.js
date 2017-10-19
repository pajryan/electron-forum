slideShowURL = 'SlideShow_assets/SlideShow.html';       // parameter from openSlideShowWindow.js
slideShowNS4URL = 'SlideShow_assets/SlideShowNS4.html'; // parameter from openSlideShowWindow.js

slides = new Array();
slides[0] = new Slide('../PhotosofMyFirstWeek_files/100_3156.jpg', '534', '800', 'Newly arrived, with my Mom.');
slides[1] = new Slide('../PhotosofMyFirstWeek_files/100_0977_0020.jpg', '600', '800', 'Hey, that’s my family.');
slides[2] = new Slide('../PhotosofMyFirstWeek_files/100_0982_0025.jpg', '600', '800', 'VICTORY!');
slides[3] = new Slide('../PhotosofMyFirstWeek_files/100_0983_0026.jpg', '600', '800', 'The nurses at Alta Bates sure were nice.');
slides[4] = new Slide('../PhotosofMyFirstWeek_files/100_0993_0036.jpg', '600', '800', 'Hmmm, not so sure about this.');
slides[5] = new Slide('../PhotosofMyFirstWeek_files/100_0995_0038.jpg', '600', '800', 'My proud parents (doesn’t my Mom look good after 38 hours in labor?).');
slides[6] = new Slide('../PhotosofMyFirstWeek_files/100_0998_0041.jpg', '600', '800', 'They look happy.');
slides[7] = new Slide('../PhotosofMyFirstWeek_files/100_1004_0047.jpg', '800', '600', 'The news sure traveled fast.');
slides[8] = new Slide('../PhotosofMyFirstWeek_files/100_3154.jpg', '534', '800', 'Nana Jerrie and me, less than an hour old.');
slides[9] = new Slide('../PhotosofMyFirstWeek_files/100_3155.jpg', '534', '800', 'My Papa Kevin and me.');
slides[10] = new Slide('../PhotosofMyFirstWeek_files/100_1009_0052.jpg', '600', '800', 'GD flew in from Austin just to hold me.');
slides[11] = new Slide('../PhotosofMyFirstWeek_files/100_1011_0054.jpg', '600', '800', 'Me and MeMe (no, not three Mes, just one Me and one MeMe).');
slides[12] = new Slide('../PhotosofMyFirstWeek_files/100_3160.jpg', '534', '800', 'Why so tired, Dad?');
slides[13] = new Slide('../PhotosofMyFirstWeek_files/100_1018_0061.jpg', '600', '800', 'Mom gets me ready to go home.');
slides[14] = new Slide('../PhotosofMyFirstWeek_files/100_3162.jpg', '534', '800', 'Man, I’m . . .');
slides[15] = new Slide('../PhotosofMyFirstWeek_files/100_3163.jpg', '800', '534', 'Tired.');
slides[16] = new Slide('../PhotosofMyFirstWeek_files/100_1020_0062.jpg', '600', '800', 'Okay, help me out.');
slides[17] = new Slide('../PhotosofMyFirstWeek_files/100_3165.jpg', '534', '800', 'Thanks, Mom.');
slides[18] = new Slide('../PhotosofMyFirstWeek_files/100_1028_0069.jpg', '600', '800', 'Sweet! Going home!');
slides[19] = new Slide('../PhotosofMyFirstWeek_files/100_1032_0073.jpg', '600', '800', 'This is my ride?');
slides[20] = new Slide('../PhotosofMyFirstWeek_files/100_1035_0076.jpg', '600', '800', 'So sweet.');
slides[21] = new Slide('../PhotosofMyFirstWeek_files/100_1037_0078.jpg', '600', '800', 'Nap time eh, GD?');
slides[22] = new Slide('../PhotosofMyFirstWeek_files/100_3172.jpg', '534', '800', 'Hooray for the Challenger!');
slides[23] = new Slide('../PhotosofMyFirstWeek_files/100_3175.jpg', '800', '534', 'I’m the champ.');
slides[24] = new Slide('../PhotosofMyFirstWeek_files/100_3182.jpg', '534', '800', 'Papa Kevin and Nana Jerrie came for a visit.');
slides[25] = new Slide('../PhotosofMyFirstWeek_files/100_3184.jpg', '534', '800', 'Check out my sweet hair, Papa.');
slides[26] = new Slide('../PhotosofMyFirstWeek_files/101_1057.jpg', '600', '800', 'Getting pretty.');
slides[27] = new Slide('../PhotosofMyFirstWeek_files/100_3189.jpg', '534', '800', 'I really do love to sleep.');
slides[28] = new Slide('../PhotosofMyFirstWeek_files/100_3190.jpg', '534', '800', 'This is nice.');
slides[29] = new Slide('../PhotosofMyFirstWeek_files/101_1058.jpg', '600', '800', 'My Mom sure takes good care of me.');
slides[30] = new Slide('../PhotosofMyFirstWeek_files/101_1074.jpg', '600', '800', 'See?');
slides[31] = new Slide('../PhotosofMyFirstWeek_files/101_1083.jpg', '600', '800', 'Arrgh, matey.  \nCan I go to Pirate School, Dad? ');
slides[32] = new Slide('../PhotosofMyFirstWeek_files/101_1086.jpg', '600', '800', 'In case you forgot, I’m super cute.');
slides[33] = new Slide('../PhotosofMyFirstWeek_files/101_1087.jpg', '600', '800', 'What’s this thing?');
slides[34] = new Slide('../PhotosofMyFirstWeek_files/101_1088.jpg', '600', '800', 'Ahhhh . . . . choo!');
slides[35] = new Slide('../PhotosofMyFirstWeek_files/101_1089.jpg', '600', '800', 'How come you get to sleep on your side, Dad?');
slides[36] = new Slide('../PhotosofMyFirstWeek_files/101_1093.jpg', '800', '600', 'These elbows make great pillows.');
slides[37] = new Slide('../PhotosofMyFirstWeek_files/101_1096.jpg', '800', '600', 'Protection.  Nobody’s messin’ with me.');
slides[38] = new Slide('../PhotosofMyFirstWeek_files/101_1098.jpg', '600', '800', 'My friend, Zoe, came over to play.');
slides[39] = new Slide('../PhotosofMyFirstWeek_files/101_1099.jpg', '800', '600', 'And it wore me out.  . . . challeng . . .er . . .');
isPureISOLatin1 = true;
contentEncodingConstant = 4;
feedbackURL = "TODO";
showFeedbackButton = false;
feedbackEnabled = true;

var MINIMUM_FONT = "10";
var UNITS = "";

function elementFontSize(element)
{
    var fontSize = MINIMUM_FONT; 

    if (document.defaultView)
    {
        var computedStyle = document.defaultView.getComputedStyle(element, null);
        if (computedStyle)
        {
            fontSize = computedStyle.getPropertyValue("font-size");
        }
    }
    else if (element.currentStyle)
    {
        fontSize = element.currentStyle.fontSize;
    }

    if ((UNITS.length == 0) && (fontSize != MINIMUM_FONT))
    {
        UNITS = fontSize.substring(fontSize.length - 2, fontSize.length)
    }

    return parseFloat(fontSize);
}

function adjustFontSizeIfTooBig(idOfElement)
{
    var oTextBoxOuterDiv;
    var oTextBoxMiddleDiv;
    var oTextBoxInnerDiv;
    var oTextBoxOuterDiv = document.getElementById(idOfElement);
    
    if (oTextBoxOuterDiv)
    {
        oTextBoxMiddleDiv = getChildOfType(oTextBoxOuterDiv, "DIV", 0);
        if (oTextBoxMiddleDiv)
        {
            oTextBoxInnerDiv = getChildOfType(oTextBoxMiddleDiv, "DIV", 0);
            if (oTextBoxInnerDiv)
            {
                var offsetHeight = oTextBoxInnerDiv.offsetHeight;
                var specifiedHeight = offsetHeight;
                if (oTextBoxMiddleDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxMiddleDiv.style.height);
                }
                else if (oTextBoxOuterDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxOuterDiv.style.height);
                }
                if (offsetHeight > specifiedHeight)
                {
                    var smallestFontSize = 200;
                    
                    var aParaChildren = getParaDescendants(oTextBoxInnerDiv);
                    var oneLine = false;
                    for (i = 0; i < aParaChildren.length; i++)
                    {
                        var oParagraphDiv = aParaChildren[i];
                        var lineHeight = elementLineHeight(oParagraphDiv);
                        oneLine = oneLine || (lineHeight * 1.5 >= specifiedHeight);
                        if (oParagraphDiv.nodeName == "DIV")
                        {
                            var fontSize = elementFontSize(oParagraphDiv);
                            smallestFontSize = Math.min( smallestFontSize, fontSize );
                            for (j = 0; j < oParagraphDiv.childNodes.length; j++)
                            {
                                var oSpan = oParagraphDiv.childNodes[j];
                                if ((oSpan.nodeName == "SPAN") || (oSpan.nodeName == "A"))
                                {
                                    fontSize = elementFontSize(oSpan);
                                    smallestFontSize = Math.min( smallestFontSize, fontSize );
                                }
                            }
                        }
                    }
                    var minimum = parseFloat(MINIMUM_FONT);
                    
                    var count = 0
                    while ((smallestFontSize > minimum) && (offsetHeight > specifiedHeight) && (count < 10))
                    {
                        ++ count;
                        if (oneLine)
                        {
                            var oldWidth = parseInt(oTextBoxOuterDiv.style.width);
                            oTextBoxInnerDiv.style.width =
                                "" + oldWidth * Math.pow(1.05, count) + "px";
                        }
                        else
                        {
                            var scale = Math.max(0.95, minimum / smallestFontSize);
                            
                            for (i = 0; i < aParaChildren.length; i++)
                            {
                                var oParagraphDiv = aParaChildren[i];
                                if (oParagraphDiv.nodeName == "DIV")
                                {
                                    var paraFontSize = elementFontSize(oParagraphDiv) * scale;
                                    var paraLineHeight = elementLineHeight(oParagraphDiv) * scale;
                                    for (j = 0; j < oParagraphDiv.childNodes.length; j++)
                                    {
                                        var oSpan = oParagraphDiv.childNodes[j];
                                        if ((oSpan.nodeName == "SPAN") || (oSpan.nodeName == "A"))
                                        {
                                            var spanFontSize = elementFontSize(oSpan) * scale;
                                            var spanLineHeight = elementLineHeight(oSpan) * scale;
                                            oSpan.style.fontSize = spanFontSize + UNITS;
                                            oSpan.style.lineHeight = spanLineHeight + UNITS;
                                            smallestFontSize = Math.min( smallestFontSize, spanFontSize );
                                        }
                                    }
                                    oParagraphDiv.style.fontSize = paraFontSize + UNITS;
                                    oParagraphDiv.style.lineHeight = paraLineHeight + UNITS;
                                    smallestFontSize = Math.min( smallestFontSize, paraFontSize );
                                }
                            }
                        }
                        
                        offsetHeight = oTextBoxInnerDiv.offsetHeight;
                    }
                }
            }
        }
    }
}


function elementLineHeight(element)
{
    var lineHeight = MINIMUM_FONT; 
    
    if (document.defaultView)
    {
        var computedStyle = document.defaultView.getComputedStyle(element, null);
        if (computedStyle)
        {
            lineHeight = computedStyle.getPropertyValue("line-height");
        }
    }
    else if (element.currentStyle)
    {
        lineHeight = element.currentStyle.lineHeight;
    }
    
    if ((UNITS.length == 0) && (lineHeight != MINIMUM_FONT))
    {
        UNITS = lineHeight.substring(lineHeight.length - 2, lineHeight.length)
    }
    
    return parseFloat(lineHeight);
}

function adjustLineHeightIfTooBig(idOfElement)
{
    var oTextBoxOuterDiv;
    var oTextBoxMiddleDiv;
    var oTextBoxInnerDiv;
    var oTextBoxOuterDiv = document.getElementById(idOfElement);
    
    if (oTextBoxOuterDiv)
    {
        oTextBoxMiddleDiv = getChildOfType(oTextBoxOuterDiv, "DIV", 0);
        if (oTextBoxMiddleDiv)
        {
            oTextBoxInnerDiv = getChildOfType(oTextBoxMiddleDiv, "DIV", 0);
            if (oTextBoxInnerDiv)
            {
                var offsetHeight = oTextBoxInnerDiv.offsetHeight;
                var specifiedHeight = offsetHeight;
                if (oTextBoxMiddleDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxMiddleDiv.style.height);
                }
                else if (oTextBoxOuterDiv.style.height != "")
                {
                    specifiedHeight = parseFloat(oTextBoxOuterDiv.style.height);
                }
                if (offsetHeight > specifiedHeight)
                {
                    var adjusted = true;
                    var count = 0;
                    while ((adjusted) && (offsetHeight > specifiedHeight) && (count < 10))
                    {
                        adjusted = false;
                        ++ count;
                        
                        var aParaChildren = getParaDescendants(oTextBoxInnerDiv);
                        for (i = 0; i < aParaChildren.length; i++)
                        {
                            var oParagraphDiv = aParaChildren[i];
                            if (oParagraphDiv.nodeName == "DIV")
                            {
                                var fontSize = elementFontSize(oParagraphDiv);
                                var lineHeight = elementLineHeight(oParagraphDiv) * 0.95;
                                if (lineHeight >= (fontSize * 1.1))
                                {
                                    oParagraphDiv.style.lineHeight = lineHeight + UNITS;
                                    adjusted = true;
                                }
                                
                                
                                
                                for (j = 0; j < oParagraphDiv.childNodes.length; j++)
                                {
                                    var oSpan = oParagraphDiv.childNodes[j];
                                    if ((oSpan.nodeName == "SPAN") || (oSpan.nodeName == "A"))
                                    {
                                        var fontSize = elementFontSize(oSpan);
                                        var lineHeight = elementLineHeight(oSpan) * 0.95;
                                        if (lineHeight >= (fontSize * 1.1))
                                        {
                                            oSpan.style.lineHeight = lineHeight + UNITS;
                                            var adjusted = true;
                                        }
                                    }
                                }
                            }
                        }
                        
                        offsetHeight = oTextBoxInnerDiv.offsetHeight;
                    }
                }
            }
        }
    }
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

function getChildOfType(oParent, sNodeName, requestedIndex)
{
    var childrenOfType = oParent.getElementsByTagName(sNodeName);
    return (requestedIndex < childrenOfType.length) ?
           childrenOfType.item(requestedIndex) : null;
}

function getParaDescendants(oAncestor)
{
    var oParaDescendants = new Array();
    var oPotentialParagraphs = oAncestor.getElementsByTagName('DIV');
    for (var iIndex=0; iIndex<oPotentialParagraphs.length; iIndex++)
    {
        var oNode = oPotentialParagraphs.item(iIndex);
        if (oNode.className.lastIndexOf('paragraph') != -1)
        {
            oParaDescendants.push(oNode);
        }
    }
    return oParaDescendants;
}

function onPageLoad()
{
    detectBrowser();
    adjustLineHeightIfTooBig("id1");
    adjustFontSizeIfTooBig("id1");
    adjustLineHeightIfTooBig("id2");
    adjustFontSizeIfTooBig("id2");
    adjustLineHeightIfTooBig("id4");
    adjustFontSizeIfTooBig("id4");
    adjustLineHeightIfTooBig("id45");
    adjustFontSizeIfTooBig("id45");
    fixupAllIEPNGBGs();
    fixupIEPNG("id3", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id5", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id6", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id7", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id8", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id9", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id10", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id11", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id12", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id13", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id14", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id15", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id16", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id17", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id18", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id19", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id20", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id21", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id22", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id23", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id24", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id25", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id26", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id27", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id28", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id29", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id30", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id31", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id32", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id33", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id34", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id35", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id36", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id37", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id38", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id39", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id40", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id41", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id42", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id43", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id44", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id46", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id47", "PhotosofMyFirstWeek_files/transparent.gif");
    fixupIEPNG("id48", "PhotosofMyFirstWeek_files/transparent.gif");
    return true;
}

function NBmouseover(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "hidden";
        rollover.style.visibility = "visible";
    }
    return true;
}

function NBmouseout(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "visible";
        rollover.style.visibility = "hidden";
    }
    return true;
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

