import React from "react"
import '../css/style.css'
import { Link } from 'gatsby'

const Header = ({children}) => (

    <div className='container items-center flex mb:2 lg:mb-8 mx-auto'>
        
        <div className='w-1/5'></div>

        <div className='w-3/5 flex flex-col items-center'>

            <Link to='/' className='my-1 my-4'>
                <svg className='stroke-current inline-block h-16 w-16' viewBox="0 0 218 194" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        <polygon id="Line" stroke="#3D4852" fill="#3D4852" points="58 193.5 67 193.5 141 1 132 1"></polygon>
                        <polygon id="Line" stroke="#3D4852" fill="#3D4852" transform="translate(175.500000, 97.250000) scale(1, -1) translate(-175.500000, -97.250000) " points="134 193.5 143 193.5 217 1 208 1"></polygon>
                        <rect id="Rectangle" stroke="#3D4852" fill="#3D4852" x="1" y="1" width="9" height="192.5"></rect>
                    </g>
                </svg>
            </Link>

            <nav className='text-center'>
                <Link to='/letters' className='top-nav-item'>LETTERS</Link>
                <Link to='/recipes' className='top-nav-item'>RECIPES</Link>
                <Link to='/python' className='top-nav-item mr-0'>PYTHON</Link>
            </nav>

                
        </div>


        <div className='w-1/5'></div>

    </div>

)


export default Header

