/*ajax请求数据*/
function userData(){
	var url="./json/user.json";
	$.ajax({
        type: "get",
        dataType: "json",
        url: url,
        data:"",
        success: function (data) {
           creat(data);
        }
    });
};
/**
 * 
 * @param 创建表格 回填数据
 */
function creat(data){
	$.each(data, function(id, obj) {
	    var $dom=$(
	    	"<tr>"+
	  			"<td>"+obj.num+"</td>"+
	  			"<td>"+obj.date+"</td>"+
	  			"<td>"+obj.name+"</td>"+
	  			"<td>"+obj.phone+"</td>"+
	  			"<td>"+obj.address+"</td>"+
	  			"<td>"+obj.serial+"</td>"+
	  			"<td>"+obj.boxes+"</td>"+
	  			"<td>"+obj.size+"</td>"+
	  			"<td></td>"+
  			"</tr>"); 
		$(".user").after($dom);
	});
	
}



/*ajax请求数据*/
function appleData(){
	var url="./json/apple.json";
	$.ajax({
        type: "get",
        dataType: "json",
        url: url,
        data:"",
        success: function (data) {
           apple(data);
        }
    });
};
/**
 * 
 * @param 创建表格 回填数据
 */
function apple(data){
	$.each(data, function(id, obj) {
	    var $dom=$(
	    	"<tr>"+
	  			"<td>"+obj.type+"</td>"+
	  			"<td>"+obj.num15+"</td>"+
	  			"<td>"+obj.num18+"</td>"+
	  			
  			"</tr>"); 
		$(".apple").after($dom);
	});
	
}


/*ajax请求数据*/
function honeyData(){
	var url="./json/honey.json";
	$.ajax({
        type: "get",
        dataType: "json",
        url: url,
        data:"",
        success: function (data) {
           honey(data);
        }
    });
};
/**
 * 
 * @param 创建表格 回填数据
 */
function honey(data){
	$.each(data, function(id, obj) {
	    var $dom=$(
	    	"<tr>"+
	  			"<td>"+obj.type+"</td>"+
	  			"<td>"+obj.num1+"</td>"+
	  			"<td>"+obj.num2+"</td>"+
	  			"<td>"+obj.num5+"</td>"+
	  			"<td>"+obj.num10+"</td>"+
  			"</tr>"); 
		$(".honey").after($dom);
	});
	
}



function fareData(){
	var url="./json/fare.json";
	$.ajax({
        type: "get",
        dataType: "json",
        url: url,
        data:"",
        success: function (data) {
           fare(data);
        }
    });
};
/**
 * 
 * @param 创建表格 回填数据
 */
function fare(data){
	$.each(data, function(id, obj) {
	    var $dom=$(
	    	"<tr>"+
	  			"<td>"+obj.type+"</td>"+
	  			"<td>"+obj.call+"</td>"+
	  			"<td>"+obj.small10+"</td>"+
	  			"<td>"+obj.num10+"</td>"+
	  			"<td>"+obj.num12+"</td>"+
	  			"<td>"+obj.num29+"</td>"+
  			"</tr>"); 
		$(".fare").after($dom);
	});
	
}


function myData(){
	var url="./json/my.json";
	$.ajax({
        type: "get",
        dataType: "json",
        url: url,
        data:"",
        success: function (data) {
           my(data);
        }
    });
};
/**
 * 
 * @param 创建表格 回填数据
 */
function my(data){
	$.each(data, function(id, obj) {
	    var $dom=$(
	    	"<tr>"+
	  			"<td>"+obj.num+"</td>"+
	  			"<td>"+obj.date+"</td>"+
	  			"<td>"+obj.address+"</td>"+
	  			"<td>"+obj.serial+"</td>"+
	  			"<td>"+obj.boxes+"</td>"+
	  			"<td>"+obj.size+"</td>"+
  			"</tr>"); 
		$(".my").after($dom);
	});
	
}