import MarkdownIt, { markdownItAll, markdownItCustom } from '../index'

test("test markdownItCustom", () => {
    const content = '# markdown-it rulezz!\n'
    let md = new MarkdownIt()
    let html = md.render(content)
    expect(html).toBe('<h1>markdown-it rulezz!</h1>\n')

    md = markdownItAll()
    html = md.render(content)
    expect(html).toBe('<h1 id="markdown-it-rulezz" data-source-line="1"><a class="anchor" href="#markdown-it-rulezz"><span class="octicon octicon-link"></span></a>markdown-it rulezz!</h1>\n')

    md = markdownItCustom({sourceMap: true})
    html = md.render(content)
    expect(html).toBe('<h1 data-source-line="1">markdown-it rulezz!</h1>\n')
})
