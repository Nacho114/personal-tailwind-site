import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"




export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>

            <p className='mb-10 text-4xl'>{post.frontmatter.title}</p>

            <div className='leading-normal'
                 dangerouslySetInnerHTML={{ __html: post.html }} />

        </Layout>)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`