import { Button, Space } from "antd"
import { marked } from "marked"
import { useEffect, useState } from "react"
import styles from "./index.module.less"

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

  const [tabs, setTabs] = useState<any[]>(["left", "right"])

  const hiddenTab = (tab: "left" | "right") => {
    if (tabs.includes(tab)) {
      setTabs(tabs.filter((t) => t !== tab))
    } else {
      setTabs([...tabs, tab])
    }
  }

  return (
    <section style={{ height: "100%" }}>
      <header className={styles.header}>
        <Space>
          <Button
            type={"primary"}
            onClick={() => hiddenTab("left")}
            disabled={tabs.length === 1 && tabs[0] === "left"}
          >
            {tabs.includes("left") ? "隐藏" : "显示"}左边
          </Button>
          <Button
            type={"primary"}
            onClick={() => hiddenTab("right")}
            disabled={tabs.length === 1 && tabs[0] === "right"}
          >
            {tabs.includes("right") ? "隐藏" : "显示"}右边
          </Button>
        </Space>
      </header>
      <Space size={24} className={styles.container}>
        {tabs.includes("left") && (
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
        )}
        {tabs.includes("right") && (
          <section className={styles.right}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        )}
      </Space>
    </section>
  )
}

export default Markdown
