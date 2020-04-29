// Validate tasks
function validatetask () {
	let inputval = document.querySelector('#taskval').value;
   if (inputval.length == '') {
   	setTimeout(function(){
   	document.querySelector('#form_todo').className = 'haserror';
   	},1000)   
   	return false;
}  else{
	addnewtask();
	// enter_press();

}
}


// Call the keyress fnc
function enter_press () {
	const inputtask = document.querySelector('#taskval');
	inputtask.addEventListener('keyup', function(event){
	if (event.keyCode === 13) {
		addnewtask();
	}
	});
}
// fnc_addinf_new_task
function addnewtask(){
	const taskval = document.querySelector('#taskval').value;
	const listele = document.createElement('li');
	listele.className = 'list-group-item';
	listele.textContent = taskval;
	document.querySelector('ul').appendChild(listele);
    listele.insertAdjacentHTML('beforeend', 
    '<i class="fas fa-times-circle float-right"></i>');
	document.querySelector('#taskval').value = "";

}

