import React from 'react'
import { Alpacas } from '../types'
import { AlpacaCustomization } from './AlpacaCustomization'
import { AlpacaImage } from './AlpacaImage'
import { Controls } from './Controls'


type AlapacaGeneratorProps = {
    alpacas: Alpacas[];
    onSelectDir: (dir: string) => void;
    onSelectItem: (item: string) => void;
    onRandomizeAlpaca: () => void;
    onDownloadAlpaca: () => void;
}

export const AlpacaGenerator = ({alpacas, onSelectDir, onSelectItem, onRandomizeAlpaca, onDownloadAlpaca}: AlapacaGeneratorProps) => {
    return (
        <div className="flex justify-center gap-24">
            <div className="w-1/2 space-y-8">
                <AlpacaImage alpacas={alpacas}/>
                <Controls onDownloadAlpaca={onDownloadAlpaca} onRandomizeAlpaca={onRandomizeAlpaca}/>
            </div>
            <div className="w-1/2">
                <AlpacaCustomization alpacas={alpacas} onSelectDir={onSelectDir} onSelectItem={onSelectItem}/>
            </div>
        </div>
    )
}
