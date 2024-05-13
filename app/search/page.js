"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Display from './display';

export default function Search() {
    const [university, setUniversity] = useState('');
    const [searchType, setType] = useState('');

    const [course, setCourse] = useState('');
    const [prof, setProf] = useState('');

    return (
        <div className='outerContainer'>
            <div className='formContainer'>
                <form>
                    <label className='twoemHeading'>Choose your university</label>
                    <input
                        value={university}
                        required
                        onChange={e => setUniversity(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <label>Search by: </label>
                    <div className='searchcont'>
                            <div className='searchlabel'>
                                <label> Course </label>
                                <input
                                    type="radio"
                                    name="search"
                                    value="Course"
                                    onChange={e => setType(e.target.value)}
                                />
                            </div>
                            <div className='searchlabel'>
                            <label> Professor </label>
                                <input
                                    type="radio"
                                    name="search"
                                    value="Professor"
                                    onChange={e => setType(e.target.value)}
                                />
                            </div>
                    </div>
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
                            <Display course={course} uni={university} />
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
                        <div>
                            <Display prof={prof} uni={university} />
                        </div>
                        </>
                    : <></>}
                </form>
            </div>
        </div>
    )
}