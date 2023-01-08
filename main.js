const st = document.createElement("style");
const styles = [
  "font { line-height: 200%; font-size: 14px; }",
  "body > table { margin: auto; }",
  "body > table > tbody > tr > td:nth-child(1), body > table > tbody > tr > td:nth-child(2) { display: none; }",
  "body > table > tbody > tr > td > table { width: 600px !important; }",
];
st.innerHTML = styles.join("\n");
document.head.appendChild(st);
