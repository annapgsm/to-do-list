function newItem(){ 
    // Adding a new item to the list:
        let inputValue = $('#input').val(); // Gets the input
        
        if (inputValue === '') {           // If the input is empty, alert the user
            alert("You must write something!");
            return;
        } else {
            let li = $('<li></li>');         // Creates a new empty <li> element using jQuery
            li.text(inputValue);             // Appends the input text inside the <li>
            $('#list').append(li);           // Otherwise, append the <li> to the list
        }

    //2. Crossing an item out on double click:
	    li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	    });

    //Adding a delete button "X"
        let deleteButton = $('<button></button>'); // Creates delete button element
        deleteButton.append(document.createTextNode('X')); // Appends text "X" to delete button
        li.append(deleteButton); // Append delete button to <li>

        deleteButton.on("click", deleteListItem);  // Adds click event to delete button
        function deleteListItem(){
            li.addClass("delete")  //Adds class to hide <li>
        }

    // Enable reordering of list items
        $('#list').sortable();
}



