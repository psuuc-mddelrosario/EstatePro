document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the appointments from local storage
    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  
    // Build the appointment list
    var appointmentList = document.getElementById("appointmentTableBody");
  
    // Clear the appointment list before populating it
    appointmentList.innerHTML = "";
  
    appointments.forEach(function(appointment, index) {
      var row = document.createElement("tr");
  
      // Create table cells for each appointment property
      var nameCell = document.createElement("td");
      nameCell.textContent = appointment.name;
      row.appendChild(nameCell);
  
      var emailCell = document.createElement("td");
      emailCell.textContent = appointment.email;
      row.appendChild(emailCell);
  
      var phoneCell = document.createElement("td");
      phoneCell.textContent = appointment.phone;
      row.appendChild(phoneCell);
  
      var propertyTypeCell = document.createElement("td");
      propertyTypeCell.textContent = appointment.propertyType;
      row.appendChild(propertyTypeCell);
  
      var locationCell = document.createElement("td");
      locationCell.textContent = appointment.location;
      row.appendChild(locationCell);
  
      var dateCell = document.createElement("td");
      dateCell.textContent = appointment.date;
      row.appendChild(dateCell);
  
      var timeCell = document.createElement("td");
      timeCell.textContent = appointment.time;
      row.appendChild(timeCell);
  
      var agentCell = document.createElement("td");
      agentCell.textContent = appointment.agent;
      row.appendChild(agentCell);
  
      var actionCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        // Prompt for confirmation before deleting
        if (confirm("Are you sure you want to delete this appointment?")) {
          // Remove the appointment from the list
          appointments.splice(index, 1);
          // Save the updated appointments to local storage
          localStorage.setItem("appointments", JSON.stringify(appointments));
          // Remove the row from the table
          row.remove();
        }
      });
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);
  
      // Append the row to the appointment list
      appointmentList.appendChild(row);
    });
  });
  