import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Card from  "../components/card"
import SEO from "../components/seo"

export default ({ data }) => {
    return (
        <Layout>
            <SEO
            title="Recipes"
            keywords={[`food`, `recipes`]}
            />

            <div className='leading-normal'>

                <div className='mb-10'>

                    <p className='mb-2 text-4xl'>
                        A collection of recipes 
                    </p>

                    <p>
                        A selection of reciepes made by family, friends and the internet
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
      filter: {fields: {collection: {eq: "recipes"}} },
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