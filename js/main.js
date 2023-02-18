let array=[];
let signInfo={};
let userBtn=document.getElementById("get");
let urClick=document.getElementById("create");
let userEmail=document.getElementById("loginmail");
let userPass=document.getElementById("loginpassword");
userBtn.addEventListener("click",function() {
	let usrMail=userEmail.value;
	let usrPassword=userPass.value;
	if(array.length>0) {
		for(let i in array){
			if(usrMail===array[0].url&&usrPassword===array[0].urPass){
				let home=document.getElementById("combaine");
				home.style.display="block";
				let click=document.getElementById("clear");
				click.style.display="none";
		    }
		}
	}
	else {
		alert("please sign up your account");
		userEmail.value="";
		userPass.value="";
		urClick.addEventListener("click",function() {
		let click=document.getElementById("clear");
		let openClick=document.getElementById("sign-up");
		click.style.display="none";
		openClick.style.display="block";
		});
	}
});

let userSignUpBtn=document.getElementById("got");
let userFname=document.getElementById("Fname");
let userLname=document.getElementById("Lname");
let userMail=document.getElementById("email");
let userSignUpPass=document.getElementById("password");
let userSignUpConPass=document.getElementById("password");
let userGender=document.getElementById("male");
let userDob=document.getElementById("date");
let userNumber=document.getElementById("phone");
userSignUpBtn.addEventListener("click",function() {
	let firstName=userFname.value;
	let lastName=userLname.value;
	let url=userMail.value;
	let urPass=userSignUpPass.value;
	let urConPass=userSignUpConPass.value;
	let urGender=userGender.value;
	let urBirth=userDob.value;
	let urNum=userNumber.value;
	const add=firstName+lastName;
	console.log(add);
	if(urPass===urConPass){
			signInfo["firstName"]=firstName;
			signInfo["lastName"]=lastName;
			signInfo["url"]=url;
			signInfo["urPass"]=urPass;
			signInfo["urConPass"]=urConPass;
			signInfo["urGender"]=urGender;
			signInfo["urBirth"]=urBirth;
			signInfo["urNum"]=urNum;
			array.push(signInfo);
			console.log(array);				
			
			let main =document.getElementById("sign-up")
			main.style.display="none";	
			let back=document.getElementById("clear");
			back.style.display="block";
		}
		else{
			alert("conform password is worng?");
			userSignUpConPass.value="";
		}
});

/*-------- home-page --------*/
let taskInfo=document.getElementById("task");
var info=[
	{
		id: 'person01',
		picture: 'image/testimonials-1.jpg',
		name: 'arjun',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '7,121 followers',
		btn: 'follow'
	},
	{
		id: 'person02',
		picture: 'image/testimonials-2.jpg',
		name: 'sithesh',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '4,208 followers',
		btn: 'follow'
	},
	{
		id: 'person03',
		picture: 'image/testimonials-3.jpg',
		name: 'jayasuriya',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '5,124 followers',
		btn: 'follow'
	},
	{
		id: 'person04',
		picture: 'image/testimonials-4.jpg',
		name: 'dharumaraj',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '2,344 followers',
		btn: 'follow'
	},
	{
		id: 'person05',
		picture: 'image/testimonials-5.jpg',
		name: 'mugilan',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '3,506 followers',
		btn: 'follow'
	},
	{
		id: 'person06',
		picture: 'image/testimonials-6.jpg',
		name: 'jeeva',
		batch: 'fed-04',
		branch: 'chennai',
		follower: '1,233 followers',
		btn: 'follow'
	}
]

info.forEach(function(obj){
	let tableItem=document.createElement("div");
	let tableItem1=document.createElement("div");
	let cancelBack=document.createElement("div");
	let cancel=document.createElement("div");
	let tableItem2=document.createElement("div");
	let picTag=document.createElement("img");
	let tableItem3=document.createElement("div");
	let nmTag=document.createElement("h3");
	let bthTag=document.createElement("h4");
	let bchTag=document.createElement("h4");
	let flrTag=document.createElement("h6");
	let buttonTag=document.createElement("button");
	
	tableItem.setAttribute("class","box");
	tableItem1.setAttribute("class","back-img");
	cancelBack.setAttribute("class","back");
	cancel.setAttribute("class","cancel");
	tableItem2.setAttribute("class","box-img");
	tableItem3.setAttribute("class","box-cont");
	tableItem.setAttribute("id",obj.id);
	
	picTag.src=obj.picture;
	nmTag.innerText=obj.name;
	bthTag.innerText=obj.batch;
	bchTag.innerText=obj.branch;
	flrTag.innerText=obj.follower;
	buttonTag.innerText=obj.btn;
	
	tableItem2.appendChild(picTag);
	tableItem3.append(nmTag,bthTag,bchTag,flrTag,buttonTag);
	cancelBack.appendChild(cancel);
	tableItem1.appendChild(cancelBack);
	tableItem.append(tableItem1,tableItem2,tableItem3);
	taskInfo.appendChild(tableItem);
});