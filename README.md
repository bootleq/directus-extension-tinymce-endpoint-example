# Directus Extension - TinyMCE endpoint example

Provide custom endpoints to be loaded with [WYSIWYG][] interface's `content_css` Options Override.

Example `Options Override` for WYSIWYG field interface:

```json
{
  "content_css": "http://localhost:8055/tinymce/article.css",
  "preview_styles": "color font-size"
}
```

## Installation

Refer to [installing via extensions directory][], run

    npm run build

then copy the `dist/` and `package.json` to directus' extensions folder.



[WYSIWYG]: https://docs.directus.io/app/data-model/fields/text-numbers.html#wysiwyg
[installing via extensions directory]: https://docs.directus.io/extensions/installing-extensions.html#installing-via-the-extensions-directory
