# markdown-it-all

> An integration of markdown-it and plugins.

## Install

```cmd
$ yarn add markdown-it-all
```

## Usage

### Simple

```js
import MarkdownIt, { markdownItAll, markdownItCustom } from '../index'

const content = '# markdown-it rulezz!\n'
let md = new MarkdownIt()
let html = md.render(content)
console.log(html)
// '<h1>markdown-it rulezz!</h1>\n'

md = markdownItAll()
html = md.render(content)
console.log(html)
// '<h1 id="markdown-it-rulezz" data-source-line="1"><a class="anchor" href="#markdown-it-rulezz"><span class="octicon octicon-link"></span></a>markdown-it rulezz!</h1>\n'

md = markdownItCustom({sourceMap: true})
html = md.render(content)
console.log(html)
// '<h1 data-source-line="1">markdown-it rulezz!</h1>\n'

```

### Interface

```ts
function markdownItCustom (options: ICustomPlugins): MarkdownIt
interface ICustomPlugins {
    abbreviation?: true,
    customContainer?: string[],
    definitionList?: true,
    emoji?: true,
    footnote?: true,
    githubToc?: GithubTocOptions,
    insert?: true,
    latex?: true,
    mark?: true,
    mermaid?: true,
    sourceMap?: true,
    subscript?: true,
    superscript?: true,
    taskList?: true,
}

```


## Plugins

### Support List

- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)
- [custom container](https://github.com/markdown-it/markdown-it-container)
- [definition list](https://github.com/markdown-it/markdown-it-deflist)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [footnote](https://github.com/markdown-it/markdown-it-footnote)
- [github toc](https://github.com/tylingsoft/markdown-it-github-toc)
- [insert](https://github.com/markdown-it/markdown-it-ins)
- [latex](https://github.com/tylingsoft/markdown-it-latex)
- [mark](https://github.com/markdown-it/markdown-it-mark)
- [mermaid](https://github.com/tylingsoft/markdown-it-mermaid)
- [source map](https://github.com/tylingsoft/markdown-it-source-map)
- [subscript](https://github.com/markdown-it/markdown-it-sub)
- [superscript](https://github.com/markdown-it/markdown-it-sup)
- [task list](https://github.com/tylingsoft/markdown-it-task-list)

## License

MIT