import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';

export { ALL_ROUTES, STATIC_ROUTES, POST_ROUTES, NOINDEX_ROUTES } from './routes';

export function render(url: string) {
  const ctx: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={ctx}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const h = ctx.helmet!;
  const head = [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join('\n');
  const htmlAttrs = h.htmlAttributes.toString();
  return { html, head, htmlAttrs };
}
