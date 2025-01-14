// Check if we are on about.html page
if (window.location.pathname === '/about.html') {
    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Clear previous errors
      document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
      document.getElementById("successMessage").style.display = "none";
  
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
  
      let valid = true;
  
      // Validation logic
      if (name === "") {
        document.getElementById("nameError").textContent = "O nome é obrigatório.";
        valid = false;
      }
      if (email === "") {
        document.getElementById("emailError").textContent = "O email é obrigatório.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "O email não é válido.";
        valid = false;
      }
      if (subject === "") {
        document.getElementById("subjectError").textContent = "O assunto é obrigatório.";
        valid = false;
      }
      if (message === "") {
        document.getElementById("messageError").textContent = "A mensagem é obrigatória.";
        valid = false;
      } else if (message.length < 10) {
        document.getElementById("messageError").textContent = "A mensagem deve ter pelo menos 10 caracteres.";
        valid = false;
      }
  
      // If valid, show success message
      if (valid) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").reset(); // Reset form
      }
    });
  





// Check if we are on the course.html page
if (window.location.pathname === '/course.html') {
    // Place the code you want to run only on course.html here
    $(document).ready(function() {
      const urlParams = new URLSearchParams(window.location.search);
      const courseId = urlParams.get('id');
  
      if (courseId) {
        loadCourseDetails(courseId);
      }
  
      function loadCourseDetails(courseId) {
        $.ajax({
          url: `courses/${courseId}.txt`,
          dataType: 'text',
          success: function(data) {
            const courseData = JSON.parse(data);
            $('#course-title').text(courseData.title);
            $('#course-description').text(courseData.description);
            $('#course-modules').html(
              courseData.modules.map(module => `<li>${module}</li>`).join('')
            );
          },
          error: function() {
            $('#course-title').text('Curso não encontrado.');
            $('#course-description').text('');
            $('#course-modules').html('');
          }
        });
      }
    });
  }
  
}