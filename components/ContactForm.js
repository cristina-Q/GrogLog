export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <h2>🤗 Hello</h2>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email: </label> <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message: </label>
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <style jsx>{`
        form {
          margin-top: 100px;
        }

        h2 {
          text-align: center;
        }

        label {
          font-size: 1rem;
        }

        input,
        textarea {
          background: #f0f0f0;
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid #d6d6d6;
          font-size: 1.3rem;
        }

        input:focus,
        textarea:focus {
          outline: none;
          background: #b7ffd7a9;
        }

        button {
          padding: 15px;
          background: black;
          color: white;
          border-radius: 10px;
          font-size: 1.2rem;
        }
      `}</style>
    </form>
  );
}
