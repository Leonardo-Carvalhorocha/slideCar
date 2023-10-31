export default class slideMain {
  constructor(imgs, slide) {
    this.imgs = document.querySelectorAll(imgs);
    this.slide = document.querySelector(slide);
    this.count = 0;
  }

  styleTransform(index) {
    const imgArray = [...this.imgs];
    if (this.slidePosition(index) === undefined) return undefined
    imgArray.map((img) => {
      img.style.transform = `translateX(${this.slidePosition(index)}px)`;
    })
  }

  slidePosition(index) {
    const slideArray = Array.from(this.slide.children).map((element) => {
      const position = -element.offsetLeft;
      return {
        position,
      }
    })
    return slideArray[index].position;
  }

  temporizadorSlide() {
    setInterval(() => {
      this.count++;
      this.count < 4 ?  this.styleTransform(this.count) : this.count = -1;
    }, 2000)
  }

  init() {
    if (this.imgs && this.slide) {
      this.temporizadorSlide();
    }
    return this;
  }
};