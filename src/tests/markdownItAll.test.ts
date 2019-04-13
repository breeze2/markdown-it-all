import { markdownItAll } from '../markdownItAll'

test("test markdownItAll", () => {
    const md = markdownItAll()
    const html = md.render('# heading\n')
    expect(html).toBe('<h1 id="heading" data-source-line="1"><a class="anchor" href="#heading"><span class="octicon octicon-link"></span></a>heading</h1>\n')

})
