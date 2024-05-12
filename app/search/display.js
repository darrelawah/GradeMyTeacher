"use client";
import React from "react";
import Link from "next/link";
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

function getCourses(course) {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        getClasses()
    }, [])

    async function getClasses(){
        const { data: classes, error } = await supabase
            .from('classes')
            .select('classname, profid')

        setCourse(classes)
    }

    var arr = []
    courses.forEach(element => {
        if (element.classname === course) {
            course = element.classname;
            var pid = element.profid;
            arr.push({course, pid})
        }
    });

    return arr;
}

function getProfs() {
    const [profs, setProfs] = useState([]);

    useEffect(() => {
        getProfs()
    }, [])

    async function getProfs(){
        const { data: professors, error } = await supabase
            .from('professors')
            .select('pid, name, rating')

        setProfs(professors)
    }

    return profs;
}

function Professors(props) {
    const pid = props.pid;
    const pname = props.pname;
    const profarr = getProfs();

    var name
    var grade
    var profid

    profarr.forEach(element => {
        if (element.pid === pid || element.name === pname) {
            name = element.name;
            grade = element.rating;
            profid = element.pid;
        }
    });

    return (
        <div>
            <br></br>
            <p>
                <Link href={{
                    pathname: "/graded/professor",
                    query: {
                        uni: props.uni,
                        pid: profid,
                        pname: name,
                        grade: grade
                    }
                }}
                rel="noopener noreferrer" target="_blank"
                >Professor: {name}</Link>
            </p>
            <p>Grade: {grade}</p>
            <br></br>
        </div>
    )
}

export default function Display(props) {
    const university = getUniversity(props.uni);

    var courses
    if (props.prof == null) {
        courses = getCourses(props.course);
    }
    
    return ( 
        <>
        <h2><Link href="/graded/university" rel="noopener noreferrer" target="_blank">{university}</Link></h2>
        <br/>
        { props.prof == null ?
        <>
            <div>
                {courses.slice(0, 1).map(c => (
                    <h1><Link href="/graded/class" rel="noopener noreferrer" target="_blank">{c.course}</Link></h1>
                ))}   
            </div>
            <br/>
            <br></br>
            <div>
                {courses.map(c => (
                    <Professors pid={c.pid} uni={university}/>
                ))}
            </div>
        </>
        : <></>}

        { props.course == null ?
        <>
            <div>
            <Professors pname={props.prof} uni={university}/> 
            </div>
        </>
        : <></>}
        
        </>
    )
}