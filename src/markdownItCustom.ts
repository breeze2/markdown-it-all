import MarkdownIt from 'markdown-it'
import MarkdownItPlugins from './MarkdownItPlugins'

interface ICustomPlugins {
    abbreviation?: true,
    customContainer?: any[],
    definitionList?: true,
    emoji?: true,
    footnote?: true,
    githubToc?: any,
    insert?: true,
    latex?: true,
    mark?: true,
    mermaid?: true,
    sourceMap?: true,
    subscript?: true,
    superscript?: true,
    taskList?: true,
}

export function markdownItCustom(options: ICustomPlugins, md?: MarkdownIt) {
    if (!md) {
        md = new MarkdownIt()
    }
    const mdOptions: MarkdownIt.Options = {}
    for (const key in options) {
        if (key === 'customContainer' && options.customContainer) {
            options.customContainer.forEach(el => {
                if (md) {
                    md.use(MarkdownItPlugins.customContainer, el)
                }
            })
        } else if (key === 'githubToc' && options.githubToc) {
            md.use(MarkdownItPlugins.githubToc, options.githubToc)
        } else {
            if (key in MarkdownItPlugins) {
                md.use(MarkdownItPlugins[key])
            }
        }
    }
    md.set(mdOptions)
    return md
}
