import MarkdownIt from 'markdown-it'
import mdAbbr from 'markdown-it-abbr'
import mdContainer from 'markdown-it-container'
import mdEmoji from 'markdown-it-emoji'
import mdFootnote from 'markdown-it-footnote'
import mdIns from 'markdown-it-ins'
import mdLatex from 'markdown-it-latex'
import mdMark from 'markdown-it-mark'
import mdMermaid from 'markdown-it-mermaid'
import mdSourceMap from 'markdown-it-source-map'
import mdSub from 'markdown-it-sub'
import mdSup from 'markdown-it-sup'
import mdTaskList from 'markdown-it-task-list'

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
    md.use(mdAbbr)
        .use(mdSub)
        .use(mdSup)
        .use(mdIns)
        .use(mdMark)
        .use(mdLatex)
        .use(mdEmoji)
        .use(mdMermaid)
        .use(mdTaskList)
        .use(mdFootnote)
        .use(mdSourceMap)
        .use(mdContainer, 'danger')
        .use(mdContainer, 'success')
        .use(mdContainer, 'warning')
        .use(mdContainer, 'info')

    return md
}
