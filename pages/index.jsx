import { useState } from 'react'
import { Button } from 'antd'

const Home = () => {
  const [name, setName] = useState('')
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary">Clickme</Button>
    </div>
  )
}

export default Home
