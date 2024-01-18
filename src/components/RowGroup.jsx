import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContextProvider";
import { Config } from "../utils/config";
import EmptyRow from "./EmptyRow";
import LoaderRow from "./LoaderRow";
import Row from "./Row";

const RowGroup = () => {
  const { courses, setCourses } = useContext(DataContext);

  const [ready, setReady] = useState(false);

  const loaderRowCount = Array.from({ length: 5 }, (_, index) => index); // Array.from

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`${Config.api_url}`); // *** change this route when deployed
      const data = await response.json();
      setCourses(data);

      setReady(!ready);
    };

    fetchCourses();
  }, []);

  return (
    <>
      {!ready && loaderRowCount.map((_, index) => <LoaderRow key={index} />)}

      {ready &&
        (courses.length ? (
          courses.map((course) => <Row key={course.id} course={course} />)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;
