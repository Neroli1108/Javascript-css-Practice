var lis = document.querySelectorAll("li");
for(var i = 0; i<lis.length;i++){
	lis[i].addEeventListener("mouseover",function(){
		this.classList.add("selected");
	})
	lis[i].addEeventListener("mouseout",function(){
		this.classList.remove("selected");
	})
	lis[i].addEeventListener("click",function(){
		this.classList.toggle("done");
	})
}