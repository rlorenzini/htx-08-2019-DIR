import styled from 'styled-components';

export const BaseLayoutStyles = styled.div`
background-color: black;
color: white;
/* margin: 0;
padding: 0; */
min-width: 100vw;
min-height: 100vh;
overflow: auto;

.wrapper {
  box-sizing: border-box;
  position: relative;
  padding-bottom: 2.3em;
  min-height: 100%;
  overflow: auto;
}


.footer {
  position: absolute;
  box-sizing: border-box; /* prevents footer extending outside parent */
  bottom: 0;
  width: 100%;
  color: #fff;
  background-color: #000;
  border: 2px solid blue;
}

`
