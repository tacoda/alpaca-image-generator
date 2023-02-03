import { Alpacas } from '../types'

export const AlpacaImage = ({alpacas}: {alpacas: Alpacas[]}) => {
  return (
      <div className="w-full relative aspect-square shadow border-2 border-dotted" id="alpaca">
          {alpacas.map((dir, index) => {
              const item = dir.items.find((item) => item.selected);
              if (!item) return null;
              return (
                  <img
                      src={`/alpaca/${dir.directory}/${item.filename}.png`}
                      alt="alpacas image"
                      className={`alpaca-${dir.directory} w-full h-full absolute top-0 left-0`}
                      key={index}
                  />
              );
          })}
      </div>
  )
}
