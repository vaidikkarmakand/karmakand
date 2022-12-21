import { url } from "./components/Data"

const About = () => {
  return (<div className="section">
    <h1 style={{ textAlign: "center" }}>हमारे विषय में</h1>
    <div className='container mt-2'>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className='anil-image' style={{ margin: "10px 0", borderRadius: "10%", border: "5px #ddd solid", background: "white" }}>
            <img src={`/${url}/anil-01.jpeg`} style={{ borderRadius: "10%", width: "100%", height: "100%", padding: "20px" }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "fit-content" }}>
            <h2 style={{ textAlign: "center" }}>पं. डॉ. अनिल कुमार झा</h2>
            <h4 style={{ textAlign: "end" }}>Ph. D. Ved</h4>
            <h4 style={{ textAlign: "end" }}>- वाराणसी</h4>
          </div>
        </div>
        {/* <h2 style={{ textAlign: "end" }}>- वाराणसी</h2> */}
      </div>
    </div>
  </div>)
}

export default About