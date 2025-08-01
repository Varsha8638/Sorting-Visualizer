import './App.css';
import { useState, useEffect } from 'react';

import Control from './control/control';
import Visualizer from './control/visualizer';
import { bubbleSort } from './algorithm/BubbleSort';
import { mergeSort } from './algorithm/MergeSort';
import { selectionSort } from './algorithm/SelectionSort';
import { insertionSort } from './algorithm/InsertionSort';
import { quickSort } from './algorithm/QuickSort';

function App() {
  const [array, setArray] = useState([]);
  const [userInuptArray, setUserInuptArray] = useState('');
  const [selectedSorting, setSelectedSorting] = useState('');
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    const userInput = userInuptArray.split(',');
    const filteredInput = userInput.filter(item => !isNaN(item) && Number.isInteger(parseFloat(item))).map(item => Number(item) <= 500 && Number(item))
    setArray([...filteredInput])
  }, [userInuptArray])

  const handleNewArrayGenrate = () => {
    const newArray = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 500) + 1
    );
    setArray(newArray);
    setUserInuptArray('');
  };

  const reSet = () => {
    if (userInuptArray.length > 0) {
      const customArray = userInuptArray
        .split(',')
        .map(num => parseInt(num))
        .filter(num => !isNaN(num));
      setArray(customArray);
    }
  };

  const handleSorting = (e) => {
    setSelectedSorting(e.target.value);
    if (isSorting || array.length === 0) return;
    setIsSorting(true);

    let animations = [];
    switch (e.target.value) {
      case 'bubbleSort':
        animations = bubbleSort(array.slice());
        animateBubbleSort(animations);
        break;
      case 'mergeSort':
        animations = mergeSort(array.slice());
        animateMergeSort(animations);
        break;
      case 'selectionSort':
        animations = selectionSort(array.slice());
        animateSelectionSort(animations);
        break;
      case 'insertionSort':
        animations = insertionSort(array.slice());
        animateInsertionSort(animations);
        break;
      case 'quickSort':
        animations = quickSort(array.slice());
        animateQuickSort(animations);
        break;
      default:
        setIsSorting(false);
    }
  };

  function animateBubbleSort(animation) {
    const barEle = document.getElementsByClassName('bar');
    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, bartwoInd, swap] = animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[bartwoInd];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? 'red' : 'yellow';
        barTwo.style.backgroundColor = swap ? 'red' : 'yellow';
        if (swap) {
          const heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = 'blue'
          barTwo.style.backgroundColor = 'blue'
        }, speed)
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          barEle[j].style.backgroundColor = 'green';
        }, j * speed);
      }
      setIsSorting(false);
    }, animation.length * speed)
  }

  const animateMergeSort = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const color = i % 3 === 0 ? "yellow" : "blue";
        setTimeout(() => {
          barOne.style.backgroundColor = color;
          barTwo.style.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };
  

  const animateSelectionSort = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";
        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerHTML;
          barOne.innerHTML = barTwo.innerHTML;
          barTwo.innerHTML = tempContent;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  const animateInsertionSort = (animations) => {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap] = animations[i];
    const barOne = bars[barOneIdx];
    const barTwo = bars[barTwoIdx];
    setTimeout(() => {
      barOne.style.backgroundColor = swap ? "red" : "yellow";
      barTwo.style.backgroundColor = swap ? "red" : "yellow";
      if (swap) {
        const tempHeight = barOne.style.height;
        barOne.style.height = barTwo.style.height;
        barTwo.style.height = tempHeight;

        const tempContent = barOne.innerHTML;
        barOne.innerHTML = barTwo.innerHTML;
        barTwo.innerHTML = tempContent;
      }
      setTimeout(() => {
        barOne.style.backgroundColor = "blue";
        barTwo.style.backgroundColor = "blue";
      }, speed);
    }, i * speed);
  }

  setTimeout(() => {
    for (let j = 0; j < bars.length; j++) {
      setTimeout(() => {
        bars[j].style.backgroundColor = "green";
      }, j * speed);
    }
    setIsSorting(false);
  }, animations.length * speed);
};



  const animateQuickSort = (animations) => {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, swap] = animations[i];
    const barOne = bars[barOneIdx];
    const barTwo = bars[barTwoIdx];
    setTimeout(() => {
      barOne.style.backgroundColor = swap ? "red" : "yellow";
      barTwo.style.backgroundColor = swap ? "red" : "yellow";
      if (swap) {
        const tempHeight = barOne.style.height;
        barOne.style.height = barTwo.style.height;
        barTwo.style.height = tempHeight;

        const tempContent = barOne.innerHTML;
        barOne.innerHTML = barTwo.innerHTML;
        barTwo.innerHTML = tempContent;
      }
      setTimeout(() => {
        barOne.style.backgroundColor = "blue";
        barTwo.style.backgroundColor = "blue";
      }, speed);
    }, i * speed);
  }

  setTimeout(() => {
    for (let j = 0; j < bars.length; j++) {
      setTimeout(() => {
        bars[j].style.backgroundColor = "green";
      }, j * speed);
    }
    setIsSorting(false);
  }, animations.length * speed);
};


  return (
    <div className="App">
      <h1>Sorting Visualiser</h1>
      <Control
        handleNewArrayGenrate={handleNewArrayGenrate}
        setSpeed={setSpeed}
        isSorting={isSorting}
        handleSorting={handleSorting}
        userInuptArray={userInuptArray}
        setUserInuptArray={setUserInuptArray}
        reSet={reSet}
        selectedSorting={selectedSorting}
      />
      <Visualizer array={array} />
    </div>
  );
}

export default App;
