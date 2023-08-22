const parent = React.createElement(
  "div",
  { id: "root" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag."),
    React.createElement("h2", {}, "I am an h2 tag."),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
