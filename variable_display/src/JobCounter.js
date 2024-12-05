import React, { useState } from 'react'

const JobCounter = () => {

    // trying to update the compnent state using a normal variable doesn't work because 
    // there is nothing to tell react to re-render the ui. doing it the proper way with 
    // the useState hook or setState method updates the variable AND re-renders the ui.

    let [jobCount, setJobCount] = useState({prod: 0, UAT: 0});
    let [environment, setEnvironment] = useState("prod")

    const incrementJobCount = () => {
        setJobCount({ ...jobCount, [environment]: jobCount[environment] + 1 })
        console.log("Added a job, new job count: ", jobCount[environment])
    };

    const decrementJobCount = () => {
        if (jobCount[environment] > 0) {
            setJobCount( {...jobCount, [environment]: jobCount[environment] - 1 })
            console.log("Removed a job, new job count: ", jobCount[environment])
        } else {
            console.log("No jobs to remove")
        }
        
    };

    const resetJobCount = () => {
        setJobCount({ ...jobCount, [environment] : 0})
        console.log("Cleared all jobs")
    };

    const changeEnvironment = () => {
        if (environment == "prod") {
            setEnvironment("UAT")
        } else {
            setEnvironment("prod")
        }
    }

    return (
        <div style={{marginBottom:'20px'}}>
        <h1>Job Counter</h1>
        <p>Active environment: {environment == 'prod' ? "Production" : "UAT"}</p>
        <p>Current production job count: {jobCount.prod}</p>
        <p>Current UAT job count: {jobCount.UAT}</p>
        <button onClick={changeEnvironment}>Toggle Environment</button><br />
        <button onClick={incrementJobCount}>Add Job</button>
        <button onClick={decrementJobCount}>Remove Job</button>
        <button onClick={resetJobCount}>Reset Job Count</button>
        <p>
            {jobCount == 0 ? "No jobs available" : jobCount <= 5 ? "Few jobs available" : "Many jobs available"}
        </p>
        </div>
    )
}

export default JobCounter
