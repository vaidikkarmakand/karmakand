import { detail } from './components/Data'
import { url } from "./components/Data"

export default function Contact() {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const URL = `${origin}/${url == "karmakand" ? `${url}/thankyou` : "thankyou"}`;
  return (<div className='bg-white'>
    <div className="section">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>सम्पर्क करेंं</h1>
      <div className='contact-flex container mt-2'>
        <div className='tat'>
          <h2>Feel free to contact with us</h2>
          <p className='mt-1 mb-2'>Get in touch with us by filling this contact us form or via other medium</p>
          <div style={{ wordBreak: "break-all", display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ flex: "0 0 10%", margin: "20px" }} width="25" height="25" fill="currentColor" className="bi bi-envelope-check-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
            {detail.email}
          </div>
          <div style={{ wordBreak: "break-all", display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ flex: "0 0 10%", margin: "20px" }} width="25" height="25" fill="currentColor" className="bi bi-envelope-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            {detail.phone}
          </div>
          <div style={{ wordBreak: "break-all", display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ flex: "0 0 10%", margin: "20px" }} width="25" height="25" fill="currentColor" className="bi bi-envelope-check-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            {detail.address}
          </div>
        </div>
        <form action="https://formsubmit.co/e9e3f6627b123307b99f56717ff336bf " method="POST" className="tat lg-p-15">
          <input type="hidden" name="_next" value={URL} />
          <div className="md-flex gap-10">
            <div className="mb-1 w-full">
              <label htmlFor="name" className="form-label">Name</label>
              <input spellCheck="false" required="required" placeholder="Enter your name" className="form-input" type="text" id="name" name="name" size={60} maxLength={128} />
            </div>
          </div>
          <div className="md-flex gap-10">
            <div className="mb-1 w-full">
              <label htmlFor="email" className="form-label">Email</label>
              <input spellCheck="false" required="required" placeholder="Enter your email" className="form-input" type="email" id="email" name="email" size={60} maxLength={128} />
            </div>
          </div>
          <div>
            <div className="mb-1">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea spellCheck="false" required="required" placeholder="Enter your query" className="textarea form-input" type="text" id="message" name="message" maxLength={128} />
            </div>
          </div>
          <button type="submit" className="button-cool sm-w-full">Submit</button>
        </form>
      </div>
    </div>

  </div>)
}