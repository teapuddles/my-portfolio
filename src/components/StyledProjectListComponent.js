import styled from "styled-components";


export const ProjectSlice = styled.div`
    padding: 10px; 
    margin: 20px;
    height: 10rem;
    background-color: #DEDDD9;
    border-radius: 5px;
`

export const ProjectSliceWrapper = styled.div`
    box-shadow: 5px 10px 5px #302F31;
    background-color: #B1B5BB;
    border-radius: 5px;
    margin: 20px;
    height: 200px;
`

export const ProjectSliceContainer = styled.div`
    margin-top: 30px;
    justify-content: space-evenly;
    height: 60vh;
    display: grid; 
    grid-template-columns: repeat(2,minmax(200px, 1fr));
    position: relative;
    z-index: 1;

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
