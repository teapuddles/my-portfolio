import styled from "styled-components";


export const ProjectSlice = styled.div`
    padding: 10px; 
    margin: 20px;
    border: solid 1px red;
`

export const ProjectSliceWrapper = styled.div`
    border: dotted 5px orange;
    margin: 20px;
    height: 200px;
`

export const ProjectSliceContainer = styled.div`
    margin-top: 30px;
    justify-content: space-evenly;
    height: 60vh;
    display: grid; 
    grid-template-columns: repeat(2,minmax(200px, 1fr));

`

export const ProjectButton = styled.button`

`



// export const ProjectSlice = styled.div`
//     padding: 10px; 
//     margin: 20px;
//     border: solid 1px red;
//     max-width: 50vw;
// `

// export const ProjectSliceWrapper = styled.div`
//     border: dotted 5px orange;
//     flex: 1;
//     margin: 20px;
//     height: 200px;
//     width: 50vw;
// `

// export const ProjectSliceContainer = styled.div`
//     justify-content: space-evenly;
//     flex-direction: column;
//     flex-wrap: wrap;
//     height: 60vh;
//     display: flex; 
//     border: 2px solid black;
//     background-color: purple; 
    
// `
