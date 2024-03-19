import React, { useContext } from 'react'
import './main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini - Clone</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult ?
            <>
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Draft an email to a recruiter to accept a job offer</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me write a refund email for a product that’s damaged</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Draft an email with a packing list for an upcoming trip</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me sound like an expert for an upcoming trip</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </> : <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />

                    {loading?<div className="loader">
                <hr />
                <hr />
                <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                This is a clone model of Gemini built using generative text API and may provide inaccurate info</p>
            </div>
        </div>
    </div>
  )
}

export default Main