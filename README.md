# javascript-challenge
 This assignment challenges me to use d3 in javascript to manipulate an HTML table and insert data based upon user input. 

 I used event listeners to handle user input and detect changes in the page and whether a button has been pushed. I monitor the input field for any change, and take this change as my input text. I do not sort through the data until the filter table button has been pushed. I was having trouble taking the user input from the input field when the button was pressed. I worked around this by creating two separate event listeners. One for the button, and one for a change in the input field. Once the button is pressed, whatever the last change in the input field was is the value I use to sort through the data by date. I then append a table row and table data for each field in the table.

 I reset the table data with 'body.text('')' at the start of my button event. I do not know why this works, but it replaces all of the previous data in the table with the new date entered.

 My main program is located in the folder UFO-level-1.