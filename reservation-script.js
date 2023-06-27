document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var mobileNum = document.getElementById("mobileNum").value;
    var address = document.getElementById("address").value;
    var agent = document.getElementById("agent").value;
    var property = document.getElementById("property").value;
  
    // Create a reservation object
    var reservation = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNum: mobileNum,
      address: address,
      agent: agent,
      property: property
    };
  
    // Retrieve existing reservations from local storage
    var existingReservations = localStorage.getItem("reservations");
    if (existingReservations) {
      existingReservations = JSON.parse(existingReservations);
    } else {
      existingReservations = [];
    }
  
    // Add the new reservation to the existing reservations
    existingReservations.push(reservation);
  
    // Update the reservations in local storage
    localStorage.setItem("reservations", JSON.stringify(existingReservations));
  
    // Redirect to the reservation list page
    window.location.href = "reservationlist.html";
  });
  