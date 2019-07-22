import MarkdownIt from 'markdown-it'
import { IMarkdownItGithubTocOptions } from 'markdown-it-github-toc'
import MarkdownItPlugins from './MarkdownItPlugins'

interface ICustomPlugins {
    abbreviation?: true,
    customContainer?: any[],
    definitionList?: true,
    emoji?: true,
    footnote?: true,
    githubToc?: IMarkdownItGithubTocOptions | boolean,
    insert?: true,
    latex?: true,
    mark?: true,
    mermaid?: true,
    sourceMap?: true,
    subscript?: true,
    superscript?: true,
    taskList?: true,
}

export function markdownItCustom(plugins: ICustomPlugins, md?: MarkdownIt, mdOptions?: MarkdownIt.Options) {
    if (!md) {
        md = new MarkdownIt()
        md.set(mdOptions || {})
    }
    for (const key in plugins) {
        if (key === 'customContainer' && plugins.customContainer) {
            plugins.customContainer.forEach(el => {
                if (md) {
                    md.use(MarkdownItPlugins.customContainer, el)
                }
            })
        } else if (key === 'githubToc' && plugins.githubToc) {
            md.use(MarkdownItPlugins.githubToc, plugins.githubToc)
        } else {
            if (key in MarkdownItPlugins && !!(plugins as any)[key]) {
                md.use(MarkdownItPlugins[key])
            }
        }
    }
    return md
}
