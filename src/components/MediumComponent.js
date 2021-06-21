import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import MediumList from './MediumList'

const MediumComponent = () => {

    return(
        <StaticQuery
        query={graphql`
          query MediumComponent {
            #   query our medium component with the endpoint of allMediumPost
            #   we also have the opprotunity to limit what goes in/the order/sorted by what
            allMediumPost(limit: 4, sort: { fields: createdAt, order: DESC }) {
                # below is the query we're making, you can filter and follow along with gql to find
                # what each of these will yeild. 
              edges {
                node {
                  id
                  uniqueSlug
                  title
                  createdAt(formatString: "MMM YYYY")
                  virtuals {
                    previewImage {
                      imageId
                    }
                  }
                  author {
                    username
                  }
                  content {
                    subtitle
                    metaDescription
                 }
                }
              }
            }
          }
        `}
        // we call the allMediumPost query down here and render our results into our List Component
        render={({ allMediumPost }) => (
            <div className='medium-posts'>
            {allMediumPost.edges.map(post => (
                <MediumList key={post.node.uniqueSlug} post={post} />
            ))}
            </div>
            )}
        />
    )
}

export default MediumComponent