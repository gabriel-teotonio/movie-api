import styled from "styled-components";


export const Container = styled.div`
    padding: 1rem;
    .movie{
        display: flex;
        gap: 2rem;
    }   
    .movie img{
        width: 300px;
        border-radius: 1rem;
    }
    .movie .details h2{
        font-size: 3rem;
        margin: 2rem 0;
    }
    .details p{
        margin: 1rem 0;
    }

    .details .release-date{
        color: gray;
        font-size: small;
    }

    .btn-back{
        border-radius: .4rem;
        border: none;
        cursor: pointer;
        padding: .5rem 2rem;
        font-weight: 600;
        text-transform: uppercase;
        color: white;
        background-color: #2e2ebc;
        transition: all .3s;
        margin: 1rem 0;
    }
    .btn-back:hover{
        background-color: #2e2ebce1;
    }
`