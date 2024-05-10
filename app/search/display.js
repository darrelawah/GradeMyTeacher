"use client";
import React from "react";
import { supabase } from "@/backend/client";
import { useEffect, useState } from "react";

function getUniversity(uni) {
    const [universities, setUniversity] = useState([]);

    useEffect(() => {
        getUnis()
    }, [])

    async function getUnis(){
        const { data: university, error } = await supabase
            .from('university')
            .select('universityName')

        setUniversity(university)
    }

    universities.forEach(element => {
        if (element.universityName === uni) {
            uni = element.universityName;
        }
    });

    return uni;
}

export default function CDisplay(props) {
    const course = props.course;
    const uni = props.uni;

    const [courses, setCourse] = useState([]);

    const university = getUniversity(uni);
    
    return (
        <>
        <h2>{university}</h2>
        <br/>
        <h1>{course}</h1>
        <br/>
        {/* <p>{JSON.stringify(university, null, 2)}</p> */}
        <br></br>
        <div>
            {/* {universities.map(u => (
                <p>{u.universityName}</p>
            ))} */}
        </div>
        </>
    )
}