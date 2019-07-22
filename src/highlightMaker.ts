import HighlightJs from 'highlight.js'
import MarkdownIt from 'markdown-it'

export type IHighlightHandle = (str: string, lang: string) => string

export function highlightMaker(md: MarkdownIt): IHighlightHandle {
    return (str: string, lang: string) => {
        if (lang && HighlightJs.getLanguage(lang)) {
            return '<pre class="hljs"><code>' + HighlightJs.highlight(lang, str, true).value + '</code></pre>'
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    }
}

export function highlightCustomMaker(handle: (hljs: typeof HighlightJs) => IHighlightHandle) {
    return handle(HighlightJs)
}
