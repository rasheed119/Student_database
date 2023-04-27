import React from "react";

function Base({Title,Description,children}){
  return(
    <div className="main-component base-component">
      <header>
        <h2 className="heading">{Title}</h2>
      </header>
      <main className="main-segment">
        <h2>{Description}</h2>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}
export default Base;