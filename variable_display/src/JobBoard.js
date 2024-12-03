import React from 'react'

const JobBoard = () => {
    const companyName = "TechCorp";
    const jobCount = 10;

    const getJobMessage = () => {
        return (
            jobCount == 0 ? 
            "No jobs to schedule today."
            : 
            jobCount <= 5 ? 
            `Only ${jobCount} jobs running today from bot.`
            :
            `${jobCount} jobs running today from bot, get to work!`
        )
    }

    return (
        <div>
            <h1>{companyName}</h1>
            <p>{getJobMessage()}</p>
            <p>Tomorrow's projection: {jobCount * 1.5} jobs.</p>
        </div>
    )
}

export default JobBoard
