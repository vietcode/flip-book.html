(function() {
  var targets = document.querySelectorAll('[is]'), 
      count = targets.length,
      target, name;
  
  while (count--) {
    target = targets[count];
    name = target.getAttribute('is');
    target.removeAttribute('is');
    target.setAttribute('riot-tag', name);
  }
})();