import React, { useState, useEffect } from 'react';

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import HomeFooter from './components/HomeFooter/HomeFooter';

import { HomeMain, LogoContainer, LogoImg } from './styles'

function Home() {

  const [inputValue, setInputValue] = useState('')

  const [isLogin, setIsLogin] = useState(false)




  useEffect(() => {

    const getData = async () => {
      const url = 'https://jsonplaceholder.typicode.com/users/'
      const resp = await fetch(url)
      const data = await resp.json()

      data.map(user => {
        return (
          console.log(user.name, user.email, user.website)
        )
      })
    }

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
