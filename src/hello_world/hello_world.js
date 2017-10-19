// import * as d3 from 'd3';


export const greet = () => {
  return 'Hello World!';
};

export const bye = () => {
  return 'See ya!';
};


// export const thing = () =>{
// 	var dataObj = [
// 		{Campaign: "JAN SALES", 'Click Date': "30/12/2012", clickedFlag: "1"},
// 		{Campaign: "NOV SALES", 'Click Date': "15/11/2013", clickedFlag: "1"}
// 	]

// 	console.log("dataObj",dataObj);

// 	var readDate = d3.timeParse('%d/%m/%Y');	//https://github.com/d3/d3-time-format/blob/master/README.md#timeFormat
// 	var writeDate = d3.timeFormat('%d-%b');
// 	dataObj.forEach(function(d){
// 		d.Click_date = writeDate(readDate(d['Click Date']));
// 		delete d['Click Date'];	//optionally remove the original
// 	});

// 	console.log('dataObjNew', dataObj)


// }