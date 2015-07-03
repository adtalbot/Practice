$(document).ready(function() {                            /*.ready will prevent JS from running until the page DOM is ready*/
  $('form#new-contact').submit(function(event) {          /*Goes to new-contact form. Prevents the form from being submitted to server*/
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();  /*Creates variable inputtedFirstName. Calls value method to pull out the value of input id field 'new-first-name'.*/
    var inputtedLastName = $('input#new-last-name').val();    /*Creates variable inputtedLastName. Calls value method to pull out the value of input id field 'new-last-name'.*/
    var inputtedAddress = $('input#new-address').val();       /*Creates variable inputtedAddrss. Calls value method to pull out the value of input id field 'new-address'*/
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress }; /*Creates a new object newContact with the variables created from above.*/

    $('ul#contacts').append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>"); /*Inserts first name and last name as list items in our unordered list*/

    $('input#new-first-name').val("");
    $('input#new-last-name').val("");
    $('input#new-address').val("");

    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName + " " + newContact.lastName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('.address').text(newContact.address);
    });
  });
});
