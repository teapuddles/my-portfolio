import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import MainComponent from '../components/MainComponent'


// index is my root/entry point

const Index = () => {
  

  return (
    <Layout pageTitle='Welcome.'>
          <MainComponent />
        <div className="medium-box">
          <MediumComponent />
        </div>
    </Layout>
  )}


export default Index



// possible gql query for images. This includes both src and relative path.

// query {
//   images: allFile {
//     edges {
//       node {
//         relativePath
//         name
//         childImageSharp {
//           fluid(maxWidth: 600) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// }