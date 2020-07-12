import React, { useState, useEffect } from 'react';

import HomeNavBar from '../../components/Home/HomeNavBar/HomeNavBar';
import SearchField from '../../components/SearchField/SearchField';
import HomeFooter from '../../components/Home/HomeFooter/HomeFooter';

import { HomeMain, LogoContainer, LogoImg } from './styles'

function Home() {

  const [inputValue, setInputValue] = useState('')

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    getData()

  }, [])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    setIsLogin(true)
  }

  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const resp = await fetch(url)
    const data = await resp.json()

    const imageId = data.id
    const imageTitle = data.title

    console.table(data)
  }



  return (
    <>
      {
        isLogin
          ?
          <HomeNavBar
            color='primary'
          />
          :
          <HomeNavBar
            color='secondary'
          />
      }

      <HomeMain>
        <LogoContainer>
          <LogoImg src="/logo.svg" alt="logo" className='main-logo' />
        </LogoContainer>

        {
          isLogin
            ?
            <SearchField
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              inputValue={inputValue}
            />
            :
            <SearchField
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              inputValue={inputValue}
            />
        }


      </HomeMain>
      <HomeFooter />
    </>
  );
}

export default Home
