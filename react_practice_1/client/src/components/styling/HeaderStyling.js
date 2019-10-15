import styled from 'styled-components';

export const HeaderStyling = styled.div`
background-color: black;
color: white;
border: 2px solid blue;

.plainTextStyling {
  color: navy;
  background-color: lightgray;
}

.anchorLinkText {
  color: white;
  font-weight: 700;
}
/* =================ANCHOR LINK STYLING */
/* a link hover visited active */
A {
    padding: 5px;
}

A:link {
  text-decoration: none;
}

A:hover {
  text-decoration: underline;
  color: white;
}

A:visited {
  color: white;
}

A:active {
  color: blue;
  font-weight: 900;
}
`
