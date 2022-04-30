import { useState } from 'react'
import emailjs from 'emailjs-com'
import Faq from 'react-faq-component';


const data = {
  rows: [
    {
      title: "On which blockain are the Fancy Numbers mined?",
      content: "Ethereum"
    },
    {
      title: "TBD",
      content: "TBD"
    },
    {
      title: "TBD",
      content: "TBD"
    },
    {
      title: "",
      content: "Jungle Party und animal shelter rescue"
    }]
}

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <h2>FAQ</h2>
          <div className='faq_div' >
            <Faq data={data}
                styles={{
                  bgColor: "transparent",
                  titleTextColor: "#48482a",
                  rowTitleColor: "#FFFFFF",
                  rowTitleTextSize: 'large',
                  rowContentColor: "#FFFFFF",
                  rowContentTextSize: '16px',
                  rowContentPaddingTop: '10px',
                  rowContentPaddingBottom: '10px',
                  rowContentPaddingLeft: '50px',
                  rowContentPaddingRight: '150px',
                  arrowColor: "#FFFFFF",
                  }} 
            />
          </div>
          
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                    <img id='opensea' src="img/opensea-icon_svg.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
