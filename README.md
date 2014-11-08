# Angular Directive my-directives

# Installation

`bower install my-directives --save`

# Usage

`title-case-directive` change text input to format `title case`, it working via event `keydown`

And to use the my-directives, you must add the following directive in your template:

```html
<input name="songName" type="text" class="form-control" data-ng-model="songName" 
id="song-name" placeholder="Song name" title-case-directive required>
```
