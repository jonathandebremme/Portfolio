import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";

export default function Contact() {
  return (
    <main className="min-h-screen p-24">
      <Heading title="Contact" paragraph="Let's get in touch!" />
      <ContactForm />
    </main>
  );
}
