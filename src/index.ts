import type { Router } from 'express';

const editorCSS = `
  :root {
    --table-border-color: #ccc;
  }

  tbody, tr {
    border-top: 1px;
    border-color: var(--table-border-color);
    border-style: solid;
  }

  tbody {
    border-bottom: 1px solid var(--table-border-color);
    border-left: 1px solid var(--table-border-color);
    border-right: 1px solid var(--table-border-color);
  }
`;


export default {
  id: 'tinymce',
  handler: (router: Router) => {
    router.get('/', (_req, res) => {
      res.setHeader('Content-Type', 'text/css');
      return res.send(editorCSS);
    });
  }
};
