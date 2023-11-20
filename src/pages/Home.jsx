import React, { useState } from 'react'

function Home() {

const styles = {
  color: 'skyblue',
  padding: '20px',
};

const [letter, setLetter] = useState([
  {
id: 1,
name: '닉네임',
contant: '내용'
  }
]);

  return (
    <div>
      <header>헤더입니다</header>
      <main style={styles}>뉴진스에게 편지를 남겨보세요
        <div>
        <button>민지</button>
        <button>하니</button>
        <button>다니엘</button>
        <button>해린</button>
        <button>혜인</button>
        </div>
        <div>
      <input type='text'/>
      <input type='text'/>
      <button onClick={alert("전송되었습니다🐰")}>보내기</button>
        </div>
      </main>
      <footer>푸터입니다</footer>
    </div>
  )
}

export default Home