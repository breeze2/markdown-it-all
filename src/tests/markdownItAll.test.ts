import { markdownItAll } from '../markdownItAll'

test("test markdownItAll", () => {
    const md = markdownItAll()
    const html = md.render('# heading\n')
    expect(html).toBe('<h1 data-source-line="1">heading</h1>\n')
})
