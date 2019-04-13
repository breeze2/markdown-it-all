import MarkdownIt from 'markdown-it'
import MarkdownItPlugins from './MarkdownItPlugins'

import { highlightMaker } from './highlightMaker'

export function markdownItAll (md?: MarkdownIt) {
    if (!md) {
        md = new MarkdownIt()
    }
    md.set({
        breaks: true,
        highlight: highlightMaker(md),
        html: true,
        linkify: true,
        typographer: true,
    })

    for (const key in MarkdownItPlugins) {
        if (key === 'customContainer') {
            md.use(MarkdownItPlugins.customContainer, 'danger')
            md.use(MarkdownItPlugins.customContainer, 'success')
            md.use(MarkdownItPlugins.customContainer, 'warning')
            md.use(MarkdownItPlugins.customContainer, 'info')
        } else if (key === 'githubToc') {
            md.use(MarkdownItPlugins.githubToc, {
                anchorClassName: 'anchor',
                anchorLinkSpace: false,
                anchorLinkSymbol: '',
                anchorLinkSymbolClassName: 'octicon octicon-link',
                tocClassName: 'toc',
                tocFirstLevel: 2,
                tocLastLevel: 3,
            })
        } else {
            md.use(MarkdownItPlugins[key])
        }
    }

    return md
}
