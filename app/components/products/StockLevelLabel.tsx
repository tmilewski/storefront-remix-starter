export enum StockLevel {
  Default = 'DEFAULT',
  InStock = 'IN_STOCK',
  LowStock = 'LOW_STOCK',
  OutOfStock = 'OUT_OF_STOCK',
}

export type StockLevelLabelProps = { stockLevel?: StockLevel }

type StockDetails = { label: string; classes: string }

const stockLevel = new Map<StockLevel, StockDetails>([
    [StockLevel.Default, { label: '', classes: 'bg-gray-100 text-gray-800'] },
    [StockLevel.InStock, { label: 'In stock', classes: 'bg-green-100 text-green-800'] },
    [StockLevel.LowStock, { label: 'Low stock', classes: 'bg-yellow-100 text-yellow-800'] },
    [StockLevel.OutOfStock, { label: 'Out of stock', classes: 'bg-red-100 text-red-800'] },
])

export function StockLevelLabel({ stockLevel = StockLevel.Default }: StockLevelLabelProps) {
    const details = stockLevel.get(stockLevel)
    
    return (
        <span className={'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ' + details.classes}>
          {details.label}
        </span>
    )
}
