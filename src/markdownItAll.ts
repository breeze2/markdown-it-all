import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import mdEmoji from 'markdown-it-emoji'
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
    md.use(mdSub)
        .use(mdSup)
        .use(mdIns)
        .use(mdLatex)
        .use(mdMark)
        .use(mdMermaid)
        .use(mdTaskList)
        .use(mdContainer, 'danger')
        .use(mdContainer, 'success')
        .use(mdContainer, 'warning')
        .use(mdContainer, 'info')
        .use(mdEmoji)
        .use(mdSourceMap)

    return md
}
