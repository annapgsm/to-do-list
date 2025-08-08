// Run this function when the DOM (page) is fully loaded
$(function() {

  // 1. Make the list <ol id="list"> sortable (drag-and-drop reordering)
  $('#list').sortable();

  // 2. When the "Add" button (div with id=button) is clicked, call newItem()
  $('#button').on('click', function() {
    
    // --- ADD NEW ITEM TO LIST ---

    // Get the text from the input field and remove extra spaces
    let inputValue = $('#input').val().trim();

    // If the input is empty, alert and stop
    if (!inputValue) {
      alert('You must write something!');
      return; // exit function
    }

    // Create a new <li> element and set its text to the input value
    let li = $('<li></li>').text(inputValue);

    // --- DOUBLE CLICK TO MARK ITEM OFF ---
    // When you double-click on the list item, toggle the "strike" CSS class
    // (this adds/removes line-through effect and grey color)
    li.on('dblclick', function() {
      $(this).toggleClass('strike');
    });

    // --- ADD DELETE "X" BUTTON ---
    // Create a button element for deleting the list item
    let deleteButton = $('<button></button>').text('X');

    // When the delete button is clicked, add the "delete" class to this li
    // The delete CSS rule hides the element (display: none)
    deleteButton.on('click', function() {
      li.addClass('delete');  // could also use li.remove() to remove from DOM
    });

    // Append the delete button to the li
    li.append(deleteButton);

    // Append the li to the list
    $('#list').append(li);

    // Clear the input after adding the item
    $('#input').val('');
  });
});


/* Career Foundry Version that did not work:


function newItem(){ 
    //Adding a new item to the list:
        let inputValue = $('#input').val(); // Gets the input
        
        if (inputValue === '') {           // If the input is empty, alert the user
            alert("You must write something!");
            return;
        } else {
            let li = $('<li></li>');         // Creates a new empty <li> element using jQuery
            li.text(inputValue);             // Appends the input text inside the <li>
            $('#list').append(li);           // Otherwise, append the <li> to the list
        }

    //Crossing an item out on double click:
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

*/

