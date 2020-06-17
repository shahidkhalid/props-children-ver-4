import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function People() {
  const friends = [
    { name: "john", job: "Developer" },
    { name: "Doe", job: "Designer" },
    { name: "Susy", job: "Artist", age: "33" },
  ];
  return (
    <section>
      <Person newobj={friends[0]}>
        <div>
          <h1>Childrens</h1>
          <p>Some info about me..</p>
        </div>
      </Person>
      <Person newobj={friends[1]} />
      <Person newobj={friends[2]} />
    </section>
  );
}
const Person = (props) => {
  const { name, job, age } = props.newobj;
  const { children } = props;
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      {children}
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
