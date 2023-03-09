import * as React from "react";
import { useContext, useState } from "react";

import { Marquee } from "../general/marquee/Marquee.jsx";
import ArrowDown from "../svg/ArrowDown.svg";
import { ContentContext } from "../../context/ContentContext.js";

export const FAQS = () => {
  const { data } = useContext(ContentContext);
  const faqs = data?.faq;
  const title = data?.faqs?.title; //todo missing from cms
  const items = faqs || [];

  const [itemsActive, setItemsActive] = useState([]);

  const toggleActive = (index) => {
    const arr = itemsActive.concat();
    if (arr.includes(index)) arr.splice(arr.indexOf(index), 1);
    else arr.push(index);

    setItemsActive(arr);
  };

  return (
    <section id={"faqs"}>
      <Marquee>
        {title} <ArrowDown />
      </Marquee>
      <div className={"faqs__items"}>
        {items
          .sort((item1, item2) =>
            item1.priority < item2.priority
              ? -1
              : item1.priority > item2.priority
              ? 1
              : 0
          )
          .map((item, index) => (
            <div
              key={index}
              className={itemsActive.includes(index) ? "visible" : ""}
              onClick={() => toggleActive(index)}
            >
              <div className={"item__question"}>
                <span>{("00" + (index + 1)).substr(-2, 2) + "."}</span>
                {item.question}
                <ArrowDown />
              </div>
              <div className={"item__answer"}>{item.answer}</div>
            </div>
          ))}
      </div>
    </section>
  );
};
