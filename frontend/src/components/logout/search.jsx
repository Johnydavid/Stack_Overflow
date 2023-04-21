import React from 'react'

const search = () => {
  return (
    <div>search

<form className={"d-flex  w-50"} role="search" onSubmit={handleSubmit}>
              {/* <span>
                <faMagnifyingGlass />{" "}
              </span> */}
              <input
                className={"form-control me-5  w-100"}
                type="text"
                placeholder="Search"
                aria-label="Search"
                name="title"
                onChange={handleChange}
                value={input.title}
                required></input>
              
            </form>
            {err && <div>{err}</div>}
              <div>
                <button type="submit" className={"btn btn-primary mt-3 me-5"}>
                  Search
                </button>
              </div>
    </div>
  )
}

export default search