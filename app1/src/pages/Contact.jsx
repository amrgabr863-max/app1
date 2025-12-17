export default function Contact() {
  return (
    <section className="contact">
      <h2 className="title">CONTACT ME</h2>
      <div className="star">⭐</div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}