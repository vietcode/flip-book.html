# flip-book.html
Web component to display contents as book pages.

This is a project set up to help promoting writing open source software among Vietnamese developers.

## Inspirations

- http://www.turnjs.com/#samples/steve-jobs
- http://pageflip-books.com/#meetpageflip/page/2-3

## Example Usage

```html
<flip-book page="1" display="double" pages="200" duration="600">
  <div class="hard page">
    <h1>Cover Page</h1>
    <p><img src="/images/cover.jpg" alt="Cover image" /></p>
  </div>

  <div class="hard page">
    <h1>Back Page</h1>
  </div>

  <div class="page">
    <h1>Page 1</h1>
    <h2>Where everything starts</h2>
    <p>Once upon a time...</p>
  </div>

  ...
  <div class="page">
    <h1>The End</h1>
    <p>Everybody lives happily ever after.</p>
  </div>

  <div class="hard page">
  </div>

  <div class="hard page">
    <img src="/images/backCover.jpg" alt="Back cover image" />
  </div>
</flip-book>

<script>
  riot.mount('flip-book');
</script>
```

## Expectations

- Using Riot.js.
- No dependency.
- Styles should be as customizable as possible outside of the tag.
- The more options it has, the better.
- (Bonus) Support lazy loading of pages through AJAX.
- (Bonus) High FPS.
