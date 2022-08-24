
import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2rem;
  h1{
    font-size: 4rem;
    text-align: center;
    margin: 2rem 0;
  }
`

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style: none;
    gap: 3rem;
    text-align: center;
`

export const Movie = styled.li`
    img{
        width: 200px;
        border-radius: 1rem;
        transition: .4s all;
        margin: 1rem 0;
    }
    img:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    p{
        font-weight: 700;
    }
`
