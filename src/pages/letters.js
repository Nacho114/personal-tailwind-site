import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from  "../components/card"
import SEO from "../components/seo"

export default ({ data }) => {
    return (
        <Layout>
            <SEO
            title="Letters"
            keywords={[`philosophy`, `stoicism`, `reflections`, `articles`]}
            />

            <div className='leading-normal'>

                <div className='mb-10'>

                    <p className='mb-2 text-4xl'>
                        Letters
                    </p>

                    <p>
                        A collection of letters that I've written on various aspects of life.
                    </p>

                </div>

               

                {data.allMarkdownRemark.edges.map(({ node }) => (

                    <Card id={node.id} 
                          title={node.frontmatter.title} 
                          slug={node.fields.slug} 
                          date={node.frontmatter.date} 
                          excerpt={node.excerpt}/>

                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
{
  allMarkdownRemark (
      filter: {fields: {collection: {eq: "letters"}} },
    	sort: {fields: [frontmatter___date], order: DESC}
    ){
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
        excerpt
        id 
        wordCount {
          words
        }
      }
    }
  }
}
`