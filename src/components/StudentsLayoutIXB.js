"use client";
import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { ixbStudents } from "../../data/ixb";
import { TbMathFunction } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { ImQuill } from "react-icons/im";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { FaInfo } from "react-icons/fa6";
import "./style.css";

function StudentsLayoutIXB() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState(ixbStudents);
  const [loading, setLoading] = useState(true);

  let filters = [
    "Math",
    "Science",
    "IT",
    "Arts",
    "Sports",
    "Music",
    "History",
    "Sastra",
  ];

  const handleFilterButtonClick = (selectedSubject) => {
    if (selectedFilters.includes(selectedSubject)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedSubject)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedSubject]);
    }
  };

  useEffect(() => {
    setLoading(true);
    filterStudents();
  }, [selectedFilters]);

  const filterStudents = () => {
    if (selectedFilters.length > 0) {
      setFilteredStudents(
        ixbStudents.filter((student) =>
          selectedFilters.includes(student.subject)
        )
      );
    } else {
      setFilteredStudents([...ixbStudents]);
    }
    setLoading(false);
  };

  const getSubjectIcon = (subject) => {
    switch (subject) {
      case "Math":
        return <TbMathFunction className="text-md" />;
      case "Science":
        return <MdScience className="text-md" />;
      case "IT":
        return <IoCodeSlashOutline className="text-md" />;
      case "Arts":
        return <FaPaintBrush className="text-md" />;
      case "Sports":
        return <FaRunning className="text-md" />;
      case "Music":
        return <IoIosMusicalNotes className="text-md" />;
      case "History":
        return <FaBookOpen className="text-md" />;
      case "Sastra":
        return <ImQuill className="text-md" />;
      case "Homeroom":
        return <GiTeacher className="text-md" />;
      default:
        return (
          <div title="Not Available">
            <FaInfo />
          </div>
        );
    }
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ backgroundColor: "#BFBCB3" }}
    >
      <div className="buttons-container mb-4">
        <div className="buttons-wrapper flex overflow-x-auto">
          {filters.map((subject, idx) => (
            <button
              onClick={() => handleFilterButtonClick(subject)}
              className={`button ${selectedFilters.includes(subject) ? "active" : ""}`}
              key={`filters-${idx}`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 9 }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className="pics">
                  <Skeleton variant="rectangular" width={370} height={118} />
                </div>
              ))
            : filteredStudents.map((student, idx) => (
                <div
                  key={idx}
                  className="py-6 px-6 rounded-md sm:p-12 max-h-72 h-full bg-white flex items-center"
                >
                  <div className="flex space-x-6 flex-row">
                    <img
                      src={student.img}
                      width={80}
                      height={80}
                      style={{
                        borderRadius: "999999px",
                        boxShadow: "1px 2px 2px .5px gray",
                      }}
                      alt={student.name}
                      className="self-center rounded-full flex-shrink-0 border md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
                    />
                    <div
                      className="absolute rounded-full justify-end flex items-end"
                      style={{ height: "80px", width: "60px" }}
                    >
                      <div
                        className="bg-white items-center justify-center flex shadow-xl"
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "999999px",
                          boxShadow: "1px 1px 2px .5px gray",
                        }}
                      >
                        {getSubjectIcon(student.subject)}
                      </div>
                    </div>
                    <div className="flex flex-col pl-2">
                      <h4 className="text-sm sm:text-lg font-semibold">
                        {student.name}
                      </h4>
                      <blockquote className="dark:text-gray-600 text-xs">
                        <cite>
                          <q>{student.quotes}</q>
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default StudentsLayoutIXB;
