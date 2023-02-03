import classNames from 'classnames';
import React, { useMemo } from 'react'
import { Alpacas } from '../types'

type AlpacaCustomizationProps = {
  alpacas: Alpacas[];
  onSelectDir: (dir: string) => void
  onSelectItem: (filename: string) => void;
}

export const AlpacaCustomization = ({ alpacas, onSelectDir, onSelectItem }: AlpacaCustomizationProps) => {
  const selecteDir = useMemo(() => {
    const selectedDir = alpacas.find((dir) => dir.selected);
    if (!selectedDir) return;
    return selectedDir;
  }, [alpacas]);

  return (
      <>
          <div className='space-y-8'>
              <h2 className="text-left text-xl text-black uppercase font-semibold">Accessorize your Alpaca</h2>
              <div className="flex flex-wrap gap-8">
                  {
                      alpacas.map((dir, index) => (
                          <button className={classNames(`border border-1 border-solid border-blue-800 text-blue-800 px-6 py-2 rounded-full hover:bg-blue-800 hover:text-white`, {
                              'bg-blue-800 text-white': dir.selected,
                          })} key={index} onClick={() => {onSelectDir(dir.directory)}}>{dir.directory}</button>
                      ))
                  }
              </div>
              <h2 className="text-left text-xl text-black uppercase font-semibold">Style</h2>
              <div className="flex flex-wrap gap-8">
                  {
                      selecteDir && selecteDir.items.map((item, index) => (
                          <button className={classNames(`border border-1 border-solid border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white`, {
                              'text-white bg-blue-600': item.selected,
                              'text-blue-600': !item.selected
                          })} key={index} onClick={() => onSelectItem(item.filename)}>{item.filename}</button>
                      ))
                  }
              </div>
          </div>
      </>
  )
}
