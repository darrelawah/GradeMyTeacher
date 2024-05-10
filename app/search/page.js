"use client";
import React from 'react';
//import { supabase } from '@/backend/client';
import { useState } from 'react';
import CDisplay from './display';
import PDisplay from './display';


export default function Search() {
    const [university, setUniversity] = useState('');
    const [searchType, setType] = useState('');

    const [course, setCourse] = useState('');
    const [prof, setProf] = useState('');

    return (
        <div>
            <br/>
            <form>
                <label>Choose your university </label>
                <input
                    value={university}
                    required
                    onChange={e => setUniversity(e.target.value)}
                />
                <br/>
                <br/>
                <label>Search by: </label>
                <input 
                    type="radio"
                    name="search"
                    value="Course"
                    onChange={e => setType(e.target.value)}
                />
                <label> Course </label>
                <input 
                    type="radio"
                    name="search"
                    value="Professor"
                    onChange={e => setType(e.target.value)}
                />
                <label> Professor </label>
                <br/>
                <br/>
                {searchType === "Course" ?
                    <>
                    <label>Enter class name: </label>
                    <input 
                        value={course}
                        onChange={e => setCourse(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <div>
                        <CDisplay course={course} uni={university} />
                    </div>
                    </>
                : <></>}

                {searchType === "Professor" ?
                    <>
                    <label>Enter professor name: </label>
                    <input 
                        value={prof}
                        onChange={e => setProf(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <div>
                        <PDisplay prof={prof} uni={university} />
                    </div>
                    </>
                : <></>}
            </form>

             {/* <br/>
             <br/>
             <h2>{course}</h2> <br/><br/>
             <h3>{university}</h3>
             <br/>
             <br/>
             <div>
                <Display course={course} uni={university} />
             </div> */}
        </div>
    )
}