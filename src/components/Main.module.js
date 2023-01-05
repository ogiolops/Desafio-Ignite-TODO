import styled from 'styled-components'

export const TasksContainer = styled.main`

`

export const MainTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Button = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -26px;

  textarea {
    background-color: ${(props) => props.theme['gray-400']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    padding: 16px;
    width: 39rem;
    min-width: 39rem;
    border-radius: 8px;
    margin-right: 8px;
    color: ${(props) => props.theme['gray-300']};
    max-height: 54px;
    resize: none;
  }

  textarea:focus {
    color: ${(props) => props.theme['white']};
    border: 1px solid ${(props) => props.theme['purple-dark']}
  }
`

export const ButtonCreateTask = styled.button`
  background-color: ${(props) => props.theme['blue-dark']};
  padding: 16px;
  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme['blue']};
  }
`

export const HeaderTask = styled.div`

  width: 46rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 56px;

  p:first-child{
    color: ${(props) => props.theme['blue']};
  }

  p:last-child {
    color: ${(props) => props.theme['purple']};

  }

  span{
    background: ${(props) => props.theme['gray-400']};
    padding: 5px;   
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    color: #FFFF;
  }

`