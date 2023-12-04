
  document.getElementById('deductionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes

  // Validate start and end date format
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD format
  if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
    alert('Please enter valid dates in YYYY-MM-DD format.');
    return;
  }

  // Form submission message
  const message = 'Form submitted successfully!'+ '\n' + 'The above salary deduction will take effect from ' + console.log('Start Date:', startDate) + 'until ' + console.log('End Date:', endDate); // Customize your message here

  // Display message 
  displayMessage(message); 

  // Reset the form after submission (comment out if not needed)
  this.reset();
});

function displayMessage(message) {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.textContent = message;
  messageContainer.style.display = 'block';
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}