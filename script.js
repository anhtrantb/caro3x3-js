//game cờ caro 3x3
var d=1;//biến đếm để thay đổi icon hiện ra 
var luotChoi=0;//lượt chơi tổng 
var data = createArr();//tạo mảng 
var result= document.getElementById("result");
var table = document.getElementById('table');
	table.addEventListener('click',main);//thêm sự kiện click cho table 
//

function display(event){//hiển thị ra màn hình 
	if(d===1){
		event.target.src='./icon/x_icon.png';
		d=d-1;
	}
	else if(d===0){
		event.target.src='./icon/o_icon.png';
		d=d+1;
	}
	luotChoi=luotChoi+1;
}

function setData(x,y){//set dữ liệu cho arr 
	data[x][y]=d;
}

function createArr(){//khởi tạo mảng với giá trị rỗng 
	var arrNoValue = [[],[],[]];
	for(let i=0;i<3;i++)
	for(let j=0;j<3;j++){
		arrNoValue[i][j]='';
	}
	return arrNoValue;
}
function checkEqual(x,y,z){
	if(x===y && y===z && z===x && x!=='')
		return 1;
	else return 0;
}
function check(x,y){
	//x =0; O = 1
	if( checkEqual(data[0][0],data[0][1],data[0][2])===1||
		checkEqual(data[1][0],data[1][1],data[1][2])===1||
		checkEqual(data[2][0],data[2][1],data[2][2])===1||
		checkEqual(data[0][0],data[1][0],data[2][0])===1||
		checkEqual(data[0][1],data[1][1],data[2][1])===1||
		checkEqual(data[0][2],data[1][2],data[2][2])===1||
		checkEqual(data[0][0],data[1][1],data[2][2])===1||
		checkEqual(data[0][2],data[1][1],data[2][0])===1)
	{
		if(data[x][y]===0) result.innerHTML= " X chiến thắng ";
		else if(data[x][y]===1) result.innerHTML= " O chiến thắng ";
	}
	if (luotChoi===9) result.innerHTML= " kết quả hòa";

}
function main(event){
	display(event);
	//
	let id = event.target.id;
	let id0 = parseInt(id[0]);
	let id1 = parseInt(id[1]);
	setData(id0,id1);
	check(id0,id1);
}
