<template>
  <div id="slider" class="slider">
    <div class="slider__list" :style="{marginLeft: `${-100 * currentIndex}%`}">
      <a
        v-for="(slide, index) in slides"
        :key="index"
        :href="slide.link"
        class="slide"
        :style="{backgroundImage: `url(${slide.img}`}"
      >
        <div class="container">
          <div class="slide__content">
            <div class="slide__badge">
              <div class="slide__badge-text">Акция</div>
            </div>
            <div class="slide__header">
              <h2 class="slide__title">{{slide.title}}</h2>
            </div>
            <div class="slide__description">{{slide.description}}</div>
          </div>
        </div>
      </a>
    </div>
    <div class="slider__navigation container">
      <div class="slider__arrows">
        <svg class="slider__arrow" @click="decrementCurrentIndex">
          <use href="img/sprites/sprite.svg#left-arrow" />
        </svg>
        <svg class="slider__arrow" @click="incrementCurrentIndex">
          <use href="img/sprites/sprite.svg#right-arrow" />
        </svg>
      </div>
      <div class="slider__bullets">
        <span
          class="slider__bullet"
          v-for="(bullet, index) in Math.min(slidesNum, 5)"
          :key="index"
          :class="{ 'slider__bullet--active': currentIndex === index }"
          @click="handleActiveBullet(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./data.json";

const initialState = {
  slides: [],
  currentIndex: 0,
  slidesNum: 0,
  delay: 3000,
};

export default {
  name: "Slider",
  data: () => initialState,
  methods: {
    sliderInit() {
      this.slides.push(...data);
      this.slidesNum = this.slides.length;
    },
    decrementCurrentIndex() {
      this.currentIndex > 0
        ? this.currentIndex--
        : (this.currentIndex = this.slidesNum - 1);
    },
    incrementCurrentIndex() {
      this.currentIndex < this.slidesNum - 1
        ? this.currentIndex++
        : (this.currentIndex = 0);
    },
    autoPlay() {
      setInterval(() => {
        this.incrementCurrentIndex();
      }, this.delay);
    },
    handleActiveBullet(index) {
      if (this.currentIndex === index) return;
      this.currentIndex = index;
    },
  },
  beforeMount() {
    this.sliderInit();
  },
  mounted() {
    this.autoPlay();
  },
};
</script>
