import { markdownItCustom } from '../markdownItCustom'

test("test markdownItCustom", () => {
    const md = markdownItCustom({
        sourceMap: true,
    })
    const html = md.render('# heading\n')
    expect(html).toBe('<h1 data-source-line="1">heading</h1>\n')
})
