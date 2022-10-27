<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Gallery</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/works/e">Woks</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="p-4">
    <div class="container">
      <div class="filter mb-4 d-flex align-items-center">
        <select class="form-select me-2" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select me-2" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="navigation mb-4">
        <a class="btn btn-secondary me-1" href="#" role="button">Пейзажи</a>
        <a class="btn btn-secondary me-1" href="#" role="button">Реализм</a>
        <a class="btn btn-secondary me-1" href="#" role="button"
          >экспрессионизм</a
        >
        <a class="btn btn-secondary me-1" href="#" role="button">зарубежные</a>
      </div>
      <slot />
    </div>
  </main>
</template>
