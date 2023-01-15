import { useRouter } from "next/router"
import Four04 from "../404"
import { AdhyayanData, PoojanData, url } from '../components/Data'
import styles from '../../styles/Home.module.css'
import { detail } from './Data'

export function AdhyayanID() {
  const router = useRouter()
  let ids = router.pathname.split("/")
  let id = ids[2]
  const data = AdhyayanData
  const da = []
  data.map((val) => {
    if (val.id === id) da.push(val)
  })
  if (da.length === 0) {
    return (<Four04 />)
  }
  else {
    return (<><div className="bg-white">
      <div className="container">
        <div className="flex md:reverse">
          <div className="lg:col-70" style={{ margin: '20px 0 20px 0', padding: '0 5px 0 5px' }}>
            <h1>{da[0].name} - अध्ययन</h1>
            <div style={{ whiteSpace: 'pre-wrap', color: '#111', marginTop: "10px" }}>
              {da[0].detail ? <div style={{ marginBottom: "10px", color: "#4c4c4c" }}>{da[0].detail}</div> : ""}
              <h3>अध्ययन के लिए संपर्क करें:</h3>
              <div>
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
            </div>
          </div>
          <div className="lg:col-30" style={{ margin: '20px 0 20px 0' }}>
            <div className={styles.card} style={{ maxWidth: "100%", height: "max-content" }}>
              <div style={{ margin: "10px 0" }}>
                <img src={da[0].image ? `${url}/${da[0].image}` : `${url}/book.svg`} style={{ width: "95%", height: "95%" }} />
              </div>
              <h2>{da[0].name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
  }
}

export function PoojanID() {
  const router = useRouter()
  let ids = router.pathname.split("/")
  let id = ids[2]
  const data = PoojanData
  const da = []
  data.map((val) => {
    if (val.id === id) da.push(val)
  })
  if (da.length === 0) {
    return (<Four04 />)
  }
  else {
    return (<><div className="bg-white">
      <div className="container">
        <div className="flex md:reverse">
          <div className="lg:col-70" style={{ margin: '20px 0 20px 0', padding: '0 5px 0 5px' }}>
            <h1>{da[0].name} - वैदिक कर्मकाण्ड पद्धति</h1>
            <div style={{ whiteSpace: 'pre-wrap', color: '#111', marginTop: "10px" }}>
              {da[0].detail ? <div style={{ marginBottom: "10px", color: "#4c4c4c" }}>{da[0].detail}</div> : ""}
              <h3>पूजा के लिए संपर्क करें:</h3>
              <div>
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
            </div>
          </div>
          <div className="lg:col-30" style={{ margin: '20px 0 20px 0' }}>
            <div className={styles.card} style={{ maxWidth: "100%", height: "max-content" }}>
              <div style={{ margin: "10px 0" }}>
                <img src={da[0].image ? `${url}/${da[0].image}` : `${url}/yajna.png`} style={{ width: "95%", height: "95%" }} />
              </div>
              <h2>{da[0].name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
  }
}

export default function Data() {
  return (<Four04 />)
}