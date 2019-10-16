import styled from 'styled-components';

/* IMPORTANT: BaseLayoutStyles handles Footer positioning on screen */

export const FooterStyling = styled.div`

/* border: 2px solid blue; */
height: 2.3rem;
display: flex;
justify-content: flex-end;
align-items: center;


.anchorLinkText {
  color: white;
  font-weight: 700;
}
/* =================ANCHOR LINK STYLING */
/* a link hover visited active */
a {
    padding: 5px;
    font-size: 1.05rem;
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
