import styled from 'styled-components'

export const NoTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.5rem;
  margin-top: 24px;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 5px;
  width: 46rem;

  img{
    width: 56px;
    height: 56px;
    margin: 64px auto 16px ;
  }

  h1 {
    font-weight: bold;
    color: ${(props) => props.theme['gray-300']};
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1rem;
  }

`