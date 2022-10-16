import { Link } from 'react-router-dom';


export default function Home() {
    return (<div className="home">
        <div className="navbar">
            <h1 className="brandName">Tenanto</h1>
            <div className="navAuthButtons">
                <Link to='/signup' className="navAuthBtn">Register</Link>
                <Link to='/login' className="navAuthBtn">Login</Link>
            </div>
        </div>
      <div className='homeContent'>
      <div>
      <h2 className='homeText'>Hey there, welcome!</h2>
      <p>Please login or register to continue.</p>
      </div>
      </div>
    </div>)
}