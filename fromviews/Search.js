import html from "html-literal";

export default () => html`
  <section id="search">
    This is the ${st.view}!
    ${st.pictures.reduce(
      (html, curr) => `${html} <img src=${curr.url} alt=${curr.title}>`,
      ``
    )}
  </section>
`;
