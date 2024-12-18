
export function Button({onClick , children , className} : {onClick : () => void , children : React.ReactNode , className? : string}) {
  return (
    <button onClick={onClick} className={className}>
        {children}
    </button>
  )
}
