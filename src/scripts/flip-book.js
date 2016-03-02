var root = this.root;

this.on('mount', function() {
  // When all the DOM elements in `<yield/>` are mounted
  var selector = '> section', pages;
  try {
    pages = root.querySelectorAll(':scope' + selector);
  } catch (error) {
    var id = root.id; // remember current element id
    root.id = 'ID_' + Date.now(); // assign new unique id
    pages = document.querySelectorAll('#' + root.id + selector);
    root.id = id; // restore previous id
  }
});

this.on('update', function() {
  // Handle changes.
});