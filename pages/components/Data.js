import Four04 from "../404"

const PoojanData = [
  {
    name: "महामृत्युञ्जय",
    id: "mahamrityunjay"
  },
  {
    name: "नवचण्डी यज्ञ",
    id: "navachandi-yajna"
  },
  {
    name: "शतचण्डी यज्ञ",
    id: "shatachandi-yajna"
  },
  {
    name: "विवाह संस्कार",
    id: "vivah",
  },
  {
    name: "उपनयन संस्कार",
    id: "upanayan"
  },
  {
    name: "षोडश संस्कार के मुख्य",
    id: "shodash-sanskar"
  },
  {
    name: "गृहारम्भ (नीव पूजा)",
    id: "griharambh"
  },
  {
    name: "बंगला मुखी (जप)",
    id: "bangla-pooja"
  },
  {
    name: "बटुक भैरव (मन्त्र जप)",
    id: "batuk-bhairav"
  },
  {
    name: "कुण्डली निर्माण",
    id: "kundali-nirman"
  },
  {
    name: "पितृ कर्म",
    id: "pitri-karma"
  },
  {
    name: "रुद्राभिषेक",
    id: "rudrabhishek"
  },
  {
    name: "आदि पूजन पद्धति...",
    id: "aadi-poojan-paddhati"
  },
]
const AdhyayanData = [
  {
    name: "अष्टाध्यायी",
    id: "ashtadhyayi"
  },
  {
    name: "ज्योतिष शास्त्र पाठ्यक्रम",
    id: "jyotish-shastra"
  },
  {
    name: "ऑनलाइन भगवद्गीता",
    id: "online-geeta"
  },
]

const detail = {
  email: "anilkumarjha031@gmail.com",
  phone: "+91 6393842594, +91 9450542945",
  address: "अनिल कुमार झा, D-12/44, नीची ब्रह्मपुरी, विश्वनाथ गली, बांसफाटक, वाराणसी - 221001"
}

const url = "karmakand"

export { PoojanData, AdhyayanData, url, detail }

export default function Data() {
  return (<Four04 />)
}