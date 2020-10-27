import React, { createContext, useState } from 'react'

export const SettingsContext = createContext();

export const SettingsProvider = props => {
    const [score, setScore] = useState(0);
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy");
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    return <SettingsContext.Provider
        value={{
            score,
            setScore,
            category,
            setCategory,
            difficulty,
            setDifficulty,
            showCorrectAnswer,
            setShowCorrectAnswer
        }}>
        {props.children}
    </SettingsContext.Provider>;
}