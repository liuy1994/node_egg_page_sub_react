import styles from "./index.module.less"
import { useEffect, useState } from "react"
import { marked } from "marked"



const Markdown = () => {
  const [content, setContent] = useState<string>("")
  const [html, setHtml] = useState<any>(null)

  const onKeyDown = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault()
      setContent(content + "\t")
    }
  }

  const onChange = (e: any) => {
    setContent(e?.target?.value || "")
  }

  useEffect(() => {
    setHtml(marked.parse(content))
  }, [content])

  return <section className={styles.container}>
    <section className={styles.left}>
      <textarea
        className={styles.textarea}
        name="textarea"
        id="textarea"
        cols={30}
        rows={10}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </section>
    <section className={styles.right}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  </section>
}

export default Markdown
