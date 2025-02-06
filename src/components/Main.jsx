import Accordion from "./Accordion";
import Languages from "../data/Languages";
export default function Main() {
  return (
    <main>
      <section className="accordions">
        {Languages.map((language) => {
          return (
            <Accordion
              key={language.id}
              title={language.title}
              description={language.description}
            />
          );
        })}
      </section>
    </main>
  );
}
