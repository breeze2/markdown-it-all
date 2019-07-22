import MarkdownIt from 'markdown-it'
import { IMarkdownItGithubTocOptions } from 'markdown-it-github-toc'
import MarkdownItPlugins from './MarkdownItPlugins'

import { highlightMaker } from './highlightMaker'

export function markdownItAll(md?: MarkdownIt, mdOptions?: MarkdownIt.Options) {
    if (!md) {
        md = new MarkdownIt()
        md.set(mdOptions || {
            breaks: true,
            highlight: highlightMaker(md),
            html: true,
            linkify: true,
            typographer: true,
        })
    }

    for (const key in MarkdownItPlugins) {
        if (key === 'customContainer') {
            md.use(MarkdownItPlugins.customContainer, 'danger')
            md.use(MarkdownItPlugins.customContainer, 'success')
            md.use(MarkdownItPlugins.customContainer, 'warning')
            md.use(MarkdownItPlugins.customContainer, 'info')
        } else if (key === 'githubToc') {
            const opt: IMarkdownItGithubTocOptions = {
                anchorClassName: 'anchor',
                anchorLinkSpace: false,
                anchorLinkSymbol: '',
                anchorLinkSymbolClassName: 'octicon octicon-link',
                tocClassName: 'toc',
                tocFirstLevel: 2,
                tocLastLevel: 3,
            }
            md.use(MarkdownItPlugins.githubToc, opt)
        } else {
            md.use(MarkdownItPlugins[key])
        }
    }

    return md
}
