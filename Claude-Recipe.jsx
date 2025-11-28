import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ markdown }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef OXZI Recommends:</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
}
