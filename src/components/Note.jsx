import React from 'react'

//search back end for users with the same email?
export default function Note({ noteTitle, noteBody }) {
    return (
      <div>
        <h1>{noteTitle}</h1>
        <p>{noteBody}</p>
      </div>
    )
}
