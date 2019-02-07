import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Card from  "../components/card"
import SEO from "../components/seo"

export default ({ data }) => {
    return (
        <Layout>
            <SEO
            title="Python"
            keywords={[`python`, `tutorial`, `programming`, `coding`]}
            />

            <div className='leading-normal'>

                <div className='mb-10'>

                    <p className='mb-2 text-4xl'>
                        An Introductory Course to Python
                    </p>

                    <p>
                        A course on python for everybody 
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
      filter: {fields: {collection: {eq: "python_course"}} },
    	sort: {fields: [frontmatter___date], order: ASC}
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