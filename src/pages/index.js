import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import 'font-awesome/css/font-awesome.min.css';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`About`, `home-page`]}
    />

    <div>

        <div className='leading-loose lg:px-16 py-5 mb-8 lg:mb-10 text-center'>

            My name is Ignacio S. Aleman, I am currently studying Data Science at <a href='https://people.epfl.ch/ignacio.aleman#biography'>EPFL</a>.
            <br/>
            I like to occasionally <Link to='/letters/'>write</Link> about some things related to life. 
            <br/>
            I also like to cook, so I added some <Link to='/recipes/'>recipes</Link> that I like. 

        </div>

        <div className='container lg:mx-auto flex justify-center'>

            <a href="https://github.com/Nacho114" className='top-nav-item'><i class='fa fa-github fa-lg mr-8 lg:mr-10 mr-4'></i></a>
            <a href="https://twitter.com/sukarnoaleman" className='top-nav-item'><i class='fa fa-twitter fa-lg mr-8 lg:mr-10 mr-4'></i></a>
            <a href="https://www.linkedin.com/in/ignacio-s-aleman-7054663a/" className='top-nav-item mr-0'><i class='fa fa-linkedin fa-lg'></i></a>

        </div>

    </div>

  </Layout>
)

export default IndexPage
