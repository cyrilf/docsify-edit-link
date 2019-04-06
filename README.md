# docsify-edit-link

A [docsify](https://github.com/docsifyjs/docsify) plugin to add an `Edit that page` link at the top of every pages. Clicking this link will automatically open the correponding page on Github/Gitlab/Bitbucket.

## Usage

```html
<script>
  window.$docsify = {
    // your config
    // ...
    editLink: {
      text: 'Edit this document',
      // text: '<span style="color: limegreen;">Edit this document</span>',
      repo: 'cyrilf/docsify-edit-link',
      // repo: 'https://github.com/cyrilf/docsify-edit-link/edit/master/docs/',
      cssClass: 'docsify-edit-link m-0'
    }
  }
</script>
<script src="//unpkg.com/docsify-edit-link@1"></script>
```

## Configuration

These are the options you can configure under `window.$docsify = { editLink: { ... }}`

| option | description | default value |
|-|-|-|
| text | the button text (can also be html) | Edit this page |
| repo | your github alias [userName]/[project] or full `edit url` | uses the `repo` from your docsify config if set |
| cssClass | a specific class to apply | edit-link |


## Customization

You can use the CSS class `edit-link` (or the one you specified via the `cssClass` option) if you want to apply any specific style to your link.

Also, remember that the `text` option also accept html. So you are very flexible in what you want to render.

## Q/A

- Where do I find the `edit url` of my project?

It's simple, open your project on Github/GitLab ... copy the `url` of where docsify is installed. Simply replace the word `blob` or `tree` by `edit`. For instance:

```diff
-https://github.com/cyrilf/docsify-edit-link/tree/master/docs/
+https://github.com/cyrilf/docsify-edit-link/edit/master/docs/
```
The first line is the root of your project.
The second line is the same but `tree` is now `edit`.
This is your `edit url` (and yes, it's a 404. This plugin will automaticaly add the file name at the end to make it work)
Use this only if you don't host your code on Github or if your docsify root location is not `./docs`.

----

Inspired by [njleonzhang/docsify-edit-on-github](https://github.com/njleonzhang/docsify-edit-on-github)
