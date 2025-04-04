document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality for resume page
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Show corresponding content
                const tabId = button.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });
    }
    
     // Initialize Lucide icons
        lucide.createIcons();
        
        // Image carousel functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Project images array
            const projectImages = [
                "constr_imgs/1.png",
                "constr_imgs/2.png",
                "constr_imgs/3.png"
            ];
            
            let currentImageIndex = 0;
            const projectImage = document.getElementById('project-image');
            const prevButton = document.getElementById('prev-project');
            const nextButton = document.getElementById('next-project');
            
            // Function to update the displayed image
            function updateImage() {
                projectImage.src = projectImages[currentImageIndex];
            }
            
            // Previous button click handler
            prevButton.addEventListener('click', function() {
                currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
                updateImage();
            });
            
            // Next button click handler
            nextButton.addEventListener('click', function() {
                currentImageIndex = (currentImageIndex + 1) % projectImages.length;
                updateImage();
            });
        });
    
    // Form submission handler for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // In a real application, you would send this data to your server
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('Message sent! (This is just a demo)');
            
            // Reset form
            this.reset();
        });
    }
});

// Remove duplicate tab functionality blocks
// The first block above already handles this efficiently