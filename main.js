const labels = document.querySelectorAll('.accordion-label');

labels.forEach(label => {
  label.addEventListener('click', () => {
    const content = label.nextElementSibling;

    // Close all open accordions
    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== content) {
        item.style.maxHeight = null;
        item.classList.remove('open');
      }
    });

    // Toggle current accordion
    if (content.classList.contains('open')) {
      content.style.maxHeight = null;
      content.classList.remove('open');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add('open');
    }

    // Rotate arrow
    document.querySelectorAll('.accordion-label span').forEach(arrow => {
      arrow.style.transform = null;
    });
    if (content.classList.contains('open')) {
      label.querySelector('span').style.transform = "rotate(180deg)";
    }
  });
});
