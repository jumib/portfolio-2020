import React from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './AboutMe'

const Main = () => (
    <div>
    <h1>메인</h1>
    <p>포트폴리오 메인화면이 보여지는 공간입니다.</p>
    <div>
    <img src={require("../assets/flistock.png")} />    
    </div>
    </div>
)

export default Main