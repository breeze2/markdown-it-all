declare module 'markdown-it-github-toc' {
    function index(md: any, options: any): void

    export interface IMarkdownItGithubTocOptions {
        toc?: boolean
        tocClassName?: string
        tocFirstLevel?: number
        tocLastLevel?: number
        anchorLink?: boolean
        anchorLinkSymbol?: string
        anchorLinkSpace?: boolean
        anchorLinkSymbolClassName?: string | null
        anchorLinkBefore?: boolean
        anchorClassName?: string
        resetIds?: boolean
        indentation?: string
    }
    export default index
}
