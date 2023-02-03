import { toPng } from 'html-to-image';
import { useState } from 'react'
import { AlpacaGenerator } from './components/AlpacaGenerator'
import { alpacas } from './data/alpacas'
import download from "downloadjs";

function App() {
  const [alpacasState, setAlpacas] = useState(alpacas);

  // This function will take the directory (Part: e.g. Background, Eyes...) we want to customize
  const handleSelectDir = (dirname: string) => {
    const newAlpacas = alpacasState.map((dir) => {
      if (dir.directory === dirname) {
        return {
          ...dir,
          selected: true,
        };
      }
      return {
        ...dir,
        selected: false,
      };
    });
    setAlpacas(newAlpacas);
  }

  // This function will take which item (e.g. Blue, Green, Red...) we want to select for the directory
  const handleSelectItem = (filename: string) => {
    const newAlpacas = alpacasState.map((dir) => {
      if (dir.selected) {
        return {
          ...dir,
          items: dir.items.map((item) => {
            if (item.filename === filename) {
              return {
                ...item,
                selected: true,
              };
            }
            return {
              ...item,
              selected: false,
            };
          }),
        };
      }
      return dir;
    });
    setAlpacas(newAlpacas);
  }

  // This function will create a random alpaca out of the alpacas array
  const handleRandomAlpaca = () => {
    const newAlpacas = alpacasState.map((dir) => {
      const randomIndex = Math.floor(Math.random() * dir.items.length);
      return {
        ...dir,
        items: dir.items.map((item, index) => {
          if (index === randomIndex) {
            return {
              ...item,
              selected: true,
            };
          }
          return {
            ...item,
            selected: false,
          };
        }),
      };
    });
    setAlpacas(newAlpacas);
  }

  // This function will trigger the of the generated alpaca image to the user
  const handleDownload = () => {
    const node = document.getElementById('alpaca');
    if (!node) return;
    toPng(node)
      .then((dataUrl) => {
        download(dataUrl, 'alpaca.png');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto p-8 space-y-8">
        <h1 className="text-left text-6xl text-blue-900 uppercase font-semibold">Alpaca Generator</h1>
        <AlpacaGenerator alpacas={alpacasState} onSelectDir={handleSelectDir} onSelectItem={handleSelectItem} onRandomizeAlpaca={handleRandomAlpaca} onDownloadAlpaca={handleDownload}/>
      </div>
    </div>
  )
}

export default App
