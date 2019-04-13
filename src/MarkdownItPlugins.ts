import mdAbbr from 'markdown-it-abbr'
import mdContainer from 'markdown-it-container'
import mdDefList from 'markdown-it-deflist'
import mdEmoji from 'markdown-it-emoji'
import mdFootnote from 'markdown-it-footnote'
import mdGithubToc from 'markdown-it-github-toc'
import mdIns from 'markdown-it-ins'
import mdLatex from 'markdown-it-latex'
import mdMark from 'markdown-it-mark'
import mdMermaid from 'markdown-it-mermaid'
import mdSourceMap from 'markdown-it-source-map'
import mdSub from 'markdown-it-sub'
import mdSup from 'markdown-it-sup'
import mdTaskList from 'markdown-it-task-list'

const plugins: {[key: string]: any} = {
    abbreviation: mdAbbr,
    customContainer: mdContainer,
    definitionList: mdDefList,
    emoji: mdEmoji,
    footnote: mdFootnote,
    githubToc: mdGithubToc,
    insert: mdIns,
    latex: mdLatex,
    mark: mdMark,
    mermaid: mdMermaid,
    sourceMap: mdSourceMap,
    subscript: mdSub,
    superscript: mdSup,
    taskList: mdTaskList,
}

export default plugins
