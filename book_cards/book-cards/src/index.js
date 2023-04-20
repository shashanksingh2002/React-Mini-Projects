import React from 'react';
import ReactDOM from 'react-dom/client'
import bookData from './data'
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const Bookname = (props)=>{
  const {src,title,author,id} = props;
  return (
    <div className="innerContainer">
      <p className='id'>{id}</p>
      <img src={src} alt="" />
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </div>
  )
}
const Book = ()=>{
  return (
    <>
      <h1>Photo Library</h1>
      <div className="mainContainer flex">
        {
          bookData.map((data,id)=>{
            return <Bookname {...data} key = {id}/>
          })
        }
      </div>
    </>
  )
}
root.render(<Book/>);
