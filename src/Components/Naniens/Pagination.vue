<template>
  <div class="pagination">
    <button class="btn" @click="page($event, 'previous')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn--icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
          />
      </svg>
    </button>
    <div class="pages">
      <a class="page active" @click="page">1</a>
      <a class="page" @click="page">2</a>
      <a class="page" @click="page">3</a>
      <a class="page" @click="page">4</a>
      <a class="page" @click="page">5</a>
      <a class="page" @click="page">6</a>
    </div>
    <button class="btn" @click="page($event, 'next')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn--icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 5l7 7-7 7"
          />
      </svg>
    </button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    "item-to-show": {
      type: Array,
      required: false,
      default: 9,
    }
  },
  data(){
    return {
      current: null,
    }
  },
  methods: {
    page(e, direction=null){
      console.log(this.current)
      console.log('direction', direction)
      const target = direction
        ? direction === 'next'
          ? this.current.nextElementSibling
          : this.current.previousElementSibling
        : e.currentTarget

      const number = parseInt(target.textContent)

      Array.from(document.querySelectorAll('.page')).forEach(p => {
        p === target
          ? ''
          : p.classList.remove('active')
      })
      if (!target.classList.contains('active')){
        console.log('emit page', number)
        this.$emit('page', number)
        target.classList.add('active')
      }
      this.current = target
    }
  },
  beforeMount(){
    const max = 9
    const total = 0
  },
  mounted(){
    document.addEventListener('DOMContentLoaded', () => {
      this.current = document.querySelector('.page.active')
    })
  }
})
</script>

<style scoped>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 50px 0;
  }

  .pages {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .page {
    color: var(--blanc);
    background-color: var(--bg2);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .page:hover {
    background-color: #087f5b;
    color: var(--blanc);
  }

  .pagination .active {
    background-color: #087f5b;
    color: #fff;
  }

  .pagination .btn {
    background-color: #fff;
    border: 1px solid var(--bg2);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination .btn--icon {
    height: 24px;
    width: 24px;
  }

</style>