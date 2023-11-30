import { Button } from '@/components/ui/button'
import React from 'react'
import { useUserStore } from '@/store/user'
// import { useQuery } from 'react-query'
// import { getCityTotalNumber } from '@/service/api/api'

const Home = () => {
  // const { isLoading, error, data, isFetching } = useQuery('getCity', () => getCityTotalNumber({}))
  // console.log(isLoading, error, data, isFetching)
  const { userName, num, changeName, changeNum } = useUserStore()
  return (
    <div>
      <h1>Home</h1>
      <div onClick={changeName}>
        userName:
        <div>{userName}</div>
      </div>
      <div onClick={changeNum}>
        num:
        <div>{num}</div>
      </div>
      <Button>Click</Button>
    </div>
  )
}

export default Home
