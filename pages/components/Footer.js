import Four04 from "../404"
import { url, AdhyayanData, PoojanData } from './Data'

export default function Data() {
  return (<Four04 />)
}

export const Footer = () => {
  let poojan = PoojanData
  let tatt = poojan.slice(0, 3)
  let adhy = AdhyayanData
  let adh = adhy.slice(0, 3)
  return (<footer className="footer">
    <div className="container py-5">
      <div className="row">
        <div className="footer-col">
          <h4>वैदिक कर्मकाण्ड</h4>
          <ul>
            <li><a href={`${url}/`}>गृह</a></li>
            <li><a href={`${url}/about`}>विषय में</a></li>
            <li><a href={`${url}/contact`}>सम्पर्क करें</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>कर्मकाण्ड</h4>
          <ul>
            {tatt.map((val) => {
              return <li><a href={`${url}/poojan/${val.id}`}>{val.name}</a></li>
            })}
            {PoojanData.length > 4 ? <li><a href={`${url}/poojan`}>अधिक...</a></li> : ""}
          </ul>
        </div>
        <div className="footer-col">
          <h4>अध्ययन</h4>
          <ul>
            {adh.map((val) => {
              return <li><a href={`${url}/adhyayan/${val.id}`}>{val.name}</a></li>
            })}
            {AdhyayanData.length > 4 ? <li><a href={`${url}/adhyayan`}>अधिक...</a></li> : ""}
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links mb-1">
            <a href={`${url}/#`}><i className="fab fa-facebook-f" /></a>
            <a href={`${url}/#`}><i className="fab fa-twitter" /></a>
            <a href={`${url}/#`}><i className="fab fa-instagram" /></a>
            <a href={`${url}/#`}><i className="fab fa-linkedin-in" /></a>
          </div>
          <h4>Share On</h4>
          <div className="social-links">
            <a href={`${url}/#`}><i className="fab fa-facebook-f" /></a>
            <a href={`${url}/#`}><i className="fab fa-twitter" /></a>
            <a href={`${url}/#`}><i className="fab fa-instagram" /></a>
            <a href={`${url}/#`}><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}