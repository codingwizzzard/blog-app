import React from 'react'

const Header = () => {
  return (
    <>
  <header className="life-style d-lg-flex d-none bg-body-tertiary">
    <div className="container-md">
      <div className="col-lg-12">
        <div className="header-wrapper">
          <div className="main-menu">
            <ul>
              <li><a href="/">BLOGS</a></li>
              <li><a href="/addblog">ADD BLOG</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </header>
  </>
  )
}

export default Header