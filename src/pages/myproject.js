import React from 'react'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Link } from 'gatsby'


const MyProject = (props) => {

    console.log(props)

    return(
        <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
          <div>
            {modal ? (
              <Link to={closeTo}>
                Close
              </Link>
            ) : (
              <header>
                <h1>
                  {console.log(props)}
                </h1>
              </header>
            )}
            </div>
        )}
      </ModalRoutingContext.Consumer>
    )
}

export default MyProject
