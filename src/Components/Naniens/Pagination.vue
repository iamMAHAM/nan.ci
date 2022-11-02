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
      <a
        v-for="n in [...Array(numbers).keys()]"
        :class="`page ${n === 0 ? 'active' : ''}`"
        @click="page"
        >
          {{ n + 1 }}
      </a>
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
    itemToShow: {
      type: Number,
      required: false,
      default: 9,
    },
    isFilter: {
      type: Boolean,
      required: false
    }
  },
  data(){
    return {
      current: null,
      pageNumber: 1,
    }
  },
  methods: {
    page(e, direction=null){
      let target = e.currentTarget
      if (direction){
        target = direction === 'next' 
          ? this.current?.nextElementSibling
          : this.current?.previousElementSibling
      }
      this.pageNumber = parseInt(target?.textContent)
      if (direction && isNaN(this.pageNumber)) return
      Array.from(document.querySelectorAll('.page')).forEach(p => {
        p === target
          ? ''
          : p.classList.remove('active')
        
        if (this.pageNumber >= 5){
          this.pageNumber === this.numbers
            ? ''
            : p.style.transform = `translate(${-60 * (this.pageNumber - 5)}px)`
        }
      })
      if (!target.classList.contains('active')){
        this.$emit('page', this.pageNumber)
        target.classList.add('active')
      }
      this.current = target
    }
  },
  computed: {
    numbers(){
      return Math.ceil(this.total / this.itemToShow)
    }
  },
  mounted(){
    document.addEventListener('DOMContentLoaded', () => {
      this.current = document.querySelector('.pages').firstElementChild
    })
  },
  watch: {
    isFilter: function (new_, _){
      if (new_) {
        this.$emit('page', 1)
      }
    }
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
    max-width: 340px;
    overflow: hidden;
  }

  .page {
    color: var(--blanc);
    background-color: var(--bg2);
    min-height: 40px;
    min-width: 40px;
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