import Link from 'next/link';
import React from 'react';

interface NavBtnI {
  value: string;
  route: string;
}

const Btns = [
  { value: "Female", route: "female" },
  { value: "Male", route: "male" },
  { value: "Kids", route: "kids" },
  { value: "All Products", route: "all" }
]

function NavBtns({ className = "flex gap-12" }: {
  className?: string;
}) {
  return <div className={className}>
    {Btns.map((b, i) => <NavBtn {...b} key={i} />)}
  </div>
}

export default NavBtns

function NavBtn({ value, route }: NavBtnI) {
  return <Link href={`/products/${route}`}><h4>{value}</h4></Link>
}