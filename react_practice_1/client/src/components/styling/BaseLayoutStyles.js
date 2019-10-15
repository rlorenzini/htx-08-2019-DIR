import styled from 'styled-components';

export const BaseLayoutStyles = styled.div`
background-color: black;
color: white;
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;

.wrapper {
  box-sizing: border-box;
  position: relative;
  padding-bottom: 1em; /* Height of footer */
  min-height: 100%;
}


.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  background-color: #000;
}

`
