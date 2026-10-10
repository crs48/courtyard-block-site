"""Check static route/base/anchor integrity and essential document structure."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote, urljoin

ROOT = Path(__file__).resolve().parents[1] / 'dist'
BASE = '/courtyard-block-site/'

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.links, self.errors = set(), [], []
        self.h1 = self.main = self.anchor_depth = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids: self.errors.append(f'duplicate id: {attrs["id"]}')
            self.ids.add(attrs['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'a':
            if self.anchor_depth: self.errors.append('nested anchor')
            self.anchor_depth += 1
            if 'href' in attrs: self.links.append(attrs['href'])
        if tag == 'img' and 'alt' not in attrs: self.errors.append('image missing alt')
    def handle_endtag(self, tag):
        if tag == 'a': self.anchor_depth = max(0, self.anchor_depth - 1)

pages = {}
for path in ROOT.rglob('*.html'):
    doc = Document(); doc.feed(path.read_text())
    route = BASE + str(path.relative_to(ROOT)).removesuffix('index.html')
    pages[route] = doc
errors, checked = [], 0
for route, doc in pages.items():
    errors.extend(f'{route}: {e}' for e in doc.errors)
    if doc.h1 != 1 or doc.main != 1: errors.append(f'{route}: expected one h1 and one main, got {doc.h1}/{doc.main}')
    for href in doc.links:
        link = urlsplit(href)
        if link.scheme or link.netloc: continue
        checked += 1
        target = urlsplit(urljoin(route, href))
        if not target.path.startswith(BASE): errors.append(f'{route}: missing site base in {href}'); continue
        lookup = target.path if target.path.endswith('/') else target.path + '/'
        if lookup not in pages:
            if not (ROOT / unquote(target.path[len(BASE):])).is_file(): errors.append(f'{route}: missing destination {href}')
        elif target.fragment and unquote(target.fragment) not in pages[lookup].ids:
            errors.append(f'{route}: missing anchor {href}')
if errors: raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} routes, {checked} internal links; valid anchors, base paths, one h1/main per page, image alt attributes, no nested anchors or duplicate IDs.')
