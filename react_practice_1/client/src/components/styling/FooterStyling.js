import styled from 'styled-components';

/* IMPORTANT: BaseLayoutStyles handles Footer positioning on screen */

export const FooterStyling = styled.div`

border: 2px solid blue;


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
  color: white;
}

a:visited {
  color: white;
}

a:active {
  color: blue;
}
`
