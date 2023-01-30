<template>
  <div
    class="col-3 d-flex flex-column flex-shrink-0 p-3 text-bg-dark l-sidebar"
    style="width: 280px"
  >
    <router-link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      to="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-currency-dollar p-1 mx-2"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
        />
        <path d="M12 3v3m0 12v3" />
      </svg>
      <span class="fs-5">Transaction Planning</span>
    </router-link>

    <hr />
    <ul id="ul" class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link class="nav-link text-white" active-class="active" to="/"
          >All List</router-link
        >
      </li>
      <li>
        <router-link
          class="nav-link text-white"
          active-class="active"
          to="/add-item"
          >Add Item
        </router-link>
      </li>
      <li>
        <router-link
          class="nav-link text-white"
          active-class="active"
          to="/deposite"
          >Deposit</router-link
        >
      </li>
      <li>
        <router-link
          to="/withdrawal"
          class="nav-link text-white"
          active-class="active"
        >
          Withdrawal
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style></style>
