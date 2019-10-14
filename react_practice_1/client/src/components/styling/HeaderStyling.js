import styled from 'styled-components';

export const HeaderStyling = styled.div`
background-color: blue;
color: red;

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
a {
    padding: 5px;
}

a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: lightgray;
}

a:visited {
  color: lightgray;
}

a:active {
  color: seagreen;
}
`
