import React from 'react'

type ControlsProps = {
  onRandomizeAlpaca: () => void;
  onDownloadAlpaca: () => void;
}

export const Controls = ({onRandomizeAlpaca, onDownloadAlpaca}: ControlsProps) => {
  return (
      <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                  onClick={onRandomizeAlpaca}
          >
              🔀 Randomize
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                  onClick={onDownloadAlpaca}
          >
              🔽 Download
          </button>
      </div>
  )
}
