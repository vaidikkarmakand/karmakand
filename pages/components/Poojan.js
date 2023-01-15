import Script from 'next/script'
import styles from '../../styles/Home.module.css'
import Four04 from "../404"
import { AdhyayanData, PoojanData, url } from "./Data"

export default function Data() {
  return (<Four04 />)
}

export const Pooja = () => {
  const data = PoojanData
  if (data.length === 0) {
    return (<>Error</>)
  }
  else {
    return (<><h1 style={{ textAlign: "center", marginTop: "20px" }}>वैदिक कर्मकाण्ड पद्धति</h1>
      <div className={styles.grid}>
        {data.map((val) => {
          return <a href={`${url}/vaidik-karmakand-paddhati/${val.id}`} className={styles.card}>
            <div style={{ margin: "10px 0" }}>
              <img src={val.image ? `${url}/${val.image}` : `${url}/yajna.png`} style={{ width: "80%", height: "80%" }} />
            </div>
            <h2>{val.name}</h2>
          </a>
        })}
      </div></>)
  }
}

export const Adhyayan = () => {
  const data = AdhyayanData
  if (data.length === 0) {
    return (<>Error</>)
  }
  else {
    return (<div><h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>अध्ययन कार्यक्रम</h1>
      <Script>{`
      document.getElementById('bt-ad').onclick = (e) =>  openCity(e,'ad')
      document.getElementById('bt-sh').onclick = (e) => openCity(e,'sh')
      document.getElementById('sh').style.display='none'
    function openCity(evt, cityName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("tab-tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("tablink shadow-bye", "tablink");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className = "tablink shadow-bye";
    }`}</Script>
      <div className="flex flex-wrap mb-2 tab justify-center" style={{ padding: "0 1.5rem" }}>
        <button style={{ width: '50%', fontSize: "15px" }} className="tablink shadow-bye" id="bt-ad">आध्यात्मिक पाठ्यक्रम</button>
        <button style={{ width: '50%', fontSize: "15px" }} className="tablink" id="bt-sh">शैक्षणिक एवं प्रातिस्पार्धिक पाठ्यक्रम</button>
      </div>
      <div className='tab-tab' id="ad">
        <div className={styles.grid}>
          {data.map((val) => {
            return <a href={`${url}/adhyayan/${val.id}`} className={styles.card}>
              <div style={{ margin: "10px 0" }}>
                <img src={val.image ? `${url}/${val.image}` : `${url}/book.svg`} style={{ width: "80%", height: "80%" }} />
              </div>
              <h2>{val.name}</h2>
            </a>
          })}
        </div>
      </div>
      <div className='tab-tab' id="sh">
        <div className={styles.grid}>
          {/* {data.map((val) => { */}
          {/* return  */}
          <a href={`https://vidyavantam.com`} target="_blank" className={styles.card}>
            <div style={{ margin: "10px 0" }}>
              <img src={`${url}/book.svg`} style={{ width: "80%", height: "80%" }} />
            </div>
            <h3>Academic and Competitive Courses</h3>
            <h4>- By Vidyavantam</h4>
          </a>
          {/* })} */}
        </div>
      </div>
    </div>)
  }
}