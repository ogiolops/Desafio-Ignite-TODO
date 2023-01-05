import styled from 'styled-components'

export const WithTasks = styled.div`


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['gray-500']};
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px; 
  width: 46rem;

  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme['gray-500']};
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px; 
  width: 46rem;

  

  input{
    cursor: pointer;
    appearance: none;
    width: 17px;
    height: 17px;
    border: 2px solid ${(props) => props.theme['blue']};
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p{
    color: ${props => props.isComplete ? (props) => props.theme['gray-300'] : (props) => props.theme['gray-100']  };
    flex: 1;
    padding-left: 15px;
    text-decoration:  ${props => props.isComplete ? 'line-through' :  'none'};
  }

  input::before{
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    background-image:   url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguOTgwMDcgMTYuNDI2MkMxMy4wNzI2IDE2LjQyNjIgMTYuMzkwMyAxMy4xMDg1IDE2LjM5MDMgOS4wMTU5NkMxNi4zOTAzIDQuOTIzMzkgMTMuMDcyNiAxLjYwNTcxIDguOTgwMDcgMS42MDU3MUM0Ljg4NzUgMS42MDU3MSAxLjU2OTgyIDQuOTIzMzkgMS41Njk4MiA5LjAxNTk2QzEuNTY5ODIgMTMuMTA4NSA0Ljg4NzUgMTYuNDI2MiA4Ljk4MDA3IDE2LjQyNjJaIiBmaWxsPSIjNUU2MENFIi8+CjxwYXRoIGQ9Ik04Ljk2NDI4IDEuODU5NTlDMTAuMzc2NSAxLjg1OTU5IDExLjc1NzEgMi4yNzgzNyAxMi45MzEzIDMuMDYyOThDMTQuMTA1NiAzLjg0NzU4IDE1LjAyMDggNC45NjI3OCAxNS41NjEyIDYuMjY3NTNDMTYuMTAxNyA3LjU3MjI5IDE2LjI0MzEgOS4wMDggMTUuOTY3NiAxMC4zOTMxQzE1LjY5MjEgMTEuNzc4MiAxNS4wMTIgMTMuMDUwNiAxNC4wMTM0IDE0LjA0OTJDMTMuMDE0OCAxNS4wNDc4IDExLjc0MjQgMTUuNzI3OSAxMC4zNTczIDE2LjAwMzRDOC45NzIyIDE2LjI3ODkgNy41MzY0OCAxNi4xMzc1IDYuMjMxNzMgMTUuNTk3QzQuOTI2OTcgMTUuMDU2NiAzLjgxMTc4IDE0LjE0MTQgMy4wMjcxNyAxMi45NjcxQzIuMjQyNTcgMTEuNzkyOSAxLjgyMzc4IDEwLjQxMjMgMS44MjM3OCA5LjAwMDA4QzEuODMxMSA3LjEwODU1IDIuNTg1NzQgNS4yOTY1OSAzLjkyMzI2IDMuOTU5MDdDNS4yNjA3OSAyLjYyMTU1IDcuMDcyNzUgMS44NjY5IDguOTY0MjggMS44NTk1OVpNOC45NjQyOCAwLjI3MjgwOUM3LjIzOTcyIDAuMjc5ODY0IDUuNTU1OTIgMC43OTc3IDQuMTI1NDMgMS43NjA5NEMyLjY5NDk0IDIuNzI0MTkgMS41ODE5MSA0LjA4OTY1IDAuOTI2ODMxIDUuNjg0OTZDMC4yNzE3NTUgNy4yODAyNyAwLjEwNDAxMiA5LjAzMzkgMC40NDQ3NzcgMTAuNzI0NUMwLjc4NTU0MSAxMi40MTUgMS42MTk1NCAxMy45NjY3IDIuODQxNDggMTUuMTgzN0M0LjA2MzQyIDE2LjQwMDcgNS42MTg1MiAxNy4yMjgzIDcuMzEwNDYgMTcuNTYyMkM5LjAwMjQxIDE3Ljg5NiAxMC43NTUzIDE3LjcyMTEgMTIuMzQ4IDE3LjA1OTZDMTMuOTQwNiAxNi4zOTggMTUuMzAxNSAxNS4yNzk0IDE2LjI1ODkgMTMuODQ1QzE3LjIxNjMgMTIuNDEwNiAxNy43MjcyIDEwLjcyNDYgMTcuNzI3MyA5LjAwMDA4QzE3LjcyNzMgNy44NTA5OSAxNy41MDAzIDYuNzEzMjEgMTcuMDU5NSA1LjY1MjAzQzE2LjYxODcgNC41OTA4NiAxNS45NzI3IDMuNjI3MTggMTUuMTU4NSAyLjgxNjMxQzE0LjM0NDMgMi4wMDU0NCAxMy4zNzggMS4zNjMzNCAxMi4zMTUgMC45MjY4NTdDMTEuMjUyMSAwLjQ5MDM3NiAxMC4xMTM0IDAuMjY4MTA4IDguOTY0MjggMC4yNzI4MDlaIiBmaWxsPSIjNUU2MENFIi8+CjxwYXRoIGQ9Ik0xMi40MzA2IDYuMzQyMTVMOC4wOTg2NSAxMC42NzQxTDUuNjE2MTggOC4xOTE2Mkw0Ljc4MDI3IDkuMDI3NTNMOC4wOTg2NSAxMi4zNDU5TDEzLjI2NjUgNy4xNzgwNkwxMi40MzA2IDYuMzQyMTVaIiBmaWxsPSIjRjJGMkYyIi8+Cjwvc3ZnPgo=);
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    opacity: ${props => props.isComplete ? 1 :  0};
    border: none;
  } 


  button{
    background: transparent;
    border: none;
    cursor: pointer;
  } 

  .trash path{
    fill: ${(props) => props.theme['gray-300']};
  }

  .trash:hover path {
    fill: ${(props) => props.theme['danger']};
}

`