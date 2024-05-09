"use client";
import React from 'react';
import { supabase } from '@/backend/client';
import { useEffect, useState } from 'react';
import styles from "../page.module.css";

export default function Search() {
    const [universities, setUniversity] = useState('');
    const [course, setCousre] = useState('');
    const [professors, setProf] = useState([]);
    //const [tag, setTag] = useState('');

    useEffect(() => {
        getUniversities();
    }, [])

    async function getUniversities() {
        try{
            const { data: university, error } = await supabase
                .from('university')
                .select('universityName')
                if (error) throw (error);
                // if (data != null) {
                    setUniversity(university);
                //}
        } catch (error) {
            alert(error.message);
        }
    }

    // useEffect(() => {
    //     getProf();
    // }, [])

    // async function getProf() {
    //     try{
    //         const { data: professors, error } = await supabase
    //         .from('professors')
    //         .select('*')
    //         if (error) throw (error);
    //         if (data != null) {
    //             setProf(data);
    //         }
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // }

    return (
        <div>

            <p>{universities}</p>
            <form>
                {/* <label>Choose your university </label>
                <select
                    value={universities}
                    required
                    onChange={e => setUniversity(e.target.value)}
                >
                    <option value="default">select an option</option>
                    {universities ? universities.map((university) => {
                        return (
                            <option key={university} value={university}>{university}</option>
                        );
                    }) : null}
                    
                </select> */}
                <br/>
                <br/>
                <label>Enter class name: </label>
                <input 
                    value={course}
                    onChange={e => setCousre(e.target.value)}
                />

            </form>
            <br/>
            <br/>
            <h2>{course}</h2>
            <br/>
            <br/>
            <div className='professors'>

            </div>
        </div>
        // <p>please something work</p>
    )
}