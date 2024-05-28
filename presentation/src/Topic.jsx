import React, { useEffect, useState } from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import Markdown from "react-markdown";

export function Topic({ topic }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = [];
      for (const contentItem of topic.content) {
        const response = await fetch(contentItem.url);
        const text = await response.text();
        result.push({ ...contentItem, text });
      }
      setContent(result);
    }
    getData();
  }, [topic.content]);

  return (
    <div style={{ paddingLeft: "15px" }}>
      <h3>{topic.title}</h3>
      {content.map((contentItem, ndx) => (
        <div key={ndx}>
          {(function () {
            switch (contentItem.type) {
              case "md":
                return <Markdown>{contentItem.text}</Markdown>;
              case "cs":
                return (
                  <code>
                    <CodeBlock
                      text={contentItem.text}
                      language="csharp"
                      theme={vs2015}
                    />
                  </code>
                );
              default:
                return (
                  <p style={{ color: "red" }}>
                    Error: Unknown contentItem type.
                  </p>
                );
            }
          })()}
        </div>
      ))}
    </div>
  );
}
