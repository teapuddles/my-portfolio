import styled from "styled-components";


export const ProjectSlice = styled.div`
    padding: 10px; 
    margin: 25px;
    background-color: #B1B5BB;;
    border-radius: 50%;
    width: 200px;
    height: 200px;
`

export const ProjectSliceWrapper = styled.div`
    box-shadow: 5px 10px 5px #302F31;
    background-color: rgb(189, 200, 212);
    border-radius: 50%;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    border: 1px solid #302F31;
    @media(max-width: 420px){
        margin-right: 40px;
    }
    `

export const ProjectSliceContainer = styled.div`
    height: 100%;
    display: grid; 
    grid-template-columns: repeat(2,minmax(200px, 1fr));
    position: relative;
    z-index: 10;
    justify-items: center;
    @media(max-width: 420px){
        display: flex;
        flex-direction: column;
    }
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
