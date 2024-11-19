import logo from '../logo.png'


const styleCard = {
  backgroundColor: 'yellow'
}

 const Logo = () => {
  return (
    <>
      <img src={logo} className='logo-image' alt=''></img>
      <div className='app-name' style={styleCard}> Namaste Food Order</div>

      <div style={{ backgroundColor: 'red' }}> This is inLine Style</div>
    </>

  )
}

const NavItems = () => {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </>
  )
}

const Header =()=>{
  return(

  <>
  <Logo/>
  <NavItems/>
  
  </>

  )
}

export default Header
