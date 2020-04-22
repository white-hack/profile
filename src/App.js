import React, { useState } from 'react';
import './App.css';
import {urls} from './UrlList';

function App() {
  const [main, setMain] = useState("meat")
  const [sub, setSub] = useState("")
  const [select] = useState([])
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  const changeSelect = (e) => {
    setName(e.target.value)
    setUrl(urls[e.target.value])
  }

  const changeMain = (e) => {
    setMain(e.target.value)
    setSub("")
  }

  const autoSelect = () => {
    const size = Object.keys(urls).length
    const random = Math.floor(Math.random() * size)
    const key = Object.keys(urls)[random]
    setName(key)
    setUrl(urls[key])
  }

  return (
    <div style={{marginTop: '2rem', marginLeft: '2rem'}}>
      <h4 style={{marginBottom: '0.5rem'}}>サービス内容</h4>
      <div>
        システム開発のサービスの初期段階からコーディング、テストまでの開発や相談を請け負います。<br/>
      </div>
      <h4 style={{marginBottom: '0.5rem'}}>経歴</h4>
      <div>
        KDDI株式会社　2013年 4月 〜 2016年 11月
      </div>
      <div style={{marginTop: '0.25rem'}}>
        株式会社SONY 　2016年 12月 〜 2019年 7月
      </div>
      <h4 style={{marginBottom: '0.5rem'}}>制作範囲</h4>
      <div>
        Web、サーバーサイド、モバイルの開発。
      </div>
      <h4 style={{marginBottom: '0.5rem'}}>料金案内</h4>
      <div>
        応相談
      </div>
      <h4 style={{marginBottom: '0.5rem'}}>お問い合わせ先</h4>
      <div>
        White-hack
      </div>
      <div>
        <a href="mailto:whitehackfree@gmail.com">whitehackfree@gmail.com</a>
      </div>
    </div>
  );
}

export default App;
