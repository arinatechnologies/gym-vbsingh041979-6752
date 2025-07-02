document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter items
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Modal functionality
  const modal = document.querySelector('.modal');
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const closeModal = document.querySelector('.close-modal');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Load more functionality
  const loadMoreBtn = document.querySelector('.load-more');
  let currentItems = 12;
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // In a real implementation, this would fetch more items
      currentItems += 4;
      loadMoreBtn.textContent = 'Loading...';
      
      // Simulate loading
      setTimeout(() => {
        loadMoreBtn.textContent = 'Load More';
        alert('In a real implementation, this would load 4 more items. Currently showing ' + currentItems + ' items.');
      }, 1000);
    });
  }
});