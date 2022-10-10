function changeTab(event, index) {
  var tabButtons = document.getElementById('tab-buttons').children;
  var tabPanels = document.getElementById('tab-panels').children;

  // Remove the active utility classes from all tabs (bg-white, text-blue-600)
  // And hide all tab content (with the "hidden" utility)
  for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('text-blue-600');
      tabButtons[i].classList.remove('bg-white');
      tabButtons[i].classList.add('text-white');
      tabPanels[i].classList.add('hidden');
  }

  // Add the active utility classes to the currently active tab (bg-white, text-blue-600)
  // And show the current tab content (remove the "hidden" utility)
  tabButtons[index].classList.remove('text-white');
  tabButtons[index].classList.add('text-blue-600');
  tabButtons[index].classList.add('bg-white');
  tabPanels[index].classList.remove('hidden');
}