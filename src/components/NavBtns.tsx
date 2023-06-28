import React from 'react'

function NavBtns({
  className = "flex gap-12"
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <NavBtn value="Female" />
      <NavBtn value="Male" />
      <NavBtn value="Kids" />
      <NavBtn value="All Products" />
    </div>
  )
}

export default NavBtns

function NavBtn({value}: {value: string}) {
  return <h4>{value}</h4>
}