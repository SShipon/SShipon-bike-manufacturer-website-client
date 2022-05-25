import React, {useState, useEffect} from 'react';

export default function DateFooter() {

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
     &copy; Rogerio Orioli - {date}
    </>
  );
}