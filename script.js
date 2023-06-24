//your JS code here. If required.
let saveInput = document.querySelector('input[type="submit"]')
saveInput.addEventListener("click",()=>{
	let fontSize = document.querySelector('#fontsize').value
	let fontColor = document.querySelector('input[type="color"]').value
	// console.log(fontSize,fontColor)
	document.cookie = "fontColor="+fontColor+"; expires= Fri, 25 June 2023 12:00:00 UTC; path=/";
	document.cookie = "fontSize="+fontSize+"; expires= Fri, 25 June 2023 12:00:00 UTC; path=/";
}) 

function showCookieValue(){
let fontSizeCookie = getCookie("fontSize")
	if(fontSizeCookie){
		document.querySelector('#fontsize').value = fontSizeCookie 
	}
	let fontColorCookie =getCookie("fontColor")
	if(fontColorCookie){
		document.querySelector('input[type="color"]').value = fontColorCookie 
	}

	
}

function getCookie(key){
	return  document.cookie.split("; ")
	 .find((row) => row.startsWith(key)).split("=")[1]
}