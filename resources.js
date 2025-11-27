// ===== MAIN BUTTON TOGGLE =====
const mainButton = document.querySelector('.main-button');
const clusterList = document.getElementById('cluster-list');

mainButton.addEventListener('click', () => {
  // Toggle aria-expanded for accessibility
  const expanded = mainButton.getAttribute('aria-expanded') === 'true';
  mainButton.setAttribute('aria-expanded', !expanded);

  // Toggle .open class to show/hide the cluster container
  clusterList.classList.toggle('open');
});


// ===== CLUSTER BUTTONS TOGGLE =====
const clusterButtons = document.querySelectorAll('.cluster-button');

clusterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);

    const eventList = button.nextElementSibling;
    eventList.classList.toggle('open'); // toggle the individual cluster's event list
  });
});
