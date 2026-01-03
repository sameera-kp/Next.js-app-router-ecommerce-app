export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="mt-3">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Message" rows={4}></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
