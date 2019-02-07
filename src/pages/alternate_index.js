import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`About`, `home-page`]}
    />



            <div className='leading-normal'>

              

                <h2>
                    Welcome to my humble abode
                </h2>


                <p>
                    > Hello! what is this?
                </p>

                <p className='font-bold'>
                    THIS! This..., this is a website. <span className='own_span font-normal text-sm font-'>(Misterious theme plays in the background)</span>
                </p>

                <p>
                    > Oh...
                </p>

                <p className='font-bold'>
                    ...
                </p>

                <p>
                    > And who are you?
                </p>

                <p className='font-bold'>
                    I am Ignacio Aleman, you can follow me on twitter.
                </p>

                <p>
                    > ok... I will leave now.
                </p>

                <p className='font-bold'>
                    Wait! 
                </p>

                <p>
                    > ...
                </p>

                <p className='font-bold'>
                    I am also on LinkedIn.
                </p>

                <p>
                    *User has left the site*
                </p>





            </div>



  </Layout>
)

export default IndexPage
