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
      <div style={{display: 'flex'}}>
        <div>
          <div>
            <select defaultValue={main} onChange={changeMain}>
              <option value="meat">肉</option>
              <option value="fish">魚</option>
              <option value="egg">卵</option>
            </select>
          </div>
          <div style={{marginTop: '0.5rem'}}>
            {main === 'meat' && (
              <select defaultValue={sub} onChange={(e) => setSub(e.target.value)}>
                <option value=""></option>
                <option value="chicken">鳥肉</option>
                <option value="beaf">牛肉</option>
                <option value="pork">豚肉</option>
              </select>
            )}
            {main === 'fish' && (
              <select defaultValue={sub} onChange={(e) => setSub(e.target.value)}>
                <option value=""></option>
                <option value="saba">サバ</option>
                <option value="shake">シャケ</option>
              </select>
            )}
          </div>
        </div>
        <div style={{marginLeft: '1rem'}}>
          <div>
            <select style={{marginLeft: "0.5rem"}}>
              <option>味噌汁</option>
              <option>魚</option>
              <option>卵</option>
            </select>
          </div>
        </div>
        <div style={{marginLeft: '1rem'}}>
          <div>
            <select style={{marginLeft: "0.5rem"}}>
              <option>サラダ</option>
              <option>魚</option>
              <option>卵</option>
            </select>
          </div>
        </div>
        <div>
          <button style={{marginLeft: "0.5rem"}}　onClick={autoSelect}>自動選択</button>
        </div>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{marginTop: "1rem"}}>
          {main === 'meat' && (
            <select id="select" value={select} size="10" onChange={changeSelect} multiple>
              <option value="牛丼">牛丼</option>
              <option value="鳥の唐揚げ">鳥の唐揚げ</option>
            </select>
          )}
          {main === 'fish' && (
            <select size="10" multiple>
              <option>牛丼</option>
              <option>鳥の唐揚げ</option>
            </select>
          )}
          {main === 'egg' && (
            <select size="10" multiple>
              <option>牛丼</option>
              <option>鳥の唐揚げ</option>
            </select>
          )}
          <div style={{marginTop: '1rem'}}>
            {name}
            <div>
              {!!url && <a href={url} target="_blank" rel="noopener noreferrer">レシピ</a>}
            </div>
          </div>
        </div>
        <div style={{marginTop: "1rem", marginLeft: '1rem'}}>
          {main === 'meat' && (
            <select id="select" value={select} size="10" onChange={changeSelect} multiple>
              <option value="牛丼">大根</option>
              <option value="鳥の唐揚げ">玉ねぎ</option>
            </select>
          )}
          {main === 'fish' && (
            <select size="10" multiple>
              <option>牛丼</option>
              <option>鳥の唐揚げ</option>
            </select>
          )}
          {main === 'egg' && (
            <select size="10" multiple>
              <option>牛丼</option>
              <option>鳥の唐揚げ</option>
            </select>
          )}
        </div>
        <div style={{marginTop: "1rem", marginLeft: '1rem'}}>
          {main === 'meat' && (
            <select id="select" value={select} size="10" onChange={changeSelect} multiple>
              <option value="牛丼">大根</option>
              <option value="鳥の唐揚げ">玉ねぎ</option>
            </select>
          )}
          {main === 'fish' && (
            <select size="10" multiple>
              <option>牛丼</option>
              <option>鳥の唐揚げ</option>
            </select>
          )}
          {main === 'egg' && (
            <select size="10" multiple>
              <option>牛丼</option>
              <option>鳥の唐揚げ</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
