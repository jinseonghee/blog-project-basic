/* eslint-disabled */ //Lint 를 끄는 기능
import './App.css';
import { useState } from 'react';

function App() {
  
  //let post = '강남 우동 맛집';
  //document.querySelector('h4').innerHTML = 'post'; //원래 js 문법 (queryselector를 통해 tag에 접근해서 글을 넣어줌)
  //React에서는 {}를 사용해서 넣고싶은 변수나 className, id 에 넣어줘서 사용하면 됨
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [thumbsUp, setThumbsUp] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  //let [button, setButton] = useState('남자코트 추천')

  return (
    <div className="App">
      <div className="black-nav">
      <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...title];
        //copy[0] = '여자코트 추천'
        copy.sort();
        //title[0] = '여자코트 추천'; //이럴 경우 영구적으로 수정해 버림, 그렇기 때문에 변수를 사용해야 한다.
        setTitle(copy)
      }}>글수정</button>
      {/*   */}
      {/* <span onClick= {()=>{setButton(('여자코트 추천'))}}>{button}</span> */}
        {/* <h4>{title[0]}
        <span onClick = {() => {setThumbsUp(thumbsUp++)}}>👍🏻</span>{thumbsUp}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick = {() => {
          setModal(!modal)
        }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {  
        title.map(function(a, i) {
          return(
          <div className="list">
            <h4 onClick={() => {
              setModal(!modal)
            }}>{title[i]} <span onClick = {() => {
              let copy = [...thumbsUp];
              copy[i] = copy[i]+1;
              setThumbsUp(copy);
              }}>👍🏻</span>{thumbsUp[i]}</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
      { 
      //modal === true ? <Modal color={'yellow'} title = {title}/> : null
      modal === true ? <Modal title={setTitle(title)}/> : null
       }
    </div>
  );
}

//modal 창을 눌렀을 때, 나오는 title대로 modal title에 띄우기
//그럴러면 부모 컴포넌트에서 누른 상태에서 자식 컴포넌트로 똑같이 props를 전달 해 주어야 한다.
//modal component(html 코드가 더러울때 함수를 만들어서 컴포넌트처럼 가져다 쓴다.)
function Modal(props) {
  return (
      <div className="modal" >
        <h4>{props.title[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          props.setTitle([['남자코트 추천', '강남 우동맛집', '파이썬 독학']])
        }}>글수정</button>
      </div>
  )
}

export default App;
