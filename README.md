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
      editUrl: 'https://github.com/cyrilf/docsify-edit-link/edit/master/docs/'
    }
  }
</script>
<script src="//unpkg.com/docsify-edit-link@1.0.0"></script>
```

## Configuration

These are the options you can configure under `window.$docsify = { editLink: { ... }}`

| option | description | default value |
|-|-|-|
| text | the button text (can also be html) | Edit this page |
| url | the edit url of your project | by default it uses the `repo` from your docsify config, if not set, it will throw an error as it's required |


## Customization

You can use the CSS class `edit-link` if you want to apply any specific style to your link.

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

----

Inspired by [njleonzhang/docsify-edit-on-github](https://github.com/njleonzhang/docsify-edit-on-github)
