import React from 'react';
import { useParams } from 'react-router-dom';

function BookPage(){
  let { id } = useParams();
  return(
    <div>
      Book ID: { id }
    </div>
  )
}

export default BookPage;
