// import React from 'react'

// import { graphql, useStaticQuery } from 'gatsby'
// import { getImage } from "gatsby-plugin-image"

// import { BgImage } from 'gbimage-bridge'
// // import BackgroundImage from 'gatsby-background-image'

// const GbiBridged = () => {
//     const { backgroundImage123 } = useStaticQuery(
//         graphql`
//             query {
//                 backgroundImage123: file(relativePath: {eq: "10669031_10205552929207443_5665961964891816778_o.jpg"}) {
//                     childImageSharp {
//                     gatsbyImageData(
//                         width: 2000, 
//                         quality: 50, 
//                         webpOptions: {quality: 70}
//                       )
//                     }
//                   }
//              }
//           `
//        )
// const pluginImage = getImage(backgroundImage123)

//   return (
//     <BgImage image={pluginImage} className='masthead'/> 
//   )
// }


// export default GbiBridged
