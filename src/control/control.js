import React from 'react'

function Control({ handleNewArrayGenrate, setSpeed, isSorting, handleSorting, userInuptArray, setUserInuptArray, reSet, selectedSorting }) {
    return (
        <div className='controls-container'>
            <div className="input-wrapper">
                <input type="text" value={userInuptArray} onChange={(e) => setUserInuptArray(e.target.value)} className="neumorphic-input" placeholder="Enter your Array between 1-500" />
                <div className="info-icon-wrapper">
                    <i className="info-icon">i</i>
                    <span className="tooltip-text">Provide your array by comma separated integer</span>
                </div>
            </div>
            <button className='neu-button' onClick={handleNewArrayGenrate}>Generate Random Array</button>
            <button className="neu-button" onClick={reSet} >
                Reset
            </button>
            <select className='neumorphism-dropdown' value={selectedSorting} onChange={handleSorting}>
                <option value=''>Select Sorting Algo</option>
                <option value='bubbleSort'>Bubble Sort</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value='insertionSort'>Insertion Sort</option>
                <option value='quickSort'>Quick Sort</option>

            </select>
            <label>
                <h2>
                    Speed
                </h2>
                <input
                    type="range"
                    min="10"
                    max="200"
                    className="speedControl"
                    onChange={(e) => setSpeed(200 - e.target.value)}
                    disabled={isSorting}
                />
            </label>
        </div>
    )
}

export default Control