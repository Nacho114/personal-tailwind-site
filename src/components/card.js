import React from 'react'
import {Link} from 'gatsby'

import '../css/style.css'


const Card = ({ id, slug, title, date, excerpt}) => (
    <div key={id} className='mb-10'>
        <div className='text-lg font-semibold hover:underline mb-2'>
            <Link to={slug} className='no-underline'>{title}</Link>
        </div>
        {/* <span>
                &nbsp;— {date}
        </span> */}
        <p className='text-grey-darkest mb-2'>
            {excerpt}
        </p>
        <div>
            <Link to={slug} className='no-underline hover:underline text-grey-darker hover:text-grey-darkest text-sm'>Read this article →
            </Link>
        </div>

    </div>

)

export default Card
