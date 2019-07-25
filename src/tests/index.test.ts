import MarkdownIt, { highlightCustomMaker, highlightMaker, markdownItAll, markdownItCustom } from '../index'

describe('Markdown it All Testing', () => {
    test('test markdownIt', () => {
        const md = new MarkdownIt()
        const content = '# markdown-it rulezz!\n'
        const html = md.render(content)
        expect(html).toBe('<h1>markdown-it rulezz!</h1>\n')
    })

    test('test markdownItAll', () => {
        const md = markdownItAll()
        const content = '# markdown-it-all rulezz!\n'
        let html = md.render(content)
        expect(html).toBe('<h1 id="markdown-it-all-rulezz" data-source-line="1"><a class="anchor" href="#markdown-it-all-rulezz"><span class="octicon octicon-link"></span></a>markdown-it-all rulezz!</h1>\n')

        html = md.render(`\`\`\`js
function sum(a, b) {
    return a + b;
}
\`\`\``)
        expect(html).toBe(`<pre class="hljs"><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}
</code></pre>
`)
    })

    test('test markdownItCustom', () => {
        const content = '# markdown-it-custom rulezz!\n'
        const md = markdownItCustom({ sourceMap: true, customContainer: ['danger'], githubToc: true })
        let html = md.render(content)
        expect(html).toBe('<h1 id="markdown-it-custom-rulezz" data-source-line="1"><a class="markdownIt-Anchor" href="#markdown-it-custom-rulezz">#</a> markdown-it-custom rulezz!</h1>\n')

        md.set({
            highlight: highlightCustomMaker(hljs => (str: string, lang: string) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
                    } catch (error) {
                        console.error(error)
                    }
                }
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
            }),
        })

        html = md.render(`\`\`\`js
function sum(a, b) {
    return a + b;
}
\`\`\``)
        expect(html).toBe(`<pre class="hljs"><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}
</code></pre>
`)

        html = highlightMaker(md)('undefinded', 'undefinded')
        expect(html).toBe('<pre class="hljs"><code>undefinded</code></pre>')
    })

    test('test misc', () => {
        const md = new MarkdownIt()
        const mdAll = markdownItAll(new MarkdownIt())
        const mdCustom = markdownItCustom({githubToc: undefined}, new MarkdownIt())
        const content = '# markdown-it rulezz!\n'
        const html = md.render(content)
        const htmlAll = mdAll.render(content)
        const htmlCustom = mdCustom.render(content)
        expect(htmlAll).toBe('<h1 id="markdown-it-rulezz" data-source-line="1"><a class="anchor" href="#markdown-it-rulezz"><span class="octicon octicon-link"></span></a>markdown-it rulezz!</h1>\n')
        expect(html).toBe(htmlCustom)
    })

})
